'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _renderTemplate = require('../render-template');

var _renderTemplate2 = _interopRequireDefault(_renderTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('render email template', function () {
    it('should render an email template from react to mjml', function () {
        var component = _react2.default.createElement(
            'mj-text',
            null,
            _react2.default.createElement(
                'p',
                null,
                'this is a simple test'
            )
        );

        var html = (0, _renderTemplate2.default)(component);
        expect(html).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXR5L19fdGVzdHNfXy9yZW5kZXItdGVtcGxhdGUuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY29tcG9uZW50IiwiaHRtbCIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyx1QkFBVCxFQUFrQyxZQUFNO0FBQ3BDQyxPQUFHLG9EQUFILEVBQXlELFlBQU07QUFDM0QsWUFBTUMsWUFDRjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FESjs7QUFNQSxZQUFNQyxPQUFPLDhCQUFlRCxTQUFmLENBQWI7QUFDQUUsZUFBT0QsSUFBUCxFQUFhRSxlQUFiO0FBQ0gsS0FURDtBQVVILENBWEQiLCJmaWxlIjoicmVuZGVyLXRlbXBsYXRlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlbmRlclRlbXBsYXRlIGZyb20gJy4uL3JlbmRlci10ZW1wbGF0ZSc7XG5cbmRlc2NyaWJlKCdyZW5kZXIgZW1haWwgdGVtcGxhdGUnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZW5kZXIgYW4gZW1haWwgdGVtcGxhdGUgZnJvbSByZWFjdCB0byBtam1sJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSAoXG4gICAgICAgICAgICA8bWotdGV4dD5cbiAgICAgICAgICAgICAgICA8cD50aGlzIGlzIGEgc2ltcGxlIHRlc3Q8L3A+XG4gICAgICAgICAgICA8L21qLXRleHQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IHJlbmRlclRlbXBsYXRlKGNvbXBvbmVudCk7XG4gICAgICAgIGV4cGVjdChodG1sKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcbn0pO1xuIl19