'use strict';

const { expect } = require('chai');
const { register, login, authenticate } = require('../../src/auth/auth.cjs');

describe('Auth Unit Tests', () => {
  describe('register()', () => {
    it('registers new user', async () => {
      const result = await register({ username: 'test', password: 'test123' });
      expect(result).to.have.property('success', true);
      expect(result).to.have.property('token');
    });
  });

  describe('login()', () => {
    it('logs in existing user', async () => {
      const result = await login({ username: 'test', password: 'test123' });
      expect(result).to.have.property('token');
    });
  });

  describe('authenticate()', () => {
    it('validates token', async () => {
      const result = await authenticate('valid-token');
      expect(result).to.have.property('authenticated', true);
    });
  });
});
