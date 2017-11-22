import boom from 'boom';
import {
    handleCheckServer,
    makeHandleCheckDependency
} from '../health.handler';

describe('health check handlers', () => {
    let request;
    let reply;
    beforeEach(() => {
        reply = jest.fn();
        request = {
            log: jest.fn()
        };
    });

    describe('check server', () => {
        it('should reply success if server is online', () => {
            handleCheckServer(request, reply);

            expect(reply).toHaveBeenCalled();
            expect(reply).toHaveBeenCalledTimes(1);
            expect(reply).toHaveBeenCalledWith({
                status: 'OK'
            });
        });
    });

    describe('check dependencies', () => {
        it('should reply with the status of the server', async () => {
            const testPromise = [
                () => Promise.resolve({ up: true, name: 'test' })
            ];

            const handleCheckDependency = makeHandleCheckDependency(testPromise);
            await handleCheckDependency(request, reply);
            expect(reply).toHaveBeenCalled();
            expect(reply).toHaveBeenCalledTimes(1);
            expect(reply).toHaveBeenCalledWith([
                {
                    up: true,
                    name: 'test'
                }
            ]);
        });

        it('should log the dependency status if the service is down', async () => {
            const testPromise = [
                () => Promise.resolve({ up: false, name: 'test' })
            ];

            const handleCheckDependency = makeHandleCheckDependency(testPromise);
            await handleCheckDependency(request, reply);
            expect(reply).toHaveBeenCalled();
            expect(reply).toHaveBeenCalledTimes(1);
            expect(reply).toHaveBeenCalledWith([
                {
                    up: false,
                    name: 'test'
                }
            ]);

            expect(request.log).toHaveBeenCalled();
            expect(request.log).toHaveBeenCalledTimes(1);
            expect(request.log).toHaveBeenCalledWith('error', 'dependency test is down');
        });

        it('should handle errors in the server and log errors', async () => {
            const testPromise = [
                () => Promise.reject('bad to the bone') // eslint-disable-line
            ];

            const handleCheckDependency = makeHandleCheckDependency(testPromise);
            await handleCheckDependency(request, reply);
            expect(reply).toHaveBeenCalled();
            expect(reply).toHaveBeenCalledTimes(1);
            expect(reply).toHaveBeenCalledWith(boom.badImplementation());

            expect(request.log).toHaveBeenCalled();
            expect(request.log).toHaveBeenCalledTimes(1);
            expect(request.log).toHaveBeenCalledWith('fatal', {
                err: 'bad to the bone',
                msg: 'unable to test dependency status'
            });
        });
    });
});
