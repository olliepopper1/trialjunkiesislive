import { Server } from 'http';
import { app, server } from '../src/index';

describe('Server', () => {
  afterEach((done) => {
    if (server && server instanceof Server) {
      server.close(() => {
        done();
      });
    } else {
      done();
    }
  });

  test('should start the server', () => {
    expect(server).toBeDefined();
    expect(app).toBeDefined();
  });

  test('should be able to close the server', (done) => {
    expect(server).toBeInstanceOf(Server);
    server.close((err) => {
      expect(err).toBeUndefined();
      done();
    });
  });
});
