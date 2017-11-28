import joi from 'joi';
import { makeHandleEmail, makeSendEmail } from '.';
import { renderTemplate } from '../utility';

export const interfaceOptions = joi.object({
    component: joi.func(),
    subject: joi.string()
});

const createInterface = (emailSettings) => (route, options) => {
    const settings = joi.attempt(
        options,
        interfaceOptions,
        `Invalid email handler options (${route.path})`
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
