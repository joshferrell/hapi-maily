'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreHeader = function PreHeader(_ref) {
    var value = _ref.value;
    return _react2.default.createElement(
        'mj-section',
        { 'css-class': 'display-none' },
        _react2.default.createElement(
            'mj-column',
            null,
            _react2.default.createElement(
                'mj-text',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    value
                )
            )
        )
    );
};

PreHeader.propTypes = {
    value: _propTypes2.default.string.isRequired
};

exports.default = PreHeader;