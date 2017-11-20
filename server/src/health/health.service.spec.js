import moment from 'moment';
import { makeGetTime, makeCheckStatus } from './health.service';

describe('health services', () => {
    let getDate;
    const startTime = parseInt(moment('2017-01-01').format('x'), 10);
    const endTime = parseInt(moment('2017-01-01').format('x'), 10);
    const duration = startTime - endTime;

    beforeEach(() => {
        getDate = jest.fn()
            .mockImplementationOnce(() => ({
                valueOf: () => startTime
            }))
            .mockImplementationOnce(() => ({
                valueOf: () => endTime
            }));
    });

    describe('get time', () => {
        it('should return the current time if not given a start time', () => {
            const getTime = makeGetTime(getDate);
            expect(getTime()).toEqual(startTime);
        });

        it('should return the duration between the end time and start time', () => {
            const getTime = makeGetTime(getDate);
            const res = getTime(startTime);
            expect(res).toEqual(duration);
            expect(res).not.toEqual(startTime);
            expect(res).not.toEqual(endTime);
        });
    });

    describe('check status', () => {
        const successPromise = () => Promise.resolve();
        const errorPromise = () => Promise.reject(new Error('bad to the bone'));
        const log = {
            error: jest.fn()
        };

        beforeEach(() => {
            log.error.mockClear();
        });

        it('should return an up status if the function resolves', async () => {
            const promiseFunction = jest.fn(successPromise);
            const checkStatus = makeCheckStatus(
                promiseFunction,
                'check-status',
                getDate,
                log
            );

            const res = await checkStatus();
            expect(promiseFunction).toHaveBeenCalled();
            expect(promiseFunction).toHaveBeenCalledTimes(1);
            expect(res).toEqual({
                name: 'check-status',
                up: true,
                duration,
                msg: `check-status is up. time to ping ${duration}ms`
            });
        });

        it('should return a down status if the function rejects', async () => {
            const promiseFunction = jest.fn(errorPromise);
            const checkStatus = makeCheckStatus(
                promiseFunction,
                'check-status',
                getDate,
                log
            );

            const res = await checkStatus();
            expect(promiseFunction).toHaveBeenCalled();
            expect(promiseFunction).toHaveBeenCalledTimes(1);
            expect(res).toEqual({
                name: 'check-status',
                up: false,
                duration,
                msg: `check-status is down. time to error ${duration}ms`
            });
        });

        it('should log an error if the function rejects', async () => {
            const promiseFunction = jest.fn(errorPromise);
            const checkStatus = makeCheckStatus(
                promiseFunction,
                'check-status',
                getDate,
                log
            );

            await checkStatus();

            expect(log.error).toHaveBeenCalled();
            expect(log.error).toHaveBeenCalledTimes(1);
            expect(log.error).toHaveBeenCalledWith(
                { err: new Error('bad to the bone') },
                'unable to connect to check-status'
            );
        });
    });
});
