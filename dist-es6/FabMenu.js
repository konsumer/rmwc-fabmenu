'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fab = require('rmwc/Fab');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FabMenu = function (_Component) {
  (0, _inherits3.default)(FabMenu, _Component);

  function FabMenu(props) {
    (0, _classCallCheck3.default)(this, FabMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FabMenu.__proto__ || (0, _getPrototypeOf2.default)(FabMenu)).call(this, props));

    _this.state = { open: false };
    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FabMenu, [{
    key: 'onMouseEnter',
    value: function onMouseEnter(e) {
      this.setState({ open: true });
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave(e) {
      this.setState({ open: false });
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;
      var _props = this.props,
          openIcon = _props.openIcon,
          closedIcon = _props.closedIcon,
          className = _props.className,
          direction = _props.direction,
          style = _props.style,
          props = (0, _objectWithoutProperties3.default)(_props, ['openIcon', 'closedIcon', 'className', 'direction', 'style']);
      var onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave,
          onTouchStart = this.onTouchStart;

      var topClass = 'FabMenu ' + (className || '') + ' ' + (open ? 'open' : 'closed') + ' ' + direction;
      return _react2.default.createElement(
        'div',
        { style: style, className: topClass, onTouchStart: onTouchStart, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        _react2.default.createElement(
          _Fab.Fab,
          (0, _extends3.default)({}, props, { className: 'trigger' }),
          open ? openIcon : closedIcon
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          _react2.default.Children.map(this.props.children, function (el) {
            return _react2.default.cloneElement(el, { exited: !open });
          })
        )
      );
    }
  }]);
  return FabMenu;
}(_react.Component);

FabMenu.defaultProps = {
  openIcon: 'edit',
  closedIcon: 'add',
  direction: 'right'
};

exports.default = FabMenu;