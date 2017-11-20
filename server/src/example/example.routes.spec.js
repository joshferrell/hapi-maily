import createExampleRoutes from './example.routes';

describe('create example routes', () => {
    it('should create simple routes for example', () => {
        const emailInterface = {
            makeHandleEmail: () => () => {}
        };
        expect(createExampleRoutes(emailInterface)).toMatchSnapshot();
    });
});
