export default {
  testEnvironment: 'node',
  transform: {},
  testTimeout: 60000, // Increased timeout for database operations
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'controllers/**/*.js',
    'routes/**/*.js',
    'models/**/*.js',
    'middleware/**/*.js',
    '!**/node_modules/**',
  ],
  // Run tests sequentially to avoid database deadlocks
  maxWorkers: 1,
  // Increase memory limit for database operations
  maxConcurrency: 1,
  // Add verbose output for debugging
  verbose: true,
};
