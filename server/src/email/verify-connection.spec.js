import makeVerifyConnection from './verify-connection';

describe('verify email connection', () => {
    const validTransport = {
        verify: jest.fn(() => Promise.resolve(true))
    };

    const invalidTransport = {
        verify: jest.fn(() => Promise.resolve(false))
    };

    const exceptionTransport = {
        verify: jest.fn(() => Promise.reject(new Error('unable to connect to smtp')))
    };

    it('should resolve if the connection could be verified', () => {
        const verifyConnection = makeVerifyConnection(validTransport);
        return expect(verifyConnection())
            .resolves
            .toEqual('connection to transport verified');
    });

    it('should reject if the connection is invalid', () => {
        const verifyConnection = makeVerifyConnection(invalidTransport);
        return expect(verifyConnection())
            .rejects
            .toEqual(new Error('unable to verify transport connection'));
    });

    it('should throw an exception if the promise rejects', () => {
        const verifyConnection = makeVerifyConnection(exceptionTransport);
        return expect(verifyConnection())
            .rejects
            .toEqual(new Error('unable to connect to smtp'));
    });
});
