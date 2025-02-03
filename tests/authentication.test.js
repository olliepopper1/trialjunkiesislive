const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from this module

describe('Authentication Endpoints', () => {
  describe('POST /register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/register')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token');
    });

    it('should return an error if username is missing', async () => {
      const res = await request(app)
        .post('/register')
        .send({
          password: 'testpassword'
        });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('POST /login', () => {
    it('should login an existing user', async () => {
      const res = await request(app)
        .post('/login')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
    });

    it('should return an error if password is incorrect', async () => {
      const res = await request(app)
        .post('/login')
        .send({
          username: 'testuser',
          password: 'wrongpassword'
        });
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('error');
    });
  });
});
