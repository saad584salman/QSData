import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';

// Load environment variables
dotenv.config();

// Set test environment
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key-for-jwt-signing';

// Generate unique test database name to avoid conflicts
const testId = uuidv4().replace(/-/g, '').substring(0, 8);
const testDbName = `qsdata_test_${testId}`;
process.env.DB_NAME_TEST = testDbName;

// Database configuration for tests - match Docker environment
process.env.DB_HOST = process.env.DB_HOST || 'localhost';
process.env.DB_PORT = process.env.DB_PORT || '5432';
process.env.DB_USER = process.env.DB_USER || 'postgres';
process.env.DB_PASSWORD = process.env.DB_PASSWORD || 'devpassword';
process.env.DATABASE_URL = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME_TEST}`;

// Global test utilities
declare global {
  function generateTestToken(payload?: any): string;
  function createTestUser(): any;
  function waitForDatabase(db: Knex): Promise<void>;
  function cleanupDatabase(db: Knex): Promise<void>;
  function setupTestData(db: Knex): Promise<void>;
  function getTestDataIds(db: Knex): Promise<{
    userId: number;
    projectId: number;
    propertyDefinitionId: number;
    entityPropertyId: number | null;
    taskRuleId: number;
  }>;
}

global.generateTestToken = (payload: any = {}) => {
  const defaultPayload = {
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    role: 'master',
    ...payload
  };
  
  return jwt.sign(defaultPayload, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

global.createTestUser = () => ({
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  role: 'admin',
  full_name: 'Test User'
});

// Enhanced database connection with retry and timeout
global.waitForDatabase = async (db: Knex) => {
  let retries = 0;
  const maxRetries = 15;
  const retryDelay = 2000; // 2 seconds
  
  while (retries < maxRetries) {
    try {
      await db.raw('SELECT 1');
      console.log(`✅ Database connection established for ${testDbName}`);
      return;
    } catch (error) {
      retries++;
      console.log(`⏳ Waiting for database... (${retries}/${maxRetries})`);
      console.log(`🔍 Connection error: ${error instanceof Error ? error.message : String(error)}`);
      
      if (retries === 1) {
        // On first retry, try to create the test database
        try {
          const { default: knex } = await import('knex');
          const tempDb = knex({
            client: 'postgresql',
            connection: {
              host: process.env.DB_HOST || 'localhost',
              port: parseInt(process.env.DB_PORT || '5432'),
              user: process.env.DB_USER || 'postgres',
              password: process.env.DB_PASSWORD || 'devpassword',
              database: 'postgres' // Connect to default database
            }
          });
          
          await tempDb.raw(`CREATE DATABASE ${testDbName}`);
          await tempDb.destroy();
          console.log(`✅ Created test database: ${testDbName}`);
          
          // Run migrations on the new database
          console.log(`🔄 Running migrations on ${testDbName}...`);
          const { execSync } = await import('child_process');
          try {
            execSync(`npx knex migrate:latest --knexfile knexfile.cjs`, {
              env: { ...process.env, NODE_ENV: 'test' },
              stdio: 'pipe'
            });
            console.log(`✅ Migrations completed for ${testDbName}`);
          } catch (migrationError) {
            console.log(`⚠️ Migration failed for ${testDbName}: ${migrationError instanceof Error ? migrationError.message : String(migrationError)}`);
            // Continue anyway, the database might already be migrated
          }
        } catch (createError) {
          console.log(`ℹ️ Database creation failed (might already exist): ${createError instanceof Error ? createError.message : String(createError)}`);
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  
  throw new Error(`Database connection failed after ${maxRetries} retries for ${testDbName}`);
};

// Enhanced cleanup with better error handling
global.cleanupDatabase = async (db: Knex) => {
  try {
    // Use a single transaction for cleanup to avoid deadlocks
    await db.transaction(async (trx) => {
      // Disable foreign key checks temporarily
      await trx.raw('SET session_replication_role = replica');
      
      // Truncate all tables in reverse dependency order
      const tables = [
        'approval_requests',
        'task_logs', 
        'tasks',
        'task_rules',
        'entity_property_logs',
        'entity_properties',
        'property_options',
        'property_definitions',
        'projects',
        'users',
        'offices',
        'roles',
        'progress',
        'zone_summary'
      ];
      
      for (const table of tables) {
        try {
          await trx.raw(`TRUNCATE TABLE ${table} CASCADE`);
        } catch (error) {
          console.log(`⚠️ Could not truncate ${table}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      
      // Re-enable foreign key checks
      await trx.raw('SET session_replication_role = DEFAULT');
    });
    
    console.log(`✅ Database cleaned up for ${testDbName}`);
  } catch (error) {
    console.error(`❌ Database cleanup failed for ${testDbName}:`, error instanceof Error ? error.message : String(error));
    // Don't throw error during cleanup to avoid masking test failures
  }
};

