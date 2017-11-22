import React from 'react';
import boom from 'boom';
import nodemailer from 'nodemailer';
import stubTransport from 'nodemailer-stub-transport';
import makeHandleEmail from '../handle-email';

describe('handle email requests', () => {
    const subject = 'This is a test';
    const testComponent = () => (
        <mj-text>
            <p>This is a test</p>
        </mj-text>
    );
    const renderHTML = jest.fn(() => <p>this is a test</p>);
    const reply = jest.fn();
    const request = {
        payload: {
            email: 'example@gmail.com',
            firstName: 'john',
            lastName: 'doe'
        },
        log: jest.fn()
    };
    const transport = nodemailer.createTransport(stubTransport());
    const sendMail = jest.fn(data => transport.sendMail(data));

    beforeEach(() => {
        sendMail.mockClear();
        renderHTML.mockClear();
        reply.mockClear();
        request.log.mockClear();
    });

    // TODO: can't confirm that current email stub returns
    // envelope, need to look further into this to figure out
    // the problem, currently, the envelope is not defined, so
    // this test is not accurate

    // it.skip('should render the html, and send an email to the requested user', async () => {
    //     const handleEmail = makeHandleEmail(
    //         renderHTML,
    //         sendMail,
    //         testComponent,
    //         subject
    //     );
    //
    //     await handleEmail(request, reply);
    //
    //     expect(sendMail).toHaveBeenCalled();
    //     expect(sendMail).toHaveBeenCalledTimes(1);
    //     expect(sendMail.mock.calls[0][0]).toMatchSnapshot();
    // });

    it('should log the envelope when email is successful', async () => {
        const handleEmail = makeHandleEmail(
            renderHTML,
            () => Promise.resolve('bloop'),
            testComponent,
            subject
        );

        await handleEmail(request, reply);

        expect(request.log).toHaveBeenCalled();
        expect(request.log).toHaveBeenCalledTimes(1);
        expect(request.log).toHaveBeenCalledWith(
            'info',
            {
                msg: 'Logged email information',
                data: 'bloop'
            }
        );
    });

    it('should reply success when email is sent', async () => {
        const handleEmail = makeHandleEmail(
            renderHTML,
            () => Promise.resolve('bloop'),
            testComponent,
            subject
        );

        await handleEmail(request, reply);

        expect(reply).toHaveBeenCalled();
        expect(reply).toHaveBeenCalledTimes(1);
        expect(reply).toHaveBeenCalledWith({
            success: true
        });
    });

    it('should log an error when something goes wrong', async () => {
        const handleEmail = makeHandleEmail(
            renderHTML,
            () => Promise.reject(new Error('uh oh!')),
            testComponent,
            subject
        );

        await handleEmail(request, reply);

        expect(request.log).toHaveBeenCalled();
        expect(request.log).toHaveBeenCalledTimes(1);
        expect(request.log).toHaveBeenCalledWith(
            'error',
            {
                err: new Error('uh oh!'),
                msg: 'unable to send simple email'
            }
        );
    });

    it('should reply bad implementation when an error occurrs', async () => {
        const handleEmail = makeHandleEmail(
            renderHTML,
            () => Promise.reject(new Error('uh oh!')),
            testComponent,
            subject
        );

        await handleEmail(request, reply);

        expect(reply).toHaveBeenCalled();
        expect(reply).toHaveBeenCalledTimes(1);
        expect(reply).toHaveBeenCalledWith(boom.badImplementation());
    });
});
