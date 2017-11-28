// import pkg from '../package.json';
// import createInterface from './email';

exports.register = (server, options, next) => {
    const handler = (request, reply) => reply('true');
    server.decorate('handler', 'email', handler);
};

exports.register.attributes = {
    pkg: require('../package.json')
}
// 
// const plugin = {
//     pkg,
//     once: true,
//     register(server, options, next) {
//         // const emailInterface = createInterface(options);
//         server.decorate('handler', 'email', (request, reply) => reply('true'));
//         next();
//     }
// };
//
// export default plugin;
