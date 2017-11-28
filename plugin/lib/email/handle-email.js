'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var makeHandleEmail = function makeHandleEmail(renderHTML, sendEmail, Component, subject) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, reply) {
            var _request$payload, email, props, html, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _request$payload = request.payload, email = _request$payload.email, props = _objectWithoutProperties(_request$payload, ['email']);
                            _context.prev = 1;
                            html = renderHTML(_react2.default.createElement(Component, props));

                            console.log('rendered html');
                            _context.next = 6;
                            return sendEmail({
                                to: email,
                                subject: subject,
                                html: html
                            });

                        case 6:
                            data = _context.sent;

                            console.log(data);

                            request.log('info', {
                                msg: 'Logged email information',
                                data: data
                            });

                            return _context.abrupt('return', reply({ success: true }));

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](1);

                            request.log('error', { err: _context.t0, msg: 'unable to send simple email' });
                            return _context.abrupt('return', reply(_boom2.default.badImplementation()));

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 12]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

exports.default = makeHandleEmail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9oYW5kbGUtZW1haWwuanMiXSwibmFtZXMiOlsibWFrZUhhbmRsZUVtYWlsIiwicmVuZGVySFRNTCIsInNlbmRFbWFpbCIsIkNvbXBvbmVudCIsInN1YmplY3QiLCJyZXF1ZXN0IiwicmVwbHkiLCJwYXlsb2FkIiwiZW1haWwiLCJwcm9wcyIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwidG8iLCJkYXRhIiwibXNnIiwic3VjY2VzcyIsImVyciIsImJhZEltcGxlbWVudGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFELEVBQWFDLFNBQWIsRUFBd0JDLFNBQXhCLEVBQW1DQyxPQUFuQztBQUFBO0FBQUEsMkVBQ3BCLGlCQUFPQyxPQUFQLEVBQWdCQyxLQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQ2dDRCxRQUFRRSxPQUR4QyxFQUNZQyxLQURaLG9CQUNZQSxLQURaLEVBQ3NCQyxLQUR0QjtBQUFBO0FBSWNDLGdDQUpkLEdBSXFCVCxXQUFXLDhCQUFDLFNBQUQsRUFBZVEsS0FBZixDQUFYLENBSnJCOztBQUtRRSxvQ0FBUUMsR0FBUixDQUFZLGVBQVo7QUFMUjtBQUFBLG1DQU0yQlYsVUFBVTtBQUN6Qlcsb0NBQUlMLEtBRHFCO0FBRXpCSixnREFGeUI7QUFHekJNO0FBSHlCLDZCQUFWLENBTjNCOztBQUFBO0FBTWNJLGdDQU5kOztBQVdRSCxvQ0FBUUMsR0FBUixDQUFZRSxJQUFaOztBQUVBVCxvQ0FBUU8sR0FBUixDQUFZLE1BQVosRUFBb0I7QUFDaEJHLHFDQUFLLDBCQURXO0FBRWhCRDtBQUZnQiw2QkFBcEI7O0FBYlIsNkRBa0JlUixNQUFNLEVBQUVVLFNBQVMsSUFBWCxFQUFOLENBbEJmOztBQUFBO0FBQUE7QUFBQTs7QUFvQlFYLG9DQUFRTyxHQUFSLENBQVksT0FBWixFQUFxQixFQUFFSyxnQkFBRixFQUFPRixLQUFLLDZCQUFaLEVBQXJCO0FBcEJSLDZEQXFCZVQsTUFBTSxlQUFLWSxpQkFBTCxFQUFOLENBckJmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7O2tCQTBCZWxCLGUiLCJmaWxlIjoiaGFuZGxlLWVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBib29tIGZyb20gJ2Jvb20nO1xuXG5jb25zdCBtYWtlSGFuZGxlRW1haWwgPSAocmVuZGVySFRNTCwgc2VuZEVtYWlsLCBDb21wb25lbnQsIHN1YmplY3QpID0+XG4gICAgYXN5bmMgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIC4uLnByb3BzIH0gPSByZXF1ZXN0LnBheWxvYWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSByZW5kZXJIVE1MKDxDb21wb25lbnQgey4uLnByb3BzfSAvPik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyZWQgaHRtbCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbmRFbWFpbCh7XG4gICAgICAgICAgICAgICAgdG86IGVtYWlsLFxuICAgICAgICAgICAgICAgIHN1YmplY3QsXG4gICAgICAgICAgICAgICAgaHRtbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgICAgcmVxdWVzdC5sb2coJ2luZm8nLCB7XG4gICAgICAgICAgICAgICAgbXNnOiAnTG9nZ2VkIGVtYWlsIGluZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcGx5KHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmxvZygnZXJyb3InLCB7IGVyciwgbXNnOiAndW5hYmxlIHRvIHNlbmQgc2ltcGxlIGVtYWlsJyB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXBseShib29tLmJhZEltcGxlbWVudGF0aW9uKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUhhbmRsZUVtYWlsO1xuIl19