// Enhanced test data setup with better isolation
global.setupTestData = async (db: Knex) => {
  try {
    // Use a single transaction for setup to avoid deadlocks
    await db.transaction(async (trx) => {
      const timestamp = Date.now();
      const uniqueSuffix = Math.random().toString(36).substring(2, 8);
      
      // Insert test roles with conflict handling
      await trx('roles').insert([
        { name: `admin_${uniqueSuffix}`, hierarchy_level: 1 },
        { name: `user_${uniqueSuffix}`, hierarchy_level: 2 }
      ]).onConflict('id').ignore();

      // Insert test offices with conflict handling
      await trx('offices').insert([
        { name: `Main Office ${uniqueSuffix}`, type: 'HQ' },
        { name: `Branch Office ${uniqueSuffix}`, type: 'Branch' }
      ]).onConflict('id').ignore();

      // Get role and office IDs
      const roles = await trx('roles').select('id', 'name').whereIn('name', [`admin_${uniqueSuffix}`, `user_${uniqueSuffix}`]);
      const offices = await trx('offices').select('id', 'name').whereIn('name', [`Main Office ${uniqueSuffix}`, `Branch Office ${uniqueSuffix}`]);
      
      const adminRole = roles.find(r => r.name === `admin_${uniqueSuffix}`);
      const userRole = roles.find(r => r.name === `user_${uniqueSuffix}`);
      const mainOffice = offices.find(o => o.name === `Main Office ${uniqueSuffix}`);
      const branchOffice = offices.find(o => o.name === `Branch Office ${uniqueSuffix}`);

      // Insert test users with unique emails
      await trx('users').insert([
        {
          full_name: `Test Admin ${uniqueSuffix}`,
          email: `admin${timestamp}_${uniqueSuffix}@test.com`,
          password_hash: '$2a$10$test.hash.for.admin',
          role_id: adminRole?.id || 1,
          office_id: mainOffice?.id || 1
        },
        {
          full_name: `Test User ${uniqueSuffix}`,
          email: `user${timestamp}_${uniqueSuffix}@test.com`,
          password_hash: '$2a$10$test.hash.for.user',
          role_id: userRole?.id || 2,
          office_id: branchOffice?.id || 2
        }
      ]).onConflict('id').ignore();

      // Get user IDs
      const users = await trx('users').select('id', 'email').whereIn('email', [`admin${timestamp}_${uniqueSuffix}@test.com`, `user${timestamp}_${uniqueSuffix}@test.com`]);
      const adminUser = users.find(u => u.email === `admin${timestamp}_${uniqueSuffix}@test.com`);

      if (adminUser) {
        // Insert test property definitions with unique keys
        await trx('property_definitions').insert([
          {
            entity_type: 'project',
            property_key: `category_${uniqueSuffix}`,
            value_type: 'string',
            is_required: false,
            created_by_id: adminUser.id
          },
          {
            entity_type: 'project',
            property_key: `priority_${uniqueSuffix}`,
            value_type: 'string',
            is_required: false,
            created_by_id: adminUser.id
          }
        ]).onConflict('id').ignore();

        // Insert test projects with unique names
        await trx('projects').insert([
          {
            name: `Test Project 1 ${uniqueSuffix}`,
            parent_project_id: null,
            created_by_id: adminUser.id
          },
          {
            name: `Test Project 2 ${uniqueSuffix}`,
            parent_project_id: null,
            created_by_id: adminUser.id
          }
        ]).onConflict('id').ignore();

        // Get project and property definition IDs
        const projects = await trx('projects').select('id', 'name').whereIn('name', [`Test Project 1 ${uniqueSuffix}`, `Test Project 2 ${uniqueSuffix}`]);
        const propertyDefs = await trx('property_definitions').select('id', 'property_key').whereIn('property_key', [`category_${uniqueSuffix}`, `priority_${uniqueSuffix}`]);
        
        const testProject = projects.find(p => p.name === `Test Project 1 ${uniqueSuffix}`);
        const categoryProp = propertyDefs.find(p => p.property_key === `category_${uniqueSuffix}`);
        const priorityProp = propertyDefs.find(p => p.property_key === `priority_${uniqueSuffix}`);

        if (testProject && categoryProp && priorityProp) {
          // Insert test entity properties
          await trx('entity_properties').insert([
            {
              entity_type: 'project',
              entity_id: testProject.id,
              property_definition_id: categoryProp.id,
              string_value: 'Infrastructure',
              created_by_id: adminUser.id
            },
            {
              entity_type: 'project',
              entity_id: testProject.id,
              property_definition_id: priorityProp.id,
              string_value: 'High',
              created_by_id: adminUser.id
            }
          ]).onConflict('id').ignore();
        }

        // Insert test task rules with unique names
        await trx('task_rules').insert([
          {
            name: `Test Rule 1 ${uniqueSuffix}`,
            entity_type: 'project',
            created_by_id: adminUser.id
          },
          {
            name: `Test Rule 2 ${uniqueSuffix}`,
            entity_type: 'project',
            created_by_id: adminUser.id
          }
        ]).onConflict('id').ignore();
      }
    });

    console.log(`✅ Test data setup complete for ${testDbName}`);
  } catch (error) {
    console.error(`❌ Test data setup failed for ${testDbName}:`, error instanceof Error ? error.message : String(error));
    throw error;
  }
};

