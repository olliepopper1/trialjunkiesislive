import { Request, Response, NextFunction } from 'express';
export declare const errorHandler: (err: Error, _req: Request, res: Response, _next: NextFunction) => void;
export declare function notFoundHandler(_req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
