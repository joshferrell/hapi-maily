import nodemailer from 'nodemailer';
import mandrillTransport from 'nodemailer-mandrill-transport';
import R from 'ramda';

const createTransport = R.pipe(
    apiKey => mandrillTransport({
        auth: { apiKey }
    }),
    nodemailer.createTransport
);

export default createTransport;
