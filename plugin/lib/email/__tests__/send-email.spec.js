'use strict';

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerStubTransport = require('nodemailer-stub-transport');

var _nodemailerStubTransport2 = _interopRequireDefault(_nodemailerStubTransport);

var _sendEmail = require('../send-email');

var _sendEmail2 = _interopRequireDefault(_sendEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('sending an email', function () {
    var fakeTransport = void 0;
    var successTransport = void 0;
    var errorTransport = void 0;
    var logger = {
        warn: jest.fn()
    };
    var emailInfo = {
        to: 'noreply@gmail.com',
        text: 'simple text',
        subject: 'Hi I\'m Paul!'
    };
    var baseSendEmail = (0, _sendEmail2.default)('production', logger);

    beforeEach(function () {
        fakeTransport = {
            sendMail: jest.fn()
        };
        successTransport = (0, _nodemailerStubTransport2.default)();
        errorTransport = (0, _nodemailerStubTransport2.default)({
            error: 'unable to send email'
        });
        logger.warn.mockClear();
    });

    it('should use the given email settings to send the email', function () {
        var sendEmail = baseSendEmail(fakeTransport, 'example@gmail.com');
        sendEmail(emailInfo);

        expect(fakeTransport.sendMail).toHaveBeenCalled();
        expect(fakeTransport.sendMail).toHaveBeenCalledTimes(1);
        expect(fakeTransport.sendMail).toHaveBeenCalledWith({
            to: 'noreply@gmail.com',
            from: 'example@gmail.com',
            text: 'simple text',
            subject: 'Hi I\'m Paul!'
        });
    });

    it('should return info if the mail successfully sent', function () {
        var transport = _nodemailer2.default.createTransport(successTransport);
        var sendEmail = baseSendEmail(transport, 'example@gmail.com');
        return expect(sendEmail(emailInfo)).resolves.toMatchObject({
            envelope: {
                from: 'example@gmail.com',
                to: ['noreply@gmail.com']
            },
            messageId: expect.anything(),
            response: expect.anything()
        });
    });

    it('should return an error if the mail could not send', function () {
        var transport = _nodemailer2.default.createTransport(errorTransport);
        var sendEmail = baseSendEmail(transport, 'example@gmail.com');
        return expect(sendEmail(emailInfo)).rejects.toEqual(new Error('unable to send email'));
    });

    it('should set the send email to no reply if not production', function () {
        var sendEmail = (0, _sendEmail2.default)('local', logger, fakeTransport, 'fake@widget-factory.com');
        sendEmail(emailInfo);

        expect(fakeTransport.sendMail).toHaveBeenCalled();
        expect(fakeTransport.sendMail).toHaveBeenCalledTimes(1);
        expect(fakeTransport.sendMail).toHaveBeenCalledWith({
            to: 'noreply@widget-factory.com',
            from: 'fake@widget-factory.com',
            text: 'simple text',
            subject: 'Hi I\'m Paul!'
        });
    });

    it('should log a warning if an outbound email is attempted in dev', function () {
        var sendEmail = (0, _sendEmail2.default)('local', logger, fakeTransport, 'fake@widget-factory.com');
        sendEmail(emailInfo);

        expect(logger.warn).toHaveBeenCalled();
        expect(logger.warn).toHaveBeenCalledTimes(1);
        expect(logger.warn).toHaveBeenCalledWith({
            emailData: {
                attemptedAddress: 'noreply@gmail.com',
                sentAddress: 'noreply@widget-factory.com',
                text: 'simple text',
                subject: 'Hi I\'m Paul!'
            },
            msg: 'attempt to send an email to an external domain when in dev mode'
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbWFpbC9fX3Rlc3RzX18vc2VuZC1lbWFpbC5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiZmFrZVRyYW5zcG9ydCIsInN1Y2Nlc3NUcmFuc3BvcnQiLCJlcnJvclRyYW5zcG9ydCIsImxvZ2dlciIsIndhcm4iLCJqZXN0IiwiZm4iLCJlbWFpbEluZm8iLCJ0byIsInRleHQiLCJzdWJqZWN0IiwiYmFzZVNlbmRFbWFpbCIsImJlZm9yZUVhY2giLCJzZW5kTWFpbCIsImVycm9yIiwibW9ja0NsZWFyIiwiaXQiLCJzZW5kRW1haWwiLCJleHBlY3QiLCJ0b0hhdmVCZWVuQ2FsbGVkIiwidG9IYXZlQmVlbkNhbGxlZFRpbWVzIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJmcm9tIiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwicmVzb2x2ZXMiLCJ0b01hdGNoT2JqZWN0IiwiZW52ZWxvcGUiLCJtZXNzYWdlSWQiLCJhbnl0aGluZyIsInJlc3BvbnNlIiwicmVqZWN0cyIsInRvRXF1YWwiLCJFcnJvciIsImVtYWlsRGF0YSIsImF0dGVtcHRlZEFkZHJlc3MiLCJzZW50QWRkcmVzcyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLGtCQUFULEVBQTZCLFlBQU07QUFDL0IsUUFBSUMsc0JBQUo7QUFDQSxRQUFJQyx5QkFBSjtBQUNBLFFBQUlDLHVCQUFKO0FBQ0EsUUFBTUMsU0FBUztBQUNYQyxjQUFNQyxLQUFLQyxFQUFMO0FBREssS0FBZjtBQUdBLFFBQU1DLFlBQVk7QUFDZEMsWUFBSSxtQkFEVTtBQUVkQyxjQUFNLGFBRlE7QUFHZEMsaUJBQVM7QUFISyxLQUFsQjtBQUtBLFFBQU1DLGdCQUFnQix5QkFBYyxZQUFkLEVBQTRCUixNQUE1QixDQUF0Qjs7QUFFQVMsZUFBVyxZQUFNO0FBQ2JaLHdCQUFnQjtBQUNaYSxzQkFBVVIsS0FBS0MsRUFBTDtBQURFLFNB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aWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBzdHViVHJhbnNwb3J0IGZyb20gJ25vZGVtYWlsZXItc3R1Yi10cmFuc3BvcnQnO1xuaW1wb3J0IG1ha2VTZW5kRW1haWwgZnJvbSAnLi4vc2VuZC1lbWFpbCc7XG5cbmRlc2NyaWJlKCdzZW5kaW5nIGFuIGVtYWlsJywgKCkgPT4ge1xuICAgIGxldCBmYWtlVHJhbnNwb3J0O1xuICAgIGxldCBzdWNjZXNzVHJhbnNwb3J0O1xuICAgIGxldCBlcnJvclRyYW5zcG9ydDtcbiAgICBjb25zdCBsb2dnZXIgPSB7XG4gICAgICAgIHdhcm46IGplc3QuZm4oKVxuICAgIH07XG4gICAgY29uc3QgZW1haWxJbmZvID0ge1xuICAgICAgICB0bzogJ25vcmVwbHlAZ21haWwuY29tJyxcbiAgICAgICAgdGV4dDogJ3NpbXBsZSB0ZXh0JyxcbiAgICAgICAgc3ViamVjdDogJ0hpIElcXCdtIFBhdWwhJ1xuICAgIH07XG4gICAgY29uc3QgYmFzZVNlbmRFbWFpbCA9IG1ha2VTZW5kRW1haWwoJ3Byb2R1Y3Rpb24nLCBsb2dnZXIpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGZha2VUcmFuc3BvcnQgPSB7XG4gICAgICAgICAgICBzZW5kTWFpbDogamVzdC5mbigpXG4gICAgICAgIH07XG4gICAgICAgIHN1Y2Nlc3NUcmFuc3BvcnQgPSBzdHViVHJhbnNwb3J0KCk7XG4gICAgICAgIGVycm9yVHJhbnNwb3J0ID0gc3R1YlRyYW5zcG9ydCh7XG4gICAgICAgICAgICBlcnJvcjogJ3VuYWJsZSB0byBzZW5kIGVtYWlsJ1xuICAgICAgICB9KTtcbiAgICAgICAgbG9nZ2VyLndhcm4ubW9ja0NsZWFyKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSB0aGUgZ2l2ZW4gZW1haWwgc2V0dGluZ3MgdG8gc2VuZCB0aGUgZW1haWwnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbmRFbWFpbCA9IGJhc2VTZW5kRW1haWwoZmFrZVRyYW5zcG9ydCwgJ2V4YW1wbGVAZ21haWwuY29tJyk7XG4gICAgICAgIHNlbmRFbWFpbChlbWFpbEluZm8pO1xuXG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgICAgICB0bzogJ25vcmVwbHlAZ21haWwuY29tJyxcbiAgICAgICAgICAgIGZyb206ICdleGFtcGxlQGdtYWlsLmNvbScsXG4gICAgICAgICAgICB0ZXh0OiAnc2ltcGxlIHRleHQnLFxuICAgICAgICAgICAgc3ViamVjdDogJ0hpIElcXCdtIFBhdWwhJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGluZm8gaWYgdGhlIG1haWwgc3VjY2Vzc2Z1bGx5IHNlbnQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHN1Y2Nlc3NUcmFuc3BvcnQpO1xuICAgICAgICBjb25zdCBzZW5kRW1haWwgPSBiYXNlU2VuZEVtYWlsKHRyYW5zcG9ydCwgJ2V4YW1wbGVAZ21haWwuY29tJyk7XG4gICAgICAgIHJldHVybiBleHBlY3Qoc2VuZEVtYWlsKGVtYWlsSW5mbykpXG4gICAgICAgICAgICAucmVzb2x2ZXNcbiAgICAgICAgICAgIC50b01hdGNoT2JqZWN0KHtcbiAgICAgICAgICAgICAgICBlbnZlbG9wZToge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnZXhhbXBsZUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgICAgICB0bzogWydub3JlcGx5QGdtYWlsLmNvbSddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IGV4cGVjdC5hbnl0aGluZygpLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBleHBlY3QuYW55dGhpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhbiBlcnJvciBpZiB0aGUgbWFpbCBjb3VsZCBub3Qgc2VuZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoZXJyb3JUcmFuc3BvcnQpO1xuICAgICAgICBjb25zdCBzZW5kRW1haWwgPSBiYXNlU2VuZEVtYWlsKHRyYW5zcG9ydCwgJ2V4YW1wbGVAZ21haWwuY29tJyk7XG4gICAgICAgIHJldHVybiBleHBlY3Qoc2VuZEVtYWlsKGVtYWlsSW5mbykpXG4gICAgICAgICAgICAucmVqZWN0c1xuICAgICAgICAgICAgLnRvRXF1YWwobmV3IEVycm9yKCd1bmFibGUgdG8gc2VuZCBlbWFpbCcpKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgc2V0IHRoZSBzZW5kIGVtYWlsIHRvIG5vIHJlcGx5IGlmIG5vdCBwcm9kdWN0aW9uJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzZW5kRW1haWwgPSBtYWtlU2VuZEVtYWlsKCdsb2NhbCcsIGxvZ2dlciwgZmFrZVRyYW5zcG9ydCwgJ2Zha2VAd2lkZ2V0LWZhY3RvcnkuY29tJyk7XG4gICAgICAgIHNlbmRFbWFpbChlbWFpbEluZm8pO1xuXG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICAgIGV4cGVjdChmYWtlVHJhbnNwb3J0LnNlbmRNYWlsKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgICAgICB0bzogJ25vcmVwbHlAd2lkZ2V0LWZhY3RvcnkuY29tJyxcbiAgICAgICAgICAgIGZyb206ICdmYWtlQHdpZGdldC1mYWN0b3J5LmNvbScsXG4gICAgICAgICAgICB0ZXh0OiAnc2ltcGxlIHRleHQnLFxuICAgICAgICAgICAgc3ViamVjdDogJ0hpIElcXCdtIFBhdWwhJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbG9nIGEgd2FybmluZyBpZiBhbiBvdXRib3VuZCBlbWFpbCBpcyBhdHRlbXB0ZWQgaW4gZGV2JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzZW5kRW1haWwgPSBtYWtlU2VuZEVtYWlsKCdsb2NhbCcsIGxvZ2dlciwgZmFrZVRyYW5zcG9ydCwgJ2Zha2VAd2lkZ2V0LWZhY3RvcnkuY29tJyk7XG4gICAgICAgIHNlbmRFbWFpbChlbWFpbEluZm8pO1xuXG4gICAgICAgIGV4cGVjdChsb2dnZXIud2FybikudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QobG9nZ2VyLndhcm4pLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgICAgZXhwZWN0KGxvZ2dlci53YXJuKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7XG4gICAgICAgICAgICBlbWFpbERhdGE6IHtcbiAgICAgICAgICAgICAgICBhdHRlbXB0ZWRBZGRyZXNzOiAnbm9yZXBseUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHNlbnRBZGRyZXNzOiAnbm9yZXBseUB3aWRnZXQtZmFjdG9yeS5jb20nLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdzaW1wbGUgdGV4dCcsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogJ0hpIElcXCdtIFBhdWwhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zZzogJ2F0dGVtcHQgdG8gc2VuZCBhbiBlbWFpbCB0byBhbiBleHRlcm5hbCBkb21haW4gd2hlbiBpbiBkZXYgbW9kZSdcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==