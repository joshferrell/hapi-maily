import {
    createDevPlugins,
    createProdPlugins
} from './plugins';
import createManifest from './manifest';

describe('create manifest', () => {
    const serverInfo = {
        url: 'localhost:3000',
        scheme: 'http'
    };

    const logger = () => {};
    const devPlugins = createDevPlugins(serverInfo);
    const prodPlugins = createProdPlugins(logger);

    it('should include prod and dev for local environment', () => {
        const localServer = { ...serverInfo, env: 'local' };
        const manifest = createManifest(serverInfo, logger);
        expect(manifest).toMatchSnapshot();

        const { registrations } = manifest;
        expect(registrations).toEqual([
            ...prodPlugins,
            ...devPlugins
        ]);
    });

    it('should include prod and dev for dev environment', () => {
        const devServer = { ...serverInfo, env: 'development' };
        const manifest = createManifest(serverInfo, logger);
        expect(manifest).toMatchSnapshot();

        const { registrations } = manifest;
        expect(registrations).toEqual([
            ...prodPlugins,
            ...devPlugins
        ]);
    });

    it('should include only prod for prod environment', () => {
        const prodServer = { ...serverInfo, env: 'production' };
        const manifest = createManifest(serverInfo, logger);
        expect(manifest).toMatchSnapshot();

        const { registrations } = manifest;
        expect(registrations).toEqual([
            ...prodPlugins
        ]);
    });
});
