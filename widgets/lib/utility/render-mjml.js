'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _mjml = require('mjml');

var _widgets = require('../widgets');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = exports.renderComponent = function renderComponent(component, theme) {
    if (!theme.colors && !theme.colors.primary) {
        throw new Error('invalid structure of theme, theme requires colors and colors.primary');
    }

    var children = _react2.default.createElement(
        _widgets.Theme,
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
    var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.styles;
    return _react2.default.createElement('div', { dangerouslySetInnerHTML: renderComponent(component, theme) });
};

exports.default = renderMJML;