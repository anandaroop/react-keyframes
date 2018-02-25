'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Packages
var Frame = function (_React$Component) {
  (0, _inherits3.default)(Frame, _React$Component);

  function Frame() {
    (0, _classCallCheck3.default)(this, Frame);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Frame.prototype.componentDidMount = function componentDidMount() {
    this.props.onRender();
  };

  Frame.prototype.componentDidUpdate = function componentDidUpdate() {
    this.props.onRender();
  };

  Frame.prototype.render = function render() {
    var _this2 = this;

    var component = this.props.component;

    var props = {};

    (0, _keys2.default)(this.props).forEach(function (k) {
      if (Frame.propTypes[k] && k !== 'duration') {
        return;
      }
      props[k] = _this2.props[k];
    });

    return _react2.default.createElement(component, props, this.props.children);
  };

  return Frame;
}(_react2.default.Component);

Frame.propTypes = {
  children: _propTypes2.default.any,
  component: _propTypes2.default.any,
  duration: _propTypes2.default.number,
  onRender: _propTypes2.default.func
};
Frame.defaultProps = {
  duration: 0,
  onRender: function onRender() {}
};
exports.default = Frame;