import { NextFunction, Request, Response } from 'express';
import { ListAllPalletes } from '../../services';
import { successfullRequestData } from '../../utils';

class ListAllPalletesController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query) || 1;

      const palletes = await ListAllPalletes.execute(page);

      return res.status(201).json(successfullRequestData(palletes));
    } catch (err) {
      next(err);
    }
  }
}

export { ListAllPalletesController };
