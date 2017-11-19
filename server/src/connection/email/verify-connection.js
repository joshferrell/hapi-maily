
const makeVerifyConnection = transport => async () => {
    const res = await transport.verify();
    return res ?
        Promise.resolve('connection to transport verified') :
        Promise.reject(new Error('unable to verify transport connection'));
};

export default makeVerifyConnection;
