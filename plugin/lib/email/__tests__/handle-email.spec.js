'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerStubTransport = require('nodemailer-stub-transport');

var _nodemailerStubTransport2 = _interopRequireDefault(_nodemailerStubTransport);

var _handleEmail = require('../handle-email');

var _handleEmail2 = _interopRequireDefault(_handleEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('handle email requests', function () {
    var subject = 'This is a test';
    var testComponent = function testComponent() {
        return _react2.default.createElement(
            'mj-text',
            null,
            _react2.default.createElement(
                'p',
                null,
                'This is a test'
            )
        );
    };
    var renderHTML = jest.fn(function () {
        return _react2.default.createElement(
            'p',
            null,
            'this is a test'
        );
    });
    var reply = jest.fn();
    var request = {
        payload: {
            email: 'example@gmail.com',
            firstName: 'john',
            lastName: 'doe'
        },
        log: jest.fn()
    };
    var transport = _nodemailer2.default.createTransport((0, _nodemailerStubTransport2.default)());
    var sendMail = jest.fn(function (data) {
        return transport.sendMail(data);
    });

    beforeEach(function () {
        sendMail.mockClear();
        renderHTML.mockClear();
        reply.mockClear();
        request.log.mockClear();
    });

    // TODO: can't confirm that current email stub returns
    // envelope, need to look further into this to figure out
    // the problem, currently, the envelope is not defined, so
    // this test is not accurate

    // it.skip('should render the html, and send an email to the requested user', async () => {
    //     const handleEmail = makeHandleEmail(
    //         renderHTML,
    //         sendMail,
    //         testComponent,
    //         subject
    //     );
    //
    //     await handleEmail(request, reply);
    //
    //     expect(sendMail).toHaveBeenCalled();
    //     expect(sendMail).toHaveBeenCalledTimes(1);
    //     expect(sendMail.mock.calls[0][0]).toMatchSnapshot();
    // });

    it('should log the envelope when email is successful', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var handleEmail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        handleEmail = (0, _handleEmail2.default)(renderHTML, function () {
                            return Promise.resolve('bloop');
                        }, testComponent, subject);
                        _context.next = 3;
                        return handleEmail(request, reply);

                    case 3:

                        expect(request.log).toHaveBeenCalled();
                        expect(request.log).toHaveBeenCalledTimes(1);
                        expect(request.log).toHaveBeenCalledWith('info', {
                            msg: 'Logged email information',
                            data: 'bloop'
                        });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));

    it('should reply success when email is sent', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var handleEmail;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        handleEmail = (0, _handleEmail2.default)(renderHTML, function () {
                            return Promise.resolve('bloop');
                        }, testComponent, subject);
                        _context2.next = 3;
                        return handleEmail(request, reply);

                    case 3:

                        expect(reply).toHaveBeenCalled();
                        expect(reply).toHaveBeenCalledTimes(1);
                        expect(reply).toHaveBeenCalledWith({
                            success: true
                        });

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));

    it('should log an error when something goes wrong', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var handleEmail;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        handleEmail = (0, _handleEmail2.default)(renderHTML, function () {
                            return Promise.reject(new Error('uh oh!'));
                        }, testComponent, subject);
                        _context3.next = 3;
                        return handleEmail(request, reply);

                    case 3:

                        expect(request.log).toHaveBeenCalled();
                        expect(request.log).toHaveBeenCalledTimes(1);
                        expect(request.log).toHaveBeenCalledWith('error', {
                            err: new Error('uh oh!'),
                            msg: 'unable to send simple email'
                        });

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    })));

    it('should reply bad implementation when an error occurrs', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var handleEmail;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        handleEmail = (0, _handleEmail2.default)(renderHTML, function () {
                            return Promise.reject(new Error('uh oh!'));
                        }, testComponent, subject);
                        _context4.next = 3;
                        return handleEmail(request, reply);

                    case 3:

                        expect(reply).toHaveBeenCalled();
                        expect(reply).toHaveBeenCalledTimes(1);
                        expect(reply).toHaveBeenCalledWith(_boom2.default.badImplementation());

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbWFpbC9fX3Rlc3RzX18vaGFuZGxlLWVtYWlsLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJzdWJqZWN0IiwidGVzdENvbXBvbmVudCIsInJlbmRlckhUTUwiLCJqZXN0IiwiZm4iLCJyZXBseSIsInJlcXVlc3QiLCJwYXlsb2FkIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxvZyIsInRyYW5zcG9ydCIsImNyZWF0ZVRyYW5zcG9ydCIsInNlbmRNYWlsIiwiZGF0YSIsImJlZm9yZUVhY2giLCJtb2NrQ2xlYXIiLCJpdCIsImhhbmRsZUVtYWlsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJleHBlY3QiLCJ0b0hhdmVCZWVuQ2FsbGVkIiwidG9IYXZlQmVlbkNhbGxlZFRpbWVzIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJtc2ciLCJzdWNjZXNzIiwicmVqZWN0IiwiRXJyb3IiLCJlcnIiLCJiYWRJbXBsZW1lbnRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBQSxTQUFTLHVCQUFULEVBQWtDLFlBQU07QUFDcEMsUUFBTUMsVUFBVSxnQkFBaEI7QUFDQSxRQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsZUFDbEI7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBRGtCO0FBQUEsS0FBdEI7QUFLQSxRQUFNQyxhQUFhQyxLQUFLQyxFQUFMLENBQVE7QUFBQSxlQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTjtBQUFBLEtBQVIsQ0FBbkI7QUFDQSxRQUFNQyxRQUFRRixLQUFLQyxFQUFMLEVBQWQ7QUFDQSxRQUFNRSxVQUFVO0FBQ1pDLGlCQUFTO0FBQ0xDLG1CQUFPLG1CQURGO0FBRUxDLHVCQUFXLE1BRk47QUFHTEMsc0JBQVU7QUFITCxTQURHO0FBTVpDLGFBQUtSLEtBQUtDLEVBQUw7QUFOTyxL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QUNoQmpCLFVBRGdCLEVBRWhCO0FBQUEsbUNBQU1rQixRQUFRUSxNQUFSLENBQWUsSUFBSUMsS0FBSixDQUFVLFFBQVYsQ0FBZixDQUFOO0FBQUEseUJBRmdCLEVBR2hCNUIsYUFIZ0IsRUFJaEJELE9BSmdCLENBRG9DO0FBQUE7QUFBQSwrQkFRbERtQixZQUFZYixPQUFaLEVBQXFCRCxLQUFyQixDQVJrRDs7QUFBQTs7QUFVeERpQiwrQkFBT2pCLEtBQVAsRUFBY2tCLGdCQUFkO0FBQ0FELCtCQUFPakIsS0FBUCxFQUFjbUIscUJBQWQsQ0FBb0MsQ0FBcEM7QUFDQUYsK0JBQU9qQixLQUFQLEVBQWNvQixvQkFBZCxDQUFtQyxlQUFLTSxpQkFBTCxFQUFuQzs7QUFad0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNUQ7QUFjSCxDQXhIRCIsImZpbGUiOiJoYW5kbGUtZW1haWwuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYm9vbSBmcm9tICdib29tJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHN0dWJUcmFuc3BvcnQgZnJvbSAnbm9kZW1haWxlci1zdHViLXRyYW5zcG9ydCc7XG5pbXBvcnQgbWFrZUhhbmRsZUVtYWlsIGZyb20gJy4uL2hhbmRsZS1lbWFpbCc7XG5cbmRlc2NyaWJlKCdoYW5kbGUgZW1haWwgcmVxdWVzdHMnLCAoKSA9PiB7XG4gICAgY29uc3Qgc3ViamVjdCA9ICdUaGlzIGlzIGEgdGVzdCc7XG4gICAgY29uc3QgdGVzdENvbXBvbmVudCA9ICgpID0+IChcbiAgICAgICAgPG1qLXRleHQ+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIGEgdGVzdDwvcD5cbiAgICAgICAgPC9tai10ZXh0PlxuICAgICk7XG4gICAgY29uc3QgcmVuZGVySFRNTCA9IGplc3QuZm4oKCkgPT4gPHA+dGhpcyBpcyBhIHRlc3Q8L3A+KTtcbiAgICBjb25zdCByZXBseSA9IGplc3QuZm4oKTtcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBlbWFpbDogJ2V4YW1wbGVAZ21haWwuY29tJyxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ2pvaG4nLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdkb2UnXG4gICAgICAgIH0sXG4gICAgICAgIGxvZzogamVzdC5mbigpXG4gICAgfTtcbiAgICBjb25zdCB0cmFuc3BvcnQgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChzdHViVHJhbnNwb3J0KCkpO1xuICAgIGNvbnN0IHNlbmRNYWlsID0gamVzdC5mbihkYXRhID0+IHRyYW5zcG9ydC5zZW5kTWFpbChkYXRhKSk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgc2VuZE1haWwubW9ja0NsZWFyKCk7XG4gICAgICAgIHJlbmRlckhUTUwubW9ja0NsZWFyKCk7XG4gICAgICAgIHJlcGx5Lm1vY2tDbGVhcigpO1xuICAgICAgICByZXF1ZXN0LmxvZy5tb2NrQ2xlYXIoKTtcbiAgICB9KTtcblxuICAgIC8vIFRPRE86IGNhbid0IGNvbmZpcm0gdGhhdCBjdXJyZW50IGVtYWlsIHN0dWIgcmV0dXJuc1xuICAgIC8vIGVudmVsb3BlLCBuZWVkIHRvIGxvb2sgZnVydGhlciBpbnRvIHRoaXMgdG8gZmlndXJlIG91dFxuICAgIC8vIHRoZSBwcm9ibGVtLCBjdXJyZW50bHksIHRoZSBlbnZlbG9wZSBpcyBub3QgZGVmaW5lZCwgc29cbiAgICAvLyB0aGlzIHRlc3QgaXMgbm90IGFjY3VyYXRlXG5cbiAgICAvLyBpdC5za2lwKCdzaG91bGQgcmVuZGVyIHRoZSBodG1sLCBhbmQgc2VuZCBhbiBlbWFpbCB0byB0aGUgcmVxdWVzdGVkIHVzZXInLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhbmRsZUVtYWlsID0gbWFrZUhhbmRsZUVtYWlsKFxuICAgIC8vICAgICAgICAgcmVuZGVySFRNTCxcbiAgICAvLyAgICAgICAgIHNlbmRNYWlsLFxuICAgIC8vICAgICAgICAgdGVzdENvbXBvbmVudCxcbiAgICAvLyAgICAgICAgIHN1YmplY3RcbiAgICAvLyAgICAgKTtcbiAgICAvL1xuICAgIC8vICAgICBhd2FpdCBoYW5kbGVFbWFpbChyZXF1ZXN0LCByZXBseSk7XG4gICAgLy9cbiAgICAvLyAgICAgZXhwZWN0KHNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgLy8gICAgIGV4cGVjdChzZW5kTWFpbCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuICAgIC8vICAgICBleHBlY3Qoc2VuZE1haWwubW9jay5jYWxsc1swXVswXSkudG9NYXRjaFNuYXBzaG90KCk7XG4gICAgLy8gfSk7XG5cbiAgICBpdCgnc2hvdWxkIGxvZyB0aGUgZW52ZWxvcGUgd2hlbiBlbWFpbCBpcyBzdWNjZXNzZnVsJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVFbWFpbCA9IG1ha2VIYW5kbGVFbWFpbChcbiAgICAgICAgICAgIHJlbmRlckhUTUwsXG4gICAgICAgICAgICAoKSA9PiBQcm9taXNlLnJlc29sdmUoJ2Jsb29wJyksXG4gICAgICAgICAgICB0ZXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgc3ViamVjdFxuICAgICAgICApO1xuXG4gICAgICAgIGF3YWl0IGhhbmRsZUVtYWlsKHJlcXVlc3QsIHJlcGx5KTtcblxuICAgICAgICBleHBlY3QocmVxdWVzdC5sb2cpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgZXhwZWN0KHJlcXVlc3QubG9nKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICAgIGV4cGVjdChyZXF1ZXN0LmxvZykudG9IYXZlQmVlbkNhbGxlZFdpdGgoXG4gICAgICAgICAgICAnaW5mbycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbXNnOiAnTG9nZ2VkIGVtYWlsIGluZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgICBkYXRhOiAnYmxvb3AnXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJlcGx5IHN1Y2Nlc3Mgd2hlbiBlbWFpbCBpcyBzZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVFbWFpbCA9IG1ha2VIYW5kbGVFbWFpbChcbiAgICAgICAgICAgIHJlbmRlckhUTUwsXG4gICAgICAgICAgICAoKSA9PiBQcm9taXNlLnJlc29sdmUoJ2Jsb29wJyksXG4gICAgICAgICAgICB0ZXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgc3ViamVjdFxuICAgICAgICApO1xuXG4gICAgICAgIGF3YWl0IGhhbmRsZUVtYWlsKHJlcXVlc3QsIHJlcGx5KTtcblxuICAgICAgICBleHBlY3QocmVwbHkpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgZXhwZWN0KHJlcGx5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICAgIGV4cGVjdChyZXBseSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbG9nIGFuIGVycm9yIHdoZW4gc29tZXRoaW5nIGdvZXMgd3JvbmcnLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUVtYWlsID0gbWFrZUhhbmRsZUVtYWlsKFxuICAgICAgICAgICAgcmVuZGVySFRNTCxcbiAgICAgICAgICAgICgpID0+IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigndWggb2ghJykpLFxuICAgICAgICAgICAgdGVzdENvbXBvbmVudCxcbiAgICAgICAgICAgIHN1YmplY3RcbiAgICAgICAgKTtcblxuICAgICAgICBhd2FpdCBoYW5kbGVFbWFpbChyZXF1ZXN0LCByZXBseSk7XG5cbiAgICAgICAgZXhwZWN0KHJlcXVlc3QubG9nKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChyZXF1ZXN0LmxvZykudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuICAgICAgICBleHBlY3QocmVxdWVzdC5sb2cpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFxuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlcnI6IG5ldyBFcnJvcigndWggb2ghJyksXG4gICAgICAgICAgICAgICAgbXNnOiAndW5hYmxlIHRvIHNlbmQgc2ltcGxlIGVtYWlsJ1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXBseSBiYWQgaW1wbGVtZW50YXRpb24gd2hlbiBhbiBlcnJvciBvY2N1cnJzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVFbWFpbCA9IG1ha2VIYW5kbGVFbWFpbChcbiAgICAgICAgICAgIHJlbmRlckhUTUwsXG4gICAgICAgICAgICAoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3VoIG9oIScpKSxcbiAgICAgICAgICAgIHRlc3RDb21wb25lbnQsXG4gICAgICAgICAgICBzdWJqZWN0XG4gICAgICAgICk7XG5cbiAgICAgICAgYXdhaXQgaGFuZGxlRW1haWwocmVxdWVzdCwgcmVwbHkpO1xuXG4gICAgICAgIGV4cGVjdChyZXBseSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QocmVwbHkpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgICAgZXhwZWN0KHJlcGx5KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChib29tLmJhZEltcGxlbWVudGF0aW9uKCkpO1xuICAgIH0pO1xufSk7XG4iXX0=