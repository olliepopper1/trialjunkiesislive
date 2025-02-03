import { app } from '../src/app';
import { server } from '../src/index';

describe('Server', () => {
  afterEach(() => {
    server.close();
  });

  test('should start the server', () => {
    expect(server).toBeDefined();
  });
});
