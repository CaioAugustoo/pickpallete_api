require('newrelic');
require('dotenv').config();

import { apiKeyMiddleware, errorMiddleware } from './middlewares';
import express, { Router } from 'express';
import cors from 'cors';
import { MainRouter, MetricsRoute, PalletesRouter } from './routes';
import { logger } from './utils';
import * as prometheus from './lib/prometheus';
import { initializeSentry, apiLimiter } from './config';
import * as Sentry from '@sentry/node';

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
    this.initializeConfigs();
    this.initializeErrorHandling();
  }

  public listen() {
    const { app, port } = this;

    app.listen(port, () => {
      logger.info(`========== PICK PALLETE ===========`);
      logger.info(`🚀 App listening on the port ${port}`);
      logger.info(`===================================`);
    });
  }

  private initRoutes() {
    const { router, app } = this;

    app.use(new MainRouter(router).router);
    app.use(new PalletesRouter(router).router);
    app.use(new MetricsRoute(router).router);
  }

  private initializeMiddlewares() {
    const { app } = this;

    app.use(express.json());
    app.use(cors({ origin: process.env.CORS_ORIGIN }));
    app.use(express.urlencoded({ extended: true }));
    app.use(apiLimiter);
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());

    process.env.NODE_ENV === 'production' && app.use(apiKeyMiddleware);

    logger.info('Middlewares initialized');
  }

  private initializeConfigs() {
    initializeSentry(this.app);

    prometheus.client.collectDefaultMetrics({ register: prometheus.register });

    logger.info('Config initialized');
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export { App };
