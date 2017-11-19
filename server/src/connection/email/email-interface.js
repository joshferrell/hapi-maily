import makeSendEmail from './send-email';
import renderTemplate from './render-template';
import createTransport from './create-transport';
import makeVerifyConnection from './verify-connection';

/**
 * creates a new interface for sending emailSettings
 * @param  {object}  emailSettings {apiKey, fromAddress}
 * @return {Object}                Returns an interface
 */
const createEmailInterface = (emailSettings) => {
    const transport = createTransport(emailSettings);
    const sendEmail = makeSendEmail(transport, emailSettings.fromAddress);
    const verifyConnection = makeVerifyConnection(transport);

    return ({
        sendEmail,
        transport,
        authenticate: verifyConnection,
        renderHTML: renderTemplate
    });
};

export default createEmailInterface;
