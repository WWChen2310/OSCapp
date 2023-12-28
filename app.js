console.log('2');
document.write('123');

import { Client } from 'https://cdn.jsdelivr.net/npm/node-osc@9.0.2/+esm';

const client = new Client('127.0.0.1', 3333);
client.send('/oscAddress', 200, () => {
  client.close();
});