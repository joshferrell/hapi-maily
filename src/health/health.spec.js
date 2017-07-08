import healthRoutes from './health.routes';
import { healthStatus, createDependencyHandler } from './health.handler';

describe('healthcheck methods', () => {
    describe('healthcheck routes', () => {
        it('should return an array of routes for health check', () => {
            expect(healthRoutes).toMatchSnapshot();
        });
    });

    describe('healthcheck handler', () => {
        let reply;
        let request;

        beforeEach(() => {
            reply = jest.fn();
            request = jest.fn();
        });

        describe('health status handler', () => {
            it('should reply that the status is okay', () => {
                healthStatus(request, reply);

                expect(reply).toHaveBeenCalled();
                expect(reply).toHaveBeenCalledTimes(1);
                expect(reply).toHaveBeenCalledWith({
                    status: 'OK'
                });
            });
        });

        describe('health dependency status handler', () => {
            it('should reply what the status of the depencency is', async () => {
                const getEmailServerStatus = jest.fn().mockImplementationOnce(
                    () => Promise.resolve(true)
                );

                const healthDependencyStatus = createDependencyHandler(getEmailServerStatus);
                await healthDependencyStatus(request, reply);

                expect(getEmailServerStatus).toHaveBeenCalled();
                expect(getEmailServerStatus).toHaveBeenCalledTimes(1);
                expect(reply).toHaveBeenCalled();
                expect(reply).toHaveBeenCalledTimes(1);
            });
        });
    });
});
