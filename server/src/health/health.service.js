
export const makeGetTime = getDate => (startTime = 0) => getDate().valueOf() - startTime;

export const makeCheckStatus = (promiseFunction, name, getDate, log) => async () => {
    const getTime = makeGetTime(getDate);
    const startTime = getTime();

    try {
        await promiseFunction();
        const duration = getTime(startTime);
        return {
            name,
            up: true,
            duration,
            msg: `${name} is up. time to ping ${duration}ms`
        };
    } catch (err) {
        log.error({ err }, `unable to connect to ${name}`);
        const duration = getTime(startTime);

        return {
            name,
            up: false,
            duration,
            msg: `${name} is down. time to error ${duration}ms`
        };
    }
};
