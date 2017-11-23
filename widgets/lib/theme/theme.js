'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utility = require('../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Theme = function (_Component) {
    _inherits(Theme, _Component);

    function Theme() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Theme);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Theme.__proto__ || Object.getPrototypeOf(Theme)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
            return { styles: _this.props.styles };
        }, _this.render = function () {
            return _react2.default.createElement(
                'mj-container',
                null,
                _this.props.children
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Theme;
}(_react.Component);

Theme.styleShape = _propTypes2.default.shape({
    colors: _propTypes2.default.object,
    headerImage: _propTypes2.default.shape({
        src: _propTypes2.default.string.isRequired,
        alt: _propTypes2.default.string.isRequired
    })
});
Theme.propTypes = {
    children: _propTypes2.default.node.isRequired,
    styles: Theme.styleShape
};
Theme.childContextTypes = {
    styles: Theme.styleShape
};
Theme.defaultProps = {
    styles: _utility.styles
};
exports.default = Theme;