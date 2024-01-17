import { Response, Request, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message || 'Internal server error',
    status: 500
  });
};
