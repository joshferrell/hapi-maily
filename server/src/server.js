import { compose } from 'glue';
import nodemailer from 'nodemailer';
import { createLogger, stdSerializers } from 'bunyan';
import dotenv from 'dotenv-safe';

import createManifest from './manifest';

import { createEmailInterface } from './connection';
import createHealthRoutes from './health';
import createExampleRoutes from './example';

dotenv.load();

const serverInfo = {
    env: process.env.NODE_ENV,
    url: process.env.SERVER_URL,
    scheme: process.env.SERVER_SCHEME
};

const emailSettings = {
    fromAddress: process.env.EMAIL_FROM_ADDRESS,
    user: process.env.MANDRILL_EMAIL,
    pass: process.env.MANDRILL_API_KEY
};

const logger = createLogger({
    name: 'hapi-maily',
    serializers: {
        err: stdSerializers.err
    },
    level: 'trace'
});

const createStartServer = log => async (server) => {
    const emailInterface = createEmailInterface(emailSettings, nodemailer);
    const healthRoutes = createHealthRoutes(emailInterface, log);
    const exampleRoutes = createExampleRoutes(emailInterface);
    server.route(healthRoutes);
    server.route(exampleRoutes);

    server.start();
    server.log('info', `Server running at ${server.info.uri}`);
};

const createFailServer = log => (err) => {
    log.error(err, 'unable to start server');
    process.exit(-1);
};

const manifest = createManifest(serverInfo, logger);
const startServer = createStartServer(logger);
const failServer = createFailServer(logger);

compose(manifest).then(startServer, failServer);
