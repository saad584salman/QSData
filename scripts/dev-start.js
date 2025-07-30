#!/usr/bin/env node

import { spawn, exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

class DevStartup {
  constructor() {
    this.isWindows = process.platform === 'win32';
    this.dockerComposeFile = 'docker-compose.dev.yml';
  }

  async checkDockerEngine() {
    console.log('🔍 Checking Docker Engine...');
    try {
      await execAsync('docker --version');
      console.log('✅ Docker Engine is available');
      return true;
    } catch (error) {
      console.error('❌ Docker Engine is not running or not installed');
      console.log('💡 Please start Docker Desktop or Docker Engine');
      return false;
    }
  }

  async checkDockerCompose() {
    console.log('🔍 Checking Docker Compose...');
    try {
      await execAsync('docker-compose --version');
      console.log('✅ Docker Compose is available');
      return true;
    } catch (error) {
      console.error('❌ Docker Compose is not available');
      return false;
    }
  }

  async checkEnvironmentFile() {
    console.log('🔍 Checking environment configuration...');
    const envFile = '.env';
    if (!fs.existsSync(envFile)) {
      console.log('📝 Creating .env file with default values...');
      const defaultEnv = `# Database Configuration
POSTGRES_PASSWORD=postgres
DATABASE_URL=postgres://postgres:postgres@localhost:5432/qsdata

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Client Configuration
CLIENT_ORIGIN=http://localhost:5173

# Environment
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
`;
      fs.writeFileSync(envFile, defaultEnv);
      console.log('✅ .env file created with default values');
    } else {
      console.log('✅ .env file exists');
    }
  }

  async stopExistingContainers() {
    console.log('🛑 Stopping existing containers...');
    try {
      await execAsync(`docker-compose -f ${this.dockerComposeFile} down`);
      console.log('✅ Existing containers stopped');
    } catch (error) {
      console.log('ℹ️  No existing containers to stop');
    }
  }

  async buildAndStartContainers() {
    console.log('🚀 Building and starting containers...');
    return new Promise((resolve, reject) => {
      const dockerCompose = spawn('docker-compose', [
        '-f', this.dockerComposeFile,
        'up', '--build'
      ], {
        stdio: 'inherit',
        shell: true
      });

      dockerCompose.on('error', (error) => {
        console.error('❌ Failed to start containers:', error);
        reject(error);
      });

      dockerCompose.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Containers started successfully');
          resolve();
        } else {
          console.error(`❌ Containers exited with code ${code}`);
          reject(new Error(`Containers exited with code ${code}`));
        }
      });
    });
  }

  async waitForServices() {
    console.log('⏳ Waiting for services to be ready...');
    
    // Wait for database
    await this.waitForService('localhost:5432', 'Database');
    
    // Wait for server
    await this.waitForService('localhost:3000', 'Backend Server');
    
    // Wait for client
    await this.waitForService('localhost:5173', 'Frontend Client');
  }

  async waitForService(url, serviceName) {
    const [host, port] = url.split(':');
    console.log(`⏳ Waiting for ${serviceName} at ${url}...`);
    
    return new Promise((resolve) => {
      const checkConnection = () => {
        const net = require('net');
        const socket = new net.Socket();
        
        socket.setTimeout(5000);
        
        socket.on('connect', () => {
          console.log(`✅ ${serviceName} is ready`);
          socket.destroy();
          resolve();
        });
        
        socket.on('timeout', () => {
          socket.destroy();
          setTimeout(checkConnection, 2000);
        });
        
        socket.on('error', () => {
          socket.destroy();
          setTimeout(checkConnection, 2000);
        });
        
        socket.connect(port, host);
      };
      
      checkConnection();
    });
  }

  async showStatus() {
    console.log('\n🎉 Development environment is ready!');
    console.log('📊 Service Status:');
    console.log('   🗄️  Database: http://localhost:5432');
    console.log('   🔧 Backend API: http://localhost:3000');
    console.log('   🌐 Frontend: http://localhost:5173');
    console.log('   📚 API Docs: http://localhost:3000/api/docs');
    console.log('\n🔧 Development Commands:');
    console.log('   npm run dev:docker:clean  - Clean restart');
    console.log('   npm run docker:logs       - View logs');
    console.log('   npm run docker:down       - Stop containers');
    console.log('   npm run docker:clean      - Clean everything');
    console.log('\n💡 Hot reloading is enabled for both frontend and backend!');
  }

  async run() {
    try {
      console.log('🚀 Starting QSData Development Environment...\n');
      
      // Check prerequisites
      if (!(await this.checkDockerEngine())) return;
      if (!(await this.checkDockerCompose())) return;
      await this.checkEnvironmentFile();
      
      // Stop existing containers
      await this.stopExistingContainers();
      
      // Build and start containers
      await this.buildAndStartContainers();
      
      // Wait for services to be ready
      await this.waitForServices();
      
      // Show final status
      await this.showStatus();
      
    } catch (error) {
      console.error('❌ Failed to start development environment:', error.message);
      process.exit(1);
    }
  }
}

// Run the startup script
const devStartup = new DevStartup();
devStartup.run(); 