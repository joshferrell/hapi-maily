'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Verification = function Verification(_ref) {
    var title = _ref.title,
        text = _ref.text;
    return _react2.default.createElement(
        'mj-section',
        { 'full-width': 'full-width', 'padding-top': '0', 'padding-bottom': '0' },
        _react2.default.createElement(
            'mj-column',
            null,
            _react2.default.createElement(
                'mj-text',
                { 'font-size': '15', 'padding-bottom': '0' },
                _react2.default.createElement(
                    'h2',
                    { style: { fontWeight: 'normal' } },
                    title
                )
            ),
            _react2.default.createElement(
                'mj-text',
                { 'font-size': '50', 'font-weight': 'bold', 'padding-top': '0' },
                _react2.default.createElement(
                    'p',
                    null,
                    text
                )
            )
        )
    );
};

Verification.propTypes = {
    title: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired
};

exports.default = Verification;