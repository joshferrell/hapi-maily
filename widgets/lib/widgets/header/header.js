'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var title = _ref.title,
        img = _ref.img;
    return _react2.default.createElement(
        'mj-section',
        { 'full-width': 'full-width', padding: '0' },
        _react2.default.createElement(
            'mj-column',
            { width: '100%', padding: '0' },
            _react2.default.createElement('mj-image', _extends({ padding: '0' }, img))
        ),
        _react2.default.createElement(
            'mj-column',
            { width: '100%', 'background-color': '#ECECEC' },
            _react2.default.createElement(
                'mj-text',
                { 'font-weight': 'bold', 'font-size': '24', color: '#2B2B2B', padding: '20 30' },
                title
            )
        )
    );
};

Header.propTypes = {
    title: _propTypes2.default.string.isRequired,
    img: _propTypes2.default.shape({
        src: _propTypes2.default.string.isRequired,
        alt: _propTypes2.default.string.isRequired
    }).isRequired
};

exports.default = Header;