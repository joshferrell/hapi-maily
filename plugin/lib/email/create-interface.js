'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interfaceOptions = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _ = require('.');

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interfaceOptions = exports.interfaceOptions = _joi2.default.object({
    component: _joi2.default.func(),
    subject: _joi2.default.string()
});

var createInterface = function createInterface(emailSettings) {
    return function (route, options) {
        var settings = _joi2.default.attempt(options, interfaceOptions, 'Invalid email handler options (' + route.path + ')');

        var component = settings.component,
            subject = settings.subject;

        var sendMail = (0, _.makeSendEmail)(emailSettings);
        var handleMail = (0, _.makeHandleEmail)(_utility.renderTemplate, sendMail, component, subject);

        return handleMail;
    };
};

exports.default = createInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9jcmVhdGUtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbImludGVyZmFjZU9wdGlvbnMiLCJvYmplY3QiLCJjb21wb25lbnQiLCJmdW5jIiwic3ViamVjdCIsInN0cmluZyIsImNyZWF0ZUludGVyZmFjZSIsImVtYWlsU2V0dGluZ3MiLCJyb3V0ZSIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImF0dGVtcHQiLCJwYXRoIiwic2VuZE1haWwiLCJoYW5kbGVNYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLDhDQUFtQixjQUFJQyxNQUFKLENBQVc7QUFDdkNDLGVBQVcsY0FBSUMsSUFBSixFQUQ0QjtBQUV2Q0MsYUFBUyxjQUFJQyxNQUFKO0FBRjhCLENBQVgsQ0FBekI7O0FBS1AsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxhQUFEO0FBQUEsV0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzNELFlBQU1DLFdBQVcsY0FBSUMsT0FBSixDQUNiRixPQURhLEVBRWJULGdCQUZhLHNDQUdxQlEsTUFBTUksSUFIM0IsT0FBakI7O0FBRDJELFlBT25EVixTQVBtRCxHQU81QlEsUUFQNEIsQ0FPbkRSLFNBUG1EO0FBQUEsWUFPeENFLE9BUHdDLEdBTzVCTSxRQVA0QixDQU94Q04sT0FQd0M7O0FBUTNELFlBQU1TLFdBQVcscUJBQWNOLGFBQWQsQ0FBakI7QUFDQSxZQUFNTyxhQUFhLGdEQUVmRCxRQUZlLEVBR2ZYLFNBSGUsRUFJZkUsT0FKZSxDQUFuQjs7QUFPQSxlQUFPVSxVQUFQO0FBQ0gsS0FqQnVCO0FBQUEsQ0FBeEI7O2tCQW1CZVIsZSIsImZpbGUiOiJjcmVhdGUtaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xuaW1wb3J0IHsgbWFrZUhhbmRsZUVtYWlsLCBtYWtlU2VuZEVtYWlsIH0gZnJvbSAnLic7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGF0ZSB9IGZyb20gJy4uL3V0aWxpdHknO1xuXG5leHBvcnQgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IGpvaS5vYmplY3Qoe1xuICAgIGNvbXBvbmVudDogam9pLmZ1bmMoKSxcbiAgICBzdWJqZWN0OiBqb2kuc3RyaW5nKClcbn0pO1xuXG5jb25zdCBjcmVhdGVJbnRlcmZhY2UgPSAoZW1haWxTZXR0aW5ncykgPT4gKHJvdXRlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBqb2kuYXR0ZW1wdChcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgaW50ZXJmYWNlT3B0aW9ucyxcbiAgICAgICAgYEludmFsaWQgZW1haWwgaGFuZGxlciBvcHRpb25zICgke3JvdXRlLnBhdGh9KWBcbiAgICApO1xuXG4gICAgY29uc3QgeyBjb21wb25lbnQsIHN1YmplY3QgfSA9IHNldHRpbmdzO1xuICAgIGNvbnN0IHNlbmRNYWlsID0gbWFrZVNlbmRFbWFpbChlbWFpbFNldHRpbmdzKTtcbiAgICBjb25zdCBoYW5kbGVNYWlsID0gbWFrZUhhbmRsZUVtYWlsKFxuICAgICAgICByZW5kZXJUZW1wbGF0ZSxcbiAgICAgICAgc2VuZE1haWwsXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgc3ViamVjdFxuICAgICk7XG5cbiAgICByZXR1cm4gaGFuZGxlTWFpbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUludGVyZmFjZTtcbiJdfQ==