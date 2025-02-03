import { Request, Response, NextFunction } from 'express';

export interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  
  res.status(status).json({
    error: {
      message,
      status
    }
  });
};

export const notFoundHandler = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(404).json({
    error: {
      message: 'Route not found',
      status: 404
    }
  });
};
