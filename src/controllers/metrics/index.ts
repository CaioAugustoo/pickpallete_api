import { NextFunction, Request, Response } from 'express';
import * as prometheus from '../../lib/prometheus';

class CollectMetricsController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      res.setHeader('Content-type', prometheus.register.contentType);
      res.end(await prometheus.register.metrics());
    } catch (err) {
      next(err);
    }
  }
}

export { CollectMetricsController };
