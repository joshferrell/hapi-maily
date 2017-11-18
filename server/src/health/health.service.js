
export const makeGetTime = getDate => (startTime = 0) => getDate().valueOf() - startTime;

export const makeCheckSmtpStatus = (emailInterface, getDate, log) => async () => {
    const getTime = makeGetTime(getDate);
    const startTime = getTime();

    try {
        await emailInterface.transporter.verify();
        const duration = getTime(startTime);
        return {
            name: 'smtp',
            up: true,
            duration,
            msg: `smtp is up. time to ping ${duration}ms`
        };
    } catch (err) {
        log.error({ err }, 'unable to connect to smtp');
        const duration = getTime(startTime);

        return {
            name: 'smtp',
            up: false,
            duration,
            msg: `smtp is down. time to error ${duration}ms`
        };
    }
};
