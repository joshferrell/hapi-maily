'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../../utility');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _react3.storiesOf)('Widget/Header', module).addDecorator(_addonKnobs.withKnobs).add('with custom image and subject', function () {
    var image = {
        src: 'http://www.fillmurray.com/800/218',
        alt: 'Fill Murray'
    };

    var component = _react2.default.createElement(_header2.default, {
        title: (0, _addonKnobs.text)('Email Subject', 'Welcome to widget factory'),
        img: image
    });

    return (0, _utility.renderMJML)(component);
});