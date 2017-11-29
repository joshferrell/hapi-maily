'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utility = require('../utility');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var makeSendEmail = function makeSendEmail(emailSettings) {
    return function (_ref) {
        var to = _ref.to,
            emailInfo = _objectWithoutProperties(_ref, ['to']);

        var env = emailSettings.env,
            transport = emailSettings.transport,
            from = emailSettings.fromAddress;


        var toAddress = to;
        var currentDomain = (0, _utility.getDomain)(to);
        var fromDomain = (0, _utility.getDomain)(from);

        if (env !== 'production' && fromDomain !== currentDomain) {
            toAddress = 'noreply@' + fromDomain;
        }

        return transport.sendMail(_extends({}, emailInfo, { to: toAddress, from: from }));
    };
};

exports.default = makeSendEmail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9zZW5kLWVtYWlsLmpzIl0sIm5hbWVzIjpbIm1ha2VTZW5kRW1haWwiLCJ0byIsImVtYWlsSW5mbyIsImVudiIsImVtYWlsU2V0dGluZ3MiLCJ0cmFuc3BvcnQiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJjdXJyZW50RG9tYWluIiwiZnJvbURvbWFpbiIsInNlbmRNYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFdBQWlCLGdCQUEwQjtBQUFBLFlBQXZCQyxFQUF1QixRQUF2QkEsRUFBdUI7QUFBQSxZQUFoQkMsU0FBZ0I7O0FBQUEsWUFDckRDLEdBRHFELEdBQ2ZDLGFBRGUsQ0FDckRELEdBRHFEO0FBQUEsWUFDaERFLFNBRGdELEdBQ2ZELGFBRGUsQ0FDaERDLFNBRGdEO0FBQUEsWUFDeEJDLElBRHdCLEdBQ2ZGLGFBRGUsQ0FDckNHLFdBRHFDOzs7QUFHN0QsWUFBSUMsWUFBWVAsRUFBaEI7QUFDQSxZQUFNUSxnQkFBZ0Isd0JBQVVSLEVBQVYsQ0FBdEI7QUFDQSxZQUFNUyxhQUFhLHdCQUFVSixJQUFWLENBQW5COztBQUVBLFlBQUlILFFBQVEsWUFBUixJQUF3Qk8sZUFBZUQsYUFBM0MsRUFBMEQ7QUFDdERELHFDQUF1QkUsVUFBdkI7QUFDSDs7QUFFRCxlQUFPTCxVQUFVTSxRQUFWLGNBQXdCVCxTQUF4QixJQUFtQ0QsSUFBSU8sU0FBdkMsRUFBa0RGLFVBQWxELElBQVA7QUFDSCxLQVpxQjtBQUFBLENBQXRCOztrQkFlZU4sYSIsImZpbGUiOiJzZW5kLWVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RG9tYWluIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5cbmNvbnN0IG1ha2VTZW5kRW1haWwgPSBlbWFpbFNldHRpbmdzID0+ICh7IHRvLCAuLi5lbWFpbEluZm8gfSkgPT4ge1xuICAgIGNvbnN0IHsgZW52LCB0cmFuc3BvcnQsIGZyb21BZGRyZXNzOiBmcm9tIH0gPSBlbWFpbFNldHRpbmdzO1xuXG4gICAgbGV0IHRvQWRkcmVzcyA9IHRvO1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSBnZXREb21haW4odG8pO1xuICAgIGNvbnN0IGZyb21Eb21haW4gPSBnZXREb21haW4oZnJvbSk7XG5cbiAgICBpZiAoZW52ICE9PSAncHJvZHVjdGlvbicgJiYgZnJvbURvbWFpbiAhPT0gY3VycmVudERvbWFpbikge1xuICAgICAgICB0b0FkZHJlc3MgPSBgbm9yZXBseUAke2Zyb21Eb21haW59YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNwb3J0LnNlbmRNYWlsKHsgLi4uZW1haWxJbmZvLCB0bzogdG9BZGRyZXNzLCBmcm9tIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlU2VuZEVtYWlsO1xuIl19