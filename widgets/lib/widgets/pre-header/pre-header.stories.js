'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../../utility');

var _preHeader = require('./pre-header');

var _preHeader2 = _interopRequireDefault(_preHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Widget/Pre-Header', module).addDecorator(_addonKnobs.withKnobs).add('with email pre-header text', function () {
    var component = _react2.default.createElement(_preHeader2.default, { value: (0, _addonKnobs.text)('email pre-text', 'Simple Text') });
    return (0, _utility.renderMJML)(component);
});