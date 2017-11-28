import { getDomain } from '../utility';

const makeSendEmail = emailSettings => ({ to, ...emailInfo }) => {
    const { env, transport, fromAddress: from } = emailSettings;

    let toAddress = to;
    const currentDomain = getDomain(to);
    const fromDomain = getDomain(from);

    if (env !== 'production' && fromDomain !== currentDomain) {
        toAddress = `noreply@${fromDomain}`;
    }

    return transport.sendMail({ ...emailInfo, to: toAddress, from });
};


export default makeSendEmail;
