import { Server } from 'http';
import { app, server } from '../src/index';

describe('Server', () => {
  beforeEach(() => {
    // Ensure server is running before each test
    if (!server.listening) {
      server.listen(0);
    }
  });

  afterEach((done) => {
    if (server.listening) {
      server.close(() => done());
    } else {
      done();
    }
  });

  test('should start the server', () => {
    expect(server).toBeDefined();
    expect(app).toBeDefined();
    expect(server.listening).toBeTruthy();
  });

  test('should be able to close the server', (done) => {
    expect(server).toBeInstanceOf(Server);
    expect(server.listening).toBeTruthy();
    server.close(done);
  }, 10000);
});
