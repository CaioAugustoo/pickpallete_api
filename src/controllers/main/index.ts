import { NextFunction, Request, Response } from "express";
import { successfullRequestData } from "../../utils/successfulRequestData";

class MainController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json(successfullRequestData("pong"));
    } catch (err) {
      next(err);
    }
  }
}

export { MainController };
