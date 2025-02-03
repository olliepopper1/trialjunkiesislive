import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
import app from '../app'; // Assuming your Express app is exported from this module

describe('Authentication Endpoints', () => {
  describe('POST /register', () => {
    it('should register a new user', async () => {
      const res = await request(app).post('/register').send({
          username: 'testuser',
          password: 'testpassword'
        });
      expect(res.statusCode).to.equal(201);
      expect(res.body).to.have.property('token');
    });

    it('should return an error if username is missing', async () => {
      const res = await request(app)
        .post('/register')
        .send({
          password: 'testpassword'
        });
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property('error');
    });
  });

  describe('POST /login', () => {
    it('should login an existing user', async () => {
      const res = await request(app).post('/login').send({
          username: 'testuser',
          password: 'testpassword'
        });
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.property('token');
    });

    it('should return an error if password is incorrect', async () => {
      const res = await request(app)
        .post('/login')
        .send({
          username: 'testuser',
          password: 'wrongpassword'
        });
      expect(res.statusCode).to.equal(401);
      expect(res.body).to.have.property('error');
    });
  });
});
