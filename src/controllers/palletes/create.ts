import { NextFunction, Request, Response } from 'express';
import { CreatePalleteDto } from '../../dtos';
import { CreatePallete } from '../../services';
import { successfullRequestData } from '../../utils';

class CreatePalleteController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreatePalleteDto = req.body;

      const createdPallete = await CreatePallete.execute(data);

      return res.status(201).json(successfullRequestData(createdPallete));
    } catch (err) {
      next(err);
    }
  }
}

export { CreatePalleteController };
