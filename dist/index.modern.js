import React, { useMemo, useEffect } from 'react';
import classnames from 'classnames';

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
  return React.createElement("button", Object.assign({
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

const randomString = (length, base = 36) => {
  return '_' + Math.random().toString(base).substr(2, length);
};

const getNodeIdentifier = () => {
  const id = randomString(8);
  return 'useStyles__' + id;
};

const compileInitialClasseNames = classes => {
  return Object.keys(classes).reduce((obj, className) => ({ ...obj,
    [className]: getNodeIdentifier()
  }), {});
};

const DEFAULT_PARSER = {
  matcher: /[A-Z]/,
  replacer: match => `-${match.toLowerCase()}`
};
const useStyles = (styleSheet, options) => {
  const classes = useMemo(() => compileInitialClasseNames(styleSheet), []);

  const appendStyle = (id, css) => {
    if (!document.head.querySelector('#' + id)) {
      const node = document.createElement('style');
      node.textContent = css;
      node.type = 'text/css';
      node.id = id;
      document.head.appendChild(node);
    }
  };

  const removeStyle = id => {
    const element = document.head.querySelector('#' + id);

    if (element) {
      document.head.removeChild(element);
    }
  };

  const isDOMReady = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined' && !!document.head;
  };

  const createParser = (matcher, replacer) => {
    const regex = RegExp(matcher, 'g');
    return string => {
      if (typeof string !== 'string') {
        throw new TypeError(`expected an argument of type string, but got ${typeof string}`);
      }

      if (!string.match(regex)) {
        return string;
      }

      return string.replace(regex, replacer);
    };
  };

  const compileStyles = (styles, parser) => Object.keys(styles).map(property => `${parser(property)}: ${styles[property]}`).join('\n');

  const compileStylesheet = () => {
    var _options$parser, _options$parser2;

    if (!styleSheet || typeof styleSheet !== 'object' || Array.isArray(styleSheet)) {
      throw new TypeError(`expected an argument of type object, but got ${typeof styleSheet}`);
    }

    const parser = createParser((options === null || options === void 0 ? void 0 : (_options$parser = options.parser) === null || _options$parser === void 0 ? void 0 : _options$parser.matcher) || DEFAULT_PARSER.matcher, (options === null || options === void 0 ? void 0 : (_options$parser2 = options.parser) === null || _options$parser2 === void 0 ? void 0 : _options$parser2.replacer) || DEFAULT_PARSER.replacer);
    const classnames = Object.keys(styleSheet).reduce((obj, classname) => ({ ...obj,
      [classes[classname]]: compileStyles(styleSheet[classname], parser)
    }), {});
    return Object.keys(classnames).map(classname => `.${classname}: {\n${classnames[classname]}\n}`).join('\n');
  };

  useEffect(() => {
    const id = getNodeIdentifier();

    if (isDOMReady()) {
      const css = compileStylesheet();
      appendStyle(id, css);
    }

    return () => {
      removeStyle(id);
    };
  }, []);
  return classes;
};

export { Button, useStyles };
//# sourceMappingURL=index.modern.js.map
