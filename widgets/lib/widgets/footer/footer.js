'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
    var children = _ref.children,
        title = _ref.title;
    var colors = undefined.context.styles.colors;


    return _react2.default.createElement(
        'mj-section',
        {
            'full-width': 'full-width',
            padding: '15',
            'background-color': colors.primary
        },
        _react2.default.createElement(
            'mj-column',
            null,
            children && children,
            _react2.default.createElement(
                'mj-text',
                { color: '#FFFFFF', 'font-size': '16' },
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center', fontWeight: 'bold' } },
                    'Copyright \xA9',
                    new Date().getFullYear(),
                    ' ',
                    title,
                    ' All Rights Reserved.'
                )
            )
        )
    );
};

Footer.propTypes = {
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node
};

Footer.defaultProps = {
    children: null
};

Footer.contextTypes = {
    styles: _propTypes2.default.shape({
        colors: _propTypes2.default.object
    })
};

exports.default = Footer;