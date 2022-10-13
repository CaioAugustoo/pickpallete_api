import * as prometheus from '../lib/prometheus';

const listAllPalletesCounter = new prometheus.client.Counter({
  name: 'list_all_palletes_counter',
  help: 'Counts list all palletes requests.',
  labelNames: ['list_all_counter'],
});

const failsListAllPalletesCounter = new prometheus.client.Counter({
  name: 'fails_list_all_palletes_counter',
  help: 'Counts fails list all palletes requests.',
  labelNames: ['fails_list_all_counter'],
});

const findPalleteByIdCounter = new prometheus.client.Counter({
  name: 'find_pallete_by_id_counter',
  help: 'Counts find pallete by id requests.',
  labelNames: ['find_by_id_counter'],
});

const failsFindPalleteByIdCounter = new prometheus.client.Counter({
  name: 'fails_find_pallete_by_id_counter',
  help: 'Counts fails find pallete by id requests.',
  labelNames: ['fails_find_by_id_counter'],
});

const createPalleteCounter = new prometheus.client.Counter({
  name: 'create_pallete_counter',
  help: 'Counts create pallete requests.',
  labelNames: ['create_counter'],
});

const failsCreatePalleteCounter = new prometheus.client.Counter({
  name: 'fails_create_pallete_counter',
  help: 'Counts fails create pallete requests.',
  labelNames: ['fails_create_counter'],
});

const counters = {
  listAllPalletesCounter,
  failsListAllPalletesCounter,
  findPalleteByIdCounter,
  failsFindPalleteByIdCounter,
  createPalleteCounter,
  failsCreatePalleteCounter,
};

type TypeCounters = typeof counters;
type Counters = keyof TypeCounters;

export { counters, Counters };
