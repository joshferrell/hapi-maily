import joi from 'joi';
import pkg from '../package.json';
import createInterface from './email';
import { optionsFormat } from './utility';

exports.register = (server, options, next) => {
    const pluginOptions = joi.attempt(
        options,
        optionsFormat,
        'Invalid plugin options supplied to Hapi Maily'
    );

    const emailInterface = createInterface(pluginOptions);
    server.handler('email', emailInterface);

    next();
};

exports.register.attributes = {
    pkg,
    once: true,
    connections: false
};
