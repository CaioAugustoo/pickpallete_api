import { counters, Counters } from '../../constants';

function incrementCounter(counter: Counters, value: number = 1) {
  counters[counter].inc(value);
}

export { incrementCounter };
