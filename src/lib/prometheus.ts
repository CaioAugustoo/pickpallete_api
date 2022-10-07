import client from 'prom-client';

const register = new client.Registry();

register.setDefaultLabels({ job: 'pickpallete-api' });

export { client, register };
