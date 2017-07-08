import Boom from 'boom';
import { checkSmtpStatus } from './health.service';

export const healthStatus = (request, reply) => reply({
    status: 'OK'
});

export const createDependencyHandler = (checkMailServer = checkSmtpStatus) => (request, reply) =>
    reply(Boom.notImplemented());
