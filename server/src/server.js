import HapiMaily from 'hapi-maily';
import React from 'react';
import Hapi from 'hapi';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv-safe';
import joi from 'joi';
import SimpleEmail from './component';

dotenv.load();

const transport = nodemailer.createTransport({
    service: 'Mandrill',
    auth: {
        user: process.env.MANDRILL_EMAIL,
        pass: process.env.MANDRILL_API_KEY
    }
});

const MailPlugin = {
    register: HapiMaily,
    options: {
        transport,
        fromAddress: process.env.EMAIL_FROM_ADDRESS
    }
};

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
server.register([MailPlugin], (err) => {
    if (err) throw err;

    server.route({
        method: 'POST',
        path: '/',
        handler: {
            email: {
                subject: 'test',
                component: SimpleEmail
            }
        },
        config: {
            validate: {
                payload: {
                    email: joi.string().email().required(),
                    firstName: joi.string().required(),
                    lastName: joi.string().required()
                }
            }
        }
    });

    server.start((err) => {
        if (err) throw err;
        console.log(`Server running at: ${server.info.uri}`);
    });
})
