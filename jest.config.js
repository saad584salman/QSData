export default {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true
    }]
  },
  testTimeout: 60000, // Increased timeout for database operations
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'controllers/**/*.{js,ts}',
    'routes/**/*.{js,ts}',
    'models/**/*.{js,ts}',
    'middleware/**/*.{js,ts}',
    '!**/node_modules/**',
  ],
  // Run tests sequentially to avoid database deadlocks
  maxWorkers: 1,
  // Increase memory limit for database operations
  maxConcurrency: 1,
  // Add verbose output for debugging
  verbose: true,
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
