import Hapi from 'hapi';
import inert from 'inert';
import vision from 'vision';
import dotenv from 'dotenv-safe';

dotenv.load();

import { log, good, createSwaggerPlugin } from './plugins';

import documentationRoutes from './documentation/documentation.routes';
import healthRoutes from './health/health.routes';

const swagger = createSwaggerPlugin(process.env.SERVER_DEVELOPMENT === 'true');
const server = new Hapi.Server();

server.connection({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT
});

server.register([good, swagger, inert, vision], (error) => {
    if (error) {
        server.log('error', { err: error, msg: 'could not load plugins for server' });
        process.exit(1);
    }

    server.route([
        ...healthRoutes,
        ...documentationRoutes
    ]);

    server.start((err) => {
        if (err) {
            throw err;
        }

        server.log('info', `Server running at ${server.info.uri}`);
    });
})
