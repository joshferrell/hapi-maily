import boom from 'boom';
import joi from 'joi';
import { format } from '../utility';

const createExampleRoutes = () => {
    const notImplemented = (request, reply) => reply(boom.notImplemented());

    const sendSimpleEmail = {
        method: 'POST',
        path: '/example/simple',
        handler: notImplemented,
        config: {
            tags: ['api', 'Example Email'],
            description: 'Sends a simple html email',
            validate: {
                payload: {
                    email: joi.string().email().required(),
                    firstName: joi.string().required(),
                    lastName: joi.string().required()
                }
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        ...format.success,
                        ...format.badRequest,
                        ...format.unauthorized,
                        ...format.internalError,
                        ...format.notImplemented
                    }
                }
            }
        }
    };

    return [
        sendSimpleEmail
    ];
};

export default createExampleRoutes;
