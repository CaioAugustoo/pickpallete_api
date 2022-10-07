import { NextFunction, Request, Response } from 'express';
import { FindPalleteById } from '../../services';
import { incrementCounterAndRegisterMetric, successfullRequestData } from '../../utils';

class FindPalleteByIdController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as unknown as string;

      const pallete = await FindPalleteById.execute(id);

      incrementCounterAndRegisterMetric('findPalleteByIdCounter');

      return res.status(200).json(successfullRequestData(pallete));
    } catch (err) {
      incrementCounterAndRegisterMetric('failsFindPalleteByIdCounter');

      next(err);
    }
  }
}

export { FindPalleteByIdController };
