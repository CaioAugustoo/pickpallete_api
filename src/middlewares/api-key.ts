import { NextFunction, Request, Response } from "express";
import {
  throwApiKeyMissingException,
  throwWrongApiKeyException,
} from "../exceptions/middlewares";

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req?.headers?.["api-key"];

    if (authorization) {
      if (authorization === process.env.API_KEY) {
        next();
      } else {
        next(throwWrongApiKeyException());
      }
    } else {
      next(throwApiKeyMissingException());
    }
  } catch (err) {
    next(err);
  }
};

export { apiKeyMiddleware };
