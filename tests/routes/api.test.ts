import request from 'supertest';
import { app } from '../../src/app';
import { router } from '../../src/routes/api';

describe('API Routes', () => {
  test('should respond to health check', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });

  test('should handle unknown routes', async () => {
    const response = await request(app).get('/api/unknown');
    expect(response.status).toBe(404);
  });
});
