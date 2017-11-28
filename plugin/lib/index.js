'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = function (server, options, next) {
    var emailInterface = (0, _email2.default)(options);
    server.handler('email', emailInterface);
    next();
};

exports.register.attributes = {
    pkg: _package2.default,
    once: true,
    connections: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwicmVnaXN0ZXIiLCJzZXJ2ZXIiLCJvcHRpb25zIiwibmV4dCIsImVtYWlsSW50ZXJmYWNlIiwiaGFuZGxlciIsImF0dHJpYnV0ZXMiLCJwa2ciLCJvbmNlIiwiY29ubmVjdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFFBQVFDLFFBQVIsR0FBbUIsVUFBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCQyxJQUFsQixFQUEyQjtBQUMxQyxRQUFNQyxpQkFBaUIscUJBQWdCRixPQUFoQixDQUF2QjtBQUNBRCxXQUFPSSxPQUFQLENBQWUsT0FBZixFQUF3QkQsY0FBeEI7QUFDQUQ7QUFDSCxDQUpEOztBQU1BSixRQUFRQyxRQUFSLENBQWlCTSxVQUFqQixHQUE4QjtBQUMxQkMsMEJBRDBCO0FBRTFCQyxVQUFNLElBRm9CO0FBRzFCQyxpQkFBYTtBQUhhLENBQTlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IGNyZWF0ZUludGVyZmFjZSBmcm9tICcuL2VtYWlsJztcblxuZXhwb3J0cy5yZWdpc3RlciA9IChzZXJ2ZXIsIG9wdGlvbnMsIG5leHQpID0+IHtcbiAgICBjb25zdCBlbWFpbEludGVyZmFjZSA9IGNyZWF0ZUludGVyZmFjZShvcHRpb25zKTtcbiAgICBzZXJ2ZXIuaGFuZGxlcignZW1haWwnLCBlbWFpbEludGVyZmFjZSk7XG4gICAgbmV4dCgpO1xufTtcblxuZXhwb3J0cy5yZWdpc3Rlci5hdHRyaWJ1dGVzID0ge1xuICAgIHBrZyxcbiAgICBvbmNlOiB0cnVlLFxuICAgIGNvbm5lY3Rpb25zOiBmYWxzZVxufTtcbiJdfQ==