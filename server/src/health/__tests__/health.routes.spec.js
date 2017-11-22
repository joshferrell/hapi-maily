import createHealthRoutes from '../health.routes';

describe('health routes', () => {
    it('should create health check routes', () => {
        const emailInterface = {
            authenticate: () => {}
        };
        const healthRoutes = createHealthRoutes(emailInterface);
        expect(healthRoutes).toMatchSnapshot();
    });
});
