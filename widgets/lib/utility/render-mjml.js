'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderComponent = exports.handleTheme = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _mjml = require('mjml');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleTheme = exports.handleTheme = function handleTheme(theme) {
    var colors = theme.colors,
        headerImage = theme.headerImage;

    var newTheme = theme;

    // If theme does not include colors, use defaults
    if (!colors) {
        newTheme = Object.assign({}, newTheme, {
            colors: _styles2.default.colors
        });
    }

    // header image must include a source and an alt string
    if (headerImage && (!headerImage.src || !headerImage.alt)) {
        throw new Error('invalid structure of theme, header image requires a image src and an alt string');
    }

    // theme colors must include a primary color
    if (!newTheme.colors.primary) {
        throw new Error('invalid structure of theme, colors requires a primary color to be included');
    }

    return newTheme;
};

var renderComponent = exports.renderComponent = function renderComponent(component, theme) {
    var children = _react2.default.createElement(
        _theme2.default,
        { styles: theme },
        component
    );

    return {
        __html: (0, _mjml.mjml2html)('\n            <mjml>\n                <mj-head>\n                 <mj-style>\n                     .display-none {\n                         display: none !important;\n                     }\n                 </mj-style>\n                 <mj-attributes>\n                   <mj-all font-family="Helvetica, Arial, sans-serif" />\n                 </mj-attributes>\n               </mj-head>\n                <mj-body>\n                    <mj-container>\n                        ' + (0, _server.renderToStaticMarkup)(children) + '\n                    </mj-container>\n                </mj-body>\n            </mjml>\n        ').html
    };
};

// mjml requires that we set the inner html dangerously
// this should be fine so long as you're not doing
// anything strange with creating these templates, just be aware.

/* eslint-disable react/no-danger */
var renderMJML = function renderMJML(component) {
    var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _styles2.default;
    return _react2.default.createElement('div', { dangerouslySetInnerHTML: renderComponent(component, handleTheme(theme)) });
};

exports.default = renderMJML;