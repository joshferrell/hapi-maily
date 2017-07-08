import bunyan from 'bunyan';

require('pkginfo')(module, 'version', 'author');

export const log = bunyan.createLogger({
    name: process.env.SERVER_NAME,
    serializers: {
        err: bunyan.stdSerializers.err
    },
    level: 'trace'
});

export const good = {
    register: require('good'),
    options: {
        reporters: {
            bunyan: [{
                module: 'good-bunyan',
                args: [
                    { ops: '*', request: '*', log: '*', response: '*', error: '*' },
                    {
                        logger: log,
                        levels: {
                            ops: 'debug',
                            request: 'info',
                            response: 'info',
                            log: 'info',
                            error: 'error'
                        }
                    }
                ]
            }]
        }
    }
};

export const createSwaggerPlugin = isDevEnvironment => ({
    register: require('hapi-swagger'),
    options: {
        swaggerUI: isDevEnvironment,
        info: {
            title: 'Email Service Documentation',
            description: 'This application is used to generate email templates for sending and send the emails to requested users.',
            version: module.exports.version,
            contact: {
                ...module.exports.author
            },
            license: {
                name: 'MIT',
                url: 'https://github.com/joshferrell/hapi-maily/blob/master/LICENSE'
            }
        },
        grouping: 'tags',
        schemes: isDevEnvironment ? ['http'] : ['https'],
        host: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
    }
});
