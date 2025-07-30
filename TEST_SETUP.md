# QSData Test Setup Guide

This document provides comprehensive instructions for running tests in the QSData project, addressing the remaining test issues with database connections, JWT authentication, and ES module compatibility.

## Test Environment Overview

The test suite has been completely refactored to address the following issues:

1. **Database Connection**: Tests now properly connect to Docker database or local database
2. **JWT Authentication**: Test tokens are properly signed with consistent secrets
3. **ES Module Compatibility**: All tests use proper ES module imports
4. **Test Isolation**: Each test runs with clean database state
5. **Comprehensive Coverage**: Tests cover all API endpoints systematically

## Test Configuration

### Environment Variables

The test environment uses the following configuration:

```bash
# Test Environment
NODE_ENV=test
JWT_SECRET=test-secret-key-for-jwt-signing

# Database Configuration
DB_HOST=localhost (or db for Docker)
DB_PORT=5432
DB_NAME_TEST=qsdata_test
DB_USER=postgres
DB_PASSWORD=postgres
DATABASE_URL=postgres://postgres:postgres@localhost:5432/qsdata_test

# API Configuration
API_URL=http://localhost:3000
```

### Jest Configuration

The Jest configuration has been updated to handle ES modules:

```javascript
// jest.config.js
export default {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.js'],
  moduleNameMapping: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testTimeout: 30000,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'controllers/**/*.js',
    'routes/**/*.js',
    'models/**/*.js',
    'middleware/**/*.js',
  ],
};
```

## Test Setup Files

### `tests/setup.js`

This file configures the test environment and provides global utilities:

- **Database Connection**: Waits for database to be ready
- **Test Data Setup**: Creates consistent test data
- **JWT Token Generation**: Creates properly signed test tokens
- **Database Cleanup**: Cleans up after tests
- **Global Utilities**: Provides helper functions for tests

### `tests/test-runner.js`

A comprehensive test runner that can:

- Run tests in Docker environment
- Run tests with local database
- Run API-only tests
- Handle different test types (unit, integration, all)
- Wait for services to be ready
- Setup and cleanup test databases

## Running Tests

### 1. Local Development Tests

```bash
# Run all tests with local database
npm run test:local

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Run API tests only
npm run test:api-only
```

### 2. Docker Environment Tests

```bash
# Run tests in Docker environment
npm run test:docker

# Run tests using Docker Compose
npm run test:docker-compose

# Clean up Docker test environment
npm run test:docker-clean
```

### 3. Manual Test Runner

```bash
# Run test runner with specific options
node tests/test-runner.js [test-type] [environment]

# Examples:
node tests/test-runner.js all local
node tests/test-runner.js unit docker
node tests/test-runner.js api api
```

### 4. Individual Test Files

```bash
# Run Jest tests
npm test

# Run API tests
npm run test:api

# Run specific test file
npm test -- tests/projects.test.js
```

## Test Types

### 1. Unit Tests (`tests/*.test.js`)

- **Purpose**: Test individual functions and components
- **Database**: Uses test database with isolated data
- **Authentication**: Uses generated test tokens
- **Coverage**: Controllers, models, middleware

### 2. Integration Tests (`tests/api-comprehensive.test.js`)

- **Purpose**: Test complete API workflows
- **Database**: Uses test database with realistic data
- **Authentication**: Tests login/registration flows
- **Coverage**: All API endpoints and error handling

### 3. API Tests (`tests/api-test.js`)

- **Purpose**: Test API endpoints against running server
- **Database**: Uses actual server database
- **Authentication**: Tests real authentication flows
- **Coverage**: End-to-end API functionality

## Test Data Management

### Test Data Setup

The test setup creates consistent test data:

```javascript
// Test roles
{ id: 1, name: 'admin', description: 'Administrator' }
{ id: 2, name: 'user', description: 'Regular User' }

// Test offices
{ id: 1, name: 'Main Office', location: 'HQ' }
{ id: 2, name: 'Branch Office', location: 'Branch' }

// Test users
{ id: 1, full_name: 'Test Admin', email: 'admin@test.com', role_id: 1 }
{ id: 2, full_name: 'Test User', email: 'user@test.com', role_id: 2 }

// Test property definitions
{ id: 1, entity_type: 'project', property_key: 'category', value_type: 'string' }
{ id: 2, entity_type: 'project', property_key: 'priority', value_type: 'string' }

// Test projects
{ id: 1, name: 'Test Project 1', parent_project_id: null }
{ id: 2, name: 'Test Project 2', parent_project_id: 1 }

// Test entity properties
{ id: 1, entity_type: 'project', entity_id: 1, property_definition_id: 1, value: 'Infrastructure' }
{ id: 2, entity_type: 'project', entity_id: 1, property_definition_id: 2, value: 'High' }
```

