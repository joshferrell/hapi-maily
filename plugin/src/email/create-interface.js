import joi from 'joi';
import { makeHandleEmail, makeSendEmail } from '.';
import { renderTemplate } from '../utility';

export const interfaceOptions = joi
    .object({
        component: joi.func().required(),
        subject: joi.string().required()
    })
    .required();

export const routeOptions = joi
    .object({
        method: joi
            .string()
            .uppercase()
            .valid(['POST'])
            .required()
    })
    .unknown()
    .required();

const createInterface = emailSettings => (route, options) => {
    const settings = joi.attempt(
        options,
        interfaceOptions,
        `Invalid email handler options (${route.path})`
    );

    joi.assert(
        route,
        routeOptions,
        `Invalid route options supplied to (${route.path})`
    );

    const { component, subject } = settings;
    const sendMail = makeSendEmail(emailSettings);
    const handleMail = makeHandleEmail(
        renderTemplate,
        sendMail,
        component,
        subject
    );

    return handleMail;
};

export default createInterface;
