'use strict';

const chai = require('chai');
const mocha = require('mocha');

// Make Mocha functions available globally
Object.assign(global, mocha);

// Setup chai
global.expect = chai.expect;

// Environment setup
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';

// Server cleanup
afterEach(async () => {
  const app = require('../../src/app.cjs');
  if (app && app.server) {
    await new Promise((resolve) => app.server.close(resolve));
  }
});
