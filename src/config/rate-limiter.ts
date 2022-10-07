import rateLimit from 'express-rate-limit';
import { MESSAGES } from '../constants';

const apiLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMITER_IN_MS) || 60_000, // 1 minute
  message: MESSAGES.TOO_MANY_REQUESTS,
  max: Number(process.env.RATE_LIMITER_MAX_REQUESTS) || 50, // Limit each IP to 50 requests per `window` (here, per 1 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
});

export { apiLimiter };
