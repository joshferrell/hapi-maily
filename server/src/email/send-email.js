import { pipe, takeLast, split, curry } from 'ramda';

const getDomain = pipe(
    split('@'),
    takeLast(1)
);

const makeSendEmail = (env, log, transport, from) => ({ to, ...emailInfo }) => {
    let toAddress = to;
    const currentDomain = getDomain(to);
    const fromDomain = getDomain(from);

    if (env !== 'production' && fromDomain !== currentDomain) {
        toAddress = `noreply@${fromDomain}`;

        log.warn({
            emailData: {
                attemptedAddress: to,
                sentAddress: toAddress,
                ...emailInfo
            },
            msg: 'attempt to send an email to an external domain when in dev mode'
        });
    }

    return transport.sendMail({ ...emailInfo, to: toAddress, from });
};


export default curry(makeSendEmail);
