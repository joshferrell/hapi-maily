import createInterface from '../index';
import * as service from '../index';

describe('email index', () => {
    it('should export default create interface function', () => {
        expect(typeof createInterface).toBe('function');
    });

    it('should export sendEmail and handleEmail', () => {
        expect(service).toEqual({
            makeHandleEmail: expect.any(Function),
            makeSendEmail: expect.any(Function),
            default: expect.any(Function)
        });
    });
});
