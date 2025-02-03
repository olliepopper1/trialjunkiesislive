import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
};

export function notFoundHandler(_req: Request, res: Response, _next: NextFunction) {
  return res.status(404).json({ error: 'Route not found' });
}
