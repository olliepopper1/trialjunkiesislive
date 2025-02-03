import request from 'supertest';
import app from '../app';

describe('API Tests', () => {
  // Test route tests
  describe('GET /api/test', () => {
    it('should return success message', async () => {
      const response = await request(app)
        .get('/api/test')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toEqual({
        message: 'success'
      });
    });
  });

  // Auth tests
  describe('POST /api/auth/login', () => {
    it('should login successfully with correct credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        })
        .expect(200);

      expect(response.body).toHaveProperty('token');
    });

    it('should fail with incorrect credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'wrongpassword'
        })
        .expect(401);

      expect(response.body).toEqual({
        message: 'Invalid credentials'
      });
    });
  });

  // Protected route tests
  describe('GET /api/protected', () => {
    let token: string;

    beforeAll(async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        });
      token = response.body.token;
    });

    it('should access protected route with valid token', async () => {
      const response = await request(app)
        .get('/api/protected')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body).toEqual({
        message: 'Protected data'
      });
    });

    it('should fail without token', async () => {
      const response = await request(app)
        .get('/api/protected')
        .expect(401);

      expect(response.body).toEqual({
        message: 'No token provided'
      });
    });

    it('should fail with invalid token', async () => {
      const response = await request(app)
        .get('/api/protected')
        .set('Authorization', 'Bearer invalid_token')
        .expect(401);

      expect(response.body).toEqual({
        message: 'Invalid token'
      });
    });
  });
});
