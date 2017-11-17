import { oneLine } from 'common-tags';

require('pkginfo')(module, 'version', 'author');

export const createSwaggerOptions = ({ url, scheme }) => ({
    host: url,
    swaggerUI: true,
    info: {
        title: 'Hapi Maily Documentation',
        description: oneLine`
            Mail service that allows people to request a server for emails to be sent
            using a react template library
        `,
        version: module.exports.version,
        contact: module.exports.author
    },
    grouping: 'tags',
    schemes: [scheme]
});

/**
 * create development plugins for serverInfo
 * @param  {object} serverInfo  {url : url that server is running at, scheme: http | https}
 * @return {[objects]}          returns all plugins that will be used in server manifest (dev)
 */
export const createDevPlugins = (serverInfo) => {
    const swaggerOptions = createSwaggerOptions(serverInfo);
    return [
        { plugin: 'inert' },
        { plugin: 'vision' },
        {
            plugin: {
                register: 'hapi-swagger',
                options: swaggerOptions
            }
        }
    ];
};
