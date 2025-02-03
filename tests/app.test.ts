import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary

// ...existing code...

test('should handle errors', async () => {
  const response = await request(app).get('/trigger-error');
  expect(response.status).toBe(500);
  expect(response.body).toHaveProperty('message');
});

test('should apply middleware correctly', async () => {
  const response = await request(app).get('/api/health');
  expect(response.headers['x-powered-by']).toBeUndefined();
});
// ...existing code...
