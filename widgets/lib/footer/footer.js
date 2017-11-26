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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.renderAddress = function (address) {
            return _react2.default.createElement(
                'mj-section',
                Footer.sectionObject,
                _react2.default.createElement(
                    'mj-column',
                    null,
                    _react2.default.createElement(
                        'mj-text',
                        { 'padding-bottom': '25' },
                        _react2.default.createElement(
                            'address',
                            null,
                            _react2.default.createElement(
                                'strong',
                                null,
                                address.name
                            ),
                            _react2.default.createElement('br', null),
                            address.addressLine1,
                            _react2.default.createElement('br', null),
                            address.city,
                            ', ',
                            address.state,
                            ' ',
                            address.zip,
                            _react2.default.createElement('br', null),
                            address.country
                        )
                    )
                )
            );
        }, _this.renderContact = function (contact) {
            return _react2.default.createElement(
                'mj-section',
                Footer.sectionObject,
                contact.map(function (_ref2) {
                    var name = _ref2.name,
                        value = _ref2.value,
                        href = _ref2.href;
                    return _react2.default.createElement(
                        'mj-column',
                        null,
                        _react2.default.createElement(
                            'mj-text',
                            null,
                            name && _react2.default.createElement(
                                'h4',
                                { style: { margin: 0 } },
                                name
                            ),
                            href ? _react2.default.createElement(
                                'a',
                                { href: href, rel: 'external noreferrer' },
                                value
                            ) : _react2.default.createElement(
                                'p',
                                null,
                                value
                            )
                        )
                    );
                })
            );
        }, _this.renderPreFooter = function (children) {
            return _react2.default.createElement(
                'mj-section',
                Footer.sectionObject,
                _react2.default.createElement(
                    'mj-column',
                    { width: '100%' },
                    children
                )
            );
        }, _this.render = function () {
            var _this$context$styles = _this.context.styles,
                colors = _this$context$styles.colors,
                address = _this$context$styles.address,
                contact = _this$context$styles.contact;
            var _this$props = _this.props,
                title = _this$props.title,
                children = _this$props.children;


            return _react2.default.createElement(
                'mj-section',
                { 'full-width': 'full-width', 'padding-top': '0' },
                children && _this.renderPreFooter(children),
                address && _this.renderAddress(address),
                contact && _this.renderContact(contact),
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
Footer.sectionObject = {
    'full-width': 'full-width',
    'background-color': '#ECECEC',
    'padding-bottom': '0'
};
Footer.contextTypes = {
    styles: _propTypes2.default.shape({
        colors: _propTypes2.default.object,
        address: _propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired,
            addressLine1: _propTypes2.default.string.isRequired,
            addressLine2: _propTypes2.default.string,
            city: _propTypes2.default.string.isRequired,
            state: _propTypes2.default.string.isRequired,
            zip: _propTypes2.default.string.isRequired,
            country: _propTypes2.default.string.isRequired
        }),
        contact: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            name: _propTypes2.default.string,
            value: _propTypes2.default.string.isRequired,
            href: _propTypes2.default.string,
            type: _propTypes2.default.oneOf(['phone', 'email', 'website', 'fax']).isRequired
        }))
    })
};
exports.default = Footer;