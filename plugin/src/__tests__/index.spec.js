import { register } from '../index';

describe('hapi-maily plugin', () => {
    const server = {
        handler: jest.fn()
    };
    const validOptions = {
        transport: () => {},
        fromAddress: 'noreply@gmail.com'
    };
    const invalidOptions = {};
    const next = jest.fn();

    beforeEach(() => {
        server.handler.mockClear();
        next.mockClear();
    });

    it('should register plugin attributes', () => {
        expect(register.attributes).toMatchSnapshot();
    });

    it('should register a plugin', () => {
        expect(register).toEqual(expect.any(Function));
        register(server, validOptions, next);

        expect(server.handler).toHaveBeenCalled();
        expect(server.handler).toHaveBeenCalledTimes(1);
        expect(server.handler).toHaveBeenCalledWith(
            'email',
            expect.any(Function)
        );

        expect(next).toHaveBeenCalled();
        expect(next).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when plugin given bad options', () => {
        expect(() => {
            register(server, invalidOptions, next);
        }).toThrow();
    });
});
