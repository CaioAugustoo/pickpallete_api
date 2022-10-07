import { counters, Counters } from '../../constants';
import * as prometheus from '../../lib/prometheus';

function registerMetric(counter: Counters) {
  prometheus.register.registerMetric(counters[counter]);
}

export { registerMetric };
