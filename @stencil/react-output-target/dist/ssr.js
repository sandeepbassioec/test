import o from "react";
import $ from "next/dynamic";
var H = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, v = "px", A = (e) => typeof e == "number" || typeof e == "string";
function U(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function j(e, t, n = v) {
  if (typeof t != "string" && typeof t != "number")
    throw new Error(
      "Invalid input: value of 'cssProperties' must be string or number."
    );
  const r = H[e] === 1;
  if (typeof t == "string" || t === 0 || r)
    return `${t}`;
  const i = (typeof n == "string" ? n : n[e]) || v;
  return `${t}${i}`;
}
function D(e, t) {
  if (typeof e != "object" || e === null)
    throw new TypeError(
      `[stringifyStyleDeclaration]: Expected 'styleDeclaration' to be a non-null object, but received ${e} (type:${typeof e}).`
    );
  const n = t != null && t.important ? "!important" : "";
  return Object.entries(e).filter(([r, i]) => A(i)).map(
    ([r, i]) => `${U(r)}:${j(
      r,
      i,
      t == null ? void 0 : t.unit
    )}${n};`
  ).join("");
}
function F(e, t = !1) {
  if (typeof e != "object" || e === null)
    throw new TypeError(
      `[stringifyCSSProperties]: Expected 'cssProperties' to be a non-null object, but received ${e} (type:${typeof e}).`
    );
  return D(e, typeof t == "boolean" ? {
    important: t
  } : t);
}
const W = {
  acceptCharset: "accept-charset",
  accessKey: "accesskey",
  allowFullScreen: "allowfullscreen",
  autoCapitalize: "autocapitalize",
  autoComplete: "autocomplete",
  autoCorrect: "autocorrect",
  autoFocus: "autofocus",
  autoPlay: "autoplay",
  autoSave: "autosave",
  cellPadding: "cellpadding",
  cellSpacing: "cellspacing",
  charSet: "charset",
  className: "class",
  classID: "classid",
  colSpan: "colspan",
  contentEditable: "contenteditable",
  contextMenu: "contextmenu",
  controlsList: "controlslist",
  crossOrigin: "crossorigin",
  dangerouslySetInnerHTML: "dangerouslysetinnerhtml",
  dateTime: "datetime",
  defaultChecked: "defaultchecked",
  defaultValue: "defaultvalue",
  disablePictureInPicture: "disablepictureinpicture",
  disableRemotePlayback: "disableremoteplayback",
  encType: "enctype",
  enterKeyHint: "enterkeyhint",
  fetchPriority: "fetchpriority",
  htmlFor: "for",
  formMethod: "formmethod",
  formAction: "formaction",
  formEncType: "formenctype",
  formNoValidate: "formnovalidate",
  formTarget: "formtarget",
  frameBorder: "frameborder",
  hrefLang: "hreflang",
  httpEquiv: "http-equiv",
  imageSizes: "imagesizes",
  imageSrcSet: "imagesrcset",
  inputMode: "inputmode",
  itemID: "itemid",
  itemProp: "itemprop",
  itemRef: "itemref",
  itemScope: "itemscope",
  itemType: "itemtype",
  keyParams: "keyparams",
  keyType: "keytype",
  marginWidth: "marginwidth",
  marginHeight: "marginheight",
  maxLength: "maxlength",
  mediaGroup: "mediagroup",
  noModule: "nomodule",
  noValidate: "novalidate",
  playsInline: "playsinline",
  radioGroup: "radiogroup",
  readOnly: "readonly",
  referrerPolicy: "referrerpolicy",
  rowSpan: "rowspan",
  spellCheck: "spellcheck",
  srcDoc: "srcdoc",
  srcLang: "srclang",
  srcSet: "srcset",
  tabIndex: "tabindex",
  useMap: "usemap",
  accentHeight: "accent-height",
  alignmentBaseline: "alignment-baseline",
  arabicForm: "arabic-form",
  attributeName: "attributename",
  attributeType: "attributetype",
  autoReverse: "autoreverse",
  baseFrequency: "basefrequency",
  baselineShift: "baseline-shift",
  baseProfile: "baseprofile",
  calcMode: "calcmode",
  capHeight: "cap-height",
  clipPath: "clip-path",
  clipPathUnits: "clippathunits",
  clipRule: "clip-rule",
  colorInterpolation: "color-interpolation",
  colorInterpolationFilters: "color-interpolation-filters",
  colorProfile: "color-profile",
  colorRendering: "color-rendering",
  contentScriptType: "contentscripttype",
  contentStyleType: "contentstyletype",
  diffuseConstant: "diffuseconstant",
  dominantBaseline: "dominant-baseline",
  enableBackground: "enable-background",
  externalResourcesRequired: "externalresourcesrequired",
  fillOpacity: "fill-opacity",
  fillRule: "fill-rule",
  filterRes: "filterres",
  filterUnits: "filterunits",
  floodOpacity: "flood-opacity",
  floodColor: "flood-color",
  fontFamily: "font-family",
  fontSize: "font-size",
  fontSizeAdjust: "font-size-adjust",
  fontStretch: "font-stretch",
  fontStyle: "font-style",
  fontVariant: "font-variant",
  fontWeight: "font-weight",
  glyphName: "glyph-name",
  glyphOrientationHorizontal: "glyph-orientation-horizontal",
  glyphOrientationVertical: "glyph-orientation-vertical",
  gradientTransform: "gradienttransform",
  gradientUnits: "gradientunits",
  horizAdvX: "horiz-adv-x",
  horizOriginX: "horiz-origin-x",
  imageRendering: "image-rendering",
  kernelMatrix: "kernelmatrix",
  kernelUnitLength: "kernelunitlength",
  keyPoints: "keypoints",
  keySplines: "keysplines",
  keyTimes: "keytimes",
  lengthAdjust: "lengthadjust",
  letterSpacing: "letter-spacing",
  lightingColor: "lighting-color",
  limitingConeAngle: "limitingconeangle",
  markerEnd: "marker-end",
  markerHeight: "markerheight",
  markerMid: "marker-mid",
  markerStart: "marker-start",
  markerUnits: "markerunits",
  markerWidth: "markerwidth",
  maskContentUnits: "maskcontentunits",
  maskUnits: "maskunits",
  numOctaves: "numoctaves",
  overlinePosition: "overline-position",
  overlineThickness: "overline-thickness",
  paintOrder: "paint-order",
  panose1: "panose-1",
  pathLength: "pathlength",
  patternContentUnits: "patterncontentunits",
  patternTransform: "patterntransform",
  patternUnits: "patternunits",
  pointerEvents: "pointer-events",
  pointsAtX: "pointsatx",
  pointsAtY: "pointsaty",
  pointsAtZ: "pointsatz",
  preserveAlpha: "preservealpha",
  preserveAspectRatio: "preserveaspectratio",
  primitiveUnits: "primitiveunits",
  refX: "refx",
  refY: "refy",
  renderingIntent: "rendering-intent",
  repeatCount: "repeatcount",
  repeatDur: "repeatdur",
  requiredExtensions: "requiredextensions",
  requiredFeatures: "requiredfeatures",
  shapeRendering: "shape-rendering",
  slot: "slot",
  specularConstant: "specularconstant",
  specularExponent: "specularexponent",
  spreadMethod: "spreadmethod",
  startOffset: "startoffset",
  stdDeviation: "stddeviation",
  stitchTiles: "stitchtiles",
  stopColor: "stop-color",
  stopOpacity: "stop-opacity",
  strikethroughPosition: "strikethrough-position",
  strikethroughThickness: "strikethrough-thickness",
  strokeDasharray: "stroke-dasharray",
  strokeDashoffset: "stroke-dashoffset",
  strokeLinecap: "stroke-linecap",
  strokeLinejoin: "stroke-linejoin",
  strokeMiterlimit: "stroke-miterlimit",
  strokeWidth: "stroke-width",
  strokeOpacity: "stroke-opacity",
  suppressContentEditableWarning: "suppresscontenteditablewarning",
  suppressHydrationWarning: "suppresshydrationwarning",
  surfaceScale: "surfacescale",
  systemLanguage: "systemlanguage",
  tableValues: "tablevalues",
  targetX: "targetx",
  targetY: "targety",
  textAnchor: "text-anchor",
  textDecoration: "text-decoration",
  textLength: "textlength",
  textRendering: "text-rendering",
  transformOrigin: "transform-origin",
  underlinePosition: "underline-position",
  underlineThickness: "underline-thickness",
  unicodeBidi: "unicode-bidi",
  unicodeRange: "unicode-range",
  unitsPerEm: "units-per-em",
  vectorEffect: "vector-effect",
  vertAdvY: "vert-adv-y",
  vertOriginX: "vert-origin-x",
  vertOriginY: "vert-origin-y",
  wordSpacing: "word-spacing",
  writingMode: "writing-mode",
  xChannelSelector: "xchannelselector",
  xHeight: "x-height",
  xlinkActuate: "xlink:actuate",
  xlinkArcrole: "xlink:arcrole",
  xlinkHref: "xlink:href",
  xlinkRole: "xlink:role",
  xlinkShow: "xlink:show",
  xlinkTitle: "xlink:title",
  xlinkType: "xlink:type",
  xmlBase: "xml:base",
  xmlLang: "xml:lang",
  xmlnsXlink: "xmlns:xlink",
  yChannelSelector: "ychannelselector",
  zoomAndPan: "zoomandpan"
}, N = "[react-output-target]", u = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", T = (e) => e == null, C = (e) => Array.isArray(e), G = (e) => !!e && /^\s*class\s+/.test(e.toString()), B = (e) => !!e && typeof e == "object" && "_payload" in e, V = (e) => async ({ children: t, ...n } = {}) => {
  if (!("process" in globalThis) || typeof window < "u")
    throw new Error("`createComponentForServerSideRendering` can only be run on the server");
  let r = "";
  for (const [s, a] of Object.entries(n)) {
    let c = u(a) ? `"${a}"` : typeof a != "function" ? e.serializeProperty(a) : void 0;
    if (s === "style" && typeof a == "object" && a && (c = `"${F(a)}"`), !c)
      continue;
    const d = W[s] || e.properties[s] || s;
    r += ` ${d}=${c}`;
  }
  let i = "";
  const l = e.transformTag ? e.transformTag(e.tagName) : e.tagName, S = `<${l}${r} suppressHydrationWarning="true">`, E = console.error;
  try {
    process.env.STENCIL_SSR_DEBUG || (console.error = () => {
    });
    const s = await h(t);
    i = (await import("react-dom/server")).renderToString(s);
  } catch (s) {
    if (process.env.STENCIL_SSR_DEBUG) {
      const a = s instanceof Error ? s : new Error("Unknown error");
      console.warn(
        `${N} Failed to serialize light DOM for ${S.slice(0, -1)} />: ${a.stack} - this may impact the hydration of the component`
      );
    }
  } finally {
    console.error = E;
  }
  const R = `${S}${i}</${l}>`, { html: f, styles: x } = await e.renderToString(R, {
    fullDocument: !1,
    serializeShadowRoot: e.serializeShadowRoot ?? "declarative-shadow-dom",
    prettyHtml: !0
  });
  if (!f)
    throw new Error("No HTML returned from renderToString");
  const p = f.split(`
`), z = "<!--r.1-->", b = p[1].includes('shadowrootmode="open"');
  let w;
  b && (w = p.slice(2, p.lastIndexOf("  </template>")).join(`
`).trim());
  const { default: P } = await import("html-react-parser"), L = P, O = () => L(f, {
    transform(s, a) {
      if ("name" in a && (a.name === l || a.name === e.tagName)) {
        const c = s.props, d = `${l}`;
        if (!b) {
          const { children: m, ...I } = c || {}, _ = p.slice(1, -1).join(`
`).trim().replace(new RegExp("(?<=>)\\s+(?=<)", "g"), "");
          return /* @__PURE__ */ o.createElement(o.Fragment, null, x.map((g) => /* @__PURE__ */ o.createElement("style", { key: g.id, id: g.id, dangerouslySetInnerHTML: { __html: g.content } })), /* @__PURE__ */ o.createElement(d, { ...I, suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: _ } }));
        }
        return /* @__PURE__ */ o.createElement(o.Fragment, null, x.map((m) => /* @__PURE__ */ o.createElement("style", { key: m.id, id: m.id, dangerouslySetInnerHTML: { __html: m.content } })), /* @__PURE__ */ o.createElement(d, { ...c, suppressHydrationWarning: !0 }, /* @__PURE__ */ o.createElement(
          "template",
          {
            shadowrootmode: "open",
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: z + w }
          }
        ), t));
      }
    }
  }), M = $(async () => e.clientModule, {
    /**
     * Render Declarative Shadow DOM component
     */
    loading: () => /* @__PURE__ */ o.createElement(O, null),
    ssr: !1
  });
  return /* @__PURE__ */ o.createElement(M, { suppressHydrationWarning: !0, ...n }, t);
};
async function h(e) {
  return u(e) || T(e) ? e : (C(e) || (e = [e]), Promise.all(
    Array.from(e).map(async (t) => {
      if (u(t) || T(t))
        return t;
      if (C(t))
        return h(t);
      if (!o.isValidElement(t))
        return t;
      const { type: n, props: r } = t;
      try {
        const i = await k(n, r);
        if (o.isValidElement(i))
          return i;
        const l = r != null && r.children ? await h(r.children) : r == null ? void 0 : r.children;
        return typeof i == "string" ? o.createElement(i, { ...r, children: l }) : o.cloneElement(t, { ...r, children: l });
      } catch (i) {
        return process.env.STENCIL_SSR_DEBUG && console.warn("Failed to resolve component type:", i), t;
      }
    })
  ));
}
const k = async (e, t) => {
  if (typeof e == "string")
    return e;
  try {
    let n = null;
    if (G(e)) {
      const r = new e(t);
      n = r.render ? await r.render() : r;
    } else if (B(e)) {
      const r = e._payload, i = r._status === -1 ? await r._result() : r._result, l = i.default || i;
      n = await k(l, t);
    } else if (typeof e == "function") {
      let r = e(t);
      r && typeof r == "object" && "then" in r && typeof r.then == "function" && (r = await r), n = r;
    }
    for (; n && typeof n == "object" && !o.isValidElement(n) && !u(n) && "type" in n; )
      n = await k(n.type, t);
    return n;
  } catch (n) {
    return process.env.STENCIL_SSR_DEBUG && console.warn("Error resolving component type:", n), null;
  }
};
let y = null;
const Y = (e) => typeof window < "u" ? e.clientModule : async (t) => {
  let n = !1;
  y || (y = await e.hydrateModule, n = !0);
  const r = y;
  if (e.getTagTransformer && n) {
    const i = e.getTagTransformer();
    i && r.setTagTransformer(i);
  }
  return e.transformTag = r.transformTag, V({
    renderToString: r.renderToString,
    serializeProperty: r.serializeProperty,
    ...e
  })(t);
};
export {
  Y as createComponent
};
//# sourceMappingURL=ssr.js.map
