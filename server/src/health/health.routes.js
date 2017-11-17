import boom from 'boom';
import { format } from '../utility';
import { handleCheckServer } from '.';

const createHealthRoutes = () => {
    const notImplemented = (request, reply) => reply(boom.notImplemented());

    const checkServer = {
        method: 'GET',
        path: '/healthCheck',
        handler: handleCheckServer,
        config: {
            auth: false,
            tags: [
                'api', 'Server Utilities'
            ],
            description: 'Get up status of server',
            notes: [
                'Returns success status if the server is online'
            ],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        ...format.healthCheck
                    }
                }
            }
        }
    };

    const checkDependencies = {
        method: 'GET',
        path: '/healthCheck/all',
        handler: notImplemented,
        config: {
            auth: false,
            tags: ['api', 'Server Utilities'],
            description: 'Get up status of server dependencies',
            notes: [
                'Returns an array of each server dependency with up status and latency'
            ],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        ...format.checkDependency,
                        ...format.internalError,
                        ...format.notImplemented
                    }
                }
            }
        }
    };

    return [
        checkServer,
        checkDependencies
    ];
};

export default createHealthRoutes;
