'use strict';

const chai = require('chai');
const { before, after, beforeEach, afterEach } = require('mocha');
const { JSDOM } = require('jsdom');

// Make Mocha functions available globally
Object.assign(global, mocha);

// Setup chai
global.expect = chai.expect;

// Environment setup
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';

// Setup JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://localhost'
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Server cleanup
afterEach(async () => {
  const app = require('../../src/app.cjs');
  if (app && app.server) {
    await new Promise((resolve) => app.server.close(resolve));
  }
});

// Additional setup and cleanup
beforeEach(() => {
    // Setup code
});

afterEach(() => {
    // Cleanup code
});
