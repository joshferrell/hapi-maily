import {
    createGoodOptions,
    createProdPlugins
} from '../prod-plugins';

describe('production plugins', () => {
    const logger = () => {};

    describe('create good configuration', () => {
        it('should return a configuration object', () => {
            const goodOptions = createGoodOptions(logger);
            expect(goodOptions).toMatchSnapshot();
        });
    });

    describe('create production plugins', () => {
        it('should return a configuration object', () => {
            const prodPlugins = createProdPlugins(logger);
            expect(prodPlugins).toMatchSnapshot();
        });
    });
});
