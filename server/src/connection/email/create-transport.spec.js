import makeCreateTransport from './create-transport';

describe('create email transport', () => {
    const nodemailer = {
        createTransport: jest.fn()
    };

    const emailSettings = {
        user: 'example@gmail.com',
        pass: 'supersecure'
    };

    it('should create a new mandril transport given user and pass', () => {
        const createTransport = makeCreateTransport(nodemailer);
        createTransport(emailSettings);

        expect(nodemailer.createTransport).toHaveBeenCalled();
        expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
        expect(nodemailer.createTransport).toHaveBeenCalledWith({
            service: 'Mandrill',
            auth: {
                user: 'example@gmail.com',
                pass: 'supersecure'
            }
        });
    });
});
