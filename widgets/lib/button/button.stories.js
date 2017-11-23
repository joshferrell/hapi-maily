'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../utility');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
var buttonTypes = ['primary', 'secondary', 'danger', 'success', 'warning'];

(0, _react3.storiesOf)('Button', module).addDecorator(_addonKnobs.withKnobs).add('with text', function () {
    var component = _react2.default.createElement(
        _button2.default,
        {
            url: (0, _addonKnobs.text)('Button Url', ''),
            buttonType: (0, _addonKnobs.select)('Button Type', buttonTypes, 'primary'),
            squared: (0, _addonKnobs.boolean)('Squared', false)
        },
        (0, _addonKnobs.text)('Button Text', 'Click Me!')
    );
    return (0, _utility.renderMJML)(component);
}).add('using a custom theme', function () {
    var theme = {
        colors: {
            primary: '#2196F3',
            secondary: '#9E9E9E',
            paul: '#616161'
        }
    };

    var component = _react2.default.createElement(
        _button2.default,
        {
            url: (0, _addonKnobs.text)('Button Url', ''),
            buttonType: (0, _addonKnobs.select)('Button Type', Object.keys(theme.colors), 'primary'),
            squared: (0, _addonKnobs.boolean)('Squared', false)
        },
        (0, _addonKnobs.text)('Button Text', 'Click Me!')
    );

    return (0, _utility.renderMJML)(component, theme);
});