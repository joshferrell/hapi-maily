import Joi from 'joi';

export const success = {
    200: {
        description: 'Success',
        schema: Joi.object({
            success: Joi.boolean().required()
        }).required()
    }
};

export const badRequest = {
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

export const notFound = {
    404: {
        description: 'Not Found',
        schema: Joi.object({
            statusCode: Joi.string().equal('404').required(),
            error: Joi.string().equal('Not Found').required(),
            message: Joi.string().required()
        }).required()
    }
};

export const unauthorized = {
    401: {
        description: 'Unauthorized',
        schema: Joi.object({
            statusCode: Joi.string().equal('401').required(),
            error: Joi.string().equal('Unauthorized').required(),
            message: Joi.string().required()
        }).required()
    }
};

export const internalError = {
    500: {
        description: 'Internal Server Error',
        schema: Joi.object({
            statusCode: Joi.string().equal('500').required(),
            error: Joi.string().equal('Internal Server Error').required(),
            message: Joi.string().equal('An internal server error occurred').required()
        }).required()
    }
};

export const notImplemented = {
    501: {
        description: 'Not Implemented',
        schema: Joi.object({
            statusCode: Joi.string().equal('501').required(),
            error: Joi.string().equal('Not Implemented').required(),
            message: Joi.string().equal('method not implemented').required()
        }).required()
    }
};

export const healthCheck = {
    200: {
        description: 'Server Online',
        schema: Joi.object({
            status: Joi.string().equal('OK').required()
        }).required()
    }
};

export const checkDependency = {
    200: {
        description: 'Dependencies Online',
        schema: Joi
            .array()
            .unique()
            .items(Joi.object({
                name: Joi.string().valid(['smtp']).required(),
                up: Joi.boolean().required(),
                duration: Joi.number().required(),
                msg: Joi.string().required()
                    .label('Human readable response about dependency status')
            }))
            .required()
    }
};
