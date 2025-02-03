'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (userData) => {
  if (!userData?.username || !userData?.password) {
    throw new Error('Missing required fields');
  }
  return { 
    success: true, 
    token: jwt.sign({ username: userData.username }, process.env.JWT_SECRET || 'test-secret') 
  };
};

const login = async (credentials) => {
  if (!credentials?.username || !credentials?.password) {
    throw new Error('Invalid credentials');
  }
  return { 
    token: jwt.sign({ username: credentials.username }, process.env.JWT_SECRET || 'test-secret')
  };
};

const authenticate = async (token) => {
  if (!token) {
    throw new Error('Token required');
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET || 'test-secret');
    return { authenticated: true };
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = {
  register,
  login,
  authenticate
};
