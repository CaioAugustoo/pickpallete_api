require('dotenv').config();
import { apiKeyMiddleware, errorMiddleware } from './middlewares';

import express, { Router } from 'express';
import cors from 'cors';
import { MainRouter } from './routes';
import { PalletesRouter } from './routes/palletes';
import { logger } from './utils';

class App {
  public app: express.Application;
  public port: string | number;
  private router: Router;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3200;
    this.router = Router();

    this.initializeMiddlewares();
    this.initRoutes();
    this.initializeErrorHandling();
  }

  public listen() {
    const { app, port } = this;

    app.listen(port, () => {
      logger.info(`=========== PICK-PALLET ===========`);
      logger.info(`🚀 App listening on the port ${port}`);
      logger.info(`===================================`);
    });
  }

  private initRoutes() {
    const { router, app } = this;

    app.use(new MainRouter(router).router);
    app.use(new PalletesRouter(router).router);
  }

  private initializeMiddlewares() {
    const { app } = this;

    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));

    process.env.NODE_ENV === 'production' && app.use(apiKeyMiddleware);

    logger.info('Middlewares initialized');
  }

  private initializeErrorHandling() {
    const { app } = this;

    app.use(errorMiddleware);

    logger.info('Error handling initialized');
  }
}

export { App };
