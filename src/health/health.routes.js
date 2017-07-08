import Joi from 'joi';
import { internalErrorFormat } from '../utilities/swaggerResponse';

import { healthStatus, createDependencyHandler } from './health.handler';

const healthDependencyStatus = createDependencyHandler();

const healthRoutes = [{
    method: 'GET',
    path: '/health',
    handler: healthStatus,
    config: {
        auth: false,
        tags: ['api', 'Server Utilities'],
        description: 'Get Up Status of Server',
        notes: [
            'Returns success status if the server is online'
        ],
        plugins: {
            'hapi-swagger': {
                responses: {
                    200: {
                        description: 'Server Online',
                        schema: Joi
                            .object({
                                status: Joi
                                    .string()
                                    .equal('OK')
                                    .required()
                            })
                            .required()
                    }
                }
            }
        }
    }
},
{
    method: 'GET',
    path: '/health/all',
    handler: healthDependencyStatus,
    config: {
        auth: false,
        tags: ['api', 'Server Utilities'],
        description: 'Get Up Status of Server Dependencies',
        notes: [
            'Returns an array of each server dependency with up status and latency'
        ],
        plugins: {
            'hapi-swagger': {
                responses: {
                    200: {
                        descripton: 'Server Online',
                        schema: Joi
                            .array()
                            .length(1)
                            .unique()
                            .items(Joi.object({
                                name: Joi
                                    .string()
                                    .valid('smtp')
                                    .required(),
                                up: Joi
                                    .boolean()
                                    .required(),
                                duration: Joi
                                    .number()
                                    .required(),
                                msg: Joi
                                    .string()
                                    .required()
                                    .label('Human readable response about dependency status')
                            }))
                            .required()
                    },
                    ...internalErrorFormat
                }
            }
        }
    }
}];

export default healthRoutes;
