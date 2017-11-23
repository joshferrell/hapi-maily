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

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var colors = _this.context.styles.colors;
            var _this$props = _this.props,
                children = _this$props.children,
                url = _this$props.url,
                buttonType = _this$props.buttonType,
                squared = _this$props.squared;


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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Button;
}(_react.Component);

Button.contextTypes = {
    styles: _propTypes2.default.shape({
        colors: _propTypes2.default.object.isRequired
    }).isRequired
};
Button.propTypes = {
    children: _propTypes2.default.node.isRequired,
    url: _propTypes2.default.string.isRequired,
    buttonType: _propTypes2.default.string,
    squared: _propTypes2.default.bool
};
Button.defaultProps = {
    buttonType: 'primary',
    squared: false
};
exports.default = Button;