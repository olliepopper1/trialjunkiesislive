import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary

describe('App', () => {
  test('should handle errors', async () => {
    const response = await request(app).get('/trigger-error');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal Server Error' });
  });

  test('should apply middleware correctly', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.headers['x-powered-by']).toBeUndefined();
  });
});
