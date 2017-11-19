import React from 'react';
import boom from 'boom';
import { SimpleEmail } from '../templates';

/* eslint-disable import/prefer-default-export */
export const makeHandleSimpleEmail = emailInterface => async (request, reply) => {
    const { firstName, lastName, email } = request.payload;
    const { renderHTML, sendEmail } = emailInterface;
    const component = (
        <SimpleEmail
            firstName={firstName}
            lastName={lastName}
        />
    );

    try {
        const html = renderHTML(component);
        const emailInfo = {
            to: email,
            subject: 'Message title',
            html
        };

        const data = await sendEmail(emailInfo);
        request.log('info', {
            data,
            msg: 'Logged email information'
        });
        return reply({ success: true });
    } catch (err) {
        request.log('error', { err, msg: 'unable to send simple email' });
        return reply(boom.badImplementation());
    }
};
