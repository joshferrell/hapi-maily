'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../../utility');

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Widget/Footer', module).addDecorator(_addonKnobs.withKnobs).add('with no nested components', function () {
    var component = _react2.default.createElement(_footer2.default, { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') });
    return (0, _utility.renderMJML)(component);
}).add('with custom nest component', function () {
    var component = _react2.default.createElement(
        _footer2.default,
        { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') },
        _react2.default.createElement('mj-image', {
            src: 'http://fillmurray.com/200/300',
            width: '300',
            height: '200',
            alt: 'murray!'
        })
    );
    return (0, _utility.renderMJML)(component);
});