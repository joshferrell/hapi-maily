import createEmailInterface from '../email-interface';

describe('email interface', () => {
    const nodemailer = {
        createTransport: jest.fn(() => 'hi I\'m paul')
    };

    it('should create an interface of functions to do email stuff with', () => {
        const emailSettings = {
            apiKey: 'supersecure',
            fromAddress: 'example@gmail.com'
        };

        const emailInterface = createEmailInterface(emailSettings, nodemailer);

        expect(emailInterface).toMatchSnapshot();
    });
});
