import { p as proxyCustomElement, H, h, d as Host } from './p-BKK1aA3K.js';

/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

const noop = () => {};
let _WINDOW = {};
let _DOCUMENT = {};
let _MUTATION_OBSERVER = null;
let _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}
const {
  userAgent = ''
} = _WINDOW.navigator || {};
const WINDOW = _WINDOW;
const DOCUMENT = _DOCUMENT;
const MUTATION_OBSERVER = _MUTATION_OBSERVER;
const PERFORMANCE = _PERFORMANCE;
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    }
  },
  A = {
    GROUP: "duotone-group",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var s = "classic",
  t = "duotone",
  r = "sharp",
  o = "sharp-duotone",
  L = [s, t, r, o];
var G = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    duotone: {
      900: "fad",
      400: "fadr",
      300: "fadl",
      100: "fadt"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds",
      400: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
var lt = {
    "Font Awesome 6 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 6 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt"
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
var pt = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }]]),
  xt = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab"
    },
    duotone: {
      solid: "fad",
      regular: "fadr",
      light: "fadl",
      thin: "fadt"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt"
    }
  };
var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  St = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  },
  At = ["kit"];
var Ct = {
  kit: {
    "fa-kit": "fak"
  }};
var Lt = ["fak", "fakd"],
  Wt = {
    kit: {
      fak: "fa-kit"
    }};
var Et = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var Yt = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  };
var ua = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    }
  },
  I$1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
  },
  ga = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    }
  },
  x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"],
  Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x],
  m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(c$1.map(a => "".concat(a, "x"))).concat(F$1.map(a => "w-".concat(a)));
var wa = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };

const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
const UNITS_IN_GRID = 16;
const DEFAULT_CSS_PREFIX = 'fa';
const DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
const DATA_FA_I2SVG = 'data-fa-i2svg';
const DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
const DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
const DATA_PREFIX = 'data-prefix';
const DATA_ICON = 'data-icon';
const HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
const MUTATION_APPROACH_ASYNC = 'async';
const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
const PRODUCTION = (() => {
  try {
    return "production" === 'production';
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[s];
    }
  });
}
const _PREFIX_TO_STYLE = _objectSpread2({}, S);

// We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
// {'fa-duotone': 'duotone'}
_PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  'fa-duotone': 'duotone'
}), S[s]), St['kit']), St['kit-duotone']);
const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

// We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: 'fad'
}), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
familyProxy(_LONG_STYLE_TO_PREFIX);
const ICON_SELECTION_SYNTAX_PATTERN = p; // eslint-disable-line no-useless-escape

const LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
const FONT_FAMILY_PATTERN = g;
const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
familyProxy(_FONT_WEIGHT_TO_PREFIX);
const ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
const DUOTONE_CLASSES = A;
const RESERVED_CLASSES = [...At, ...ma];

const initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  const attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(_ref => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}
const _default = {
  styleDefault: 'solid',
  familyDefault: s,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

// familyPrefix is deprecated but we must still support it if present
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
const _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
const config = {};
Object.keys(_default).forEach(key => {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function (val) {
      _config[key] = val;
      _onChangeCb.forEach(cb => cb(config));
    },
    get: function () {
      return _config[key];
    }
  });
});

// familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function (val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(cb => cb(config));
  },
  get: function () {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
const _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

const d$2 = UNITS_IN_GRID;
const meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }
  const style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  const headChildren = DOCUMENT.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
const idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  let size = 12;
  let id = '';
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  const array = [];
  for (let i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(i => i);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = '';
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";

function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config.cssPrefix;
  const rc = config.replacementClass;
  let s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    const rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
let _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};

const w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

const functions = [];
const listener = function () {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(fn => fn());
};
let loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
    length = keys.length,
    iterator = fn,
    i,
    key,
    result;
  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon = icons[iconName];
    const expanded = !!icon.icon;
    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

const {
  styles,
  shims
} = namespace;
const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
let _defaultUsablePrefix = null;
let _byUnicode = {};
let _byLigature = {};
let _byOldName = {};
let _byOldUnicode = {};
let _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts = cls.split('-');
  const prefix = parts[0];
  const iconName = parts.slice(1).join('-');
  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
