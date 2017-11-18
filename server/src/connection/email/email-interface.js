import makeSendEmail from './send-email';
import renderTemplate from './render-template';
import createTransport from './create-transport';

/**
 * creates a new interface for sending emailSettings
 * @param  {object}  emailSettings {apiKey, fromAddress}
 * @return {Object}                Returns an interface
 */
const createEmailInterface = (emailSettings) => {
    const transporter = createTransport(emailSettings.apiKey);
    const sendEmail = makeSendEmail(transporter, emailSettings.fromAddress);

    return ({
        sendEmail,
        transporter,
        renderHTML: renderTemplate
    });
};

export default createEmailInterface;
