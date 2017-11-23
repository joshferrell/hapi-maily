'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Footer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var colors = _this.context.styles.colors;
            var _this$props = _this.props,
                title = _this$props.title,
                children = _this$props.children;


            var PreFooter = children && _react2.default.createElement(
                'mj-section',
                { 'full-width': 'full-width', 'background-color': '#ECECEC' },
                _react2.default.createElement(
                    'mj-column',
                    { width: '100%' },
                    children
                )
            );

            return _react2.default.createElement(
                'mj-section',
                { 'full-width': 'full-width', 'padding-top': '0' },
                children && PreFooter,
                _react2.default.createElement(
                    'mj-section',
                    { 'full-width': 'full-width', padding: '15', 'background-color': colors.primary },
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Footer;
}(_react.Component);

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