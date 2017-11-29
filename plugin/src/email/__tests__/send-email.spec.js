import nodemailer from 'nodemailer';
import stubTransport from 'nodemailer-stub-transport';
import makeSendEmail from '../send-email';

describe('sending mail', () => {
    const validTransport = nodemailer.createTransport(stubTransport());
    const fromAddress = 'noreply@joshferrell.me';
    const emailInfo = {
        to: 'example@gmail.com',
        text: 'hi I\'m Paul!',
        subject: 'this is a test'
    };

    it('should send mail to noreply if environment is development and outbound sent', async () => {
        const emailSettings = {
            env: 'local',
            transport: validTransport,
            fromAddress
        };

        const sendEmail = makeSendEmail(emailSettings);
        const { envelope } = await sendEmail(emailInfo);
        expect(envelope).toEqual({
            from: 'noreply@joshferrell.me',
            to: ['noreply@joshferrell.me']
        });
    });

    it('should send mail to the user with an envelope', async () => {
        const emailSettings = {
            env: 'production',
            transport: validTransport,
            fromAddress
        };

        const sendEmail = makeSendEmail(emailSettings);
        const { envelope } = await sendEmail(emailInfo);
        expect(envelope).toEqual({
            from: 'noreply@joshferrell.me',
            to: ['example@gmail.com']
        });
    });
});
