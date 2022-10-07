import { Counters } from '../../constants';
import { logger } from '../logger';
import { incrementCounter, registerMetric } from '.';

function incrementCounterAndRegisterMetric(counter: Counters, value: number = 1) {
  logger.info(`Prometheus >> Incremented:: ${value}, Registered metric:: ${counter}`);
  incrementCounter(counter, value);
  registerMetric(counter);
}

export { incrementCounterAndRegisterMetric };
