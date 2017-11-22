import createEmailInterface from '../email-interface';

describe('email interface', () => {
    const nodemailer = {
        createTransport: jest.fn(() => 'hi I\'m paul')
    };

    const logger = {
        debug: jest.fn(),
        warn: jest.fn()
    };

    it('should create an interface of functions to do email stuff with', () => {
        const fromAddress = 'noreply@gmail.com';
        const transportSettings = {
            service: 'Mandrill',
            auth: {
                user: 'username',
                pass: 'supersecure'
            }
        };

        const emailInterface = createEmailInterface(
            'production',
            logger,
            nodemailer,
            fromAddress,
            transportSettings
        );

        expect(emailInterface).toMatchSnapshot();
    });
});
