import baseApp from './app';
import dotenv from 'dotenv';
import logger from './utils/logger';

dotenv.config();

const port = process.env.PORT || 3000;

const app = baseApp;
const server = app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app, server };
