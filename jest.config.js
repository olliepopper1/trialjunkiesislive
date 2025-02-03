module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 10000,
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts',
    '!src/types/**/*',
    '!src/**/*.test.ts',
    '!src/index.ts',
    '!**/node_modules/**'
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.js',
    '<rootDir>/test/setup.production.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};