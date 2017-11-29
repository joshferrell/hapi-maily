import joi from 'joi';
import optionsFormat from '../options';

describe('plugin options', () => {
    it('should have an options format', () => {
        expect(optionsFormat).toMatchSnapshot();
    });

    it('should validate correct options', () => {
        const options = {
            transport: () => {},
            fromAddress: 'noreply@gmail.com'
        };

        expect(joi.attempt(options, optionsFormat)).toEqual({
            transport: expect.any(Function),
            fromAddress: 'noreply@gmail.com',
            env: 'production'
        });
    });

    it('should deny invalid options', () => {
        const options = {};
        expect(() => {
            joi.attempt(options, optionsFormat);
        }).toThrow();
    });
});
