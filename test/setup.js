
const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({
  path: path.resolve(__dirname, '../.env.test')
});

// Add any additional test setup here
beforeAll(() => {
  // Setup code before all tests
});

afterAll(() => {
  // Cleanup code after all tests
});