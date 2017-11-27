import getDomain from '../get-domain';

describe('get domain', () => {
    it('should return the domain of a given email', () => {
        const email = 'example@gmail.com';
        expect(getDomain(email)).toEqual('gmail.com');
    });
});
