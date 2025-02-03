import express from 'express';
import cors from 'cors';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import apiRouter from './routes/api';

const app = express();

app.use(cors());
app.use(express.json());

// API routes should come before error handlers
app.use('/api', apiRouter);

// Error trigger route
app.get('/trigger-error', (_req, _res, next) => {
  next(new Error('Internal Server Error'));
});

// Error handlers must be last
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
