import { Router } from 'express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

export const initializeSentry = (app: Router) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN_TOKEN || '',
    integrations: [new Sentry.Integrations.Http({ tracing: true }), new Tracing.Integrations.Express({ app })],
    tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE) || 1.0,
  });

  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      // Capture all 404 and 500 errors
      if (error.status === 404 || error.status === 500) {
        return true;
      }
      return false;
    },
  });
};
