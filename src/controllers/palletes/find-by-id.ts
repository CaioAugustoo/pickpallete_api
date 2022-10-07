import { NextFunction, Request, Response } from 'express';
import { FindPalleteById } from '../../services';
import { successfullRequestData } from '../../utils';

class FindPalleteByIdController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as unknown as string;

      const pallete = await FindPalleteById.execute(id);

      return res.status(201).json(successfullRequestData(pallete));
    } catch (err) {
      next(err);
    }
  }
}

export { FindPalleteByIdController };
