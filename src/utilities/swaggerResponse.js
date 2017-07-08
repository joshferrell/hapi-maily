import Joi from 'joi';

export const successFormat = {
    200: {
        description: 'Success',
        schema: Joi.object({
            success: Joi.boolean().required()
        }).required()
    }
};

export const badRequestFormat = {
    400: {
        description: 'Bad Request',
        schema: Joi.object({
            statusCode: Joi.string().equal('400').required(),
            error: Joi.string().equal('Bad Request').required(),
            message: Joi.string().required(),
            validation: Joi.object({
                source: Joi.string().required(),
                keys: Joi.array().items(Joi.string()).required()
            })
        }).required()
    }
};

export const unauthorizedFormat = {
    401: {
        description: 'Unauthorized',
        schema: Joi.object({
            statusCode: Joi.string().equal('401').required(),
            error: Joi.string().equal('Unauthorized').required(),
            message: Joi.string().required()
        }).required()
    }
};

export const internalErrorFormat = {
    500: {
        description: 'Internal Server Error',
        schema: Joi.object({
            statusCode: Joi.string().equal('500').required(),
            error: Joi.string().equal('Internal Server Error').required(),
            message: Joi.string().equal('An internal server error occurred').required()
        }).required()
    }
};

export const notImplementedFormat = {
    501: {
        description: 'Not Implemented',
        schema: Joi.object({
            statusCode: Joi.string().equal('501').required(),
            error: Joi.string().equal('Not Implemented').required(),
            message: Joi.string().equal('method not implemented').required()
        }).required()
    }
};
