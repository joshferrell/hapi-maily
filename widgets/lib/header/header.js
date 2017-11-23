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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.determineImage = function () {
            var img = _this.props.img;
            var headerImage = _this.context.styles.headerImage;


            if (img) return img;else if (headerImage) return headerImage;

            return null;
        }, _this.renderImage = function (img) {
            return _react2.default.createElement(
                'mj-column',
                { width: '100%', padding: '0' },
                _react2.default.createElement('mj-image', _extends({ padding: '0' }, img))
            );
        }, _this.render = function () {
            var title = _this.props.title;

            var img = _this.determineImage();

            return _react2.default.createElement(
                'mj-section',
                { 'full-width': 'full-width', padding: '0' },
                img && _this.renderImage(img),
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Header;
}(_react.Component);

Header.imageShape = _propTypes2.default.shape({
    src: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string.isRequired
});
Header.contextTypes = {
    styles: _propTypes2.default.shape({
        headerImage: Header.imageShape
    })
};
Header.propTypes = {
    img: Header.imageShape,
    title: _propTypes2.default.string.isRequired
};
Header.defaultProps = {
    img: null
};
exports.default = Header;