"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CustomLoader = function CustomLoader(_ref) {
  var image = _ref.image,
    text = _ref.text,
    color = _ref.color,
    bgColor = _ref.bgColor;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    progress = _useState2[0],
    setProgress = _useState2[1];
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setProgress(function (oldProgress) {
        if (oldProgress >= 100) return 100;
        return oldProgress + 1;
      });
    }, 50);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "loader-container",
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "Loading",
    className: "loader-image"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      width: "".concat(progress, "%"),
      backgroundColor: color
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, progress, " %"));
};
CustomLoader.propTypes = {
  image: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string,
  color: _propTypes["default"].string,
  bgColor: _propTypes["default"].string
};
CustomLoader.defaultProps = {
  text: "LOADING",
  color: "#00bfff",
  bgColor: "#000"
};
var _default = exports["default"] = CustomLoader;