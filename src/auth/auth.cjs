'use strict';

const register = async (userData) => {
  if (!userData?.username || !userData?.password) {
    throw new Error('Missing required fields');
  }
  return { success: true, token: 'mock-token' };
};

const login = async (credentials) => {
  if (!credentials?.username || !credentials?.password) {
    throw new Error('Invalid credentials');
  }
  return { token: 'mock-token' };
};

const authenticate = async (token) => {
  if (!token) {
    throw new Error('Token required');
  }
  return { authenticated: true };
};

module.exports = {
  register,
  login,
  authenticate
};
