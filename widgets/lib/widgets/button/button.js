'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utility = require('../../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var children = _ref.children,
        url = _ref.url,
        buttonType = _ref.buttonType,
        squared = _ref.squared;
    var colors = undefined.context.styles.colors;

    var buttonProps = {
        'background-color': colors[buttonType],
        color: '#FFFFFF',
        'border-radius': squared ? '0' : '25',
        'font-size': '18',
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'inner-padding': '15 30',
        href: url,
        rel: 'noreferrer'
    };

    return _react2.default.createElement(
        'mj-button',
        buttonProps,
        children
    );
};

Button.propTypes = {
    children: _propTypes2.default.node.isRequired,
    url: _propTypes2.default.string.isRequired,
    buttonType: _propTypes2.default.oneOf(Object.keys(_utility.styles.colors)),
    squared: _propTypes2.default.bool
};

Button.defaultProps = {
    buttonType: 'primary',
    squared: false
};

Button.contextTypes = {
    styles: _propTypes2.default.shape({
        colors: _propTypes2.default.object
    }).isRequired
};

exports.default = Button;