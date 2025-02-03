'use strict';

const chai = require('chai');
require('dotenv').config({ path: '.env.test' });

// Explicitly import Mocha functions
const mocha = require('mocha');
const { after, afterEach, before, beforeEach } = mocha;

// Global configuration
global.expect = chai.expect;

// Environment setup
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';

// Test helpers
global.createTestUser = () => ({
  username: 'testuser',
  password: 'testpass123'
});

// Server cleanup using global afterEach
global.afterEach = afterEach;
global.afterEach(() => {
  const app = require('../../src/app.cjs');
  if (app && app.server) {
    app.server.close();
  }
});

// Make Mocha functions available globally
global.before = before;
global.after = after;
global.beforeEach = beforeEach;
