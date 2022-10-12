import { NextFunction, Request, Response } from 'express';
import { MESSAGES } from '../constants';
import { HttpException } from '../exceptions';
import { logger } from '../utils';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status = error.status || 500;
    const message = error.message || MESSAGES.INTERNAL_SERVER_ERROR;

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json({ ok: false, error: true, message, data: null });
  } catch (err) {
    next(err);
  }
};

export { errorMiddleware };
