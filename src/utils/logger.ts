import winston from 'winston';
import LokiTransport from 'winston-loki';

interface Log {
  timestamp?: string;
  level: string;
  message: string;
}

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message }: Log) => `[PickPallete]:: ${timestamp} ${level}: ${message}`);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    new LokiTransport({
      host: 'http://localhost:3400',
    }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.splat(), winston.format.colorize()),
  }),
);

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
