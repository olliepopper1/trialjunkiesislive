'use strict';

const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.cjs');

describe('Auth Routes Integration Tests', () => {
  describe('POST /auth/register', () => {
    it('should register new user', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({ username: 'test', password: 'test123' });
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('token');
    });
  });

  describe('POST /auth/login', () => {
    it('should login user', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({ username: 'test', password: 'test123' });
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('token');
    });
  });
});
