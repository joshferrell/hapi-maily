import * as services from '../index';

describe('utility index', () => {
    it('should export required functions', () => {
        expect(services).toMatchSnapshot();
    });
});
