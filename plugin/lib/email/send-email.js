'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ramda = require('ramda');

var _utility = require('../utility');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var makeSendEmail = function makeSendEmail(emailSettings) {
    return function (_ref) {
        var to = _ref.to,
            emailInfo = _objectWithoutProperties(_ref, ['to']);

        var env = emailSettings.env,
            transport = emailSettings.transport,
            from = emailSettings.fromAddress;

        console.log(env, transport, from);

        var toAddress = to;
        var currentDomain = (0, _utility.getDomain)(to);
        var fromDomain = (0, _utility.getDomain)(from);

        if (env !== 'production' && fromDomain !== currentDomain) {
            toAddress = 'noreply@' + fromDomain;
        }

        return transport.sendMail(_extends({}, emailInfo, { to: toAddress, from: from }));
    };
};

exports.default = (0, _ramda.curry)(makeSendEmail);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9zZW5kLWVtYWlsLmpzIl0sIm5hbWVzIjpbIm1ha2VTZW5kRW1haWwiLCJ0byIsImVtYWlsSW5mbyIsImVudiIsImVtYWlsU2V0dGluZ3MiLCJ0cmFuc3BvcnQiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwidG9BZGRyZXNzIiwiY3VycmVudERvbWFpbiIsImZyb21Eb21haW4iLCJzZW5kTWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxXQUFpQixnQkFBMEI7QUFBQSxZQUF2QkMsRUFBdUIsUUFBdkJBLEVBQXVCO0FBQUEsWUFBaEJDLFNBQWdCOztBQUFBLFlBQ3JEQyxHQURxRCxHQUNmQyxhQURlLENBQ3JERCxHQURxRDtBQUFBLFlBQ2hERSxTQURnRCxHQUNmRCxhQURlLENBQ2hEQyxTQURnRDtBQUFBLFlBQ3hCQyxJQUR3QixHQUNmRixhQURlLENBQ3JDRyxXQURxQzs7QUFFN0RDLGdCQUFRQyxHQUFSLENBQVlOLEdBQVosRUFBaUJFLFNBQWpCLEVBQTRCQyxJQUE1Qjs7QUFFQSxZQUFJSSxZQUFZVCxFQUFoQjtBQUNBLFlBQU1VLGdCQUFnQix3QkFBVVYsRUFBVixDQUF0QjtBQUNBLFlBQU1XLGFBQWEsd0JBQVVOLElBQVYsQ0FBbkI7O0FBRUEsWUFBSUgsUUFBUSxZQUFSLElBQXdCUyxlQUFlRCxhQUEzQyxFQUEwRDtBQUN0REQscUNBQXVCRSxVQUF2QjtBQUNIOztBQUVELGVBQU9QLFVBQVVRLFFBQVYsY0FBd0JYLFNBQXhCLElBQW1DRCxJQUFJUyxTQUF2QyxFQUFrREosVUFBbEQsSUFBUDtBQUNILEtBYnFCO0FBQUEsQ0FBdEI7O2tCQWdCZSxrQkFBTU4sYUFBTixDIiwiZmlsZSI6InNlbmQtZW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyeSB9IGZyb20gJ3JhbWRhJztcbmltcG9ydCB7IGdldERvbWFpbiB9IGZyb20gJy4uL3V0aWxpdHknO1xuXG5jb25zdCBtYWtlU2VuZEVtYWlsID0gZW1haWxTZXR0aW5ncyA9PiAoeyB0bywgLi4uZW1haWxJbmZvIH0pID0+IHtcbiAgICBjb25zdCB7IGVudiwgdHJhbnNwb3J0LCBmcm9tQWRkcmVzczogZnJvbSB9ID0gZW1haWxTZXR0aW5ncztcbiAgICBjb25zb2xlLmxvZyhlbnYsIHRyYW5zcG9ydCwgZnJvbSk7XG5cbiAgICBsZXQgdG9BZGRyZXNzID0gdG87XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IGdldERvbWFpbih0byk7XG4gICAgY29uc3QgZnJvbURvbWFpbiA9IGdldERvbWFpbihmcm9tKTtcblxuICAgIGlmIChlbnYgIT09ICdwcm9kdWN0aW9uJyAmJiBmcm9tRG9tYWluICE9PSBjdXJyZW50RG9tYWluKSB7XG4gICAgICAgIHRvQWRkcmVzcyA9IGBub3JlcGx5QCR7ZnJvbURvbWFpbn1gO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc3BvcnQuc2VuZE1haWwoeyAuLi5lbWFpbEluZm8sIHRvOiB0b0FkZHJlc3MsIGZyb20gfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KG1ha2VTZW5kRW1haWwpO1xuIl19