import pkg from '../package.json';
import createInterface from './email';

exports.register = (server, options, next) => {
    const emailInterface = createInterface(options);
    server.handler('email', emailInterface);
    next();
};

exports.register.attributes = {
    pkg,
    once: true,
    connections: false
};
