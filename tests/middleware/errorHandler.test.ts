import { errorHandler } from '../../src/middleware/errorHandler';
import { Request, Response, NextFunction } from 'express';

describe('Error Handler Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    } as Partial<Response>;
    nextFunction = jest.fn();
  });

  it('should handle errors correctly', () => {
    const error = new Error('Test error');
    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);
    
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Test error'
    });
  });
});
