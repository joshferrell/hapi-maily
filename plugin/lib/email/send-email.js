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
            from = emailSettings.from;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9zZW5kLWVtYWlsLmpzIl0sIm5hbWVzIjpbIm1ha2VTZW5kRW1haWwiLCJ0byIsImVtYWlsSW5mbyIsImVudiIsImVtYWlsU2V0dGluZ3MiLCJ0cmFuc3BvcnQiLCJmcm9tIiwidG9BZGRyZXNzIiwiY3VycmVudERvbWFpbiIsImZyb21Eb21haW4iLCJzZW5kTWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxXQUFpQixnQkFBMEI7QUFBQSxZQUF2QkMsRUFBdUIsUUFBdkJBLEVBQXVCO0FBQUEsWUFBaEJDLFNBQWdCOztBQUFBLFlBQ3JEQyxHQURxRCxHQUM1QkMsYUFENEIsQ0FDckRELEdBRHFEO0FBQUEsWUFDaERFLFNBRGdELEdBQzVCRCxhQUQ0QixDQUNoREMsU0FEZ0Q7QUFBQSxZQUNyQ0MsSUFEcUMsR0FDNUJGLGFBRDRCLENBQ3JDRSxJQURxQzs7O0FBRzdELFlBQUlDLFlBQVlOLEVBQWhCO0FBQ0EsWUFBTU8sZ0JBQWdCLHdCQUFVUCxFQUFWLENBQXRCO0FBQ0EsWUFBTVEsYUFBYSx3QkFBVUgsSUFBVixDQUFuQjs7QUFFQSxZQUFJSCxRQUFRLFlBQVIsSUFBd0JNLGVBQWVELGFBQTNDLEVBQTBEO0FBQ3RERCxxQ0FBdUJFLFVBQXZCO0FBQ0g7O0FBRUQsZUFBT0osVUFBVUssUUFBVixjQUF3QlIsU0FBeEIsSUFBbUNELElBQUlNLFNBQXZDLEVBQWtERCxVQUFsRCxJQUFQO0FBQ0gsS0FacUI7QUFBQSxDQUF0Qjs7a0JBZWUsa0JBQU1OLGFBQU4sQyIsImZpbGUiOiJzZW5kLWVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycnkgfSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgeyBnZXREb21haW4gfSBmcm9tICcuLi91dGlsaXR5JztcblxuY29uc3QgbWFrZVNlbmRFbWFpbCA9IGVtYWlsU2V0dGluZ3MgPT4gKHsgdG8sIC4uLmVtYWlsSW5mbyB9KSA9PiB7XG4gICAgY29uc3QgeyBlbnYsIHRyYW5zcG9ydCwgZnJvbSB9ID0gZW1haWxTZXR0aW5ncztcblxuICAgIGxldCB0b0FkZHJlc3MgPSB0bztcbiAgICBjb25zdCBjdXJyZW50RG9tYWluID0gZ2V0RG9tYWluKHRvKTtcbiAgICBjb25zdCBmcm9tRG9tYWluID0gZ2V0RG9tYWluKGZyb20pO1xuXG4gICAgaWYgKGVudiAhPT0gJ3Byb2R1Y3Rpb24nICYmIGZyb21Eb21haW4gIT09IGN1cnJlbnREb21haW4pIHtcbiAgICAgICAgdG9BZGRyZXNzID0gYG5vcmVwbHlAJHtmcm9tRG9tYWlufWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zcG9ydC5zZW5kTWFpbCh7IC4uLmVtYWlsSW5mbywgdG86IHRvQWRkcmVzcywgZnJvbSB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY3VycnkobWFrZVNlbmRFbWFpbCk7XG4iXX0=