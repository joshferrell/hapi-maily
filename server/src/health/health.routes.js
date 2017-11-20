import getDate from 'moment';
import { format } from '../utility';
import {
    handleCheckServer,
    makeCheckStatus,
    makeHandleCheckDependency
} from '.';

const createHealthRoutes = (emailInterface, logger) => {
    const checkSmtpStatus = makeCheckStatus(
        emailInterface.authenticate,
        'smtp',
        getDate,
        logger
    );
    const handleCheckDependency = makeHandleCheckDependency([checkSmtpStatus]);

    const checkServer = {
        method: 'GET',
        path: '/healthCheck',
        handler: handleCheckServer,
        config: {
            auth: false,
            tags: ['api', 'Server Utilities'],
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
        handler: handleCheckDependency,
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
