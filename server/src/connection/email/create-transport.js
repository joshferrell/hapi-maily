const makeCreateTransport = nodemailer =>
    ({ user, pass }) => nodemailer.createTransport({
        service: 'Mandrill',
        auth: { user, pass }
    });

export default makeCreateTransport;
