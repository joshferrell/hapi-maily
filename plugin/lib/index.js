'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

var _utility = require('./utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = function (server, options, next) {
    var pluginOptions = _joi2.default.attempt(options, _utility.optionsFormat, 'Invalid plugin options supplied to Hapi Maily');

    var emailInterface = (0, _email2.default)(pluginOptions);
    server.handler('email', emailInterface);

    next();
};

exports.register.attributes = {
    pkg: _package2.default,
    once: true,
    connections: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwicmVnaXN0ZXIiLCJzZXJ2ZXIiLCJvcHRpb25zIiwibmV4dCIsInBsdWdpbk9wdGlvbnMiLCJhdHRlbXB0IiwiZW1haWxJbnRlcmZhY2UiLCJoYW5kbGVyIiwiYXR0cmlidXRlcyIsInBrZyIsIm9uY2UiLCJjb25uZWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBQSxRQUFRQyxRQUFSLEdBQW1CLFVBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQkMsSUFBbEIsRUFBMkI7QUFDMUMsUUFBTUMsZ0JBQWdCLGNBQUlDLE9BQUosQ0FDbEJILE9BRGtCLDBCQUdsQiwrQ0FIa0IsQ0FBdEI7O0FBTUEsUUFBTUksaUJBQWlCLHFCQUFnQkYsYUFBaEIsQ0FBdkI7QUFDQUgsV0FBT00sT0FBUCxDQUFlLE9BQWYsRUFBd0JELGNBQXhCOztBQUVBSDtBQUNILENBWEQ7O0FBYUFKLFFBQVFDLFFBQVIsQ0FBaUJRLFVBQWpCLEdBQThCO0FBQzFCQywwQkFEMEI7QUFFMUJDLFVBQU0sSUFGb0I7QUFHMUJDLGlCQUFhO0FBSGEsQ0FBOUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgY3JlYXRlSW50ZXJmYWNlIGZyb20gJy4vZW1haWwnO1xuaW1wb3J0IHsgb3B0aW9uc0Zvcm1hdCB9IGZyb20gJy4vdXRpbGl0eSc7XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSAoc2VydmVyLCBvcHRpb25zLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGx1Z2luT3B0aW9ucyA9IGpvaS5hdHRlbXB0KFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBvcHRpb25zRm9ybWF0LFxuICAgICAgICAnSW52YWxpZCBwbHVnaW4gb3B0aW9ucyBzdXBwbGllZCB0byBIYXBpIE1haWx5J1xuICAgICk7XG5cbiAgICBjb25zdCBlbWFpbEludGVyZmFjZSA9IGNyZWF0ZUludGVyZmFjZShwbHVnaW5PcHRpb25zKTtcbiAgICBzZXJ2ZXIuaGFuZGxlcignZW1haWwnLCBlbWFpbEludGVyZmFjZSk7XG5cbiAgICBuZXh0KCk7XG59O1xuXG5leHBvcnRzLnJlZ2lzdGVyLmF0dHJpYnV0ZXMgPSB7XG4gICAgcGtnLFxuICAgIG9uY2U6IHRydWUsXG4gICAgY29ubmVjdGlvbnM6IGZhbHNlXG59O1xuIl19