import { compose } from 'glue';
import { createLogger, stdSerializers } from 'bunyan';
import dotenv from 'dotenv-safe';
import jwt from 'jsonwebtoken';
import createManifest from './manifest';
import makeWebspaceInterface from './connection/webspace';
import makeInstamedInterface from './connection/instamed';

import createHealthRoutes from './health';
import createApplicationRoutes from './application';

dotenv.load();

const serverInfo = {
    env: process.env.NODE_ENV,
    url: process.env.SERVER_URL,
    scheme: process.env.SERVER_SCHEME
};

const logger = createLogger({
    name: 'hapi-maily',
    serializers: {
        err: stdSerializers.err
    },
    level: 'trace'
});

const createStartServer = log => (server) => {
    const healthRoutes = createHealthRoutes(log);
    server.route(healthRoutes);

    server.start();
    server.log('info', `Server running at ${server.info.uri}`);
};

const createFailServer = log => (err) => {
    log.error(err, 'unable to start server');
    process.exit(-1);
}

const manifest = createManifest(serverInfo, logger);
const startServer = createStartServer(logger);
const failServer = createFailServer(logger);

compose(manifest).then(startServer, failServer);
