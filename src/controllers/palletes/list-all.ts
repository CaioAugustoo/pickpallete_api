import { NextFunction, Request, Response } from 'express';
import { ListAllPalletes } from '../../services';
import { incrementCounterAndRegisterMetric, successfullRequestData } from '../../utils';

class ListAllPalletesController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;

      const palletes = await ListAllPalletes.execute(page);

      incrementCounterAndRegisterMetric('listAllPalletesCounter');

      return res.status(200).json(successfullRequestData(palletes));
    } catch (err) {
      incrementCounterAndRegisterMetric('failsListAllPalletesCounter');

      next(err);
    }
  }
}

export { ListAllPalletesController };
