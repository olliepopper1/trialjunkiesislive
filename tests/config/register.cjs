'use strict';

const path = require('path');

// Setup chai
const chai = require('chai');
global.expect = chai.expect;

// Setup test environment
process.env.NODE_ENV = 'test';

// Optional: Add custom module resolution if needed
require.extensions['.cjs'] = require.extensions['.js'];

// Add any additional test setup here
before(function() {
  this.timeout(5000);
});

after(function() {
  // Cleanup
});