### Database Cleanup

Tests clean up the database between runs:

```javascript
// Cleanup order (reverse dependency)
await db.raw('TRUNCATE TABLE approval_requests CASCADE');
await db.raw('TRUNCATE TABLE task_logs CASCADE');
await db.raw('TRUNCATE TABLE tasks CASCADE');
await db.raw('TRUNCATE TABLE task_rules CASCADE');
await db.raw('TRUNCATE TABLE entity_property_logs CASCADE');
await db.raw('TRUNCATE TABLE entity_properties CASCADE');
await db.raw('TRUNCATE TABLE property_options CASCADE');
await db.raw('TRUNCATE TABLE property_definitions CASCADE');
await db.raw('TRUNCATE TABLE projects CASCADE');
await db.raw('TRUNCATE TABLE users CASCADE');
await db.raw('TRUNCATE TABLE offices CASCADE');
await db.raw('TRUNCATE TABLE roles CASCADE');
```

## Authentication in Tests

### JWT Token Generation

Tests use properly signed JWT tokens:

```javascript
// Global test token generation
global.generateTestToken = (payload = {}) => {
  const defaultPayload = {
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    role: 'admin',
    ...payload,
  };

  return jwt.sign(defaultPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
};
```

### Authentication Testing

Tests verify authentication requirements:

```javascript
// Test authentication required
it('should return 401 without authentication', async () => {
  await request(app).get('/api/projects').expect(401);
});

// Test with valid token
it('should return data with valid token', async () => {
  const response = await request(app)
    .get('/api/projects')
    .set('Authorization', `Bearer ${authToken}`)
    .expect(200);
});
```

## Docker Test Environment

### Docker Compose Test Configuration

The `docker-compose.test.yml` file provides a dedicated test environment:

```yaml
services:
  test-db:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: qsdata_test
    ports:
      - '5433:5432' # Different port to avoid conflicts

  test-server:
    image: node:18-alpine
    command: npm run test:local
    environment:
      - NODE_ENV=test
      - DB_HOST=test-db
```

### Running Docker Tests

```bash
# Start test environment
docker-compose -f docker-compose.test.yml up --build

# Run tests and exit
docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit

# Clean up
docker-compose -f docker-compose.test.yml down -v
```

## Troubleshooting

### Common Issues

1. **Database Connection Failed**

   ```bash
   # Check if database is running
   docker ps

   # Check database logs
   docker-compose logs test-db

   # Restart database
   docker-compose restart test-db
   ```

2. **JWT Token Issues**

   ```bash
   # Ensure JWT_SECRET is set
   export JWT_SECRET=test-secret-key-for-jwt-signing

   # Check token generation
   node -e "console.log(require('jsonwebtoken').sign({test: true}, 'test-secret'))"
   ```

3. **ES Module Issues**

   ```bash
   # Ensure package.json has "type": "module"
   # Check import statements use .js extension
   # Verify Jest configuration handles ES modules
   ```

4. **Test Timeout Issues**

   ```bash
   # Increase test timeout
   export TEST_TIMEOUT=60000

   # Check for hanging connections
   docker-compose down
   docker system prune
   ```

### Debug Mode

Run tests with verbose output:

```bash
# Verbose Jest output
npm test -- --verbose

# Debug API tests
DEBUG=* npm run test:api

# Debug test runner
node tests/test-runner.js all local --debug
```

## Test Coverage

The test suite provides comprehensive coverage:

- **Authentication**: Login, registration, token validation
- **Projects**: CRUD operations, pagination, filtering
- **Property Definitions**: Create, read, update
- **Entity Properties**: CRUD operations
- **Tasks**: Create, read, update, delete
- **Progress**: Create, read, update
- **Zone Summary**: Read operations
- **Error Handling**: 404, 401, 400, validation errors

## Continuous Integration

For CI/CD pipelines, use the Docker test environment:

```yaml
# GitHub Actions example
- name: Run Tests
  run: |
    docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit
```

## Performance Considerations

- Tests run in parallel where possible
- Database cleanup is optimized
- Test data is minimal but realistic
- Timeouts are configured appropriately
- Docker containers are cleaned up after tests

This comprehensive test setup ensures reliable, repeatable tests that work in both local development and CI/CD environments.
