import { createClient } from 'redis';

const client = createClient();
const EXIT_MSG = 'KILL_SERVER';

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

client.on('connect', async () => {
    console.log('Redis client connected to the server');
});

client.subscribe('holberton school channel');

client.on('message', (_err, msg) => {
    console.log(msg);
    if (msg === EXIT_MSG) {
        client.unsubscribe();
        client.quit();
    }
});