import app from '../src/app';
import server, { httpServer } from '../src/index';

describe('Server', () => {
  afterEach(() => {
    httpServer.close();
  });

  test('should start the server', () => {
    expect(server).toBeDefined();
  });
});
