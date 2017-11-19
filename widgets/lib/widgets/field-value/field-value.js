'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldValue = function FieldValue(_ref) {
    var title = _ref.title,
        value = _ref.value,
        size = _ref.size;

    var fontSize = size === 'large' ? '25px' : '20px';
    var fieldStyle = {
        fontSize: fontSize,
        margin: '0px',
        paddingTop: '10px'
    };

    return _react2.default.createElement(
        'mj-section',
        {
            'full-width': 'full-width',
            padding: size === 'large' ? '20 25' : '10 25'
        },
        _react2.default.createElement(
            'mj-column',
            { 'vertical-align': 'top' },
            _react2.default.createElement(
                'mj-text',
                { padding: '0' },
                _react2.default.createElement(
                    'h3',
                    { style: fieldStyle },
                    title
                )
            )
        ),
        _react2.default.createElement(
            'mj-column',
            null,
            _react2.default.createElement(
                'mj-text',
                { padding: '0' },
                _react2.default.createElement(
                    'p',
                    { style: fieldStyle },
                    value
                )
            )
        )
    );
};

FieldValue.propTypes = {
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired,
    size: _propTypes2.default.oneOf(['regular', 'large'])
};

FieldValue.defaultProps = {
    size: 'regular'
};

exports.default = FieldValue;