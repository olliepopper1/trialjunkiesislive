
import nock from 'nock';
import request from 'supertest';
import app from '../src/app'; // assuming your Express app is exported from src/app.ts

describe('External API Test', () => {
  beforeAll(() => {
    nock('https://external-api.com')
      .get('/data')
      .reply(200, { data: 'mocked data' });
  });

  it('should return mocked data from external API', async () => {
    const response = await request(app).get('/api/data');
    expect(response.body).toEqual({ data: 'mocked data' });
  });
});