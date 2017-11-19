import nodemailer from 'nodemailer';

const createTransport = ({ user, pass }) => nodemailer.createTransport({
    service: 'Mandrill',
    auth: { user, pass }
});

export default createTransport;
