import request from 'supertest';
import app from '../app';
import jwt from 'jsonwebtoken';

describe('API Tests', () => {
  describe('GET /api/test', () => {
    it('should return success message', async () => {
      const response = await request(app).get('/api/test');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'success' });
    });
  });

  describe('POST /api/auth/login', () => {
    it('should return token on successful login', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@test.com', password: 'password123' });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      
      // Verify token
      const decoded = jwt.verify(response.body.token, process.env.JWT_SECRET || 'secret');
      expect(decoded).toHaveProperty('id');
    });

    it('should fail with invalid credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@test.com', password: 'wrongpassword' });
      
      expect(response.status).toBe(401);
      expect(response.body).toEqual({ message: 'Invalid credentials' });
    });
  });

  describe('GET /api/protected', () => {
    it('should return protected data with valid token', async () => {
      const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET || 'secret');
      
      const response = await request(app)
        .get('/api/protected')
        .set('Authorization', `Bearer ${token}`);
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'Protected data',
        userId: 1
      });
    });

    it('should reject request without token', async () => {
      const response = await request(app)
        .get('/api/protected');
      
      expect(response.status).toBe(401);
      expect(response.body).toEqual({ message: 'No token provided' });
    });
  });
});