// Add a function to get test data IDs for use in tests
global.getTestDataIds = async (db: Knex) => {
  try {
    // Get the actual test data that was created
    const user = await db('users').first();
    const project = await db('projects').first();
    const propertyDef = await db('property_definitions').first();
    const taskRule = await db('task_rules').first();
    
    // Get entity property if project exists
    let entityProp = null;
    if (project) {
      entityProp = await db('entity_properties').where('entity_id', project.id).first();
    }
    
    console.log('🔍 Found test data:', {
      user: user?.id,
      project: project?.id,
      propertyDef: propertyDef?.id,
      entityProp: entityProp?.id,
      taskRule: taskRule?.id
    });
    
    return {
      userId: user?.id || 1,
      projectId: project?.id || 1,
      propertyDefinitionId: propertyDef?.id || 1,
      entityPropertyId: entityProp?.id || null,
      taskRuleId: taskRule?.id || 1
    };
  } catch (error) {
    console.log(`⚠️ Error getting test data IDs: ${error instanceof Error ? error.message : String(error)}`);
    // Return default values if data retrieval fails
    return {
      userId: 1,
      projectId: 1,
      propertyDefinitionId: 1,
      entityPropertyId: null,
      taskRuleId: 1
    };
  }
};

console.log('🧪 Test environment configured');
console.log(`🔍 Database config: ${process.env.DB_HOST}:${process.env.DB_PORT}/${testDbName}`); 