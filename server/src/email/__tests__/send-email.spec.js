import nodemailer from 'nodemailer';
import stubTransport from 'nodemailer-stub-transport';
import makeSendEmail from '../send-email';

describe('sending an email', () => {
    let fakeTransport;
    let successTransport;
    let errorTransport;
    const logger = {
        debug: jest.fn()
    };
    const emailInfo = {
        to: 'noreply@gmail.com',
        text: 'simple text',
        subject: 'Hi I\'m Paul!'
    };
    const baseSendEmail = makeSendEmail('production', logger);

    beforeEach(() => {
        fakeTransport = {
            sendMail: jest.fn()
        };
        successTransport = stubTransport();
        errorTransport = stubTransport({
            error: 'unable to send email'
        });
        logger.debug.mockClear();
    });

    it('should use the given email settings to send the email', () => {
        const sendEmail = baseSendEmail(fakeTransport, 'example@gmail.com');
        sendEmail(emailInfo);

        expect(fakeTransport.sendMail).toHaveBeenCalled();
        expect(fakeTransport.sendMail).toHaveBeenCalledTimes(1);
        expect(fakeTransport.sendMail).toHaveBeenCalledWith({
            to: 'noreply@gmail.com',
            from: 'example@gmail.com',
            text: 'simple text',
            subject: 'Hi I\'m Paul!'
        });
    });

    it('should return info if the mail successfully sent', async () => {
        const transport = nodemailer.createTransport(successTransport);
        const sendEmail = baseSendEmail(transport, 'example@gmail.com');
        return expect(sendEmail(emailInfo))
            .resolves
            .toMatchObject({
                envelope: {
                    from: 'example@gmail.com',
                    to: ['noreply@gmail.com']
                },
                messageId: expect.anything(),
                response: expect.anything()
            });
    });

    it('should return an error if the mail could not send', async () => {
        const transport = nodemailer.createTransport(errorTransport);
        const sendEmail = baseSendEmail(transport, 'example@gmail.com');
        return expect(sendEmail(emailInfo))
            .rejects
            .toEqual(new Error('unable to send email'));
    });
});
