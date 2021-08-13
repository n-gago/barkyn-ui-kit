import React__default, { createElement } from 'react';
import classnames from 'classnames';

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: 'test'
  }, "Example Component: ", text);
};

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

const Button = ({
  variant,
  color,
  dimension,
  className,
  ...props
}) => {
  const classes = classnames('btn', {
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

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
