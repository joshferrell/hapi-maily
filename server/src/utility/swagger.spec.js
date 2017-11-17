import * as swaggerFormat from './swagger';

describe('swagger formatting', () => {
    it('should have a format for success', () => {
        expect(swaggerFormat.success).toMatchSnapshot();
    });

    it('should have a format for bad requests', () => {
        expect(swaggerFormat.badRequest).toMatchSnapshot();
    });

    it('should have a format for not found', () => {
        expect(swaggerFormat.notFound).toMatchSnapshot();
    });

    it('should have a format for unauthorized requests', () => {
        expect(swaggerFormat.unauthorized).toMatchSnapshot();
    });

    it('should have an internal error format', () => {
        expect(swaggerFormat.internalError).toMatchSnapshot();
    });

    it('should have a not implemented format', () => {
        expect(swaggerFormat.notImplemented).toMatchSnapshot();
    });

    it('should have a health check format', () => {
        expect(swaggerFormat.healthCheck).toMatchSnapshot();
    });

    it('should have a dependency format', () => {
        expect(swaggerFormat.checkDependency).toMatchSnapshot();
    });
});
