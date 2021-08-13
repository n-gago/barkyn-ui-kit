function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: 'test'
  }, "Example Component: ", text);
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Color;

(function (Color) {
  Color["DEFAULT"] = "default";
  Color["PRIMARY"] = "primary";
  Color["SECONDARY"] = "secondary";
})(Color || (Color = {}));

var Variants;

(function (Variants) {
  Variants["CONTAINED"] = "contained";
  Variants["OUTLINED"] = "outlined";
  Variants["TEXT"] = "text";
  Variants["ICON"] = "icon";
})(Variants || (Variants = {}));

var Size;

(function (Size) {
  Size["SMALL"] = "small";
  Size["MEDIUM"] = "medium";
  Size["LARGE"] = "large";
})(Size || (Size = {}));

var _excluded = ["variant", "color", "dimension", "className"];
var Button = function Button(_ref) {
  var variant = _ref.variant,
      color = _ref.color,
      dimension = _ref.dimension,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var classes = classnames('btn', {
    'btn--contained': variant === Variants.CONTAINED,
    'btn--outlined': variant === Variants.OUTLINED,
    'btn--text': variant === Variants.TEXT,
    'btn--icon': variant === Variants.ICON,
    'btn--default': color === Color.DEFAULT,
    'btn--primary': color === Color.PRIMARY,
    'btn--secondary': color === Color.SECONDARY,
    'btn--small': dimension === Size.SMALL,
    'btn--medium': dimension === Size.MEDIUM,
    'btn--large': dimension === Size.LARGE,
    'btn--disabled': props.disabled
  }, className);
  return React__default.createElement("button", Object.assign({
    type: 'button',
    tabIndex: props.disabled ? -1 : 0,
    "aria-disabled": props.disabled,
    className: classes
  }, props), props.children);
};
Button.defaultProps = {
  variant: 'contained',
  color: 'default',
  dimension: 'small'
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
