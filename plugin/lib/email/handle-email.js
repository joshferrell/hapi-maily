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
                            _context.next = 5;
                            return sendEmail({
                                to: email,
                                subject: subject,
                                html: html
                            });

                        case 5:
                            data = _context.sent;


                            request.log('info', {
                                msg: 'Logged email information',
                                data: data
                            });

                            return _context.abrupt('return', reply({ success: true }));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](1);

                            request.log('error', { err: _context.t0, msg: 'unable to send simple email' });
                            return _context.abrupt('return', reply(_boom2.default.badImplementation()));

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[1, 10]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

exports.default = makeHandleEmail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9oYW5kbGUtZW1haWwuanMiXSwibmFtZXMiOlsibWFrZUhhbmRsZUVtYWlsIiwicmVuZGVySFRNTCIsInNlbmRFbWFpbCIsIkNvbXBvbmVudCIsInN1YmplY3QiLCJyZXF1ZXN0IiwicmVwbHkiLCJwYXlsb2FkIiwiZW1haWwiLCJwcm9wcyIsImh0bWwiLCJ0byIsImRhdGEiLCJsb2ciLCJtc2ciLCJzdWNjZXNzIiwiZXJyIiwiYmFkSW1wbGVtZW50YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFVBQUQsRUFBYUMsU0FBYixFQUF3QkMsU0FBeEIsRUFBbUNDLE9BQW5DO0FBQUE7QUFBQSwyRUFDcEIsaUJBQU9DLE9BQVAsRUFBZ0JDLEtBQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FDZ0NELFFBQVFFLE9BRHhDLEVBQ1lDLEtBRFosb0JBQ1lBLEtBRFosRUFDc0JDLEtBRHRCO0FBQUE7QUFJY0MsZ0NBSmQsR0FJcUJULFdBQVcsOEJBQUMsU0FBRCxFQUFlUSxLQUFmLENBQVgsQ0FKckI7QUFBQTtBQUFBLG1DQUsyQlAsVUFBVTtBQUN6QlMsb0NBQUlILEtBRHFCO0FBRXpCSixnREFGeUI7QUFHekJNO0FBSHlCLDZCQUFWLENBTDNCOztBQUFBO0FBS2NFLGdDQUxkOzs7QUFXUVAsb0NBQVFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CO0FBQ2hCQyxxQ0FBSywwQkFEVztBQUVoQkY7QUFGZ0IsNkJBQXBCOztBQVhSLDZEQWdCZU4sTUFBTSxFQUFFUyxTQUFTLElBQVgsRUFBTixDQWhCZjs7QUFBQTtBQUFBO0FBQUE7O0FBa0JRVixvQ0FBUVEsR0FBUixDQUFZLE9BQVosRUFBcUIsRUFBRUcsZ0JBQUYsRUFBT0YsS0FBSyw2QkFBWixFQUFyQjtBQWxCUiw2REFtQmVSLE1BQU0sZUFBS1csaUJBQUwsRUFBTixDQW5CZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCOztrQkF3QmVqQixlIiwiZmlsZSI6ImhhbmRsZS1lbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYm9vbSBmcm9tICdib29tJztcblxuY29uc3QgbWFrZUhhbmRsZUVtYWlsID0gKHJlbmRlckhUTUwsIHNlbmRFbWFpbCwgQ29tcG9uZW50LCBzdWJqZWN0KSA9PlxuICAgIGFzeW5jIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCAuLi5wcm9wcyB9ID0gcmVxdWVzdC5wYXlsb2FkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gcmVuZGVySFRNTCg8Q29tcG9uZW50IHsuLi5wcm9wc30gLz4pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbmRFbWFpbCh7XG4gICAgICAgICAgICAgICAgdG86IGVtYWlsLFxuICAgICAgICAgICAgICAgIHN1YmplY3QsXG4gICAgICAgICAgICAgICAgaHRtbFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3QubG9nKCdpbmZvJywge1xuICAgICAgICAgICAgICAgIG1zZzogJ0xvZ2dlZCBlbWFpbCBpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXBseSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVxdWVzdC5sb2coJ2Vycm9yJywgeyBlcnIsIG1zZzogJ3VuYWJsZSB0byBzZW5kIHNpbXBsZSBlbWFpbCcgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHkoYm9vbS5iYWRJbXBsZW1lbnRhdGlvbigpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VIYW5kbGVFbWFpbDtcbiJdfQ==