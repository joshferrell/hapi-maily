import createHealthRoutes from './health.routes';

describe('health routes', () => {
    it('should create health check routes', () => {
        const healthRoutes = createHealthRoutes();
        expect(healthRoutes).toMatchSnapshot();
    });
});
