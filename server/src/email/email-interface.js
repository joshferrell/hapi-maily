import { curry } from 'ramda';
import {
    makeSendEmail,
    renderTemplate,
    makeVerifyConnection,
    makeHandleEmail
} from '.';

const createEmailInterface = (env, log, nodemailer, fromAddress, transportSettings) => {
    const transport = nodemailer.createTransport(transportSettings);

    const sendEmail = makeSendEmail(env, log, transport, fromAddress);
    const verifyConnection = makeVerifyConnection(transport);
    const handleEmail = makeHandleEmail(renderTemplate, sendEmail);

    return ({
        sendEmail,
        transport,
        authenticate: verifyConnection,
        renderHTML: renderTemplate,
        makeHandleEmail: handleEmail
    });
};

export default curry(createEmailInterface);
