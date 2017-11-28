'use strict';

// import pkg from '../package.json';
// import createInterface from './email';

exports.register = function (server, options, next) {
    var handler = function handler(request, reply) {
        return reply('true');
    };
    server.decorate('handler', 'email', handler);
};

exports.register.attributes = {
    pkg: require('../package.json')
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

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwicmVnaXN0ZXIiLCJzZXJ2ZXIiLCJvcHRpb25zIiwibmV4dCIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVwbHkiLCJkZWNvcmF0ZSIsImF0dHJpYnV0ZXMiLCJwa2ciLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUFBLFFBQVFDLFFBQVIsR0FBbUIsVUFBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCQyxJQUFsQixFQUEyQjtBQUMxQyxRQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsZUFBb0JBLE1BQU0sTUFBTixDQUFwQjtBQUFBLEtBQWhCO0FBQ0FMLFdBQU9NLFFBQVAsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0NILE9BQXBDO0FBQ0gsQ0FIRDs7QUFLQUwsUUFBUUMsUUFBUixDQUFpQlEsVUFBakIsR0FBOEI7QUFDMUJDLFNBQUtDLFFBQVEsaUJBQVI7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZDhCLENBQTlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuLy8gaW1wb3J0IGNyZWF0ZUludGVyZmFjZSBmcm9tICcuL2VtYWlsJztcblxuZXhwb3J0cy5yZWdpc3RlciA9IChzZXJ2ZXIsIG9wdGlvbnMsIG5leHQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKHJlcXVlc3QsIHJlcGx5KSA9PiByZXBseSgndHJ1ZScpO1xuICAgIHNlcnZlci5kZWNvcmF0ZSgnaGFuZGxlcicsICdlbWFpbCcsIGhhbmRsZXIpO1xufTtcblxuZXhwb3J0cy5yZWdpc3Rlci5hdHRyaWJ1dGVzID0ge1xuICAgIHBrZzogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcbn1cbi8vIFxuLy8gY29uc3QgcGx1Z2luID0ge1xuLy8gICAgIHBrZyxcbi8vICAgICBvbmNlOiB0cnVlLFxuLy8gICAgIHJlZ2lzdGVyKHNlcnZlciwgb3B0aW9ucywgbmV4dCkge1xuLy8gICAgICAgICAvLyBjb25zdCBlbWFpbEludGVyZmFjZSA9IGNyZWF0ZUludGVyZmFjZShvcHRpb25zKTtcbi8vICAgICAgICAgc2VydmVyLmRlY29yYXRlKCdoYW5kbGVyJywgJ2VtYWlsJywgKHJlcXVlc3QsIHJlcGx5KSA9PiByZXBseSgndHJ1ZScpKTtcbi8vICAgICAgICAgbmV4dCgpO1xuLy8gICAgIH1cbi8vIH07XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgcGx1Z2luO1xuIl19