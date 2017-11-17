import {
    createSwaggerOptions,
    createDevPlugins
} from './dev-plugins';

describe('development plugins', () => {
    const serverInfo = {
        url: 'localhost:3000',
        scheme: 'http'
    };

    describe('swagger options', () => {
        it('should return a configuration object for hapi swagger', () => {
            const swaggerOptions = createSwaggerOptions(serverInfo);
            expect(swaggerOptions).toMatchSnapshot();
        });
    });

    describe('create development plugins', () => {
        it('should return plugin registrations given server information', () => {
            const devPlugins = createDevPlugins(serverInfo);
            expect(devPlugins).toMatchSnapshot();
        });
    });
});
