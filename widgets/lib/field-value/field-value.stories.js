'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../utility');

var _fieldValue = require('./field-value');

var _fieldValue2 = _interopRequireDefault(_fieldValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Field Component', module).addDecorator(_addonKnobs.withKnobs).add('with regular size', function () {
    var component = _react2.default.createElement(_fieldValue2.default, {
        title: (0, _addonKnobs.text)('title', 'Phone'),
        value: (0, _addonKnobs.text)('value', '555-5555'),
        size: 'regular'
    });
    return (0, _utility.renderMJML)(component);
}).add('with large size', function () {
    var component = _react2.default.createElement(_fieldValue2.default, {
        title: (0, _addonKnobs.text)('title', 'Phone'),
        value: (0, _addonKnobs.text)('value', '555-5555'),
        size: 'large'
    });
    return (0, _utility.renderMJML)(component);
});