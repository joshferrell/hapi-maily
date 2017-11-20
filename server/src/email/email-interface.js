import {
    makeSendEmail,
    renderTemplate,
    makeCreateTransport,
    makeVerifyConnection,
    makeHandleEmail
} from '.';

/**
 * creates a new interface for sending emailSettings
 * @param  {object}  emailSettings {apiKey, fromAddress}
 * @param  {funct}   nodemailer    injection of nodemailer for mocks
 * @return {Object}                Returns an interface
 */
const createEmailInterface = (emailSettings, nodemailer) => {
    const createTransport = makeCreateTransport(nodemailer);
    const transport = createTransport(emailSettings);

    const sendEmail = makeSendEmail(transport, emailSettings.fromAddress);
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

export default createEmailInterface;
