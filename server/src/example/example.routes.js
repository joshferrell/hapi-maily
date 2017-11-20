import joi from 'joi';
import { SimpleEmail } from '../templates';
import { format } from '../utility';

const createExampleRoutes = ({ makeHandleEmail }) => {
    const handleEmail = makeHandleEmail(SimpleEmail, 'message title');

    const sendSimpleEmail = {
        method: 'POST',
        path: '/example/simple',
        handler: handleEmail,
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
