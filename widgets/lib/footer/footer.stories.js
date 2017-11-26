'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _utility = require('../utility');

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
var contactTypes = ['phone', 'email', 'website', 'fax'];

(0, _react3.storiesOf)('Footer', module).addDecorator(_addonKnobs.withKnobs).add('with no nested components', function () {
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
}).add('with custom theme', function () {
    var theme = {
        colors: { primary: '#2196F3' }
    };

    var component = _react2.default.createElement(_footer2.default, { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') });

    return (0, _utility.renderMJML)(component, theme);
}).add('with address information', function () {
    var theme = {
        address: {
            name: 'Widget Factory',
            addressLine1: '1234 Example Drive',
            city: 'Greatest City',
            state: 'CA',
            zip: '12345',
            country: 'USA'
        }
    };

    var component = _react2.default.createElement(_footer2.default, { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') });

    return (0, _utility.renderMJML)(component, theme);
}).add('with contact information', function () {
    var theme = {
        contact: [{
            name: (0, _addonKnobs.text)('Contact Name', 'Phone'),
            href: (0, _addonKnobs.text)('Url Link', 'tel:123-555-1234'),
            value: (0, _addonKnobs.text)('Url Value', '123-555-1234'),
            type: (0, _addonKnobs.select)('Contact Types', contactTypes, 'phone')
        }]
    };

    var component = _react2.default.createElement(_footer2.default, { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') });

    return (0, _utility.renderMJML)(component, theme);
}).add('with contact and address information', function () {
    var theme = {
        address: {
            name: (0, _addonKnobs.text)('Address Name', 'Widget Factory'),
            addressLine1: (0, _addonKnobs.text)('Address Line 1', '1234 Example Drive'),
            addressLine2: (0, _addonKnobs.text)('Address Line 2', ''),
            city: (0, _addonKnobs.text)('City', 'Greatest City'),
            state: (0, _addonKnobs.text)('State', 'CA'),
            zip: (0, _addonKnobs.text)('Zip', '12345'),
            country: (0, _addonKnobs.text)('Country', 'USA')
        },
        contact: [{
            name: (0, _addonKnobs.text)('Contact Name', 'Phone'),
            href: (0, _addonKnobs.text)('Url Link', 'tel:123-555-1234'),
            value: (0, _addonKnobs.text)('Url Value', '123-555-1234'),
            type: (0, _addonKnobs.select)('Contact Types', contactTypes, 'phone')
        }]
    };

    var component = _react2.default.createElement(_footer2.default, { title: (0, _addonKnobs.text)('Company Name', 'Widget Factory') });

    return (0, _utility.renderMJML)(component, theme);
});