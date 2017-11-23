'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../utility');

var _verification = require('./verification');

var _verification2 = _interopRequireDefault(_verification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Verification', module).addDecorator(_addonKnobs.withKnobs).add('with title and value', function () {
    var component = _react2.default.createElement(_verification2.default, {
        title: (0, _addonKnobs.text)('Verification Title', 'Verification Code'),
        text: (0, _addonKnobs.text)('Verification Body', 'ABCD1234')
    });
    return (0, _utility.renderMJML)(component);
});