import React from 'react';
import boom from 'boom';

/* eslint-disable import/prefer-default-export */
export const makeHandleEmail = (Component, subject, emailInterface) => async (request, reply) => {
    const { email, ...props } = request.payload;
    const { renderHTML, sendEmail } = emailInterface;

    try {
        const html = renderHTML(<Component {...props} />);
        const data = await sendEmail({
            to: email,
            subject,
            html
        });

        request.log('info', {
            msg: 'Logged email information',
            data
        });

        return reply({ success: true });
    } catch (err) {
        request.log('error', { err, msg: 'unable to send simple email' });
        return reply(boom.badImplementation());
    }
};
