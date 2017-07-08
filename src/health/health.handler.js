import Boom from 'boom';
import { checkSMTPStatus } from './health.service';

export const healthStatus = (request, reply) => reply({
    status: 'OK'
});

export const createDependencyHandler = (checkMailServer = checkSMTPStatus) =>
    (request, reply) => {
        checkMailServer();
        return reply(Boom.notImplemented());
    };
