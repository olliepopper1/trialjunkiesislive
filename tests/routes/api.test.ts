import request from 'supertest';
import app from '../../src/app';
import { mockData } from '../helpers/mockData'; // Ensure this path is correct or update it to the correct path

describe('API Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/health should return health status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData.health);
  });

  test('GET /api/data should return data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData.testData);
  });

  test('should handle unknown routes', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });
});
