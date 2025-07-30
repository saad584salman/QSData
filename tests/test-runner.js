#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const BASE_DIR = join(__dirname, '..');

// Test configuration
const TEST_CONFIG = {
  // Database connection for tests
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_NAME_TEST: process.env.DB_NAME_TEST || 'qsdata_test',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
  
  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET || 'test-secret-key-for-jwt-signing',
  
  // API configuration
  API_URL: process.env.API_URL || 'http://localhost:3000',
  
  // Test timeout
  TEST_TIMEOUT: 30000
};

// Test utilities
const runCommand = (command, args = [], options = {}) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      cwd: BASE_DIR,
      env: { ...process.env, ...TEST_CONFIG },
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
};

const waitForService = async (host, port, serviceName) => {
  console.log(`⏳ Waiting for ${serviceName} at ${host}:${port}...`);
  
  let retries = 0;
  const maxRetries = 30;
  
  while (retries < maxRetries) {
    try {
      const net = await import('net');
      const client = new net.Socket();
      
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          client.destroy();
          reject(new Error('Connection timeout'));
        }, 1000);
        
        client.connect(port, host, () => {
          clearTimeout(timeout);
          client.destroy();
          resolve();
        });
        
        client.on('error', () => {
          clearTimeout(timeout);
          client.destroy();
          reject(new Error('Connection failed'));
        });
      });
      
      console.log(`✅ ${serviceName} is ready!`);
      return;
    } catch (error) {
      retries++;
      console.log(`⏳ ${serviceName} not ready yet... (${retries}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  throw new Error(`${serviceName} failed to start after ${maxRetries} retries`);
};

const setupTestDatabase = async () => {
  console.log('🗄️ Setting up test database...');
  
  try {
    // Create test database if it doesn't exist
    console.log('📝 Creating test database...');
    await runCommand('psql', [
      '-h', TEST_CONFIG.DB_HOST,
      '-p', TEST_CONFIG.DB_PORT.toString(),
      '-U', TEST_CONFIG.DB_USER,
      '-d', 'postgres',
      '-c', `CREATE DATABASE ${TEST_CONFIG.DB_NAME_TEST} WITH OWNER = ${TEST_CONFIG.DB_USER};`
    ], { stdio: 'pipe' });
    console.log('✅ Test database created successfully');
  } catch (error) {
    // Database might already exist, which is fine
    console.log('ℹ️ Test database already exists or creation failed (this is usually OK)');
    console.log('💡 If you see errors above, the database might already exist');
  }
  
  // Run migrations
  console.log('🔄 Running database migrations...');
  try {
    await runCommand('npm', ['run', 'db:migrate'], {
      env: { ...process.env, ...TEST_CONFIG, NODE_ENV: 'test' }
    });
    console.log('✅ Database migrations completed');
  } catch (error) {
    console.log('⚠️ Migration failed, but continuing with tests...');
    console.log('💡 This might be OK if the database is already migrated');
  }
  
  console.log('✅ Test database setup complete');
};

const runTests = async (testType = 'all') => {
  console.log(`🧪 Running ${testType} tests...`);
  
  const testCommands = {
    'unit': ['npm', ['test', '--', '--testPathPattern=tests/.*\\.test\\.js']],
    'api': ['node', ['tests/api-test.js']],
    'integration': ['npm', ['test', '--', '--testPathPattern=tests/(projects|progress)\\.test\\.js']],
    'all': ['npm', ['test']]
  };
  
  const command = testCommands[testType];
  if (!command) {
    throw new Error(`Unknown test type: ${testType}`);
  }
  
  await runCommand(command[0], command[1], {
    env: { ...process.env, ...TEST_CONFIG, NODE_ENV: 'test' }
  });
};

const runDockerTests = async () => {
  console.log('🐳 Running tests in Docker environment...');
  
  try {
    // Check if Docker is running
    await runCommand('docker', ['version']);
    
    // Start Docker services
    console.log('🚀 Starting Docker services...');
    await runCommand('docker-compose', ['-f', 'docker-compose.dev.yml', 'up', '-d', 'db']);
    
    // Wait for database
    await waitForService('localhost', 5432, 'PostgreSQL Database');
    
    // Setup test database
    await setupTestDatabase();
    
    // Run tests
    await runTests('all');
    
    // Stop Docker services
    console.log('🛑 Stopping Docker services...');
    await runCommand('docker-compose', ['-f', 'docker-compose.dev.yml', 'down']);
    
  } catch (error) {
    console.error('❌ Docker test setup failed:', error.message);
    throw error;
  }
};

const runLocalTests = async () => {
  console.log('💻 Running tests with local database...');
  
  try {
    // Check if database is running, but don't fail if it's not
    try {
      await waitForService('localhost', 5432, 'PostgreSQL Database');
      console.log('✅ Found running PostgreSQL database');
    } catch (error) {
      console.log('⚠️ No PostgreSQL database found on localhost:5432');
      console.log('💡 Starting Docker database for tests...');
      
      // Try to start Docker database
      try {
        await runCommand('docker-compose', ['-f', 'docker-compose.dev.yml', 'up', '-d', 'db']);
        await waitForService('localhost', 5432, 'PostgreSQL Database');
        console.log('✅ Docker database started successfully');
      } catch (dockerError) {
        console.log('❌ Failed to start Docker database:', dockerError.message);
        console.log('💡 Please ensure Docker is running and try again');
        console.log('💡 Or start the database manually: docker-compose -f docker-compose.dev.yml up -d db');
        throw new Error('No database available for testing');
      }
    }
    
    // Setup test database
    await setupTestDatabase();
    
    // Run tests
    await runTests('all');
    
  } catch (error) {
    console.error('❌ Local test setup failed:', error.message);
    throw error;
  }
};

const runApiTests = async () => {
  console.log('🌐 Running API tests...');
  
  try {
    // Wait for API server
    await waitForService('localhost', 3000, 'API Server');
    
    // Run API tests
    await runCommand('node', ['tests/api-test.js'], {
      env: { ...process.env, ...TEST_CONFIG }
    });
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    throw error;
  }
};

// Main execution
const main = async () => {
  console.log('🔍 Debug: Test runner starting...');
  
  const args = process.argv.slice(2);
  const testType = args[0] || 'all';
  const environment = args[1] || 'local';
  
  console.log('🚀 QSData Test Runner');
  console.log(`📋 Test Type: ${testType}`);
  console.log(`🌍 Environment: ${environment}`);
  console.log(`🔍 Debug: Args:`, args);
  console.log('');
  
  try {
    switch (environment) {
      case 'docker':
        console.log('🔍 Debug: Running Docker tests...');
        await runDockerTests();
        break;
      case 'api':
        console.log('🔍 Debug: Running API tests...');
        await runApiTests();
        break;
      case 'local':
      default:
        console.log('🔍 Debug: Running local tests...');
        await runLocalTests();
        break;
    }
    
    console.log('\n🎉 All tests completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Tests failed:', error.message);
    console.error('🔍 Debug: Full error:', error);
    process.exit(1);
  }
};

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Test runner interrupted');
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Test runner terminated');
  process.exit(1);
});

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { runTests, runDockerTests, runLocalTests, runApiTests }; 