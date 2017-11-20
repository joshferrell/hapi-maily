import React from 'react';
import { curry } from 'ramda';
import boom from 'boom';

const makeHandleEmail = (renderHTML, sendEmail, Component, subject) =>
    async (request, reply) => {
        const { email, ...props } = request.payload;
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

export default curry(makeHandleEmail);
