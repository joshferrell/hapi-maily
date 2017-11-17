import reqFormatter from './reqFormatter';

const aString = 'This an error';
const anError = new Error('This an  error object');
const errorInObject = { error: new Error('This an  error object') };
const other = { string: 'abc', string2: '123' };
const tags = 'This is tag';

const payload = {
    status: 'OK'
};

describe('good bunyan formatter', () => {
    describe('should return payload with tag request', () => {
        it('when passed in a string', () => {
            const req = { payload };
            const result = reqFormatter(req);
            expect(result).toEqual([{ req: { payload: { status: 'OK' } } }, '[request]']);
        });

        it('when passed in with req object and tag request', () => {
            const req = { payload, tags };
            const result = reqFormatter(req);
            expect(result).toEqual([{ req: { payload: { status: 'OK' } } }, '[request]']);
        });

        it('when passed in  with req object,tag request and data obj ', () => {
            const req = { payload, tags, data: aString };
            const result = reqFormatter(req);
            expect(result).toEqual([
                { req: { payload: { status: 'OK' }, data: 'This an error' } },
                '[request]'
            ]);
        });
    });

    describe('should return obj with an error obj and should delete tags property', () => {
        it('should pass in an error object ', () => {
            const req = { payload, tags, data: anError };
            const result = reqFormatter(req);
            expect(result).toEqual([
                { req: { payload: { status: 'OK' } }, err: new Error('This an  error object') },
                '[request]'
            ]);
        });

        it('should pass in an error inside an object', () => {
            const req = { payload, tags, data: errorInObject };
            const result = reqFormatter(req);
            expect(result).toEqual([
                { req: { payload: { status: 'OK' } }, err: new Error('This an  error object') },
                '[request]'
            ]);
        });

        it('should  pass in with other obj', () => {
            const req = { payload, tags, data: { ...other, anError } };
            const result = reqFormatter(req);
            expect(result).toEqual([
                {
                    req: { payload: { status: 'OK' } },
                    err: new Error('This an  error object'),
                    other: {
                        string: 'abc',
                        string2: '123'
                    }
                },
                '[request]'
            ]);
        });
    });
});
