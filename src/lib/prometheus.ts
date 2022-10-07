import client from 'prom-client';

const register = new client.Registry();

register.setDefaultLabels({ job: 'pickpallet-api' });

export { client, register };