const build = () => {
  const lookup = reducer => {
    return reduce(styles, (o$$1, style, prefix) => {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup((acc, icon, iconName) => {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'number';
      });
      aliases.forEach(alias => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup((acc, icon, iconName) => {
    acc[iconName] = iconName;
    if (icon[2]) {
      const aliases = icon[2].filter(a$$1 => {
        return typeof a$$1 === 'string';
      });
      aliases.forEach(alias => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup((acc, icon, iconName) => {
    const aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(alias => {
      acc[alias] = iconName;
    });
    return acc;
  });

  // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.
  const hasRegular = 'far' in styles || config.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }
    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(c$$1 => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
const emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  let family = s;
  const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  L.forEach(familyId => {
    if (values.includes(famProps[familyId]) || values.some(v$$1 => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    family = s
  } = params;
  const style = PREFIX_TO_STYLE[family][styleOrPrefix];

  // handles the exception of passing in only a family of 'duotone' with no style
  if (family === t && !styleOrPrefix) {
    return 'fad';
  }
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  let rest = [];
  let iconName = null;
  classNames.forEach(cls => {
    const result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter((value, index, arr) => {
    return arr.indexOf(value) === index;
  });
}
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  let givenPrefix = null;
  const faCombinedClasses = Ia.concat(bt$1);
  const faStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => faCombinedClasses.includes(cls)));
  const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(cls => !Ia.includes(cls)));
  const faStyles = faStyleOrFamilyClasses.filter(cls => {
    givenPrefix = cls;
    return !P.includes(cls);
  });
  const [styleFromValues = null] = faStyles;
  const family = getFamilyId(faStyleOrFamilyClasses);
  const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles,
    config,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  let {
    prefix,
    iconName
  } = canonical;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  const shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
  const aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
    // Allow a fallback from the regular style to solid if regular is not available
    // but only if we aren't auto-fetching SVGs
    prefix = 'fas';
  }
  return {
    prefix,
    iconName
  };
}
const newCanonicalFamilies = L.filter(familyId => {
  return familyId !== s || familyId !== t;
});
const newCanonicalStyles = Object.keys(ga).filter(key => key !== s).map(key => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  const {
    values,
    family,
    canonical,
    givenPrefix = '',
    styles = {},
    config: config$$1 = {}
  } = prefixOptions;
  const isDuotoneFamily = family === t;
  const valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
  const defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
  const canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = 'fad';
  }
  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    const validPrefix = Object.keys(styles).find(key => newCanonicalStyles.includes(key));
    if (validPrefix || config$$1.autoFetchSvg) {
      const defaultPrefix = pt.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }
  return canonical;
}

class Library {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach(key => {
      this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);

      // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
      const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map(key => {
      const {
        prefix,
        iconName,
        icon
      } = normalized[key];
      const aliases = icon[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases.length > 0) {
        aliases.forEach(alias => {
          if (typeof alias === 'string') {
            additions[prefix][alias] = icon;
          }
        });
      }
      additions[prefix][iconName] = icon;
    });
    return additions;
  }
}

let _plugins = [];
let _hooks = {};
const providers = {};
const defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(k => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(plugin => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(tk => {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === 'object') {
        Object.keys(mixout[tk]).forEach(sk => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach(hook => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    accumulator = hookFn.apply(null, [accumulator, ...args]); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach(hookFn => {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
const library = new Library();
const noAuto = () => {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
const dom = {
  i2svg: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject(new Error('Operation requires a DOM of some kind.'));
    }
  },
  watch: function () {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
const parse = {
  icon: icon => {
    if (icon === null) {
      return null;
    }
    if (typeof icon === 'object' && icon.prefix && icon.iconName) {
      return {
        prefix: icon.prefix,
        iconName: byAlias(icon.prefix, icon.iconName) || icon.iconName
      };
    }
    if (Array.isArray(icon) && icon.length === 2) {
      const iconName = icon[1].indexOf('fa-') === 0 ? icon[1].slice(3) : icon[1];
      const prefix = getCanonicalPrefix(icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon === 'string' && (icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon === 'string') {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon) || icon
      };
    }
  }
};
const api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
const autoReplace = function () {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function () {
      return val.abstract.map(a => toHtml(a));
    }
  });
  Object.defineProperty(val, 'node', {
    get: function () {
      if (!IS_DOM) return;
      const container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: 'svg',
    attributes,
    children
  }];
}

function asSymbol (_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = Lt.includes(prefix);
  const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(c$$1 => extra.classes.indexOf(c$$1) === -1).filter(c$$1 => c$$1 !== '' || !!c$$1).concat(extra.classes).join(' ');
  let content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }
  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }
  const styles = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles['-webkit-transform'] = styles['transform'];
  }
  const styleString = joinStyles(styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  const val = [];
  val.push({
    tag: 'span',
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }
  return val;
}

const {
  styles: styles$1
} = namespace;
function asFoundIcon(icon) {
  const width = icon[0];
  const height = icon[1];
  const [vectorData] = icon.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
const missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === 'fa') {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      const icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

const noop$1 = () => {};
const p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
const preamble = "FA \"6.7.2\"";
const begin = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
const end = name => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};

const noop$2 = () => {};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === 'svg' ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */
  return comment;
}
const mutators = {
  replace: function (mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(abstract => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        let comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function (mutation) {
    const node = mutation[0];
    const abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(' ').reduce((acc, cls) => {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }
    const newInnerHTML = abstract.map(a => toHtml(a)).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  const callbackFunction = typeof callback === 'function' ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
let disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
let mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT
  } = options;
  mo = new MUTATION_OBSERVER(objects => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(mutationRecord => {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  const style = node.getAttribute('style');
  let val = [];
  if (style) {
    val = style.split(';').reduce((acc, style) => {
      const styles = style.split(':');
      const prop = styles[0];
      const value = styles.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }
      return acc;
    }, {});
  }
  return val;
}

function classParser (node) {
  const existingPrefix = node.getAttribute('data-prefix');
  const existingIconName = node.getAttribute('data-icon');
  const innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}

function attributesParser (node) {
  const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute('title');
  const titleId = node.getAttribute('data-fa-title-id');
  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }
  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  let parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  let extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

const {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [...Ft, ...Ia];
}
function onTree(root) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT.documentElement.classList;
  const hclAdd = suffix => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = suffix => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(p$$1 => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(', ');
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
    // noop
  }
  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin('onTree');
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === 'MissingIcon') {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then(resolvedMutations => {
      perform(resolvedMutations, () => {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(e$$1 => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(mutation => {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function (maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
const render = function (iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes = [],
    attributes = {},
    styles = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon
  } = iconDefinition;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), () => {
    callHooks('beforeDOMElementCreation', {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      const {
        node = DOCUMENT,
        callback = () => {}
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(_ref => {
          let [main, mask] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function (_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles
      } = _ref2;
      const styleString = joinStyles(styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};

var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          classes = []
        } = params;
        return domVariants({
          type: 'layer'
        }, () => {
          callHooks('beforeDOMElementCreation', {
            assembler,
            params
          });
          let children = [];
          assembler(args => {
            Array.isArray(args) ? args.map(a => {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(' ')
            },
            children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'counter',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes = [],
          attributes = {},
          styles = {}
        } = params;
        return domVariants({
          type: 'text',
          content
        }, () => {
          callHooks('beforeDOMElementCreation', {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles,
              classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};

const CLEAN_CONTENT_PATTERN = new RegExp('\u{22}', 'ug');
const SECONDARY_UNICODE_RANGE = [1105920, 1112319];
const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: 'fas',
    400: 'fas'
  }
}), lt), wa), Yt);
const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }
    const children = toArray(node.children);
    const alreadyProcessedPseudoElement = children.filter(c$$1 => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles.getPropertyValue('font-family');
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles.getPropertyValue('font-weight');
    const content = styles.getPropertyValue('content');
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== 'none' && content !== '') {
      const content = styles.getPropertyValue('content');
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content);
      const isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }

      // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(main => {
          const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(a$$1 => toHtml(a$$1)).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}
function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    const end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(() => {
      end();
      enableObservation();
      resolve();
    }).catch(() => {
      end();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.pseudoElements2svg = function (params) {
      const {
        node = DOCUMENT
      } = params;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

let _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};

const parseTransformString = transformString => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce((acc, n) => {
    const parts = n.toLowerCase().split('-');
    const first = parts[0];
    let rest = parts.slice(1).join('-');
    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;
      case 'shrink':
        acc.size = acc.size - rest;
        break;
      case 'left':
        acc.x = acc.x - rest;
        break;
      case 'right':
        acc.x = acc.x + rest;
        break;
      case 'up':
        acc.y = acc.y - rest;
        break;
      case 'down':
        acc.y = acc.y + rest;
        break;
      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: transformString => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute('data-fa-transform');
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

const ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute('data-fa-mask');
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(i => i.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      const maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides(providers) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    providers.missingIconAbstract = function () {
      const gChildren = [];
      const FILL = {
        fill: 'currentColor'
      };
      const ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      };

      // Ring
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });
      const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });
      const dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });
      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }
      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute('data-fa-symbol');
        const symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
const library$1 = api.library;
const icon = api.icon;

var faDollarSign = {
    prefix: 'fal',
    iconName: 'dollar-sign',
    icon: [
      320,
      512,
      [61781,128178,"dollar","usd"],
      '24',
      
      'M176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 47.5c-6.3 .1-12.6 .3-18.8 .9c-24 2-47.9 7.8-67.4 20.6C37.7 98.1 23.2 118 17.9 146c-3.8 20.3-1.9 38.2 5.7 53.7C31 215 43.1 226.5 57.1 235.4c26.7 17 63.6 26.7 97.2 35.5l1.7 .4c35.7 9.4 67.8 17.9 89.8 31.9c10.6 6.8 17.8 14.2 21.9 22.6c4 8.3 5.8 19 3 33.8c-3.9 20.7-18.4 36.4-42.9 46c-24.9 9.8-59.1 12.6-98 7c-24.4-3.6-61-12.1-91.3-25.2c-8.1-3.5-17.5 .2-21 8.4s.2 17.5 8.4 21c33.6 14.5 73.1 23.5 99.3 27.4c0 0 .1 0 .1 0c6.4 .9 12.7 1.6 18.9 2.1l0 49.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48.6c23.2-.7 44.8-4.7 63.4-11.9c32-12.5 56.2-35.7 62.7-69.9c3.8-20.3 1.9-38.2-5.7-53.7c-7.4-15.3-19.6-26.8-33.5-35.6c-26.7-17-63.6-26.7-97.2-35.5l-1.7-.4c-35.7-9.4-67.8-17.9-89.8-31.9c-10.6-6.8-17.8-14.2-21.9-22.6c-4-8.3-5.8-19-3-33.8c3.6-19.3 13.1-31.8 26-40.2c13.4-8.8 31.5-13.7 52.6-15.5c42.3-3.5 91.3 6 124.3 14c8.6 2.1 17.2-3.2 19.3-11.8s-3.2-17.2-11.8-19.3c-21.9-5.3-52.1-11.7-83.8-14.4L176 16z'
      
    ]
  };

  
    var faDollar = faDollarSign;
  
    var faUsd = faDollarSign;
  

  
  

  var faPrint = {
    prefix: 'fal',
    iconName: 'print',
    icon: [
      512,
      512,
      [9113,128424,128438],
      'f02f',
      
      'M96 160l-32 0 0-96C64 28.7 92.7 0 128 0L357.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3l0 69.5-32 0 0-69.5c0-8.5-3.4-16.6-9.4-22.6L380.1 41.4c-6-6-14.1-9.4-22.6-9.4L128 32c-17.7 0-32 14.3-32 32l0 96zm352 64L64 224c-17.7 0-32 14.3-32 32l0 128 32 0 0-32c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 32 32 0 0-128c0-17.7-14.3-32-32-32zm0 192l0 64c0 17.7-14.3 32-32 32L96 512c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32L0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 128c0 17.7-14.3 32-32 32l-32 0zM96 352l0 128 320 0 0-128L96 352zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'
      
    ]
  };

  

  
  

  var faCircleXmark = {
    prefix: 'fal',
    iconName: 'circle-xmark',
    icon: [
      512,
      512,
      [61532,"times-circle","xmark-circle"],
      'f057',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z'
      
    ]
  };

  
    var faTimesCircle = faCircleXmark;
  
    var faXmarkCircle = faCircleXmark;
  

  
  

  var faTriangleExclamation = {
    prefix: 'fal',
    iconName: 'triangle-exclamation',
    icon: [
      512,
      512,
      [9888,"exclamation-triangle","warning"],
      'f071',
      
      'M34.5 420.4c-1.6 2.8-2.5 6-2.5 9.3c0 10.2 8.2 18.4 18.4 18.4l411.2 0c10.2 0 18.4-8.2 18.4-18.4c0-3.3-.9-6.4-2.5-9.3L276.5 75.8C272.2 68.5 264.4 64 256 64s-16.2 4.5-20.5 11.8L34.5 420.4zM6.9 404.2l201-344.6C217.9 42.5 236.2 32 256 32s38.1 10.5 48.1 27.6l201 344.6c4.5 7.7 6.9 16.5 6.9 25.4c0 27.8-22.6 50.4-50.4 50.4L50.4 480C22.6 480 0 457.4 0 429.6c0-8.9 2.4-17.7 6.9-25.4zM256 160c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zM232 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
      
    ]
  };

  
    var faExclamationTriangle = faTriangleExclamation;
  
    var faWarning = faTriangleExclamation;
  

  
  

  var faBookOpen = {
    prefix: 'fal',
    iconName: 'book-open',
    icon: [
      576,
      512,
      [128214,128366],
      'f518',
      
      'M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1l0 311.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.5 5.5-17.2 9.6-28.2 9.9c-.2 0-.5 0-.7 0l-.2 0-.3 0c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2L0 91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM304 440c20.3-13.5 63.1-36 124-36c49.5 0 84.1 4.2 104.4 7.6c2.5 .4 5.7-.3 8.2-2.3c2.2-1.8 3.4-4 3.4-6.8l0-311.5c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19l0 357zM272 83c-37.9-12-77.4-19-116-19C105.5 64 57.4 77.5 36.9 84c-2.8 .9-4.9 3.6-4.9 7l0 312.5c0 2.7 1.1 4.9 3.1 6.5c2.2 1.8 5.1 2.5 7.6 2.1c21.3-3.6 58-8.2 105.3-8.2c56.8 0 102.8 23.7 124 36.9L272 83z'
      
    ]
  };

  

  
  

  var faCartFlatbedBoxes = {
    prefix: 'fal',
    iconName: 'cart-flatbed-boxes',
    icon: [
      640,
      512,
      ["dolly-flatbed-alt"],
      'f475',
      
      'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l64 0c8.8 0 16 7.2 16 16l0 320c0 26.5 21.5 48 48 48l24.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32l177.1 0c-5.4 9.4-8.6 20.3-8.6 32c0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32l56.6 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0-288 0-80 0c-8.8 0-16-7.2-16-16l0-320c0-26.5-21.5-48-48-48L16 0zM544 448a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM224 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-416l128 0 0 224-128 0 0-224zm-32 0l0 224c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32zm320 0l0 64-64 0 0-64 64 0zM448 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zm0 192l128 0 0 64-128 0 0-64zm-32 0l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z'
      
    ]
  };

  
    var faDollyFlatbedAlt = faCartFlatbedBoxes;
  

  
  

  var faCheck = {
    prefix: 'fal',
    iconName: 'check',
    icon: [
      448,
      512,
      [10003,10004],
      'f00c',
      
      'M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z'
      
    ]
  };

  

  
  

  var faUserPlus = {
    prefix: 'fal',
    iconName: 'user-plus',
    icon: [
      640,
      512,
      [],
      'f234',
      
      'M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 80l91.4 0c80 0 145 64.3 146.3 144L32 480c1.2-79.7 66.2-144 146.3-144zm0-32C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM512 304c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 80z'
      
    ]
  };

  

  
  

  var faDesktop = {
    prefix: 'fal',
    iconName: 'desktop',
    icon: [
      576,
      512,
      [61704,128421,"desktop-alt"],
      'f390',
      
      'M512 32L64 32C46.3 32 32 46.3 32 64l0 192 512 0 0-192c0-17.7-14.3-32-32-32zm64 224l0 32 0 64c0 35.3-28.7 64-64 64l-149.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-72 0-144 0-72 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64L64 416c-35.3 0-64-28.7-64-64l0-64 0-32L0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 192zM32 288l0 64c0 17.7 14.3 32 32 32l167.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L512 384c17.7 0 32-14.3 32-32l0-64L32 288zM234.9 480l106.2 0-10.7-64-84.9 0-10.7 64z'
      
    ]
  };

  
    var faDesktopAlt = faDesktop;
  

  
  

  var faCalendar = {
    prefix: 'fal',
    iconName: 'calendar',
    icon: [
      448,
      512,
      [128197,128198],
      'f133',
      
      'M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32z'
      
    ]
  };

  

  
  

  var faBuilding = {
    prefix: 'fal',
    iconName: 'building',
    icon: [
      384,
      512,
      [61687,127970],
      'f1ad',
      
      'M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM224 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zm-96 96l-64 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-64 0-32 0-64 0-32 0zM64 120c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm32 8l0 32 32 0 0-32-32 0zM248 96l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm8 64l32 0 0-32-32 0 0 32zM64 248c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm32 8l0 32 32 0 0-32-32 0zm152-32l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm8 64l32 0 0-32-32 0 0 32z'
      
    ]
  };

  

  
  

  var faSunBright = {
    prefix: 'fal',
    iconName: 'sun-bright',
    icon: [
      512,
      512,
      ["sun-alt"],
      'e28f',
      
      'M256 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM0 256c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16zm400 0c0-8.8 7.2-16 16-16l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16zM256 400c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM75 75c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6zm0 362c-6.2-6.2-6.2-16.4 0-22.6l56.6-56.6c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L97.6 437c-6.2 6.2-16.4 6.2-22.6 0zM357.8 154.2c-6.2-6.2-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.6 0zm0 203.6c6.2-6.2 16.4-6.2 22.6 0L437 414.4c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z'
      
    ]
  };

  
    var faSunAlt = faSunBright;
  

  
  

  var faChevronRight = {
    prefix: 'fal',
    iconName: 'chevron-right',
    icon: [
      320,
      512,
      [9002],
      'f054',
      
      'M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z'
      
    ]
  };

  

  
  

  var faChevronLeft = {
    prefix: 'fal',
    iconName: 'chevron-left',
    icon: [
      320,
      512,
      [9001],
      'f053',
      
      'M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z'
      
    ]
  };

  

  
  

  var faSignHanging = {
    prefix: 'fal',
    iconName: 'sign-hanging',
    icon: [
      512,
      512,
      ["sign"],
      'f4d9',
      
      'M80 0c8.8 0 16 7.2 16 16l0 48 400 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 96l0 400c0 8.8-7.2 16-16 16s-16-7.2-16-16L64 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l48 0 0-48C64 7.2 71.2 0 80 0zm80 160l0 192 288 0 0-192-288 0zm-32 0c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192z'
      
    ]
  };

  
    var faSign = faSignHanging;
  

  
  

  var faXmark = {
    prefix: 'fal',
    iconName: 'xmark',
    icon: [
      384,
      512,
      [215,10005,10006,10060,128473,"close","multiply","remove","times"],
      'f00d',
      
      'M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z'
      
    ]
  };

  
    var faClose = faXmark;
  
    var faMultiply = faXmark;
  
    var faRemove = faXmark;
  
    var faTimes = faXmark;
  

  
  

  var faPlus = {
    prefix: 'fal',
    iconName: 'plus',
    icon: [
      448,
      512,
      [10133,61543,"add"],
      '2b',
      
      'M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176L32 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l176 0 0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0 0-176z'
      
    ]
  };

  
    var faAdd = faPlus;
  

  
  

  var faBarsFilter = {
    prefix: 'fal',
    iconName: 'bars-filter',
    icon: [
      448,
      512,
      [],
      'e0ad',
      
      'M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM64 240c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16zM288 400c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0c8.8 0 16 7.2 16 16z'
      
    ]
  };

  

  
  

  var faCopy = {
    prefix: 'fal',
    iconName: 'copy',
    icon: [
      448,
      512,
      [],
      'f0c5',
      
      'M384 352l-160 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l108.1 0c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3L416 320c0 17.7-14.3 32-32 32zM433.9 81.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L224 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-32-32 0 0 32c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0 0-32-64 0z'
      
    ]
  };

  

  
  

  var faTruckFast = {
    prefix: 'fal',
    iconName: 'truck-fast',
    icon: [
      640,
      512,
      ["shipping-fast"],
      'f48b',
      
      'M128 32l224 0c17.7 0 32 14.3 32 32l0 320-133.5 0c-13.2-37.3-48.7-64-90.5-64c-24.6 0-47 9.2-64 24.4L96 288l-32 0 0 96 0 32c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-148.2c0-11.5-4.1-22.5-11.6-31.2l-78.7-91.8C508.6 102.1 495.3 96 481.3 96L416 96l0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 32L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 96l0-32c0-17.7 14.3-32 32-32zM570.9 224L416 224l0-96 65.3 0c4.7 0 9.1 2 12.1 5.6L570.9 224zM416 256l160 0 0 128-5.5 0c-13.2-37.3-48.7-64-90.5-64c-24.6 0-47 9.2-64 24.4l0-88.4zM96 416a64 64 0 1 1 128 0A64 64 0 1 1 96 416zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM48 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 160zM16 224c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 224z'
      
    ]
  };

  
    var faShippingFast = faTruckFast;
  

  
  

  var faCarBurst = {
    prefix: 'fal',
    iconName: 'car-burst',
    icon: [
      640,
      512,
      ["car-crash"],
      'f5e1',
      
      'M190.5 17.3C187.9 11.6 182.2 8 176 8s-11.9 3.6-14.5 9.3L129.4 87.2 54.7 68.7c-6.1-1.5-12.5 .7-16.3 5.6s-4.6 11.6-1.8 17.2l34.6 68.6L10.3 206.9c-5 3.8-7.2 10.2-5.8 16.2s6.2 10.8 12.3 12.1L92 251l-1.4 76.8c-.1 6.2 3.4 12 9.1 14.7s12.3 1.9 17.1-2.1l25.7-21.3c.3-2.9 .8-5.8 1.6-8.7l11.8-43.9-32.7 27 1-55.3c.1-7.7-5.2-14.4-12.7-15.9L57.4 211.1l43.8-33.7c6.1-4.7 8-13 4.5-19.9L80.9 108.1l53.7 13.3c7.5 1.8 15.2-1.9 18.4-8.9L176 62.3l23.1 50.2c3.2 7 10.9 10.7 18.4 8.9l48.2-11.9 23.2-38.7L222.6 87.2 190.5 17.3zM380.9 86.9l164.4 44c13.8 3.7 23.5 16.1 23.7 30.4l1.3 75.7-264-70.7 38.9-64.9c7.3-12.3 21.9-18.2 35.7-14.5zm-63.2-2l-46.2 77c-32.6 2.9-61.4 25.6-70.3 59L175 318.8c-.3 1.3-.6 2.6-.7 3.8l-.3-.1L159.1 378c-2.7 10 3.2 20.2 13.2 22.9s20.2-3.2 22.9-13.2l9.7-36 360.5 96.6-9.7 36.1c-2.7 10 3.2 20.2 13.2 22.9s20.2-3.2 22.9-13.2l15.4-57.5c0 0 0 0-.1 0c.2-.6 .4-1.1 .5-1.7l26.2-97.8c8.9-33.4-4.6-67.5-31.4-86.3L601 160.8c-.5-28.6-19.8-53.4-47.4-60.8L389.2 56c-27.6-7.4-56.8 4.4-71.5 28.9zM569 269.8c25.6 6.9 40.8 33.2 33.9 58.8l-24.1 90.1L208 319.3l24.1-90.1c6.9-25.6 33.2-40.8 58.8-33.9l278 74.5zM278.3 294a28 28 0 1 0 14.5-54.1A28 28 0 1 0 278.3 294zm286.6 47.8a28 28 0 1 0 -54.1-14.5 28 28 0 1 0 54.1 14.5z'
      
    ]
  };

  
    var faCarCrash = faCarBurst;
  

  
  

  var faMegaphone = {
    prefix: 'fal',
    iconName: 'megaphone',
    icon: [
      576,
      512,
      [128227],
      'f675',
      
      'M560 32c-8.8 0-16 7.2-16 16l0 11.5L32 187.5 32 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 19.5L0 208l0 96 0 12.5L0 336c0 8.8 7.2 16 16 16s16-7.2 16-16l0-11.5 131.7 32.9c-2.4 8.4-3.7 17.4-3.7 26.6c0 53 43 96 96 96c46.2 0 84.7-32.6 93.9-76L544 452.5l0 11.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24 0-368 0-24c0-8.8-7.2-16-16-16zM544 419.5L32 291.5l0-71 512-128 0 327zM192 384c0-6.5 1-12.9 2.8-18.8l124 31C313.1 425.7 287.2 448 256 448c-35.3 0-64-28.7-64-64z'
      
    ]
  };

  

  
  

  var faListCheck = {
    prefix: 'fal',
    iconName: 'list-check',
    icon: [
      512,
      512,
      ["tasks"],
      'f0ae',
      
      'M156.3 58.2c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2L62.9 120.3 27.3 84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zm0 160c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2L62.9 280.3 27.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zM192 96c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L208 80c-8.8 0-16 7.2-16 16zm0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM160 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0c-8.8 0-16 7.2-16 16zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'
      
    ]
  };

  
    var faTasks = faListCheck;
  

  
  

  var faChevronDown = {
    prefix: 'fal',
    iconName: 'chevron-down',
    icon: [
      512,
      512,
      [],
      'f078',
      
      'M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z'
      
    ]
  };

  

  
  

  var faMagnifyingGlass = {
    prefix: 'fal',
    iconName: 'magnifying-glass',
    icon: [
      512,
      512,
      [128269,"search"],
      'f002',
      
      'M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z'
      
    ]
  };

  
    var faSearch = faMagnifyingGlass;
  

  
  

  var faTimer = {
    prefix: 'fal',
    iconName: 'timer',
    icon: [
      512,
      512,
      [],
      'e29e',
      
      'M256 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-79.4C388.2 40.8 480 137.7 480 256c0 123.7-100.3 224-224 224S32 379.7 32 256c0-61.9 25.1-117.8 65.6-158.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C28.7 121.3 0 185.3 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM171.3 148.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96z'
      
    ]
  };

  

  
  

  var faGaugeHigh = {
    prefix: 'fal',
    iconName: 'gauge-high',
    icon: [
      512,
      512,
      [62461,"tachometer-alt","tachometer-alt-fast"],
      'f625',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM280 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-18.6-7.9-35.3-20.5-47l82.6-153.4c4.2-7.8 1.3-17.5-6.5-21.7s-17.5-1.3-21.7 6.5L271.3 289.8c-4.9-1.2-10-1.8-15.3-1.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zM168 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM96 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm344-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z'
      
    ]
  };

  
    var faTachometerAlt = faGaugeHigh;
  
    var faTachometerAltFast = faGaugeHigh;
  

  
  

  var faLocationDot = {
    prefix: 'fal',
    iconName: 'location-dot',
    icon: [
      384,
      512,
      ["map-marker-alt"],
      'f3c5',
      
      'M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z'
      
    ]
  };

  
    var faMapMarkerAlt = faLocationDot;
  

  
  

  var faBell = {
    prefix: 'fal',
    iconName: 'bell',
    icon: [
      448,
      512,
      [61602,128276],
      'f0f3',
      
      'M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z'
      
    ]
  };

  

  
  

  var faCar = {
    prefix: 'fal',
    iconName: 'car',
    icon: [
      512,
      512,
      [128664,"automobile"],
      'f1b9',
      
      'M113.6 98.2L85.3 192.6c3.5-.4 7.1-.6 10.7-.6l320 0c3.6 0 7.2 .2 10.7 .6L398.4 98.2c-6.1-20.3-24.8-34.2-46-34.2L159.6 64c-21.2 0-39.9 13.9-46 34.2zM74.3 227.8C49.6 236.7 32 260.3 32 288l0 96 448 0 0-96c0-27.7-17.6-51.3-42.3-60.2l-.5 .1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6L96 224c-7.4 0-14.5 1.3-21.2 3.6l-.1 .3-.5-.1zm-26-23.1l.4-1.3L83 89c10.2-33.8 41.3-57 76.6-57l192.8 0c35.3 0 66.5 23.2 76.6 57l34.3 114.4 .4 1.3C492.6 221.2 512 252.3 512 288l0 96 0 16 0 16 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L32 416l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16 0-16 0-96c0-35.7 19.4-66.8 48.3-83.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
      
    ]
  };

  
    var faAutomobile = faCar;
  

  
  

  var faCreditCard = {
    prefix: 'fal',
    iconName: 'credit-card',
    icon: [
      576,
      512,
      [62083,128179,"credit-card-alt"],
      'f09d',
      
      'M64 64C46.3 64 32 78.3 32 96l0 32 512 0 0-32c0-17.7-14.3-32-32-32L64 64zM32 160l0 64 512 0 0-64L32 160zm0 96l0 160c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-160L32 256zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 368c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z'
      
    ]
  };

  
    var faCreditCardAlt = faCreditCard;
  

  
  

  var faToolbox = {
    prefix: 'fal',
    iconName: 'toolbox',
    icon: [
      512,
      512,
      [129520],
      'f552',
      
      'M176 64l160 0c8.8 0 16 7.2 16 16l0 48-192 0 0-48c0-8.8 7.2-16 16-16zM128 80l0 48-21.5 0c-17 0-33.3 6.7-45.3 18.7L18.7 189.3C6.7 201.3 0 217.5 0 234.5L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-181.5c0-17-6.7-33.3-18.7-45.3l-42.5-42.5c-12-12-28.3-18.7-45.3-18.7L384 128l0-48c0-26.5-21.5-48-48-48L176 32c-26.5 0-48 21.5-48 48zm16 80l224 0 37.5 0c8.5 0 16.6 3.4 22.6 9.4l42.5 42.5c6 6 9.4 14.1 9.4 22.6l0 85.5-128 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-128 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32L32 320l0-85.5c0-8.5 3.4-16.6 9.4-22.6l42.5-42.5c6-6 14.1-9.4 22.6-9.4l37.5 0zM32 352l128 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 128 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 128 0 0 64c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-64z'
      
    ]
  };

  

  
  

  var faEllipsis = {
    prefix: 'fal',
    iconName: 'ellipsis',
    icon: [
      448,
      512,
      ["ellipsis-h"],
      'f141',
      
      'M416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM64 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64z'
      
    ]
  };

  
    var faEllipsisH = faEllipsis;
  

  
  

  var faMountains = {
    prefix: 'fal',
    iconName: 'mountains',
    icon: [
      640,
      512,
      [9968],
      'f6fd',
      
      'M480 424.1c0 13.2-10.7 23.9-23.9 23.9L55.9 448C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7L252.4 66c.8-1.3 2.2-2 3.6-2s2.9 .8 3.6 2L476.3 411.4c2.4 3.8 3.7 8.2 3.7 12.7zm-480 0C0 455 25 480 55.9 480l400.2 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1zM431.7 280L480 200.9 603.7 403.7c2.8 4.6 4.3 9.8 4.3 15.2c0 16.1-13 29.1-29.1 29.1l-72.2 0c3.4-7.3 5.4-15.4 5.4-23.9c0-10.5-3-20.8-8.6-29.7L431.7 280z'
      
    ]
  };

  

  
  

  var faChartMixed = {
    prefix: 'fal',
    iconName: 'chart-mixed',
    icon: [
      512,
      512,
      ["analytics"],
      'f643',
      
      'M507.8 37.2c5.9 6.5 5.5 16.7-1.1 22.6l-176 160c-6.3 5.7-16 5.5-22.1-.5L190.4 101 25.4 220.9c-7.1 5.2-17.2 3.6-22.4-3.5s-3.6-17.2 3.5-22.4l176-128c6.4-4.6 15.2-3.9 20.7 1.6L320.5 185.9 485.2 36.2c6.5-5.9 16.7-5.5 22.6 1.1zM80 432l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16zM64 320c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48zm144-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160zM336 432l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16zM320 288c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm144-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160z'
      
    ]
  };

  
    var faAnalytics = faChartMixed;
  

  
  

  var faSquareArrowLeft = {
    prefix: 'fal',
    iconName: 'square-arrow-left',
    icon: [
      448,
      512,
      ["arrow-square-left"],
      'f33a',
      
      'M32 416c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320zm32 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm36.7-235.3l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L150.6 240 336 240c8.8 0 16 7.2 16 16s-7.2 16-16 16l-185.4 0 68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6z'
      
    ]
  };

  
    var faArrowSquareLeft = faSquareArrowLeft;
  

  
  

  var faNotes = {
    prefix: 'fal',
    iconName: 'notes',
    icon: [
      512,
      512,
      [],
      'e202',
      
      'M128 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 160-80 0c-26.5 0-48 21.5-48 48l0 80-160 0c-17.7 0-32-14.3-32-32l0-256zM446.2 288c-1.6 4.5-4.2 8.7-7.6 12.1l-74.5 74.5c-3.4 3.4-7.6 6-12.1 7.6l0-78.2c0-8.8 7.2-16 16-16l78.2 0zM96 96l0 256c0 35.3 28.7 64 64 64l181.5 0c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM320 496c0-8.8-7.2-16-16-16l-176 0c-53 0-96-43-96-96l0-240c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l176 0c8.8 0 16-7.2 16-16z'
      
    ]
  };

  

  
  

  var faUpload = {
    prefix: 'fal',
    iconName: 'upload',
    icon: [
      512,
      512,
      [],
      'f093',
      
      'M272 54.6L272 368c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-313.4L139.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L272 54.6zM208 352L64 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-144 0 0-32 144 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l144 0 0 32zm176 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
      
    ]
  };

  

  
  

  var faHouse = {
    prefix: 'fal',
    iconName: 'house',
    icon: [
      576,
      512,
      [63498,63500,127968,"home","home-alt","home-lg-alt"],
      'f015',
      
      'M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-197 37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432l0-225.3L288 37.3 480 206.7 480 432c0 26.5-21.5 48-48 48l-64 0 0-160c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 160-64 0c-26.5 0-48-21.5-48-48zm144 48l0-160 96 0 0 160-96 0z'
      
    ]
  };

  
    var faHome = faHouse;
  
    var faHomeAlt = faHouse;
  
    var faHomeLgAlt = faHouse;
  

  
  

  var faDownload = {
    prefix: 'fal',
    iconName: 'download',
    icon: [
      512,
      512,
      [],
      'f019',
      
      'M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 313.4L139.3 228.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 329.4 272 16zM140.1 320L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-76.1 0-32 32L448 352c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l108.1 0-32-32zM432 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z'
      
    ]
  };

  

  
  

  var faCloudRain = {
    prefix: 'fal',
    iconName: 'cloud-rain',
    icon: [
      512,
      512,
      [9926,127783],
      'f73d',
      
      'M96 112c0-44.2 35.8-80 80-80c32.2 0 59.9 19 72.6 46.4c2.2 4.8 6.6 8.1 11.8 9s10.4-.8 14.1-4.5c11.6-11.7 27.7-19 45.5-19c35.3 0 64 28.7 64 64l0 .3c0 4.5 1.9 8.8 5.2 11.8s7.8 4.5 12.2 4.1c2.2-.2 4.3-.3 6.6-.3c39.8 0 72 32.2 72 72s-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72c0-33.5 22.9-61.7 53.9-69.7c8.2-2.1 13.3-10.3 11.7-18.6c-1-5.1-1.5-10.3-1.5-15.7zM512 216c0-55.2-43-100.3-97.3-103.8C407.2 66.7 367.6 32 320 32c-19.3 0-37.3 5.7-52.4 15.5C247.3 18.8 213.9 0 176 0C114.1 0 64 50.1 64 112c0 2.6 .1 5.3 .3 7.9C26.6 135.5 0 172.6 0 216c0 57.4 46.6 104 104 104l304 0c57.4 0 104-46.6 104-104zM82.3 451.9L96 426.7l13.7 25.2c1.5 2.8 2.3 5.9 2.3 9.1l0 3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-3c0-3.2 .8-6.3 2.3-9.1zM54.2 436.6C50.1 444.1 48 452.5 48 461l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3l-23.6-43.5-.4-.8-5.4-9.9L102.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4l-5.6 10.4-5.4 9.9-.4 .8L54.2 436.6zm188.1 15.3L256 426.7l13.7 25.2c1.5 2.8 2.3 5.9 2.3 9.1l0 3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-3c0-3.2 .8-6.3 2.3-9.1zm-28.1-15.3c-4.1 7.5-6.2 15.8-6.2 24.3l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3l-23.6-43.5-.4-.8-5.4-9.9L262.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4l-5.6 10.4-5.4 9.9-.4 .8-23.6 43.5zm201.8-10l13.7 25.2c1.5 2.8 2.3 5.9 2.3 9.1l0 3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-3c0-3.2 .8-6.3 2.3-9.1L416 426.7zm-18.2-33.5l-23.6 43.5c-4.1 7.5-6.2 15.8-6.2 24.3l0 3c0 26.5 21.5 48 48 48s48-21.5 48-48l0-3c0-8.5-2.1-16.9-6.2-24.3l-23.6-43.5-.4-.8-5.4-9.9L422.8 372c-1.3-2.5-3.9-4-6.8-4s-5.4 1.5-6.8 4l-5.6 10.4-5.4 9.9-.4 .8z'
      
    ]
  };

  

  
  

  var faClock = {
    prefix: 'fal',
    iconName: 'clock',
    icon: [
      512,
      512,
      [128339,"clock-four"],
      'f017',
      
      'M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4 272 112c0-8.8-7.2-16-16-16s-16 7.2-16 16z'
      
    ]
  };

  
    var faClockFour = faClock;
  

  
  

  var faCartShopping = {
    prefix: 'fal',
    iconName: 'cart-shopping',
    icon: [
      576,
      512,
      [128722,"shopping-cart"],
      'f07a',
      
      'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2L496 384c8.8 0 16-7.2 16-16s-7.2-16-16-16l-304.8 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l314.6 0c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zm90.1 64l433.4 0L497.6 231.8C494 246 481.2 256 466.5 256l-321.1 0L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z'
      
    ]
  };

  
    var faShoppingCart = faCartShopping;
  

  
  

  var faGear = {
    prefix: 'fal',
    iconName: 'gear',
    icon: [
      512,
      512,
      [9881,"cog"],
      'f013',
      
      'M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.2-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.2-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z'
      
    ]
  };

  
    var faCog = faGear;
  

  
  

  var faMinus = {
    prefix: 'fal',
    iconName: 'minus',
    icon: [
      448,
      512,
      [8211,8722,10134,"subtract"],
      'f068',
      
      'M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z'
      
    ]
  };

  
    var faSubtract = faMinus;
  

  
  

  var faArrowRotateLeft = {
    prefix: 'fal',
    iconName: 'arrow-rotate-left',
    icon: [
      512,
      512,
      [8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],
      'f0e2',
      
      'M48 192c-8.8 0-16-7.2-16-16L32 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-79.9 0-150-41.8-189.7-104.8C59.8 364.8 67.7 352 80 352c6 0 11.4 3.2 14.7 8.2C128.9 413 188.4 448 256 448c106 0 192-86 192-192s-86-192-192-192c-71.1 0-133.1 38.6-166.3 96l86.3 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 192z'
      
    ]
  };

  
    var faArrowLeftRotate = faArrowRotateLeft;
  
    var faArrowRotateBack = faArrowRotateLeft;
  
    var faArrowRotateBackward = faArrowRotateLeft;
  
    var faUndo = faArrowRotateLeft;
  

  
  

  var faCircleInfo = {
    prefix: 'fal',
    iconName: 'circle-info',
    icon: [
      512,
      512,
      ["info-circle"],
      'f05a',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z'
      
    ]
  };

  
    var faInfoCircle = faCircleInfo;
  

  
  

  var faEnvelope = {
    prefix: 'fal',
    iconName: 'envelope',
    icon: [
      512,
      512,
      [9993,61443,128386],
      'f0e0',
      
      'M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z'
      
    ]
  };

  

  
  

  var faTag = {
    prefix: 'fal',
    iconName: 'tag',
    icon: [
      448,
      512,
      [127991],
      'f02b',
      
      'M32 229.5L32 80c0-8.8 7.2-16 16-16l149.5 0c8.5 0 16.6 3.4 22.6 9.4l176 176c12.5 12.5 12.5 32.8 0 45.3L262.6 428.1c-12.5 12.5-32.8 12.5-45.3 0l-176-176L18.7 274.7l22.6-22.6c-6-6-9.4-14.1-9.4-22.6zm-32 0c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80L0 229.5zM112 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z'
      
    ]
  };

  

  
  

  var faFilePdf = {
    prefix: 'fal',
    iconName: 'file-pdf',
    icon: [
      512,
      512,
      [],
      'f1c1',
      
      'M64 480l48 0 0 32-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 304l-32 0 0-112-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z'
      
    ]
  };

  

  
  

  var faTrash = {
    prefix: 'fal',
    iconName: 'trash',
    icon: [
      448,
      512,
      [],
      'f1f8',
      
      'M177.7 32l92.5 0c5.5 0 10.6 2.8 13.6 7.5L299.1 64 148.9 64l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM336.9 64L311 22.6C302.2 8.5 286.8 0 270.3 0L177.7 0C161.2 0 145.8 8.5 137 22.6L111.1 64 64.1 64 32 64 16 64C7.2 64 0 71.2 0 80s7.2 16 16 16l18.3 0L59.8 452.6C62.1 486.1 90 512 123.6 512l200.8 0c33.6 0 61.4-25.9 63.8-59.4L413.7 96 432 96c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32.1 0-47.1 0zm44.8 32L356.3 450.3C355.1 467 341.2 480 324.4 480l-200.8 0c-16.8 0-30.7-13-31.9-29.7L66.4 96l315.3 0z'
      
    ]
  };

  

  
  

  var faPhone = {
    prefix: 'fal',
    iconName: 'phone',
    icon: [
      512,
      512,
      [128222,128379],
      'f095',
      
      'M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64c0 0 0 0 0 0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4c0 0 0 0 0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z'
      
    ]
  };

  

  
  

  var faFloppyDisk = {
    prefix: 'fal',
    iconName: 'floppy-disk',
    icon: [
      448,
      512,
      [128190,128426,"save"],
      'f0c7',
      
      'M32 96c0-17.7 14.3-32 32-32l0 96c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-94.2c4.5 1.6 8.7 4.2 12.1 7.6l74.5 74.5c6 6 9.4 14.1 9.4 22.6L416 416c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM96 64l192 0 0 96L96 160l0-96zM0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-245.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96zM272 320a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z'
      
    ]
  };

  
    var faSave = faFloppyDisk;
  

  
  

  var faFloppyDisks = {
    prefix: 'fal',
    iconName: 'floppy-disks',
    icon: [
      512,
      512,
      [],
      'e183',
      
      'M128 352c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-213.5c0-8.5-3.4-16.6-9.4-22.6L396.1 41.4c-3.4-3.4-7.6-6-12.1-7.6l0 78.2c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-80c-17.7 0-32 14.3-32 32l0 288zM352 32L192 32l0 80 160 0 0-80zM192 0L373.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L512 352c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64l32 0zM32 112l0 256c0 61.9 50.1 112 112 112l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-256 0C64.5 512 0 447.5 0 368L0 112c0-8.8 7.2-16 16-16s16 7.2 16 16zM296 304a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-112a72 72 0 1 1 0 144 72 72 0 1 1 0-144z'
      
    ]
  };

  

  
  

  var faEye = {
    prefix: 'fal',
    iconName: 'eye',
    icon: [
      576,
      512,
      [128065],
      'f06e',
      
      'M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z'
      
    ]
  };

  

  
  

  var faCircleQuestion = {
    prefix: 'fal',
    iconName: 'circle-question',
    icon: [
      512,
      512,
      [62108,"question-circle"],
      'f059',
      
      'M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168.7-86.2c6.5-24.6 28.7-41.8 54.2-41.8l57.1 0c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L272 268.3l0 19.7c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-29.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3l-57.1 0c-10.9 0-20.5 7.4-23.2 17.9l-.2 .7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM232 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
      
    ]
  };

  
    var faQuestionCircle = faCircleQuestion;
  

  
  

  var faFileImage = {
    prefix: 'fal',
    iconName: 'file-image',
    icon: [
      384,
      512,
      [128443],
      'f1c5',
      
      'M352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM72 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM181.3 368.9c-2.9 4.3-7.7 7-12.9 7.1s-10.1-2.2-13.2-6.4l-14.4-19.3L99 416l186.2 0L219.7 311.3l-38.4 57.6zM219.9 272c8 0 15.5 4.1 19.8 11l76 121.5c2.8 4.5 4.3 9.7 4.3 15.1c0 15.7-12.7 28.4-28.4 28.4L92.4 448C76.7 448 64 435.3 64 419.6c0-5.4 1.5-10.7 4.4-15.2l51.8-81.4c4.3-6.8 11.9-10.9 19.9-10.9c7.4 0 14.4 3.5 18.9 9.4l8.1 10.9 33.3-49.9c4.3-6.5 11.6-10.4 19.4-10.4z'
      
    ]
  };

  

  
  

  var faWrench = {
    prefix: 'fal',
    iconName: 'wrench',
    icon: [
      512,
      512,
      [128295],
      'f0ad',
      
      'M480 160c0-10.7-1.3-21.1-3.8-31l-48.9 48.9c-9 9-21.2 14.1-33.9 14.1L368 192c-26.5 0-48-21.5-48-48l0-25.4c0-12.7 5.1-24.9 14.1-33.9L383 35.8c-9.9-2.5-20.3-3.8-31-3.8c-70.7 0-128 57.3-128 128c0 9.2 1 18.1 2.8 26.7c3.2 15.2-.6 32.4-13.1 44.9L45.8 399.4C37 408.3 32 420.3 32 432.8C32 458.9 53.1 480 79.2 480c12.5 0 24.5-5 33.4-13.8L280.5 298.3c12.4-12.4 29.7-16.3 44.9-13.1c8.6 1.8 17.5 2.8 26.7 2.8c70.7 0 128-57.3 128-128zm32 0c0 88.4-71.6 160-160 160c-11.4 0-22.6-1.2-33.3-3.5c-5.6-1.2-11.5 .3-15.6 4.4L135.2 488.8c-14.9 14.9-35 23.2-56 23.2C35.5 512 0 476.5 0 432.8c0-21 8.3-41.1 23.2-56L191.1 208.9c4.1-4.1 5.6-10 4.4-15.6c-2.3-10.7-3.5-21.9-3.5-33.3C192 71.6 263.6 0 352 0c24.8 0 48.3 5.7 69.3 15.7c9.2 4.4 10.5 16.5 3.3 23.7l-67.9 67.9c-3 3-4.7 7.1-4.7 11.3l0 25.4c0 8.8 7.2 16 16 16l25.4 0c4.2 0 8.3-1.7 11.3-4.7l67.9-67.9c7.2-7.2 19.3-5.9 23.7 3.3c10.1 21 15.7 44.5 15.7 69.3zM88 408a16 16 0 1 1 0 32 16 16 0 1 1 0-32z'
      
    ]
  };

  

  
  

  var faMoneyBillTrendUp = {
    prefix: 'fal',
    iconName: 'money-bill-trend-up',
    icon: [
      512,
      512,
      [],
      'e529',
      
      'M352 16c0 8.8 7.2 16 16 16l57.4 0L287.2 170.2 186.4 83.9c-6-5.1-14.8-5.1-20.8 0l-112 96c-6.7 5.8-7.5 15.9-1.7 22.6s15.9 7.5 22.6 1.7L176 117.1l101.6 87.1c6.3 5.4 15.8 5.1 21.7-.8L448 54.6l0 57.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L368 0c-8.8 0-16 7.2-16 16zM480 304l0 32c-26.5 0-48-21.5-48-48l32 0c8.8 0 16 7.2 16 16zM112 288l288 0c0 44.2 35.8 80 80 80l0 32c-44.2 0-80 35.8-80 80l-288 0c0-44.2-35.8-80-80-80l0-32c44.2 0 80-35.8 80-80zM432 480c0-26.5 21.5-48 48-48l0 32c0 8.8-7.2 16-16 16l-32 0zM32 432c26.5 0 48 21.5 48 48l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 288c0 26.5-21.5 48-48 48l0-32c0-8.8 7.2-16 16-16l32 0zM48 256c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L48 256zM224 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z'
      
    ]
  };

  

  
  

  var faLockOpen = {
    prefix: 'fal',
    iconName: 'lock-open',
    icon: [
      576,
      512,
      [],
      'f3c1',
      
      'M352 128c0-53 43-96 96-96s96 43 96 96l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L80 192c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-16 0 0-64zm-16 96l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l256 0z'
      
    ]
  };

  

  
  

  var faFileExcel = {
    prefix: 'fal',
    iconName: 'file-excel',
    icon: [
      384,
      512,
      [],
      'f1c3',
      
      'M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zm85.1 246.8c-5.1-7.2-15-9-22.3-3.9s-9 15-3.9 22.3L172.5 336l-49.6 70.8c-5.1 7.2-3.3 17.2 3.9 22.3s17.2 3.3 22.3-3.9L192 363.9l42.9 61.3c5.1 7.2 15 9 22.3 3.9s9-15 3.9-22.3L211.5 336l49.6-70.8c5.1-7.2 3.3-17.2-3.9-22.3s-17.2-3.3-22.3 3.9L192 308.1l-42.9-61.3z'
      
    ]
  };

  

  
  

  var faArrowUpRightFromSquare = {
    prefix: 'fal',
    iconName: 'arrow-up-right-from-square',
    icon: [
      512,
      512,
      ["external-link"],
      'f08e',
      
      'M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z'
      
    ]
  };

  
    var faExternalLink = faArrowUpRightFromSquare;
  

  
  

  var faMoonStars = {
    prefix: 'fal',
    iconName: 'moon-stars',
    icon: [
      512,
      512,
      [],
      'f755',
      
      'M304 0c8.8 0 16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16zM156.6 163.9C85.3 180 32 243.8 32 320.2c0 88.5 71.6 160.2 159.8 160.2c25.7 0 50-6.1 71.5-16.9c-87.6-11.3-155.1-86.4-155.1-177.2c0-47.4 18.4-90.4 48.4-122.4zM0 320.2C0 214.1 85.8 128 191.8 128c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.2c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4C85.8 512.4 0 426.3 0 320.2zM432 160l0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z'
      
    ]
  };

  

  
  

  var faFilter = {
    prefix: 'fal',
    iconName: 'filter',
    icon: [
      512,
      512,
      [],
      'f0b0',
      
      'M0 71.5C0 49.7 17.7 32 39.5 32l432.9 0C494.3 32 512 49.7 512 71.5c0 9.2-3.2 18.1-9.1 25.2L320 317.8l0 128.4c0 18.7-15.2 33.9-33.9 33.9c-7.5 0-14.8-2.5-20.8-7.1l-61-47.4c-7.8-6.1-12.4-15.4-12.4-25.3l0-82.4L9.1 96.7C3.2 89.6 0 80.7 0 71.5zM39.5 64c-4.2 0-7.5 3.4-7.5 7.5c0 1.8 .6 3.4 1.7 4.8L220.3 301.8c2.4 2.9 3.7 6.5 3.7 10.2l0 88.2 61 47.4c.3 .3 .7 .4 1.1 .4c1 0 1.9-.8 1.9-1.9L288 312c0-3.7 1.3-7.3 3.7-10.2L478.3 76.3c1.1-1.3 1.7-3 1.7-4.8c0-4.2-3.4-7.5-7.5-7.5L39.5 64z'
      
    ]
  };

  

  
  

  var faSnowflake = {
    prefix: 'fal',
    iconName: 'snowflake',
    icon: [
      448,
      512,
      [10052,10054],
      'f2dc',
      
      'M240 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 73.4L171.3 52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L208 134.6l0 93.7-81.1-46.8-21.7-81c-2.3-8.5-11.1-13.6-19.6-11.3S72 100.2 74.3 108.7l13.4 50.1L24.2 122.1c-7.7-4.4-17.4-1.8-21.9 5.9s-1.8 17.4 5.9 21.9l63.5 36.7L21.6 200C13 202.3 8 211 10.3 219.6s11.1 13.6 19.6 11.3l81-21.7L192 256l-81.1 46.8-81-21.7c-8.5-2.3-17.3 2.8-19.6 11.3S13 309.7 21.6 312l50.1 13.4L8.2 362.1C.5 366.6-2.1 376.3 2.3 384s14.2 10.3 21.9 5.9l63.5-36.7L74.3 403.3c-2.3 8.5 2.8 17.3 11.3 19.6s17.3-2.8 19.6-11.3l21.7-81L208 283.7l0 93.7-59.3 59.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 422.6l0 73.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-73.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L240 377.4l0-93.7 81.1 46.8 21.7 81c2.3 8.5 11.1 13.6 19.6 11.3s13.6-11.1 11.3-19.6l-13.4-50.1 63.5 36.7c7.7 4.4 17.4 1.8 21.9-5.9s1.8-17.4-5.9-21.9l-63.5-36.7L426.4 312c8.5-2.3 13.6-11.1 11.3-19.6s-11.1-13.6-19.6-11.3l-81 21.7L256 256l81.1-46.8 81 21.7c8.5 2.3 17.3-2.8 19.6-11.3s-2.8-17.3-11.3-19.6l-50.1-13.4 63.5-36.7c7.7-4.4 10.3-14.2 5.9-21.9s-14.2-10.3-21.9-5.9l-63.5 36.7 13.4-50.1c2.3-8.5-2.8-17.3-11.3-19.6s-17.3 2.8-19.6 11.3l-21.7 81L240 228.3l0-93.7 59.3-59.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 89.4 240 16z'
      
    ]
  };

  

  
  

  var faArrowsRotate = {
    prefix: 'fal',
    iconName: 'arrows-rotate',
    icon: [
      512,
      512,
      [128472,"refresh","sync"],
      'f021',
      
      'M69.4 210.6C89.8 126.5 165.6 64 256 64c71.1 0 133.1 38.6 166.3 96L368 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l80.7 0 15.3 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 60.6C408.8 75.5 337.5 32 256 32C149.6 32 60.5 106.2 37.7 205.6C35.5 215.2 43.1 224 53 224c7.9 0 14.6-5.7 16.5-13.4zm373.2 90.9C422.2 385.5 346.4 448 256 448c-71.1 0-133.1-38.6-166.3-96l54.5 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80.9 0-15.1 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-60.2C103.4 436.6 174.7 480 256 480c106.4 0 195.5-74.2 218.3-173.6c2.2-9.6-5.4-18.4-15.3-18.4c-7.9 0-14.6 5.7-16.5 13.4z'
      
    ]
  };

  
    var faRefresh = faArrowsRotate;
  
    var faSync = faArrowsRotate;
  

  
  

  var faFileWord = {
    prefix: 'fal',
    iconName: 'file-word',
    icon: [
      384,
      512,
      [],
      'f1c2',
      
      'M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zm39.2 235.1c-2.7-8.4-11.7-13.1-20.1-10.4s-13.1 11.7-10.4 20.1l56 176c2.2 6.8 8.5 11.3 15.6 11.1s13.2-4.9 15.1-11.8L192 300.8l32.6 119.4c1.9 6.8 8 11.6 15.1 11.8s13.4-4.4 15.6-11.1l56-176c2.7-8.4-2-17.4-10.4-20.1s-17.4 2-20.1 10.4L241.2 359.5 207.4 235.8c-1.9-7-8.2-11.8-15.4-11.8s-13.5 4.8-15.4 11.8L142.8 359.5 103.2 235.1z'
      
    ]
  };

  

  
  

  var faScroll = {
    prefix: 'fal',
    iconName: 'scroll',
    icon: [
      576,
      512,
      [128220],
      'f70e',
      
      'M32 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 288c0 44.2 35.8 80 80 80l296 0c39.8 0 72-32.2 72-72l0-56c0-22.1-18-40-40-40l-.6 0-.6 0-.6 0-.6 0-.5 0-.6 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.4 0-.5 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.5 0-.4 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.6 0-.6 0-.6 0c-22.1 0-40 17.9-40 40l0 48c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-288c0-18-6-34.6-16-48l256 0c26.5 0 48 21.5 48 48l0 176 32 0 0-176c0-44.2-35.8-80-80-80L80 32C35.8 32 0 67.8 0 112l0 72c0 22.1 17.9 40 40 40l56 0 0-32-56 0c-4.4 0-8-3.6-8-8l0-72zM504 448l-232 0c10-13.4 16-30 16-48l0-48c0-4.4 3.6-8 8-8l.6 0 .6 0 .6 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .4 0 .5 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .5 0 .4 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .6 0 .5 0 .6 0 .6 0 .6 0 .6 0c4.4 0 8 3.6 8 8l0 56c0 22.1-17.9 40-40 40z'
      
    ]
  };

  

  
  

  var faCircleChevronUp = {
    prefix: 'fal',
    iconName: 'circle-chevron-up',
    icon: [
      512,
      512,
      ["chevron-circle-up"],
      'f139',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM379.3 276.7l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 198.6 356.7 299.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z'
      
    ]
  };

  
    var faChevronCircleUp = faCircleChevronUp;
  

  
  

  var faCircleCheck = {
    prefix: 'fal',
    iconName: 'circle-check',
    icon: [
      512,
      512,
      [61533,"check-circle"],
      'f058',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z'
      
    ]
  };

  
    var faCheckCircle = faCircleCheck;
  

  
  

  var faVolume = {
    prefix: 'fal',
    iconName: 'volume',
    icon: [
      576,
      512,
      [128265,"volume-medium"],
      'f6a8',
      
      'M320 66.7L183.6 188c-2.9 2.6-6.7 4-10.6 4l-85 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l85 0c3.9 0 7.7 1.4 10.6 4L320 445.3l0-378.6zM302.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C338.7 32 352 45.3 352 61.8l0 388.4c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L166.9 352 88 352c-30.9 0-56-25.1-56-56l0-80c0-30.9 25.1-56 56-56l78.9 0L302.4 39.5zM419.2 182.4c5.3-7.1 15.3-8.5 22.4-3.2C464.9 196.7 480 224.6 480 256s-15.1 59.3-38.4 76.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4C438 295.5 448 276.9 448 256s-10-39.5-25.6-51.2c-7.1-5.3-8.5-15.3-3.2-22.4zm87-74.5C548.8 143.1 576 196.4 576 256s-27.2 112.9-69.8 148.1c-6.8 5.6-16.9 4.7-22.5-2.1s-4.7-16.9 2.1-22.5C521.4 350.1 544 305.7 544 256s-22.6-94.1-58.2-123.4c-6.8-5.6-7.8-15.7-2.1-22.5s15.7-7.8 22.5-2.1z'
      
    ]
  };

  
    var faVolumeMedium = faVolume;
  

  
  

  var faStar = {
    prefix: 'fal',
    iconName: 'star',
    icon: [
      576,
      512,
      [11088,61446],
      'f005',
      
      'M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z'
      
    ]
  };

  

  
  

  var faFileChartColumn = {
    prefix: 'fal',
    iconName: 'file-chart-column',
    icon: [
      384,
      512,
      ["file-chart-line"],
      'f659',
      
      'M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zM208 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192zm96 64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zM112 368c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z'
      
    ]
  };

  
    var faFileChartLine = faFileChartColumn;
  

  
  

  var faPersonDolly = {
    prefix: 'fal',
    iconName: 'person-dolly',
    icon: [
      512,
      512,
      [],
      'f4d0',
      
      'M56 56a24 24 0 1 1 48 0A24 24 0 1 1 56 56zm80 0A56 56 0 1 0 24 56a56 56 0 1 0 112 0zM0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-130.5L1.6 341.6c-.5-.4-1.1-.9-1.6-1.3L0 496zM60 176c7 0 13.8 1.5 20 4.2l0 139.3L39.1 292.2c-4.5-3-7.1-8-7.1-13.3L32 204c0-15.5 12.5-28 28-28zm52 38.5l37.8 58.8c5.9 9.2 16 14.7 26.9 14.7l51.8 0L254 393.7c-18 11.3-30 31.4-30 54.3c0 35.3 28.7 64 64 64c33.8 0 61.5-26.2 63.8-59.5l148-37c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L346 421c-10.2-21.9-32.3-37-58-37c-1.1 0-2.3 0-3.4 .1L231.6 164.2c-2.1-8.6-10.7-13.9-19.3-11.8s-13.9 10.7-11.8 19.3L220.8 256l-44 0-47.8-74.4C113.9 158.2 87.9 144 60 144c-33.1 0-60 26.9-60 60l0 74.9c0 16 8 31 21.4 39.9l100.2 66.8 22.7 113.5c1.7 8.7 10.2 14.3 18.8 12.6s14.3-10.2 12.6-18.8L153 379.4c-1.7-8.3-6.6-15.6-13.6-20.3L112 340.8l0-126.3zM256 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM441.2 322.3l-91.5 22.9-22.9-91.5 91.5-22.9 22.9 91.5zm31-7.8L449.4 223c-4.3-17.1-21.7-27.6-38.8-23.3L319 222.6c-17.1 4.3-27.6 21.7-23.3 38.8L318.6 353c4.3 17.1 21.7 27.6 38.8 23.3L449 353.4c17.1-4.3 27.6-21.7 23.3-38.8z'
      
    ]
  };

  

  
  

  var faBoxCheck = {
    prefix: 'fal',
    iconName: 'box-check',
    icon: [
      448,
      512,
      [],
      'f467',
      
      'M240 64l102.4 0c12.6 0 24.1 7.4 29.2 19l34.2 77L240 160l0-96zm0 128l176 0 0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224 176 0 32 0zm-32-32L42.1 160 76.3 83c5.1-11.6 16.6-19 29.2-19L208 64l0 96zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM331.3 251.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 345.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z'
      
    ]
  };

  

  
  

  var faUser = {
    prefix: 'fal',
    iconName: 'user',
    icon: [
      448,
      512,
      [62144,128100],
      'f007',
      
      'M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z'
      
    ]
  };

  

  
  

  var faBookmark = {
    prefix: 'fal',
    iconName: 'bookmark',
    icon: [
      384,
      512,
      [61591,128278],
      'f02e',
      
      'M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 441.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9L0 48zM48 32c-8.8 0-16 7.2-16 16l0 423.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4 352 48c0-8.8-7.2-16-16-16L48 32z'
      
    ]
  };

  

  
  

  var faMoneyBill = {
    prefix: 'fal',
    iconName: 'money-bill',
    icon: [
      576,
      512,
      [],
      'f0d6',
      
      'M480 96c0 35.3 28.7 64 64 64l0-32c0-17.7-14.3-32-32-32l-32 0zm-32 0L128 96c0 53-43 96-96 96l0 128c53 0 96 43 96 96l320 0c0-53 43-96 96-96l0-128c-53 0-96-43-96-96zM32 384c0 17.7 14.3 32 32 32l32 0c0-35.3-28.7-64-64-64l0 32zm512-32c-35.3 0-64 28.7-64 64l32 0c17.7 0 32-14.3 32-32l0-32zM64 96c-17.7 0-32 14.3-32 32l0 32c35.3 0 64-28.7 64-64L64 96zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM352 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z'
      
    ]
  };

  

  
  

  var faLinkSimple = {
    prefix: 'fal',
    iconName: 'link-simple',
    icon: [
      576,
      512,
      [],
      'e1cd',
      
      'M0 256C0 167.6 71.6 96 160 96l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0C89.3 128 32 185.3 32 256s57.3 128 128 128l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c88.4 0 160 71.6 160 160zM152 240l272 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-272 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z'
      
    ]
  };

  

  
  

  var faChevronUp = {
    prefix: 'fal',
    iconName: 'chevron-up',
    icon: [
      512,
      512,
      [],
      'f077',
      
      'M244.7 116.7c6.2-6.2 16.4-6.2 22.6 0l192 192c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 150.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l192-192z'
      
    ]
  };

  

  
  

  var faEyeSlash = {
    prefix: 'fal',
    iconName: 'eye-slash',
    icon: [
      640,
      512,
      [],
      'f070',
      
      'M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z'
      
    ]
  };

  

  
  

  var faPenToSquare = {
    prefix: 'fal',
    iconName: 'pen-to-square',
    icon: [
      512,
      512,
      ["edit"],
      'f044',
      
      'M454.6 45.3l12.1 12.1c12.5 12.5 12.5 32.8 0 45.3L440 129.4 382.6 72l26.7-26.7c12.5-12.5 32.8-12.5 45.3 0zM189 265.6l171-171L417.4 152l-171 171c-4.2 4.2-9.6 7.2-15.4 8.6l-65.6 15.1L180.5 281c1.3-5.8 4.3-11.2 8.6-15.4zm197.7-243L166.4 243c-8.5 8.5-14.4 19.2-17.1 30.9l-20.9 90.6c-1.2 5.4 .4 11 4.3 14.9s9.5 5.5 14.9 4.3l90.6-20.9c11.7-2.7 22.4-8.6 30.9-17.1L489.4 125.3c25-25 25-65.5 0-90.5L477.3 22.6c-25-25-65.5-25-90.5 0zM80 64C35.8 64 0 99.8 0 144L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 64z'
      
    ]
  };

  
    var faEdit = faPenToSquare;
  

  
  

  var faGasPump = {
    prefix: 'fal',
    iconName: 'gas-pump',
    icon: [
      512,
      512,
      [9981],
      'f52f',
      
      'M256 32c17.7 0 32 14.3 32 32l0 128L64 192 64 64c0-17.7 14.3-32 32-32l160 0zm32 192l0 256L64 480l0-256 224 0zM32 64l0 416-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0 224 0 32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-192 16 0c26.5 0 48 21.5 48 48l0 48c0 35.3 28.7 64 64 64s64-28.7 64-64l0-226.9c0-17.9-7.5-35.1-20.8-47.2L410.8 36.2c-6.5-6-16.6-5.5-22.6 1s-5.5 16.6 1 22.6L416 84.4l0 75.6c0 35.3 28.7 64 64 64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80l-16 0 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64zM480 192c-17.7 0-32-14.3-32-32l0-46.3 21.6 19.8c6.6 6.1 10.4 14.6 10.4 23.6l0 34.9z'
      
    ]
  };

  

  
  

  var faLock = {
    prefix: 'fal',
    iconName: 'lock',
    icon: [
      448,
      512,
      [128274],
      'f023',
      
      'M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 16 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 272c0-44.2 35.8-80 80-80l16 0zM32 272l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L80 224c-26.5 0-48 21.5-48 48z'
      
    ]
  };

  

  
  

  var faList = {
    prefix: 'fal',
    iconName: 'list',
    icon: [
      512,
      512,
      ["list-squares"],
      'f03a',
      
      'M48 112l0-32 32 0 0 32-32 0zM16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48C26.7 48 16 58.7 16 72zm160 8c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L176 80zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0zM48 240l32 0 0 32-32 0 0-32zm-8-32c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0zm8 224l0-32 32 0 0 32-32 0zM16 392l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z'
      
    ]
  };

  
    var faListSquares = faList;
  

  
  

  var faFlag = {
    prefix: 'fal',
    iconName: 'flag',
    icon: [
      448,
      512,
      [61725,127988],
      'f024',
      
      'M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 64 0 367l0 33 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-104 96.3-24.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L32 56l0-40zm0 73L140.7 61.8c30.7-7.7 63.1-4.1 91.4 10c55.3 27.7 120.4 27.7 175.8 0l8.1-4.1 0 278-34.7 13c-37.9 14.2-80 12-116.2-6.1c-44.7-22.4-96-28-144.5-15.9L32 359 32 89z'
      
    ]
  };

  

  
  

  var faCircleChevronDown = {
    prefix: 'fal',
    iconName: 'circle-chevron-down',
    icon: [
      512,
      512,
      ["chevron-circle-down"],
      'f13a',
      
      'M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 313.4 155.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z'
      
    ]
  };

  
    var faChevronCircleDown = faCircleChevronDown;
  

  
  

  var faCircleExclamation = {
    prefix: 'fal',
    iconName: 'circle-exclamation',
    icon: [
      512,
      512,
      ["exclamation-circle"],
      'f06a',
      
      'M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z'
      
    ]
  };

  
    var faExclamationCircle = faCircleExclamation;
  

  
  

  var faLightbulb = {
    prefix: 'fal',
    iconName: 'lightbulb',
    icon: [
      384,
      512,
      [128161],
      'f0eb',
      
      'M310.3 258.1C326.5 234.8 336 206.6 336 176c0-79.5-64.5-144-144-144S48 96.5 48 176c0 30.6 9.5 58.8 25.7 82.1c4.1 5.9 8.8 12.3 13.6 19c0 0 0 0 0 0c12.7 17.5 27.1 37.2 38 57.1c8.9 16.2 13.7 33.3 16.2 49.9L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-32.4 0c2.5-16.6 7.3-33.7 16.2-49.9c10.9-20 25.3-39.7 38-57.1c4.9-6.7 9.5-13 13.6-19zM192 96c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16zM146.7 448c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32l-90.5 0zM112 432l0-5.3c0-5.9 4.8-10.7 10.7-10.7l138.7 0c5.9 0 10.7 4.8 10.7 10.7l0 5.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z'
      
    ]
  };

  

  
  

  var faBars = {
    prefix: 'fal',
    iconName: 'bars',
    icon: [
      448,
      512,
      ["navicon"],
      'f0c9',
      
      'M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0c8.8 0 16 7.2 16 16z'
      
    ]
  };

  
    var faNavicon = faBars;
  

  
  

  var faPeopleArrows = {
    prefix: 'fal',
    iconName: 'people-arrows',
    icon: [
      640,
      512,
      ["people-arrows-left-right"],
      'e068',
      
      'M128 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM105.6 192c-25 0-45.8 19.1-47.8 44l-4.1 49.3C52.1 304 66.8 320 85.6 320l45.2 0c2.3 6.6 6.1 12.7 11.3 17.9L156.1 352 96 352l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-147.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3C29.3 191.9 64 160 105.6 160l44.8 0c28.3 0 53.4 14.8 67.7 37.3c-4.3 2.2-8.4 5.1-12 8.8l-12.6 12.6c-7.9-15.9-24.3-26.7-43-26.7l-44.8 0zM160 496l0-140.1 32 32L192 496c0 8.8-7.2 16-16 16s-16-7.2-16-16zm288 0l0-108.1 32-32L480 496c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96-144l-60.1 0 14.1-14.1c5.2-5.2 9-11.4 11.3-17.9l45.2 0c18.7 0 33.4-16 31.9-34.7L582.2 236c-2.1-24.9-22.9-44-47.8-44l-44.8 0c-18.7 0-35.1 10.8-43 26.7l-12.6-12.6c-3.6-3.6-7.7-6.5-12-8.8c14.2-22.5 39.3-37.3 67.7-37.3l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144zM512 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM251.3 251.3L214.6 288l210.7 0-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L425.4 320l-210.7 0 36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z'
      
    ]
  };

  
    var faPeopleArrowsLeftRight = faPeopleArrows;
  

  
  

  var faBoxArchive = {
    prefix: 'fal',
    iconName: 'box-archive',
    icon: [
      512,
      512,
      ["archive"],
      'f187',
      
      'M480 64L32 64l0 64 32 0 384 0 32 0 0-64zm0 96l-32 0L64 160l-32 0c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm288-48l32 0 0 224c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-224 32 0 0 224c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-224z'
      
    ]
  };

  
    var faArchive = faBoxArchive;
  

  
  

  var faComments = {
    prefix: 'fal',
    iconName: 'comments',
    icon: [
      640,
      512,
      [61670,128490],
      'f086',
      
      'M32 176c0-74.8 73.7-144 176-144s176 69.2 176 144s-73.7 144-176 144c-15.3 0-30.6-1.9-46.3-5c-3.5-.7-7.1-.2-10.2 1.4c-6.1 3.1-12 6-18 8.7c-28.4 12.9-60.2 23.1-91.5 26c14.9-19 26.8-39.7 37.6-59.9c3.3-6.1 2.3-13.6-2.5-18.6C50 244.2 32 213.1 32 176zM208 0C93.1 0 0 78.9 0 176c0 44.2 19.8 80.1 46 110c-11.7 21-24 40.6-39.5 57.5c0 0 0 0 0 0l-.1 .1c-6.5 7-8.2 17.1-4.4 25.8C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.9-2.2 9.6-4.5 14.3-6.8c15.3 2.8 30.9 4.6 47 4.6c114.9 0 208-78.9 208-176S322.9 0 208 0zM447.4 160.5C541.6 167 608 233 608 304c0 37.1-18 68.2-45.1 96.6c-4.8 5-5.8 12.5-2.5 18.6c10.9 20.2 22.7 40.8 37.6 59.9c-31.3-3-63.2-13.2-91.5-26c-6-2.7-11.9-5.6-18-8.7c-3.2-1.6-6.8-2.1-10.2-1.4c-15.6 3.1-30.9 5-46.3 5c-68.2 0-123.6-30.7-153.1-73.3c-11 3-22.3 5.2-33.8 6.8C279 439.8 349.9 480 432 480c16.1 0 31.7-1.8 47-4.6c4.6 2.3 9.4 4.6 14.3 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.7 2-18.9-4.4-25.8l-.1-.1s0 0 0 0c-15.5-17-27.8-36.5-39.5-57.5c26.2-29.9 46-65.8 46-110c0-94.4-87.8-171.5-198.2-175.8c2.8 10.4 4.7 21.2 5.6 32.3z'
      
    ]
  };

  

  
  

  var faGrid = {
    prefix: 'fal',
    iconName: 'grid',
    icon: [
      448,
      512,
      ["grid-3"],
      'e195',
      
      'M88 64c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8l48 0zM40 32C17.9 32 0 49.9 0 72l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 32zM88 224c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8l48 0zM40 192c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm0 192l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8zM0 392l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM248 64c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8l48 0zM200 32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm0 192l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8zm-40 8l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zm88 152c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8l48 0zm-48-32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM360 64l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8zm-40 8l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zm88 152c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8l48 0zm-48-32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm0 192l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8zm-40 8l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40z'
      
    ]
  };

  
    var faGrid3 = faGrid;

var falIcons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  faAdd: faAdd,
  faAnalytics: faAnalytics,
  faArchive: faArchive,
  faArrowLeftRotate: faArrowLeftRotate,
  faArrowRotateBack: faArrowRotateBack,
  faArrowRotateBackward: faArrowRotateBackward,
  faArrowRotateLeft: faArrowRotateLeft,
  faArrowSquareLeft: faArrowSquareLeft,
  faArrowUpRightFromSquare: faArrowUpRightFromSquare,
  faArrowsRotate: faArrowsRotate,
  faAutomobile: faAutomobile,
  faBars: faBars,
  faBarsFilter: faBarsFilter,
  faBell: faBell,
  faBookOpen: faBookOpen,
  faBookmark: faBookmark,
  faBoxArchive: faBoxArchive,
  faBoxCheck: faBoxCheck,
  faBuilding: faBuilding,
  faCalendar: faCalendar,
  faCar: faCar,
  faCarBurst: faCarBurst,
  faCarCrash: faCarCrash,
  faCartFlatbedBoxes: faCartFlatbedBoxes,
  faCartShopping: faCartShopping,
  faChartMixed: faChartMixed,
  faCheck: faCheck,
  faCheckCircle: faCheckCircle,
  faChevronCircleDown: faChevronCircleDown,
  faChevronCircleUp: faChevronCircleUp,
  faChevronDown: faChevronDown,
  faChevronLeft: faChevronLeft,
  faChevronRight: faChevronRight,
  faChevronUp: faChevronUp,
  faCircleCheck: faCircleCheck,
  faCircleChevronDown: faCircleChevronDown,
  faCircleChevronUp: faCircleChevronUp,
  faCircleExclamation: faCircleExclamation,
  faCircleInfo: faCircleInfo,
  faCircleQuestion: faCircleQuestion,
  faCircleXmark: faCircleXmark,
  faClock: faClock,
  faClockFour: faClockFour,
  faClose: faClose,
  faCloudRain: faCloudRain,
  faCog: faCog,
  faComments: faComments,
  faCopy: faCopy,
  faCreditCard: faCreditCard,
  faCreditCardAlt: faCreditCardAlt,
  faDesktop: faDesktop,
  faDesktopAlt: faDesktopAlt,
  faDollar: faDollar,
  faDollarSign: faDollarSign,
  faDollyFlatbedAlt: faDollyFlatbedAlt,
  faDownload: faDownload,
  faEdit: faEdit,
  faEllipsis: faEllipsis,
  faEllipsisH: faEllipsisH,
  faEnvelope: faEnvelope,
  faExclamationCircle: faExclamationCircle,
  faExclamationTriangle: faExclamationTriangle,
  faExternalLink: faExternalLink,
  faEye: faEye,
  faEyeSlash: faEyeSlash,
  faFileChartColumn: faFileChartColumn,
  faFileChartLine: faFileChartLine,
  faFileExcel: faFileExcel,
  faFileImage: faFileImage,
  faFilePdf: faFilePdf,
  faFileWord: faFileWord,
  faFilter: faFilter,
  faFlag: faFlag,
  faFloppyDisk: faFloppyDisk,
  faFloppyDisks: faFloppyDisks,
  faGasPump: faGasPump,
  faGaugeHigh: faGaugeHigh,
  faGear: faGear,
  faGrid: faGrid,
  faGrid3: faGrid3,
  faHome: faHome,
  faHomeAlt: faHomeAlt,
  faHomeLgAlt: faHomeLgAlt,
  faHouse: faHouse,
  faInfoCircle: faInfoCircle,
  faLightbulb: faLightbulb,
  faLinkSimple: faLinkSimple,
  faList: faList,
  faListCheck: faListCheck,
  faListSquares: faListSquares,
  faLocationDot: faLocationDot,
  faLock: faLock,
  faLockOpen: faLockOpen,
  faMagnifyingGlass: faMagnifyingGlass,
  faMapMarkerAlt: faMapMarkerAlt,
  faMegaphone: faMegaphone,
  faMinus: faMinus,
  faMoneyBill: faMoneyBill,
  faMoneyBillTrendUp: faMoneyBillTrendUp,
  faMoonStars: faMoonStars,
  faMountains: faMountains,
  faMultiply: faMultiply,
  faNavicon: faNavicon,
  faNotes: faNotes,
  faPenToSquare: faPenToSquare,
  faPeopleArrows: faPeopleArrows,
  faPeopleArrowsLeftRight: faPeopleArrowsLeftRight,
  faPersonDolly: faPersonDolly,
  faPhone: faPhone,
  faPlus: faPlus,
  faPrint: faPrint,
  faQuestionCircle: faQuestionCircle,
  faRefresh: faRefresh,
  faRemove: faRemove,
  faSave: faSave,
  faScroll: faScroll,
  faSearch: faSearch,
  faShippingFast: faShippingFast,
  faShoppingCart: faShoppingCart,
  faSign: faSign,
  faSignHanging: faSignHanging,
  faSnowflake: faSnowflake,
  faSquareArrowLeft: faSquareArrowLeft,
  faStar: faStar,
  faSubtract: faSubtract,
  faSunAlt: faSunAlt,
  faSunBright: faSunBright,
  faSync: faSync,
  faTachometerAlt: faTachometerAlt,
  faTachometerAltFast: faTachometerAltFast,
  faTag: faTag,
  faTasks: faTasks,
  faTimer: faTimer,
  faTimes: faTimes,
  faTimesCircle: faTimesCircle,
  faToolbox: faToolbox,
  faTrash: faTrash,
  faTriangleExclamation: faTriangleExclamation,
  faTruckFast: faTruckFast,
  faUndo: faUndo,
  faUpload: faUpload,
  faUsd: faUsd,
  faUser: faUser,
  faUserPlus: faUserPlus,
  faVolume: faVolume,
  faVolumeMedium: faVolumeMedium,
  faWarning: faWarning,
  faWrench: faWrench,
  faXmark: faXmark,
  faXmarkCircle: faXmarkCircle
});

var byPrefixAndName = {'fal': {},};

function addIcons (icons) {
  Object.keys(icons).forEach(function (iconName) {
    if (iconName === 'prefix') {
      return;
    }

    var icon = icons[iconName];
    var aliases = icon.icon[2];
    aliases.forEach(function (alias) {
      if (typeof alias === 'string') {
        byPrefixAndName[icon.prefix][alias] = icon;
      }
    });
    byPrefixAndName[icon.prefix][icon.iconName] = icon;
  });
}


  
  addIcons(falIcons);
  var fal = falIcons;

const oIconCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.18 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;color:#6b7280;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{--tw-shadow:0 0 #0000;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,input:where(:not([type])):focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;print-color-adjust:exact;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=checkbox]:checked{appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=radio]:checked{appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}@media (forced-colors:active){[type=checkbox]:indeterminate{appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.block{display:block}.border-accent_blue{--tw-border-opacity:1;border-color:rgb(45 200 216/var(--tw-border-opacity,1))}.border-accent_blue_1{--tw-border-opacity:1;border-color:rgb(27 157 217/var(--tw-border-opacity,1))}.border-accent_blue_21{--tw-border-opacity:1;border-color:rgb(207 234 247/var(--tw-border-opacity,1))}.border-accent_blue_50{--tw-border-opacity:1;border-color:rgb(238 248 252/var(--tw-border-opacity,1))}.border-app-bar-color-background-default{border-color:var(--oui-theme-app-bar-color-background-default)}.border-app-bar-color-content-default{border-color:var(--oui-theme-app-bar-color-content-default)}.border-awaiting_1{--tw-border-opacity:1;border-color:rgb(137 105 31/var(--tw-border-opacity,1))}.border-awaiting_2{--tw-border-opacity:1;border-color:rgb(252 241 217/var(--tw-border-opacity,1))}.border-background-brand{border-color:var(--oui-theme-color-background-brand)}.border-background-brand-disabled{border-color:var(--oui-theme-color-background-brand-disabled)}.border-background-brand-hover{border-color:var(--oui-theme-color-background-brand-hover)}.border-background-brand-knockout{border-color:var(--oui-theme-color-background-brand-knockout)}.border-background-brand-knockout-disabled{border-color:var(--oui-theme-color-background-brand-knockout-disabled)}.border-background-brand-knockout-hover{border-color:var(--oui-theme-color-background-brand-knockout-hover)}.border-background-default{border-color:var(--oui-theme-color-background-default)}.border-background-default-hover{border-color:var(--oui-theme-color-background-default-hover)}.border-background-disabled{border-color:var(--oui-theme-color-background-disabled)}.border-background-knockout{border-color:var(--oui-theme-color-background-knockout)}.border-background-status-error{border-color:var(--oui-theme-color-background-status-error)}.border-background-status-error-knockout{border-color:var(--oui-theme-color-background-status-error-knockout)}.border-background-status-info{border-color:var(--oui-theme-color-background-status-info)}.border-background-status-info-knockout{border-color:var(--oui-theme-color-background-status-info-knockout)}.border-background-status-neutral{border-color:var(--oui-theme-color-background-status-neutral)}.border-background-status-neutral-knockout{border-color:var(--oui-theme-color-background-status-neutral-knockout)}.border-background-status-success{border-color:var(--oui-theme-color-background-status-success)}.border-background-status-success-knockout{border-color:var(--oui-theme-color-background-status-success-knockout)}.border-background-status-warning{border-color:var(--oui-theme-color-background-status-warning)}.border-background-status-warning-knockout{border-color:var(--oui-theme-color-background-status-warning-knockout)}.border-background-strong{border-color:var(--oui-theme-color-background-strong)}.border-background-subtle{border-color:var(--oui-theme-color-background-subtle)}.border-background-transparent{border-color:var(--oui-theme-color-background-transparent)}.border-background-transparent-strong{border-color:var(--oui-theme-color-background-transparent-strong)}.border-black_20{--tw-border-opacity:1;border-color:rgb(204 204 204/var(--tw-border-opacity,1))}.border-blue_bk{--tw-border-opacity:1;border-color:rgb(37 84 118/var(--tw-border-opacity,1))}.border-blue_steel{--tw-border-opacity:1;border-color:rgb(127 144 158/var(--tw-border-opacity,1))}.border-blue_txt{--tw-border-opacity:1;border-color:rgb(89 182 250/var(--tw-border-opacity,1))}.border-border-brand{border-color:var(--oui-theme-color-border-brand)}.border-border-brand-hover{border-color:var(--oui-theme-color-border-brand-hover)}.border-border-default{border-color:var(--oui-theme-color-border-default)}.border-border-default-hover{border-color:var(--oui-theme-color-border-default-hover)}.border-border-disabled{border-color:var(--oui-theme-color-border-disabled)}.border-border-knockout{border-color:var(--oui-theme-color-border-knockout)}.border-border-status-error{border-color:var(--oui-theme-color-border-status-error)}.border-border-status-info{border-color:var(--oui-theme-color-border-status-info)}.border-border-status-neutral{border-color:var(--oui-theme-color-border-status-neutral)}.border-border-status-success{border-color:var(--oui-theme-color-border-status-success)}.border-border-status-warning{border-color:var(--oui-theme-color-border-status-warning)}.border-btn_primary_hover{--tw-border-opacity:1;border-color:rgb(2 49 91/var(--tw-border-opacity,1))}.border-button-color-background-default{border-color:var(--oui-theme-button-color-background-default)}.border-button-color-background-default-hover{border-color:var(--oui-theme-button-color-background-default-hover)}.border-button-color-background-knockout{border-color:var(--oui-theme-button-color-background-knockout)}.border-button-color-background-knockout-hover{border-color:var(--oui-theme-button-color-background-knockout-hover)}.border-button-color-border-default{border-color:var(--oui-theme-button-color-border-default)}.border-button-color-border-default-hover{border-color:var(--oui-theme-button-color-border-default-hover)}.border-button-color-content-default{border-color:var(--oui-theme-button-color-content-default)}.border-button-color-content-default-hover{border-color:var(--oui-theme-button-color-content-default-hover)}.border-button-color-content-knockout{border-color:var(--oui-theme-button-color-content-knockout)}.border-button-color-content-knockout-hover{border-color:var(--oui-theme-button-color-content-knockout-hover)}.border-card_subhead{--tw-border-opacity:1;border-color:rgb(127 144 158/var(--tw-border-opacity,1))}.border-completed_1{--tw-border-opacity:1;border-color:rgb(31 114 173/var(--tw-border-opacity,1))}.border-completed_2{--tw-border-opacity:1;border-color:rgb(221 247 251/var(--tw-border-opacity,1))}.border-content-brand{border-color:var(--oui-theme-color-content-brand)}.border-content-brand-disabled{border-color:var(--oui-theme-color-content-brand-disabled)}.border-content-brand-hover{border-color:var(--oui-theme-color-content-brand-hover)}.border-content-brand-knockout{border-color:var(--oui-theme-color-content-brand-knockout)}.border-content-brand-knockout-hover{border-color:var(--oui-theme-color-content-brand-knockout-hover)}.border-content-default{border-color:var(--oui-theme-color-content-default)}.border-content-default-hover{border-color:var(--oui-theme-color-content-default-hover)}.border-content-disabled{border-color:var(--oui-theme-color-content-disabled)}.border-content-knockout{border-color:var(--oui-theme-color-content-knockout)}.border-content-status-error{border-color:var(--oui-theme-color-content-status-error)}.border-content-status-error-knockout{border-color:var(--oui-theme-color-content-status-error-knockout)}.border-content-status-info{border-color:var(--oui-theme-color-content-status-info)}.border-content-status-info-knockout{border-color:var(--oui-theme-color-content-status-info-knockout)}.border-content-status-neutral{border-color:var(--oui-theme-color-content-status-neutral)}.border-content-status-neutral-knockout{border-color:var(--oui-theme-color-content-status-neutral-knockout)}.border-content-status-success{border-color:var(--oui-theme-color-content-status-success)}.border-content-status-success-knockout{border-color:var(--oui-theme-color-content-status-success-knockout)}.border-content-status-warning{border-color:var(--oui-theme-color-content-status-warning)}.border-content-status-warning-knockout{border-color:var(--oui-theme-color-content-status-warning-knockout)}.border-content-subtle{border-color:var(--oui-theme-color-content-subtle)}.border-content-subtle-hover{border-color:var(--oui-theme-color-content-subtle-hover)}.border-electric_blue{--tw-border-opacity:1;border-color:rgb(40 134 236/var(--tw-border-opacity,1))}.border-error_red{--tw-border-opacity:1;border-color:rgb(180 49 29/var(--tw-border-opacity,1))}.border-error_red_2{--tw-border-opacity:1;border-color:rgb(255 209 209/var(--tw-border-opacity,1))}.border-expire_orange{--tw-border-opacity:1;border-color:rgb(238 154 16/var(--tw-border-opacity,1))}.border-flame_red{--tw-border-opacity:1;border-color:rgb(222 79 56/var(--tw-border-opacity,1))}.border-focus-ring-color-border-default{border-color:var(--oui-theme-focus-ring-color-border-default)}.border-form-color-background-active{border-color:var(--oui-theme-form-color-background-active)}.border-form-color-background-default{border-color:var(--oui-theme-form-color-background-default)}.border-form-color-background-disabled{border-color:var(--oui-theme-form-color-background-disabled)}.border-form-color-background-focus{border-color:var(--oui-theme-form-color-background-focus)}.border-form-color-background-hover{border-color:var(--oui-theme-form-color-background-hover)}.border-form-color-border-active{border-color:var(--oui-theme-form-color-border-active)}.border-form-color-border-default{border-color:var(--oui-theme-form-color-border-default)}.border-form-color-border-disabled{border-color:var(--oui-theme-form-color-border-disabled)}.border-form-color-border-focus{border-color:var(--oui-theme-form-color-border-focus)}.border-form-color-border-hover{border-color:var(--oui-theme-form-color-border-hover)}.border-green_1{--tw-border-opacity:1;border-color:rgb(210 255 226/var(--tw-border-opacity,1))}.border-green_2{--tw-border-opacity:1;border-color:rgb(21 119 58/var(--tw-border-opacity,1))}.border-green_bl{--tw-border-opacity:1;border-color:rgb(25 67 17/var(--tw-border-opacity,1))}.border-green_txt{--tw-border-opacity:1;border-color:rgb(61 209 117/var(--tw-border-opacity,1))}.border-header_blue{--tw-border-opacity:1;border-color:rgb(6 33 54/var(--tw-border-opacity,1))}.border-label{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity,1))}.border-light_gray{--tw-border-opacity:1;border-color:rgb(243 245 245/var(--tw-border-opacity,1))}.border-link-color-content-active{border-color:var(--oui-theme-link-color-content-active)}.border-link-color-content-default{border-color:var(--oui-theme-link-color-content-default)}.border-link-color-content-hover{border-color:var(--oui-theme-link-color-content-hover)}.border-link-color-content-visited{border-color:var(--oui-theme-link-color-content-visited)}.border-lt_blue{--tw-border-opacity:1;border-color:rgb(227 237 247/var(--tw-border-opacity,1))}.border-main_background{--tw-border-opacity:1;border-color:rgb(246 244 244/var(--tw-border-opacity,1))}.border-main_text{--tw-border-opacity:1;border-color:rgb(77 78 83/var(--tw-border-opacity,1))}.border-midnight_blue{--tw-border-opacity:1;border-color:rgb(6 33 54/var(--tw-border-opacity,1))}.border-oec_blue{--tw-border-opacity:1;border-color:rgb(0 60 113/var(--tw-border-opacity,1))}.border-oec_grey{--tw-border-opacity:1;border-color:rgb(77 78 83/var(--tw-border-opacity,1))}.border-red_bl{--tw-border-opacity:1;border-color:rgb(56 44 60/var(--tw-border-opacity,1))}.border-red_txt{--tw-border-opacity:1;border-color:rgb(252 110 87/var(--tw-border-opacity,1))}.border-school_bus_yellow{--tw-border-opacity:1;border-color:rgb(238 205 69/var(--tw-border-opacity,1))}.border-search_bar_blue{--tw-border-opacity:1;border-color:rgb(18 49 71/var(--tw-border-opacity,1))}.border-spring_green{--tw-border-opacity:1;border-color:rgb(66 200 91/var(--tw-border-opacity,1))}.border-tab_grey{--tw-border-opacity:1;border-color:rgb(191 196 205/var(--tw-border-opacity,1))}.border-table_header{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.border-table_header_70{--tw-border-opacity:1;border-color:rgb(151 156 166/var(--tw-border-opacity,1))}.border-teal{--tw-border-opacity:1;border-color:rgb(18 179 168/var(--tw-border-opacity,1))}.border-volt_yellow{--tw-border-opacity:1;border-color:rgb(206 248 0/var(--tw-border-opacity,1))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1))}.border-xx_lt_grey{--tw-border-opacity:1;border-color:rgb(252 252 253/var(--tw-border-opacity,1))}.border-yellow_bl{--tw-border-opacity:1;border-color:rgb(53 64 53/var(--tw-border-opacity,1))}.border-yellow_txt{--tw-border-opacity:1;border-color:rgb(233 183 67/var(--tw-border-opacity,1))}.bg-accent_blue{--tw-bg-opacity:1;background-color:rgb(45 200 216/var(--tw-bg-opacity,1))}.bg-accent_blue_1{--tw-bg-opacity:1;background-color:rgb(27 157 217/var(--tw-bg-opacity,1))}.bg-accent_blue_21{--tw-bg-opacity:1;background-color:rgb(207 234 247/var(--tw-bg-opacity,1))}.bg-accent_blue_50{--tw-bg-opacity:1;background-color:rgb(238 248 252/var(--tw-bg-opacity,1))}.bg-app-bar-color-background-default{background-color:var(--oui-theme-app-bar-color-background-default)}.bg-app-bar-color-content-default{background-color:var(--oui-theme-app-bar-color-content-default)}.bg-awaiting_1{--tw-bg-opacity:1;background-color:rgb(137 105 31/var(--tw-bg-opacity,1))}.bg-awaiting_2{--tw-bg-opacity:1;background-color:rgb(252 241 217/var(--tw-bg-opacity,1))}.bg-background-brand{background-color:var(--oui-theme-color-background-brand)}.bg-background-brand-disabled{background-color:var(--oui-theme-color-background-brand-disabled)}.bg-background-brand-hover{background-color:var(--oui-theme-color-background-brand-hover)}.bg-background-brand-knockout{background-color:var(--oui-theme-color-background-brand-knockout)}.bg-background-brand-knockout-disabled{background-color:var(--oui-theme-color-background-brand-knockout-disabled)}.bg-background-brand-knockout-hover{background-color:var(--oui-theme-color-background-brand-knockout-hover)}.bg-background-default{background-color:var(--oui-theme-color-background-default)}.bg-background-default-hover{background-color:var(--oui-theme-color-background-default-hover)}.bg-background-disabled{background-color:var(--oui-theme-color-background-disabled)}.bg-background-knockout{background-color:var(--oui-theme-color-background-knockout)}.bg-background-status-error{background-color:var(--oui-theme-color-background-status-error)}.bg-background-status-error-knockout{background-color:var(--oui-theme-color-background-status-error-knockout)}.bg-background-status-info{background-color:var(--oui-theme-color-background-status-info)}.bg-background-status-info-knockout{background-color:var(--oui-theme-color-background-status-info-knockout)}.bg-background-status-neutral{background-color:var(--oui-theme-color-background-status-neutral)}.bg-background-status-neutral-knockout{background-color:var(--oui-theme-color-background-status-neutral-knockout)}.bg-background-status-success{background-color:var(--oui-theme-color-background-status-success)}.bg-background-status-success-knockout{background-color:var(--oui-theme-color-background-status-success-knockout)}.bg-background-status-warning{background-color:var(--oui-theme-color-background-status-warning)}.bg-background-status-warning-knockout{background-color:var(--oui-theme-color-background-status-warning-knockout)}.bg-background-strong{background-color:var(--oui-theme-color-background-strong)}.bg-background-subtle{background-color:var(--oui-theme-color-background-subtle)}.bg-background-transparent{background-color:var(--oui-theme-color-background-transparent)}.bg-background-transparent-strong{background-color:var(--oui-theme-color-background-transparent-strong)}.bg-black_20{--tw-bg-opacity:1;background-color:rgb(204 204 204/var(--tw-bg-opacity,1))}.bg-blue_bk{--tw-bg-opacity:1;background-color:rgb(37 84 118/var(--tw-bg-opacity,1))}.bg-blue_steel{--tw-bg-opacity:1;background-color:rgb(127 144 158/var(--tw-bg-opacity,1))}.bg-blue_txt{--tw-bg-opacity:1;background-color:rgb(89 182 250/var(--tw-bg-opacity,1))}.bg-border-brand{background-color:var(--oui-theme-color-border-brand)}.bg-border-brand-hover{background-color:var(--oui-theme-color-border-brand-hover)}.bg-border-default{background-color:var(--oui-theme-color-border-default)}.bg-border-default-hover{background-color:var(--oui-theme-color-border-default-hover)}.bg-border-disabled{background-color:var(--oui-theme-color-border-disabled)}.bg-border-knockout{background-color:var(--oui-theme-color-border-knockout)}.bg-border-status-error{background-color:var(--oui-theme-color-border-status-error)}.bg-border-status-info{background-color:var(--oui-theme-color-border-status-info)}.bg-border-status-neutral{background-color:var(--oui-theme-color-border-status-neutral)}.bg-border-status-success{background-color:var(--oui-theme-color-border-status-success)}.bg-border-status-warning{background-color:var(--oui-theme-color-border-status-warning)}.bg-btn_primary_hover{--tw-bg-opacity:1;background-color:rgb(2 49 91/var(--tw-bg-opacity,1))}.bg-button-color-background-default{background-color:var(--oui-theme-button-color-background-default)}.bg-button-color-background-default-hover{background-color:var(--oui-theme-button-color-background-default-hover)}.bg-button-color-background-knockout{background-color:var(--oui-theme-button-color-background-knockout)}.bg-button-color-background-knockout-hover{background-color:var(--oui-theme-button-color-background-knockout-hover)}.bg-button-color-border-default{background-color:var(--oui-theme-button-color-border-default)}.bg-button-color-border-default-hover{background-color:var(--oui-theme-button-color-border-default-hover)}.bg-button-color-content-default{background-color:var(--oui-theme-button-color-content-default)}.bg-button-color-content-default-hover{background-color:var(--oui-theme-button-color-content-default-hover)}.bg-button-color-content-knockout{background-color:var(--oui-theme-button-color-content-knockout)}.bg-button-color-content-knockout-hover{background-color:var(--oui-theme-button-color-content-knockout-hover)}.bg-card_subhead{--tw-bg-opacity:1;background-color:rgb(127 144 158/var(--tw-bg-opacity,1))}.bg-completed_1{--tw-bg-opacity:1;background-color:rgb(31 114 173/var(--tw-bg-opacity,1))}.bg-completed_2{--tw-bg-opacity:1;background-color:rgb(221 247 251/var(--tw-bg-opacity,1))}.bg-content-brand{background-color:var(--oui-theme-color-content-brand)}.bg-content-brand-disabled{background-color:var(--oui-theme-color-content-brand-disabled)}.bg-content-brand-hover{background-color:var(--oui-theme-color-content-brand-hover)}.bg-content-brand-knockout{background-color:var(--oui-theme-color-content-brand-knockout)}.bg-content-brand-knockout-hover{background-color:var(--oui-theme-color-content-brand-knockout-hover)}.bg-content-default{background-color:var(--oui-theme-color-content-default)}.bg-content-default-hover{background-color:var(--oui-theme-color-content-default-hover)}.bg-content-disabled{background-color:var(--oui-theme-color-content-disabled)}.bg-content-knockout{background-color:var(--oui-theme-color-content-knockout)}.bg-content-status-error{background-color:var(--oui-theme-color-content-status-error)}.bg-content-status-error-knockout{background-color:var(--oui-theme-color-content-status-error-knockout)}.bg-content-status-info{background-color:var(--oui-theme-color-content-status-info)}.bg-content-status-info-knockout{background-color:var(--oui-theme-color-content-status-info-knockout)}.bg-content-status-neutral{background-color:var(--oui-theme-color-content-status-neutral)}.bg-content-status-neutral-knockout{background-color:var(--oui-theme-color-content-status-neutral-knockout)}.bg-content-status-success{background-color:var(--oui-theme-color-content-status-success)}.bg-content-status-success-knockout{background-color:var(--oui-theme-color-content-status-success-knockout)}.bg-content-status-warning{background-color:var(--oui-theme-color-content-status-warning)}.bg-content-status-warning-knockout{background-color:var(--oui-theme-color-content-status-warning-knockout)}.bg-content-subtle{background-color:var(--oui-theme-color-content-subtle)}.bg-content-subtle-hover{background-color:var(--oui-theme-color-content-subtle-hover)}.bg-electric_blue{--tw-bg-opacity:1;background-color:rgb(40 134 236/var(--tw-bg-opacity,1))}.bg-error_red{--tw-bg-opacity:1;background-color:rgb(180 49 29/var(--tw-bg-opacity,1))}.bg-error_red_2{--tw-bg-opacity:1;background-color:rgb(255 209 209/var(--tw-bg-opacity,1))}.bg-expire_orange{--tw-bg-opacity:1;background-color:rgb(238 154 16/var(--tw-bg-opacity,1))}.bg-flame_red{--tw-bg-opacity:1;background-color:rgb(222 79 56/var(--tw-bg-opacity,1))}.bg-focus-ring-color-border-default{background-color:var(--oui-theme-focus-ring-color-border-default)}.bg-form-color-background-active{background-color:var(--oui-theme-form-color-background-active)}.bg-form-color-background-default{background-color:var(--oui-theme-form-color-background-default)}.bg-form-color-background-disabled{background-color:var(--oui-theme-form-color-background-disabled)}.bg-form-color-background-focus{background-color:var(--oui-theme-form-color-background-focus)}.bg-form-color-background-hover{background-color:var(--oui-theme-form-color-background-hover)}.bg-form-color-border-active{background-color:var(--oui-theme-form-color-border-active)}.bg-form-color-border-default{background-color:var(--oui-theme-form-color-border-default)}.bg-form-color-border-disabled{background-color:var(--oui-theme-form-color-border-disabled)}.bg-form-color-border-focus{background-color:var(--oui-theme-form-color-border-focus)}.bg-form-color-border-hover{background-color:var(--oui-theme-form-color-border-hover)}.bg-green_1{--tw-bg-opacity:1;background-color:rgb(210 255 226/var(--tw-bg-opacity,1))}.bg-green_2{--tw-bg-opacity:1;background-color:rgb(21 119 58/var(--tw-bg-opacity,1))}.bg-green_bl{--tw-bg-opacity:1;background-color:rgb(25 67 17/var(--tw-bg-opacity,1))}.bg-green_txt{--tw-bg-opacity:1;background-color:rgb(61 209 117/var(--tw-bg-opacity,1))}.bg-header_blue{--tw-bg-opacity:1;background-color:rgb(6 33 54/var(--tw-bg-opacity,1))}.bg-label{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.bg-light_gray{--tw-bg-opacity:1;background-color:rgb(243 245 245/var(--tw-bg-opacity,1))}.bg-link-color-content-active{background-color:var(--oui-theme-link-color-content-active)}.bg-link-color-content-default{background-color:var(--oui-theme-link-color-content-default)}.bg-link-color-content-hover{background-color:var(--oui-theme-link-color-content-hover)}.bg-link-color-content-visited{background-color:var(--oui-theme-link-color-content-visited)}.bg-lt_blue{--tw-bg-opacity:1;background-color:rgb(227 237 247/var(--tw-bg-opacity,1))}.bg-main_background{--tw-bg-opacity:1;background-color:rgb(246 244 244/var(--tw-bg-opacity,1))}.bg-main_text{--tw-bg-opacity:1;background-color:rgb(77 78 83/var(--tw-bg-opacity,1))}.bg-midnight_blue{--tw-bg-opacity:1;background-color:rgb(6 33 54/var(--tw-bg-opacity,1))}.bg-oec_blue{--tw-bg-opacity:1;background-color:rgb(0 60 113/var(--tw-bg-opacity,1))}.bg-oec_grey{--tw-bg-opacity:1;background-color:rgb(77 78 83/var(--tw-bg-opacity,1))}.bg-red_bl{--tw-bg-opacity:1;background-color:rgb(56 44 60/var(--tw-bg-opacity,1))}.bg-red_txt{--tw-bg-opacity:1;background-color:rgb(252 110 87/var(--tw-bg-opacity,1))}.bg-school_bus_yellow{--tw-bg-opacity:1;background-color:rgb(238 205 69/var(--tw-bg-opacity,1))}.bg-search_bar_blue{--tw-bg-opacity:1;background-color:rgb(18 49 71/var(--tw-bg-opacity,1))}.bg-spring_green{--tw-bg-opacity:1;background-color:rgb(66 200 91/var(--tw-bg-opacity,1))}.bg-tab_grey{--tw-bg-opacity:1;background-color:rgb(191 196 205/var(--tw-bg-opacity,1))}.bg-table_header{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity,1))}.bg-table_header_70{--tw-bg-opacity:1;background-color:rgb(151 156 166/var(--tw-bg-opacity,1))}.bg-teal{--tw-bg-opacity:1;background-color:rgb(18 179 168/var(--tw-bg-opacity,1))}.bg-volt_yellow{--tw-bg-opacity:1;background-color:rgb(206 248 0/var(--tw-bg-opacity,1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.bg-xx_lt_grey{--tw-bg-opacity:1;background-color:rgb(252 252 253/var(--tw-bg-opacity,1))}.bg-yellow_bl{--tw-bg-opacity:1;background-color:rgb(53 64 53/var(--tw-bg-opacity,1))}.bg-yellow_txt{--tw-bg-opacity:1;background-color:rgb(233 183 67/var(--tw-bg-opacity,1))}.text-accent_blue{--tw-text-opacity:1;color:rgb(45 200 216/var(--tw-text-opacity,1))}.text-accent_blue_1{--tw-text-opacity:1;color:rgb(27 157 217/var(--tw-text-opacity,1))}.text-accent_blue_21{--tw-text-opacity:1;color:rgb(207 234 247/var(--tw-text-opacity,1))}.text-accent_blue_50{--tw-text-opacity:1;color:rgb(238 248 252/var(--tw-text-opacity,1))}.text-app-bar-color-background-default{color:var(--oui-theme-app-bar-color-background-default)}.text-app-bar-color-content-default{color:var(--oui-theme-app-bar-color-content-default)}.text-awaiting_1{--tw-text-opacity:1;color:rgb(137 105 31/var(--tw-text-opacity,1))}.text-awaiting_2{--tw-text-opacity:1;color:rgb(252 241 217/var(--tw-text-opacity,1))}.text-background-brand{color:var(--oui-theme-color-background-brand)}.text-background-brand-disabled{color:var(--oui-theme-color-background-brand-disabled)}.text-background-brand-hover{color:var(--oui-theme-color-background-brand-hover)}.text-background-brand-knockout{color:var(--oui-theme-color-background-brand-knockout)}.text-background-brand-knockout-disabled{color:var(--oui-theme-color-background-brand-knockout-disabled)}.text-background-brand-knockout-hover{color:var(--oui-theme-color-background-brand-knockout-hover)}.text-background-default{color:var(--oui-theme-color-background-default)}.text-background-default-hover{color:var(--oui-theme-color-background-default-hover)}.text-background-disabled{color:var(--oui-theme-color-background-disabled)}.text-background-knockout{color:var(--oui-theme-color-background-knockout)}.text-background-status-error{color:var(--oui-theme-color-background-status-error)}.text-background-status-error-knockout{color:var(--oui-theme-color-background-status-error-knockout)}.text-background-status-info{color:var(--oui-theme-color-background-status-info)}.text-background-status-info-knockout{color:var(--oui-theme-color-background-status-info-knockout)}.text-background-status-neutral{color:var(--oui-theme-color-background-status-neutral)}.text-background-status-neutral-knockout{color:var(--oui-theme-color-background-status-neutral-knockout)}.text-background-status-success{color:var(--oui-theme-color-background-status-success)}.text-background-status-success-knockout{color:var(--oui-theme-color-background-status-success-knockout)}.text-background-status-warning{color:var(--oui-theme-color-background-status-warning)}.text-background-status-warning-knockout{color:var(--oui-theme-color-background-status-warning-knockout)}.text-background-strong{color:var(--oui-theme-color-background-strong)}.text-background-subtle{color:var(--oui-theme-color-background-subtle)}.text-background-transparent{color:var(--oui-theme-color-background-transparent)}.text-background-transparent-strong{color:var(--oui-theme-color-background-transparent-strong)}.text-black_20{--tw-text-opacity:1;color:rgb(204 204 204/var(--tw-text-opacity,1))}.text-blue_bk{--tw-text-opacity:1;color:rgb(37 84 118/var(--tw-text-opacity,1))}.text-blue_steel{--tw-text-opacity:1;color:rgb(127 144 158/var(--tw-text-opacity,1))}.text-blue_txt{--tw-text-opacity:1;color:rgb(89 182 250/var(--tw-text-opacity,1))}.text-border-brand{color:var(--oui-theme-color-border-brand)}.text-border-brand-hover{color:var(--oui-theme-color-border-brand-hover)}.text-border-default{color:var(--oui-theme-color-border-default)}.text-border-default-hover{color:var(--oui-theme-color-border-default-hover)}.text-border-disabled{color:var(--oui-theme-color-border-disabled)}.text-border-knockout{color:var(--oui-theme-color-border-knockout)}.text-border-status-error{color:var(--oui-theme-color-border-status-error)}.text-border-status-info{color:var(--oui-theme-color-border-status-info)}.text-border-status-neutral{color:var(--oui-theme-color-border-status-neutral)}.text-border-status-success{color:var(--oui-theme-color-border-status-success)}.text-border-status-warning{color:var(--oui-theme-color-border-status-warning)}.text-btn_primary_hover{--tw-text-opacity:1;color:rgb(2 49 91/var(--tw-text-opacity,1))}.text-button-color-background-default{color:var(--oui-theme-button-color-background-default)}.text-button-color-background-default-hover{color:var(--oui-theme-button-color-background-default-hover)}.text-button-color-background-knockout{color:var(--oui-theme-button-color-background-knockout)}.text-button-color-background-knockout-hover{color:var(--oui-theme-button-color-background-knockout-hover)}.text-button-color-border-default{color:var(--oui-theme-button-color-border-default)}.text-button-color-border-default-hover{color:var(--oui-theme-button-color-border-default-hover)}.text-button-color-content-default{color:var(--oui-theme-button-color-content-default)}.text-button-color-content-default-hover{color:var(--oui-theme-button-color-content-default-hover)}.text-button-color-content-knockout{color:var(--oui-theme-button-color-content-knockout)}.text-button-color-content-knockout-hover{color:var(--oui-theme-button-color-content-knockout-hover)}.text-card_subhead{--tw-text-opacity:1;color:rgb(127 144 158/var(--tw-text-opacity,1))}.text-completed_1{--tw-text-opacity:1;color:rgb(31 114 173/var(--tw-text-opacity,1))}.text-completed_2{--tw-text-opacity:1;color:rgb(221 247 251/var(--tw-text-opacity,1))}.text-content-brand{color:var(--oui-theme-color-content-brand)}.text-content-brand-disabled{color:var(--oui-theme-color-content-brand-disabled)}.text-content-brand-hover{color:var(--oui-theme-color-content-brand-hover)}.text-content-brand-knockout{color:var(--oui-theme-color-content-brand-knockout)}.text-content-brand-knockout-hover{color:var(--oui-theme-color-content-brand-knockout-hover)}.text-content-default{color:var(--oui-theme-color-content-default)}.text-content-default-hover{color:var(--oui-theme-color-content-default-hover)}.text-content-disabled{color:var(--oui-theme-color-content-disabled)}.text-content-knockout{color:var(--oui-theme-color-content-knockout)}.text-content-status-error{color:var(--oui-theme-color-content-status-error)}.text-content-status-error-knockout{color:var(--oui-theme-color-content-status-error-knockout)}.text-content-status-info{color:var(--oui-theme-color-content-status-info)}.text-content-status-info-knockout{color:var(--oui-theme-color-content-status-info-knockout)}.text-content-status-neutral{color:var(--oui-theme-color-content-status-neutral)}.text-content-status-neutral-knockout{color:var(--oui-theme-color-content-status-neutral-knockout)}.text-content-status-success{color:var(--oui-theme-color-content-status-success)}.text-content-status-success-knockout{color:var(--oui-theme-color-content-status-success-knockout)}.text-content-status-warning{color:var(--oui-theme-color-content-status-warning)}.text-content-status-warning-knockout{color:var(--oui-theme-color-content-status-warning-knockout)}.text-content-subtle{color:var(--oui-theme-color-content-subtle)}.text-content-subtle-hover{color:var(--oui-theme-color-content-subtle-hover)}.text-electric_blue{--tw-text-opacity:1;color:rgb(40 134 236/var(--tw-text-opacity,1))}.text-error_red{--tw-text-opacity:1;color:rgb(180 49 29/var(--tw-text-opacity,1))}.text-error_red_2{--tw-text-opacity:1;color:rgb(255 209 209/var(--tw-text-opacity,1))}.text-expire_orange{--tw-text-opacity:1;color:rgb(238 154 16/var(--tw-text-opacity,1))}.text-flame_red{--tw-text-opacity:1;color:rgb(222 79 56/var(--tw-text-opacity,1))}.text-focus-ring-color-border-default{color:var(--oui-theme-focus-ring-color-border-default)}.text-form-color-background-active{color:var(--oui-theme-form-color-background-active)}.text-form-color-background-default{color:var(--oui-theme-form-color-background-default)}.text-form-color-background-disabled{color:var(--oui-theme-form-color-background-disabled)}.text-form-color-background-focus{color:var(--oui-theme-form-color-background-focus)}.text-form-color-background-hover{color:var(--oui-theme-form-color-background-hover)}.text-form-color-border-active{color:var(--oui-theme-form-color-border-active)}.text-form-color-border-default{color:var(--oui-theme-form-color-border-default)}.text-form-color-border-disabled{color:var(--oui-theme-form-color-border-disabled)}.text-form-color-border-focus{color:var(--oui-theme-form-color-border-focus)}.text-form-color-border-hover{color:var(--oui-theme-form-color-border-hover)}.text-green_1{--tw-text-opacity:1;color:rgb(210 255 226/var(--tw-text-opacity,1))}.text-green_2{--tw-text-opacity:1;color:rgb(21 119 58/var(--tw-text-opacity,1))}.text-green_bl{--tw-text-opacity:1;color:rgb(25 67 17/var(--tw-text-opacity,1))}.text-green_txt{--tw-text-opacity:1;color:rgb(61 209 117/var(--tw-text-opacity,1))}.text-header_blue{--tw-text-opacity:1;color:rgb(6 33 54/var(--tw-text-opacity,1))}.text-label{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-light_gray{--tw-text-opacity:1;color:rgb(243 245 245/var(--tw-text-opacity,1))}.text-link-color-content-active{color:var(--oui-theme-link-color-content-active)}.text-link-color-content-default{color:var(--oui-theme-link-color-content-default)}.text-link-color-content-hover{color:var(--oui-theme-link-color-content-hover)}.text-link-color-content-visited{color:var(--oui-theme-link-color-content-visited)}.text-lt_blue{--tw-text-opacity:1;color:rgb(227 237 247/var(--tw-text-opacity,1))}.text-main_background{--tw-text-opacity:1;color:rgb(246 244 244/var(--tw-text-opacity,1))}.text-main_text{--tw-text-opacity:1;color:rgb(77 78 83/var(--tw-text-opacity,1))}.text-midnight_blue{--tw-text-opacity:1;color:rgb(6 33 54/var(--tw-text-opacity,1))}.text-oec_blue{--tw-text-opacity:1;color:rgb(0 60 113/var(--tw-text-opacity,1))}.text-oec_grey{--tw-text-opacity:1;color:rgb(77 78 83/var(--tw-text-opacity,1))}.text-red_bl{--tw-text-opacity:1;color:rgb(56 44 60/var(--tw-text-opacity,1))}.text-red_txt{--tw-text-opacity:1;color:rgb(252 110 87/var(--tw-text-opacity,1))}.text-school_bus_yellow{--tw-text-opacity:1;color:rgb(238 205 69/var(--tw-text-opacity,1))}.text-search_bar_blue{--tw-text-opacity:1;color:rgb(18 49 71/var(--tw-text-opacity,1))}.text-spring_green{--tw-text-opacity:1;color:rgb(66 200 91/var(--tw-text-opacity,1))}.text-tab_grey{--tw-text-opacity:1;color:rgb(191 196 205/var(--tw-text-opacity,1))}.text-table_header{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-table_header_70{--tw-text-opacity:1;color:rgb(151 156 166/var(--tw-text-opacity,1))}.text-teal{--tw-text-opacity:1;color:rgb(18 179 168/var(--tw-text-opacity,1))}.text-volt_yellow{--tw-text-opacity:1;color:rgb(206 248 0/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-xx_lt_grey{--tw-text-opacity:1;color:rgb(252 252 253/var(--tw-text-opacity,1))}.text-yellow_bl{--tw-text-opacity:1;color:rgb(53 64 53/var(--tw-text-opacity,1))}.text-yellow_txt{--tw-text-opacity:1;color:rgb(233 183 67/var(--tw-text-opacity,1))}.svg-inline--fa{height:100%!important}.focus-visible\\:outline-visible:focus-visible{outline-style:solid}:host{display:block}.body-default{font-family:var(--oui-theme-typography-body-default-font-family);font-size:var(--oui-theme-typography-body-default-font-size);font-weight:var(--oui-theme-typography-body-default-font-weight);line-height:var(--oui-theme-typography-body-default-line-height)}.body-lg{font-family:var(--oui-theme-typography-body-lg-font-family);font-size:var(--oui-theme-typography-body-lg-font-size);font-weight:var(--oui-theme-typography-body-lg-font-weight);line-height:var(--oui-theme-typography-body-lg-line-height)}.body-sm{font-family:var(--oui-theme-typography-body-sm-font-family);font-size:var(--oui-theme-typography-body-sm-font-size);font-weight:var(--oui-theme-typography-body-sm-font-weight);line-height:var(--oui-theme-typography-body-sm-line-height)}.display-default{font-family:var(--oui-theme-typography-display-default-font-family);font-size:var(--oui-theme-typography-display-default-font-size);font-weight:var(--oui-theme-typography-display-default-font-weight);line-height:var(--oui-theme-typography-display-default-line-height)}.display-lg{font-family:var(--oui-theme-typography-display-lg-font-family);font-size:var(--oui-theme-typography-display-lg-font-size);font-weight:var(--oui-theme-typography-display-lg-font-weight);line-height:var(--oui-theme-typography-display-lg-line-height)}.display-sm{font-family:var(--oui-theme-typography-display-sm-font-family);font-size:var(--oui-theme-typography-display-sm-font-size);font-weight:var(--oui-theme-typography-display-sm-font-weight);line-height:var(--oui-theme-typography-display-sm-line-height)}.label-default{font-family:var(--oui-theme-typography-label-default-font-family);font-size:var(--oui-theme-typography-label-default-font-size);font-weight:var(--oui-theme-typography-label-default-font-weight);line-height:var(--oui-theme-typography-label-default-line-height)}.label-lg{font-family:var(--oui-theme-typography-label-lg-font-family);font-size:var(--oui-theme-typography-label-lg-font-size);font-weight:var(--oui-theme-typography-label-lg-font-weight);line-height:var(--oui-theme-typography-label-lg-line-height)}.label-sm{font-family:var(--oui-theme-typography-label-sm-font-family);font-size:var(--oui-theme-typography-label-sm-font-size);font-weight:var(--oui-theme-typography-label-sm-font-weight);line-height:var(--oui-theme-typography-label-sm-line-height)}.title-default{font-family:var(--oui-theme-typography-title-default-font-family);font-size:var(--oui-theme-typography-title-default-font-size);font-weight:var(--oui-theme-typography-title-default-font-weight);line-height:var(--oui-theme-typography-title-default-line-height)}.title-lg{font-family:var(--oui-theme-typography-title-lg-font-family);font-size:var(--oui-theme-typography-title-lg-font-size);font-weight:var(--oui-theme-typography-title-lg-font-weight);line-height:var(--oui-theme-typography-title-lg-line-height)}.title-sm{font-family:var(--oui-theme-typography-title-sm-font-family);font-size:var(--oui-theme-typography-title-sm-font-size);font-weight:var(--oui-theme-typography-title-sm-font-weight);line-height:var(--oui-theme-typography-title-sm-line-height)}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.relative{position:relative}.top-\\[-10px\\]{top:-10px}.mb-3\\.5{margin-bottom:.875rem}.flex{display:flex}.w-\\[330px\\]{width:330px}.flex-1{flex:1 1 0%}.-translate-y-4{--tw-translate-y:-1rem}.-translate-y-4,.translate-y-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y:0px}.translate-y-4{--tw-translate-y:1rem}.scale-\\[1\\.4\\],.translate-y-4{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-\\[1\\.4\\]{--tw-scale-x:1.4;--tw-scale-y:1.4}.items-center{align-items:center}.overflow-hidden{overflow:hidden}.rounded-lg{border-radius:.5rem}.border-t-4{border-top-width:4px}.bg-opacity-90{--tw-bg-opacity:0.9}.px-\\[25px\\]{padding-left:25px;padding-right:25px}.py-\\[17px\\]{padding-bottom:17px;padding-top:17px}.pr-7{padding-right:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:1280px){.xl\\:w-\\[440px\\]{width:440px}}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-8{width:2rem}.justify-center{justify-content:center}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.cursor-not-allowed{cursor:not-allowed}.gap-2{gap:.5rem}.bg-transparent{background-color:transparent}.px-2{padding-left:.5rem;padding-right:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.hover\\:text-accent_blue_1:hover{--tw-text-opacity:1;color:rgb(27 157 217/var(--tw-text-opacity,1))}.focus-visible\\:outline:focus-visible{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:focus-visible{outline-width:3px}.focus-visible\\:outline-offset-0:focus-visible{outline-offset:0}.focus-visible\\:outline-accent_blue_1:focus-visible{outline-color:#1b9dd9}.active\\:text-main_text:active{--tw-text-opacity:1;color:rgb(77 78 83/var(--tw-text-opacity,1))}.mr-2{margin-right:.5rem}.hidden{display:none}.justify-between{justify-content:space-between}.rounded-radius-md{border-radius:var(--oui-theme-border-radius-md)}.border-t-width-xl{border-top-width:var(--oui-theme-border-width-xl)}.p-4{padding:1rem}.size-12{height:3rem;width:3rem}.shrink-0{flex-shrink:0}.grow-0{flex-grow:0}.rounded-radius-full{border-radius:var(--oui-theme-border-radius-full)}.border-width-sm{border-width:var(--oui-theme-border-width-sm)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.absolute{position:absolute}.left-2\\/4{left:50%}.top-2\\/4{top:50%}.-ml-1{margin-left:-.25rem}.-ml-1\\.5{margin-left:-.375rem}.-mt-1\\.5{margin-top:-.375rem}.inline-flex{display:inline-flex}.w-full{width:100%}.max-w-full{max-width:100%}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-none{border-radius:0}.rounded-l-none{border-bottom-left-radius:0;border-top-left-radius:0}.rounded-r-none{border-bottom-right-radius:0;border-top-right-radius:0}.border{border-width:1px}.border-transparent{border-color:transparent}.px-3{padding-left:.75rem;padding-right:.75rem}.font-inter{font-family:Inter,sans-serif}.font-medium{font-weight:500}.leading-5{line-height:1.25rem}.shadow,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-accent_blue_1:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(27 157 217/var(--tw-ring-opacity,1))}.dark\\:border-table_header:is(.dark *){--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.dark\\:border-white:is(.dark *){--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1))}.dark\\:bg-search_bar_blue:is(.dark *){--tw-bg-opacity:1;background-color:rgb(18 49 71/var(--tw-bg-opacity,1))}.dark\\:bg-white:is(.dark *){--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.dark\\:text-oec_blue:is(.dark *){--tw-text-opacity:1;color:rgb(0 60 113/var(--tw-text-opacity,1))}.dark\\:text-table_header_70:is(.dark *){--tw-text-opacity:1;color:rgb(151 156 166/var(--tw-text-opacity,1))}.dark\\:hover\\:border-tab_grey:hover:is(.dark *){--tw-border-opacity:1;border-color:rgb(191 196 205/var(--tw-border-opacity,1))}.dark\\:hover\\:border-table_header_70:hover:is(.dark *){--tw-border-opacity:1;border-color:rgb(151 156 166/var(--tw-border-opacity,1))}.dark\\:hover\\:bg-header_blue:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(6 33 54/var(--tw-bg-opacity,1))}.dark\\:hover\\:bg-tab_grey:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(191 196 205/var(--tw-bg-opacity,1))}.dark\\:hover\\:text-btn_primary_hover:hover:is(.dark *){--tw-text-opacity:1;color:rgb(2 49 91/var(--tw-text-opacity,1))}.col-span-3{grid-column:span 3/span 3}.col-start-1{grid-column-start:1}.col-start-3{grid-column-start:3}.col-end-auto{grid-column-end:auto}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-end-auto{grid-row-end:auto}.m-0{margin:0}.ml-2{margin-left:.5rem}.grid{display:grid}.contents{display:contents}.size-3\\.5{height:.875rem;width:.875rem}.size-4{height:1rem;width:1rem}.size-full{height:100%;width:100%}.min-h-full{min-height:100%}.min-w-full{min-width:100%}.flex-none{flex:none}.cursor-pointer{cursor:pointer}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.auto-cols-\\[100\\%\\]{grid-auto-columns:100%}.auto-cols-min{grid-auto-columns:min-content}.grid-flow-col{grid-auto-flow:column}.auto-rows-\\[100\\%\\]{grid-auto-rows:100%}.grid-cols-\\[min-content_1fr_min-content\\]{grid-template-columns:min-content 1fr min-content}.grid-rows-\\[1fr_min-content\\]{grid-template-rows:1fr min-content}.flex-wrap{flex-wrap:wrap}.gap-x-4{column-gap:1rem}.gap-y-4{row-gap:1rem}.overflow-auto{overflow:auto}.overflow-y-hidden{overflow-y:hidden}.overscroll-x-contain{overscroll-behavior-x:contain}.rounded-full{border-radius:9999px}.rounded-radius-lg{border-radius:var(--oui-theme-border-radius-lg)}.bg-none{background-image:none}.p-0{padding:0}.py-4{padding-bottom:1rem;padding-top:1rem}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.focus\\:outline-width-lg:focus{outline-width:var(--oui-theme-border-width-lg)}.focus\\:-outline-offset-0:focus{outline-offset:0}.focus\\:-outline-offset-2:focus{outline-offset:-2px}.focus\\:outline-focus-ring-color-border-default:focus{outline-color:var(--oui-theme-focus-ring-color-border-default)}.focus-visible\\:outline-width-lg:focus-visible{outline-width:var(--oui-theme-border-width-lg)}.focus-visible\\:ring-focus-ring-color-border-default:focus-visible{--tw-ring-color:var(--oui-theme-focus-ring-color-border-default)}.inset-0{inset:0}.z-50{z-index:50}.z-60{z-index:60}.max-h-\\[68\\.333vh\\]{max-height:68.333vh}.max-h-full{max-height:100%}.max-w-\\[37\\.5em\\]{max-width:37.5em}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.justify-end{justify-content:flex-end}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.border-b{border-bottom-width:1px}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1))}.bg-opacity-60{--tw-bg-opacity:0.6}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.text-\\[21px\\]{font-size:21px}.shadow,.shadow-dialog{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-dialog{--tw-shadow:2px 0px 4px rgba(0,0,0,.25);--tw-shadow-colored:2px 0px 4px var(--tw-shadow-color)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.dark\\:border-gray-700\\/60:is(.dark *){border-color:rgba(55,65,81,.6)}.right-0{right:0}.h-full{height:100%}.w-\\[28em\\]{width:28em}.flex-col{flex-direction:column}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-7{padding-bottom:1.75rem;padding-top:1.75rem}.py-8{padding-bottom:2rem;padding-top:2rem}.inline-block{display:inline-block}.flex-auto{flex:1 1 auto}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pl-2{padding-left:.5rem}.outline-focus-ring-color-border-default{outline-color:var(--oui-theme-focus-ring-color-border-default)}.hover\\:bg-background-default-hover:hover{background-color:var(--oui-theme-color-background-default-hover)}.-z-10{z-index:-10}.ms-2{margin-inline-start:.5rem}.mt-1{margin-top:.25rem}.max-h-40{max-height:10rem}.min-w-0{min-width:0}.flex-grow{flex-grow:1}.rotate-0{--tw-rotate:0deg}.rotate-0,.rotate-180{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg}.justify-start{justify-content:flex-start}.border-none{border-style:none}.pe-3{padding-inline-end:.75rem}.align-middle{vertical-align:middle}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-width-lg{outline-width:var(--oui-theme-border-width-lg)}.outline-offset-0{outline-offset:0}.outline-border-status-error{outline-color:var(--oui-theme-color-border-status-error)}.transition-\\[rotate\\]{transition-duration:.15s;transition-property:rotate;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-\\[250ms\\]{transition-duration:.25s}.placeholder\\:ps-2::placeholder{padding-inline-start:.5rem}.placeholder\\:text-content-subtle::placeholder{color:var(--oui-theme-color-content-subtle)}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.left-0{left:0}.top-0{top:0}.isolate{isolation:isolate}.z-40{z-index:40}.z-\\[-1\\]{z-index:-1}.size-2\\.5{height:.625rem;width:.625rem}.rotate-45{--tw-rotate:45deg}.rotate-45,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.bottom-0{bottom:0}.z-0{z-index:0}.z-10{z-index:10}.m-0\\.5{margin:.125rem}.m-1{margin:.25rem}.m-\\[0\\.12rem\\]{margin:.12rem}.size-\\[34px\\]{height:34px;width:34px}.h-1\\/2{height:50%}.h-\\[38px\\]{height:38px}.min-h-\\[80px\\]{min-height:80px}.w-\\[2px\\]{width:2px}.w-\\[38px\\]{width:38px}.scale-150{--tw-scale-x:1.5;--tw-scale-y:1.5}.scale-150,.scale-\\[1\\.4\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-row{flex-direction:row}.items-start{align-items:flex-start}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.border-2{border-width:2px}.text-base{font-size:1rem;line-height:1.5rem}.gap-4{gap:1rem}.whitespace-nowrap{white-space:nowrap}.border-solid{border-style:solid}.right-1{right:.25rem}.mr-4{margin-right:1rem}";

const OIcon = /*@__PURE__*/ proxyCustomElement(class OIcon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /** The size of the icon, can be 'sm', 'md', 'lg'. */
        this.size = 'sm';
        /** Optional color for the icon, can be a hex value or a color name. */
        this.color = 'oec_blue';
    }
    /** Lifecycle method that runs before the component loads. Initializes the icon library and sets the icon SVG. */
    componentWillLoad() {
        if (fal)
            library$1.add(fal);
        this.updateIcon();
        this.setSize();
    }
    /** Watch for changes to the size prop and update the size class accordingly. */
    watchSizeHandler() {
        if (typeof this.size === 'undefined')
            this.size = 'sm';
        this.setSize();
    }
    /** Updates the SVG based on the current name. */
    updateIcon() {
        var _a;
        const prefix = 'fal';
        this.svg = ((_a = icon({ prefix, iconName: this.name })) === null || _a === void 0 ? void 0 : _a.html[0]) || ''; // Get the SVG for the specified icon
    }
    /** Sets the size class based on the size prop. */
    setSize() {
        switch (this.size) {
            case 'sm':
                this.sizeClass = 'w-4 h-4';
                break;
            case 'md':
                this.sizeClass = 'w-6 h-6';
                break;
            case 'lg':
                this.sizeClass = 'w-8 h-8';
                break;
            default:
                this.sizeClass = 'w-4 h-4'; // Default size 'sm'
        }
    }
    render() {
        const textColorClass = `text-${this.color}`;
        return (h(Host, { key: 'e4eb065a94a7ab8ddde4e4cd99bc9a6f75fe0c31' }, h("div", { key: 'ac26ee1e80f8ccbc36432c240ed329368cba7ffa', class: `antialiased justify-center flex ${textColorClass} items-center ${this.sizeClass}`, style: { color: this.color }, innerHTML: this.svg })));
    }
    static get watchers() { return {
        "size": ["watchSizeHandler"]
    }; }
    static get style() { return oIconCss; }
}, [1, "o-icon", {
        "size": [1537],
        "color": [513],
        "name": [513],
        "svg": [32],
        "sizeClass": [32]
    }, undefined, {
        "size": ["watchSizeHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["o-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "o-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, OIcon);
            }
            break;
    } });
}

export { OIcon as O, defineCustomElement as d };
//# sourceMappingURL=p-B2hBMR09.js.map

//# sourceMappingURL=p-B2hBMR09.js.map