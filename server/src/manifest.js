import { createDevPlugins, createProdPlugins } from './plugins';

const createManifest = (serverInfo, logger) => {
    const developmentPlugins = ['development', 'local'].includes(serverInfo.env)
        ? createDevPlugins(serverInfo)
        : [];
    const productionPlugins = createProdPlugins(logger);

    return {
        connections: [
            {
                port: 3000,
                labels: ['server'],
                router: {
                    stripTrailingSlash: true
                }
            }
        ],
        registrations: [
            ...productionPlugins,
            ...developmentPlugins
        ]
    };
};

export default createManifest;
