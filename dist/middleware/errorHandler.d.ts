import { Request, Response, NextFunction } from 'express';
export interface CustomError extends Error {
    status?: number;
}
export declare const errorHandler: (err: CustomError, req: Request, res: Response, next: NextFunction) => void;
export declare const notFoundHandler: (req: Request, res: Response, next: NextFunction) => void;
