const { expect } = require('chai');
const { authenticate, login, register } = require('../src/auth.cjs');

describe('Authentication Tests', () => {
  it('should register a new user', async () => {
    const user = {
      username: 'testuser',
      password: 'password123'
    };
    const result = await register(user);
    expect(result).to.have.property('success', true);
  });

  it('should login existing user', async () => {
    const credentials = {
      username: 'testuser',
      password: 'password123'
    };
    const result = await login(credentials);
    expect(result).to.have.property('token');
  });

  it('should authenticate valid token', async () => {
    const token = 'valid-test-token';
    const result = await authenticate(token);
    expect(result).to.have.property('authenticated', true);
  });
});
