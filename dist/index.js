function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

var randomString = function randomString(length, base) {
  if (base === void 0) {
    base = 36;
  }

  return '_' + Math.random().toString(base).substr(2, length);
};

var getNodeIdentifier = function getNodeIdentifier() {
  var id = randomString(8);
  return 'useStyles__' + id;
};

var compileInitialClasseNames = function compileInitialClasseNames(classes) {
  return Object.keys(classes).reduce(function (obj, className) {
    var _extends2;

    return _extends({}, obj, (_extends2 = {}, _extends2[className] = getNodeIdentifier(), _extends2));
  }, {});
};

var DEFAULT_PARSER = {
  matcher: /[A-Z]/,
  replacer: function replacer(match) {
    return "-" + match.toLowerCase();
  }
};
var useStyles = function useStyles(styleSheet, options) {
  var classes = React.useMemo(function () {
    return compileInitialClasseNames(styleSheet);
  }, []);

  var appendStyle = function appendStyle(id, css) {
    if (!document.head.querySelector('#' + id)) {
      var node = document.createElement('style');
      node.textContent = css;
      node.type = 'text/css';
      node.id = id;
      document.head.appendChild(node);
    }
  };

  var removeStyle = function removeStyle(id) {
    var element = document.head.querySelector('#' + id);

    if (element) {
      document.head.removeChild(element);
    }
  };

  var isDOMReady = function isDOMReady() {
    return typeof window !== 'undefined' && typeof document !== 'undefined' && !!document.head;
  };

  var createParser = function createParser(matcher, replacer) {
    var regex = RegExp(matcher, 'g');
    return function (string) {
      if (typeof string !== 'string') {
        throw new TypeError("expected an argument of type string, but got " + typeof string);
      }

      if (!string.match(regex)) {
        return string;
      }

      return string.replace(regex, replacer);
    };
  };

  var compileStyles = function compileStyles(styles, parser) {
    return Object.keys(styles).map(function (property) {
      return parser(property) + ": " + styles[property];
    }).join('\n');
  };

  var compileStylesheet = function compileStylesheet() {
    var _options$parser, _options$parser2;

    if (!styleSheet || typeof styleSheet !== 'object' || Array.isArray(styleSheet)) {
      throw new TypeError("expected an argument of type object, but got " + typeof styleSheet);
    }

    var parser = createParser((options === null || options === void 0 ? void 0 : (_options$parser = options.parser) === null || _options$parser === void 0 ? void 0 : _options$parser.matcher) || DEFAULT_PARSER.matcher, (options === null || options === void 0 ? void 0 : (_options$parser2 = options.parser) === null || _options$parser2 === void 0 ? void 0 : _options$parser2.replacer) || DEFAULT_PARSER.replacer);
    var classnames = Object.keys(styleSheet).reduce(function (obj, classname) {
      var _extends2;

      return _extends({}, obj, (_extends2 = {}, _extends2[classes[classname]] = compileStyles(styleSheet[classname], parser), _extends2));
    }, {});
    return Object.keys(classnames).map(function (classname) {
      return "." + classname + ": {\n" + classnames[classname] + "\n}";
    }).join('\n');
  };

  React.useEffect(function () {
    var id = getNodeIdentifier();

    if (isDOMReady()) {
      var css = compileStylesheet();
      appendStyle(id, css);
    }

    return function () {
      removeStyle(id);
    };
  }, []);
  return classes;
};

exports.Button = Button;
exports.useStyles = useStyles;
//# sourceMappingURL=index.js.map
