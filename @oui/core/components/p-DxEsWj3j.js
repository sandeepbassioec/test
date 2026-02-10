import { p as proxyCustomElement, H, h, d as Host } from './p-BKK1aA3K.js';

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

function e(t){return i(t)}function r(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function i(e){for(let t=e;t;t=r(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let n=r(e);n;n=r(n)){if(!(n instanceof Element))continue;const e=getComputedStyle(n);if("contents"!==e.display){if("static"!==e.position||isContainingBlock(e))return n;if("BODY"===n.tagName)return n}}return null}

const oPopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.18 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;color:#6b7280;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{--tw-shadow:0 0 #0000;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,input:where(:not([type])):focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;print-color-adjust:exact;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=checkbox]:checked{appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=radio]:checked{appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}@media (forced-colors:active){[type=checkbox]:indeterminate{appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.contents{display:contents}.border-accent_blue{--tw-border-opacity:1;border-color:rgb(45 200 216/var(--tw-border-opacity,1))}.border-accent_blue_1{--tw-border-opacity:1;border-color:rgb(27 157 217/var(--tw-border-opacity,1))}.border-accent_blue_21{--tw-border-opacity:1;border-color:rgb(207 234 247/var(--tw-border-opacity,1))}.border-accent_blue_50{--tw-border-opacity:1;border-color:rgb(238 248 252/var(--tw-border-opacity,1))}.border-app-bar-color-background-default{border-color:var(--oui-theme-app-bar-color-background-default)}.border-app-bar-color-content-default{border-color:var(--oui-theme-app-bar-color-content-default)}.border-awaiting_1{--tw-border-opacity:1;border-color:rgb(137 105 31/var(--tw-border-opacity,1))}.border-awaiting_2{--tw-border-opacity:1;border-color:rgb(252 241 217/var(--tw-border-opacity,1))}.border-background-brand{border-color:var(--oui-theme-color-background-brand)}.border-background-brand-disabled{border-color:var(--oui-theme-color-background-brand-disabled)}.border-background-brand-hover{border-color:var(--oui-theme-color-background-brand-hover)}.border-background-brand-knockout{border-color:var(--oui-theme-color-background-brand-knockout)}.border-background-brand-knockout-disabled{border-color:var(--oui-theme-color-background-brand-knockout-disabled)}.border-background-brand-knockout-hover{border-color:var(--oui-theme-color-background-brand-knockout-hover)}.border-background-default{border-color:var(--oui-theme-color-background-default)}.border-background-default-hover{border-color:var(--oui-theme-color-background-default-hover)}.border-background-disabled{border-color:var(--oui-theme-color-background-disabled)}.border-background-knockout{border-color:var(--oui-theme-color-background-knockout)}.border-background-status-error{border-color:var(--oui-theme-color-background-status-error)}.border-background-status-error-knockout{border-color:var(--oui-theme-color-background-status-error-knockout)}.border-background-status-info{border-color:var(--oui-theme-color-background-status-info)}.border-background-status-info-knockout{border-color:var(--oui-theme-color-background-status-info-knockout)}.border-background-status-neutral{border-color:var(--oui-theme-color-background-status-neutral)}.border-background-status-neutral-knockout{border-color:var(--oui-theme-color-background-status-neutral-knockout)}.border-background-status-success{border-color:var(--oui-theme-color-background-status-success)}.border-background-status-success-knockout{border-color:var(--oui-theme-color-background-status-success-knockout)}.border-background-status-warning{border-color:var(--oui-theme-color-background-status-warning)}.border-background-status-warning-knockout{border-color:var(--oui-theme-color-background-status-warning-knockout)}.border-background-strong{border-color:var(--oui-theme-color-background-strong)}.border-background-subtle{border-color:var(--oui-theme-color-background-subtle)}.border-background-transparent{border-color:var(--oui-theme-color-background-transparent)}.border-background-transparent-strong{border-color:var(--oui-theme-color-background-transparent-strong)}.border-black_20{--tw-border-opacity:1;border-color:rgb(204 204 204/var(--tw-border-opacity,1))}.border-blue_bk{--tw-border-opacity:1;border-color:rgb(37 84 118/var(--tw-border-opacity,1))}.border-blue_steel{--tw-border-opacity:1;border-color:rgb(127 144 158/var(--tw-border-opacity,1))}.border-blue_txt{--tw-border-opacity:1;border-color:rgb(89 182 250/var(--tw-border-opacity,1))}.border-border-brand{border-color:var(--oui-theme-color-border-brand)}.border-border-brand-hover{border-color:var(--oui-theme-color-border-brand-hover)}.border-border-default{border-color:var(--oui-theme-color-border-default)}.border-border-default-hover{border-color:var(--oui-theme-color-border-default-hover)}.border-border-disabled{border-color:var(--oui-theme-color-border-disabled)}.border-border-knockout{border-color:var(--oui-theme-color-border-knockout)}.border-border-status-error{border-color:var(--oui-theme-color-border-status-error)}.border-border-status-info{border-color:var(--oui-theme-color-border-status-info)}.border-border-status-neutral{border-color:var(--oui-theme-color-border-status-neutral)}.border-border-status-success{border-color:var(--oui-theme-color-border-status-success)}.border-border-status-warning{border-color:var(--oui-theme-color-border-status-warning)}.border-btn_primary_hover{--tw-border-opacity:1;border-color:rgb(2 49 91/var(--tw-border-opacity,1))}.border-button-color-background-default{border-color:var(--oui-theme-button-color-background-default)}.border-button-color-background-default-hover{border-color:var(--oui-theme-button-color-background-default-hover)}.border-button-color-background-knockout{border-color:var(--oui-theme-button-color-background-knockout)}.border-button-color-background-knockout-hover{border-color:var(--oui-theme-button-color-background-knockout-hover)}.border-button-color-border-default{border-color:var(--oui-theme-button-color-border-default)}.border-button-color-border-default-hover{border-color:var(--oui-theme-button-color-border-default-hover)}.border-button-color-content-default{border-color:var(--oui-theme-button-color-content-default)}.border-button-color-content-default-hover{border-color:var(--oui-theme-button-color-content-default-hover)}.border-button-color-content-knockout{border-color:var(--oui-theme-button-color-content-knockout)}.border-button-color-content-knockout-hover{border-color:var(--oui-theme-button-color-content-knockout-hover)}.border-card_subhead{--tw-border-opacity:1;border-color:rgb(127 144 158/var(--tw-border-opacity,1))}.border-completed_1{--tw-border-opacity:1;border-color:rgb(31 114 173/var(--tw-border-opacity,1))}.border-completed_2{--tw-border-opacity:1;border-color:rgb(221 247 251/var(--tw-border-opacity,1))}.border-content-brand{border-color:var(--oui-theme-color-content-brand)}.border-content-brand-disabled{border-color:var(--oui-theme-color-content-brand-disabled)}.border-content-brand-hover{border-color:var(--oui-theme-color-content-brand-hover)}.border-content-brand-knockout{border-color:var(--oui-theme-color-content-brand-knockout)}.border-content-brand-knockout-hover{border-color:var(--oui-theme-color-content-brand-knockout-hover)}.border-content-default{border-color:var(--oui-theme-color-content-default)}.border-content-default-hover{border-color:var(--oui-theme-color-content-default-hover)}.border-content-disabled{border-color:var(--oui-theme-color-content-disabled)}.border-content-knockout{border-color:var(--oui-theme-color-content-knockout)}.border-content-status-error{border-color:var(--oui-theme-color-content-status-error)}.border-content-status-error-knockout{border-color:var(--oui-theme-color-content-status-error-knockout)}.border-content-status-info{border-color:var(--oui-theme-color-content-status-info)}.border-content-status-info-knockout{border-color:var(--oui-theme-color-content-status-info-knockout)}.border-content-status-neutral{border-color:var(--oui-theme-color-content-status-neutral)}.border-content-status-neutral-knockout{border-color:var(--oui-theme-color-content-status-neutral-knockout)}.border-content-status-success{border-color:var(--oui-theme-color-content-status-success)}.border-content-status-success-knockout{border-color:var(--oui-theme-color-content-status-success-knockout)}.border-content-status-warning{border-color:var(--oui-theme-color-content-status-warning)}.border-content-status-warning-knockout{border-color:var(--oui-theme-color-content-status-warning-knockout)}.border-content-subtle{border-color:var(--oui-theme-color-content-subtle)}.border-content-subtle-hover{border-color:var(--oui-theme-color-content-subtle-hover)}.border-electric_blue{--tw-border-opacity:1;border-color:rgb(40 134 236/var(--tw-border-opacity,1))}.border-error_red{--tw-border-opacity:1;border-color:rgb(180 49 29/var(--tw-border-opacity,1))}.border-error_red_2{--tw-border-opacity:1;border-color:rgb(255 209 209/var(--tw-border-opacity,1))}.border-expire_orange{--tw-border-opacity:1;border-color:rgb(238 154 16/var(--tw-border-opacity,1))}.border-flame_red{--tw-border-opacity:1;border-color:rgb(222 79 56/var(--tw-border-opacity,1))}.border-focus-ring-color-border-default{border-color:var(--oui-theme-focus-ring-color-border-default)}.border-form-color-background-active{border-color:var(--oui-theme-form-color-background-active)}.border-form-color-background-default{border-color:var(--oui-theme-form-color-background-default)}.border-form-color-background-disabled{border-color:var(--oui-theme-form-color-background-disabled)}.border-form-color-background-focus{border-color:var(--oui-theme-form-color-background-focus)}.border-form-color-background-hover{border-color:var(--oui-theme-form-color-background-hover)}.border-form-color-border-active{border-color:var(--oui-theme-form-color-border-active)}.border-form-color-border-default{border-color:var(--oui-theme-form-color-border-default)}.border-form-color-border-disabled{border-color:var(--oui-theme-form-color-border-disabled)}.border-form-color-border-focus{border-color:var(--oui-theme-form-color-border-focus)}.border-form-color-border-hover{border-color:var(--oui-theme-form-color-border-hover)}.border-green_1{--tw-border-opacity:1;border-color:rgb(210 255 226/var(--tw-border-opacity,1))}.border-green_2{--tw-border-opacity:1;border-color:rgb(21 119 58/var(--tw-border-opacity,1))}.border-green_bl{--tw-border-opacity:1;border-color:rgb(25 67 17/var(--tw-border-opacity,1))}.border-green_txt{--tw-border-opacity:1;border-color:rgb(61 209 117/var(--tw-border-opacity,1))}.border-header_blue{--tw-border-opacity:1;border-color:rgb(6 33 54/var(--tw-border-opacity,1))}.border-label{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity,1))}.border-light_gray{--tw-border-opacity:1;border-color:rgb(243 245 245/var(--tw-border-opacity,1))}.border-link-color-content-active{border-color:var(--oui-theme-link-color-content-active)}.border-link-color-content-default{border-color:var(--oui-theme-link-color-content-default)}.border-link-color-content-hover{border-color:var(--oui-theme-link-color-content-hover)}.border-link-color-content-visited{border-color:var(--oui-theme-link-color-content-visited)}.border-lt_blue{--tw-border-opacity:1;border-color:rgb(227 237 247/var(--tw-border-opacity,1))}.border-main_background{--tw-border-opacity:1;border-color:rgb(246 244 244/var(--tw-border-opacity,1))}.border-main_text{--tw-border-opacity:1;border-color:rgb(77 78 83/var(--tw-border-opacity,1))}.border-midnight_blue{--tw-border-opacity:1;border-color:rgb(6 33 54/var(--tw-border-opacity,1))}.border-oec_blue{--tw-border-opacity:1;border-color:rgb(0 60 113/var(--tw-border-opacity,1))}.border-oec_grey{--tw-border-opacity:1;border-color:rgb(77 78 83/var(--tw-border-opacity,1))}.border-red_bl{--tw-border-opacity:1;border-color:rgb(56 44 60/var(--tw-border-opacity,1))}.border-red_txt{--tw-border-opacity:1;border-color:rgb(252 110 87/var(--tw-border-opacity,1))}.border-school_bus_yellow{--tw-border-opacity:1;border-color:rgb(238 205 69/var(--tw-border-opacity,1))}.border-search_bar_blue{--tw-border-opacity:1;border-color:rgb(18 49 71/var(--tw-border-opacity,1))}.border-spring_green{--tw-border-opacity:1;border-color:rgb(66 200 91/var(--tw-border-opacity,1))}.border-tab_grey{--tw-border-opacity:1;border-color:rgb(191 196 205/var(--tw-border-opacity,1))}.border-table_header{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1))}.border-table_header_70{--tw-border-opacity:1;border-color:rgb(151 156 166/var(--tw-border-opacity,1))}.border-teal{--tw-border-opacity:1;border-color:rgb(18 179 168/var(--tw-border-opacity,1))}.border-volt_yellow{--tw-border-opacity:1;border-color:rgb(206 248 0/var(--tw-border-opacity,1))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1))}.border-xx_lt_grey{--tw-border-opacity:1;border-color:rgb(252 252 253/var(--tw-border-opacity,1))}.border-yellow_bl{--tw-border-opacity:1;border-color:rgb(53 64 53/var(--tw-border-opacity,1))}.border-yellow_txt{--tw-border-opacity:1;border-color:rgb(233 183 67/var(--tw-border-opacity,1))}.bg-accent_blue{--tw-bg-opacity:1;background-color:rgb(45 200 216/var(--tw-bg-opacity,1))}.bg-accent_blue_1{--tw-bg-opacity:1;background-color:rgb(27 157 217/var(--tw-bg-opacity,1))}.bg-accent_blue_21{--tw-bg-opacity:1;background-color:rgb(207 234 247/var(--tw-bg-opacity,1))}.bg-accent_blue_50{--tw-bg-opacity:1;background-color:rgb(238 248 252/var(--tw-bg-opacity,1))}.bg-app-bar-color-background-default{background-color:var(--oui-theme-app-bar-color-background-default)}.bg-app-bar-color-content-default{background-color:var(--oui-theme-app-bar-color-content-default)}.bg-awaiting_1{--tw-bg-opacity:1;background-color:rgb(137 105 31/var(--tw-bg-opacity,1))}.bg-awaiting_2{--tw-bg-opacity:1;background-color:rgb(252 241 217/var(--tw-bg-opacity,1))}.bg-background-brand{background-color:var(--oui-theme-color-background-brand)}.bg-background-brand-disabled{background-color:var(--oui-theme-color-background-brand-disabled)}.bg-background-brand-hover{background-color:var(--oui-theme-color-background-brand-hover)}.bg-background-brand-knockout{background-color:var(--oui-theme-color-background-brand-knockout)}.bg-background-brand-knockout-disabled{background-color:var(--oui-theme-color-background-brand-knockout-disabled)}.bg-background-brand-knockout-hover{background-color:var(--oui-theme-color-background-brand-knockout-hover)}.bg-background-default{background-color:var(--oui-theme-color-background-default)}.bg-background-default-hover{background-color:var(--oui-theme-color-background-default-hover)}.bg-background-disabled{background-color:var(--oui-theme-color-background-disabled)}.bg-background-knockout{background-color:var(--oui-theme-color-background-knockout)}.bg-background-status-error{background-color:var(--oui-theme-color-background-status-error)}.bg-background-status-error-knockout{background-color:var(--oui-theme-color-background-status-error-knockout)}.bg-background-status-info{background-color:var(--oui-theme-color-background-status-info)}.bg-background-status-info-knockout{background-color:var(--oui-theme-color-background-status-info-knockout)}.bg-background-status-neutral{background-color:var(--oui-theme-color-background-status-neutral)}.bg-background-status-neutral-knockout{background-color:var(--oui-theme-color-background-status-neutral-knockout)}.bg-background-status-success{background-color:var(--oui-theme-color-background-status-success)}.bg-background-status-success-knockout{background-color:var(--oui-theme-color-background-status-success-knockout)}.bg-background-status-warning{background-color:var(--oui-theme-color-background-status-warning)}.bg-background-status-warning-knockout{background-color:var(--oui-theme-color-background-status-warning-knockout)}.bg-background-strong{background-color:var(--oui-theme-color-background-strong)}.bg-background-subtle{background-color:var(--oui-theme-color-background-subtle)}.bg-background-transparent{background-color:var(--oui-theme-color-background-transparent)}.bg-background-transparent-strong{background-color:var(--oui-theme-color-background-transparent-strong)}.bg-black_20{--tw-bg-opacity:1;background-color:rgb(204 204 204/var(--tw-bg-opacity,1))}.bg-blue_bk{--tw-bg-opacity:1;background-color:rgb(37 84 118/var(--tw-bg-opacity,1))}.bg-blue_steel{--tw-bg-opacity:1;background-color:rgb(127 144 158/var(--tw-bg-opacity,1))}.bg-blue_txt{--tw-bg-opacity:1;background-color:rgb(89 182 250/var(--tw-bg-opacity,1))}.bg-border-brand{background-color:var(--oui-theme-color-border-brand)}.bg-border-brand-hover{background-color:var(--oui-theme-color-border-brand-hover)}.bg-border-default{background-color:var(--oui-theme-color-border-default)}.bg-border-default-hover{background-color:var(--oui-theme-color-border-default-hover)}.bg-border-disabled{background-color:var(--oui-theme-color-border-disabled)}.bg-border-knockout{background-color:var(--oui-theme-color-border-knockout)}.bg-border-status-error{background-color:var(--oui-theme-color-border-status-error)}.bg-border-status-info{background-color:var(--oui-theme-color-border-status-info)}.bg-border-status-neutral{background-color:var(--oui-theme-color-border-status-neutral)}.bg-border-status-success{background-color:var(--oui-theme-color-border-status-success)}.bg-border-status-warning{background-color:var(--oui-theme-color-border-status-warning)}.bg-btn_primary_hover{--tw-bg-opacity:1;background-color:rgb(2 49 91/var(--tw-bg-opacity,1))}.bg-button-color-background-default{background-color:var(--oui-theme-button-color-background-default)}.bg-button-color-background-default-hover{background-color:var(--oui-theme-button-color-background-default-hover)}.bg-button-color-background-knockout{background-color:var(--oui-theme-button-color-background-knockout)}.bg-button-color-background-knockout-hover{background-color:var(--oui-theme-button-color-background-knockout-hover)}.bg-button-color-border-default{background-color:var(--oui-theme-button-color-border-default)}.bg-button-color-border-default-hover{background-color:var(--oui-theme-button-color-border-default-hover)}.bg-button-color-content-default{background-color:var(--oui-theme-button-color-content-default)}.bg-button-color-content-default-hover{background-color:var(--oui-theme-button-color-content-default-hover)}.bg-button-color-content-knockout{background-color:var(--oui-theme-button-color-content-knockout)}.bg-button-color-content-knockout-hover{background-color:var(--oui-theme-button-color-content-knockout-hover)}.bg-card_subhead{--tw-bg-opacity:1;background-color:rgb(127 144 158/var(--tw-bg-opacity,1))}.bg-completed_1{--tw-bg-opacity:1;background-color:rgb(31 114 173/var(--tw-bg-opacity,1))}.bg-completed_2{--tw-bg-opacity:1;background-color:rgb(221 247 251/var(--tw-bg-opacity,1))}.bg-content-brand{background-color:var(--oui-theme-color-content-brand)}.bg-content-brand-disabled{background-color:var(--oui-theme-color-content-brand-disabled)}.bg-content-brand-hover{background-color:var(--oui-theme-color-content-brand-hover)}.bg-content-brand-knockout{background-color:var(--oui-theme-color-content-brand-knockout)}.bg-content-brand-knockout-hover{background-color:var(--oui-theme-color-content-brand-knockout-hover)}.bg-content-default{background-color:var(--oui-theme-color-content-default)}.bg-content-default-hover{background-color:var(--oui-theme-color-content-default-hover)}.bg-content-disabled{background-color:var(--oui-theme-color-content-disabled)}.bg-content-knockout{background-color:var(--oui-theme-color-content-knockout)}.bg-content-status-error{background-color:var(--oui-theme-color-content-status-error)}.bg-content-status-error-knockout{background-color:var(--oui-theme-color-content-status-error-knockout)}.bg-content-status-info{background-color:var(--oui-theme-color-content-status-info)}.bg-content-status-info-knockout{background-color:var(--oui-theme-color-content-status-info-knockout)}.bg-content-status-neutral{background-color:var(--oui-theme-color-content-status-neutral)}.bg-content-status-neutral-knockout{background-color:var(--oui-theme-color-content-status-neutral-knockout)}.bg-content-status-success{background-color:var(--oui-theme-color-content-status-success)}.bg-content-status-success-knockout{background-color:var(--oui-theme-color-content-status-success-knockout)}.bg-content-status-warning{background-color:var(--oui-theme-color-content-status-warning)}.bg-content-status-warning-knockout{background-color:var(--oui-theme-color-content-status-warning-knockout)}.bg-content-subtle{background-color:var(--oui-theme-color-content-subtle)}.bg-content-subtle-hover{background-color:var(--oui-theme-color-content-subtle-hover)}.bg-electric_blue{--tw-bg-opacity:1;background-color:rgb(40 134 236/var(--tw-bg-opacity,1))}.bg-error_red{--tw-bg-opacity:1;background-color:rgb(180 49 29/var(--tw-bg-opacity,1))}.bg-error_red_2{--tw-bg-opacity:1;background-color:rgb(255 209 209/var(--tw-bg-opacity,1))}.bg-expire_orange{--tw-bg-opacity:1;background-color:rgb(238 154 16/var(--tw-bg-opacity,1))}.bg-flame_red{--tw-bg-opacity:1;background-color:rgb(222 79 56/var(--tw-bg-opacity,1))}.bg-focus-ring-color-border-default{background-color:var(--oui-theme-focus-ring-color-border-default)}.bg-form-color-background-active{background-color:var(--oui-theme-form-color-background-active)}.bg-form-color-background-default{background-color:var(--oui-theme-form-color-background-default)}.bg-form-color-background-disabled{background-color:var(--oui-theme-form-color-background-disabled)}.bg-form-color-background-focus{background-color:var(--oui-theme-form-color-background-focus)}.bg-form-color-background-hover{background-color:var(--oui-theme-form-color-background-hover)}.bg-form-color-border-active{background-color:var(--oui-theme-form-color-border-active)}.bg-form-color-border-default{background-color:var(--oui-theme-form-color-border-default)}.bg-form-color-border-disabled{background-color:var(--oui-theme-form-color-border-disabled)}.bg-form-color-border-focus{background-color:var(--oui-theme-form-color-border-focus)}.bg-form-color-border-hover{background-color:var(--oui-theme-form-color-border-hover)}.bg-green_1{--tw-bg-opacity:1;background-color:rgb(210 255 226/var(--tw-bg-opacity,1))}.bg-green_2{--tw-bg-opacity:1;background-color:rgb(21 119 58/var(--tw-bg-opacity,1))}.bg-green_bl{--tw-bg-opacity:1;background-color:rgb(25 67 17/var(--tw-bg-opacity,1))}.bg-green_txt{--tw-bg-opacity:1;background-color:rgb(61 209 117/var(--tw-bg-opacity,1))}.bg-header_blue{--tw-bg-opacity:1;background-color:rgb(6 33 54/var(--tw-bg-opacity,1))}.bg-label{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.bg-light_gray{--tw-bg-opacity:1;background-color:rgb(243 245 245/var(--tw-bg-opacity,1))}.bg-link-color-content-active{background-color:var(--oui-theme-link-color-content-active)}.bg-link-color-content-default{background-color:var(--oui-theme-link-color-content-default)}.bg-link-color-content-hover{background-color:var(--oui-theme-link-color-content-hover)}.bg-link-color-content-visited{background-color:var(--oui-theme-link-color-content-visited)}.bg-lt_blue{--tw-bg-opacity:1;background-color:rgb(227 237 247/var(--tw-bg-opacity,1))}.bg-main_background{--tw-bg-opacity:1;background-color:rgb(246 244 244/var(--tw-bg-opacity,1))}.bg-main_text{--tw-bg-opacity:1;background-color:rgb(77 78 83/var(--tw-bg-opacity,1))}.bg-midnight_blue{--tw-bg-opacity:1;background-color:rgb(6 33 54/var(--tw-bg-opacity,1))}.bg-oec_blue{--tw-bg-opacity:1;background-color:rgb(0 60 113/var(--tw-bg-opacity,1))}.bg-oec_grey{--tw-bg-opacity:1;background-color:rgb(77 78 83/var(--tw-bg-opacity,1))}.bg-red_bl{--tw-bg-opacity:1;background-color:rgb(56 44 60/var(--tw-bg-opacity,1))}.bg-red_txt{--tw-bg-opacity:1;background-color:rgb(252 110 87/var(--tw-bg-opacity,1))}.bg-school_bus_yellow{--tw-bg-opacity:1;background-color:rgb(238 205 69/var(--tw-bg-opacity,1))}.bg-search_bar_blue{--tw-bg-opacity:1;background-color:rgb(18 49 71/var(--tw-bg-opacity,1))}.bg-spring_green{--tw-bg-opacity:1;background-color:rgb(66 200 91/var(--tw-bg-opacity,1))}.bg-tab_grey{--tw-bg-opacity:1;background-color:rgb(191 196 205/var(--tw-bg-opacity,1))}.bg-table_header{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity,1))}.bg-table_header_70{--tw-bg-opacity:1;background-color:rgb(151 156 166/var(--tw-bg-opacity,1))}.bg-teal{--tw-bg-opacity:1;background-color:rgb(18 179 168/var(--tw-bg-opacity,1))}.bg-volt_yellow{--tw-bg-opacity:1;background-color:rgb(206 248 0/var(--tw-bg-opacity,1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.bg-xx_lt_grey{--tw-bg-opacity:1;background-color:rgb(252 252 253/var(--tw-bg-opacity,1))}.bg-yellow_bl{--tw-bg-opacity:1;background-color:rgb(53 64 53/var(--tw-bg-opacity,1))}.bg-yellow_txt{--tw-bg-opacity:1;background-color:rgb(233 183 67/var(--tw-bg-opacity,1))}.text-accent_blue{--tw-text-opacity:1;color:rgb(45 200 216/var(--tw-text-opacity,1))}.text-accent_blue_1{--tw-text-opacity:1;color:rgb(27 157 217/var(--tw-text-opacity,1))}.text-accent_blue_21{--tw-text-opacity:1;color:rgb(207 234 247/var(--tw-text-opacity,1))}.text-accent_blue_50{--tw-text-opacity:1;color:rgb(238 248 252/var(--tw-text-opacity,1))}.text-app-bar-color-background-default{color:var(--oui-theme-app-bar-color-background-default)}.text-app-bar-color-content-default{color:var(--oui-theme-app-bar-color-content-default)}.text-awaiting_1{--tw-text-opacity:1;color:rgb(137 105 31/var(--tw-text-opacity,1))}.text-awaiting_2{--tw-text-opacity:1;color:rgb(252 241 217/var(--tw-text-opacity,1))}.text-background-brand{color:var(--oui-theme-color-background-brand)}.text-background-brand-disabled{color:var(--oui-theme-color-background-brand-disabled)}.text-background-brand-hover{color:var(--oui-theme-color-background-brand-hover)}.text-background-brand-knockout{color:var(--oui-theme-color-background-brand-knockout)}.text-background-brand-knockout-disabled{color:var(--oui-theme-color-background-brand-knockout-disabled)}.text-background-brand-knockout-hover{color:var(--oui-theme-color-background-brand-knockout-hover)}.text-background-default{color:var(--oui-theme-color-background-default)}.text-background-default-hover{color:var(--oui-theme-color-background-default-hover)}.text-background-disabled{color:var(--oui-theme-color-background-disabled)}.text-background-knockout{color:var(--oui-theme-color-background-knockout)}.text-background-status-error{color:var(--oui-theme-color-background-status-error)}.text-background-status-error-knockout{color:var(--oui-theme-color-background-status-error-knockout)}.text-background-status-info{color:var(--oui-theme-color-background-status-info)}.text-background-status-info-knockout{color:var(--oui-theme-color-background-status-info-knockout)}.text-background-status-neutral{color:var(--oui-theme-color-background-status-neutral)}.text-background-status-neutral-knockout{color:var(--oui-theme-color-background-status-neutral-knockout)}.text-background-status-success{color:var(--oui-theme-color-background-status-success)}.text-background-status-success-knockout{color:var(--oui-theme-color-background-status-success-knockout)}.text-background-status-warning{color:var(--oui-theme-color-background-status-warning)}.text-background-status-warning-knockout{color:var(--oui-theme-color-background-status-warning-knockout)}.text-background-strong{color:var(--oui-theme-color-background-strong)}.text-background-subtle{color:var(--oui-theme-color-background-subtle)}.text-background-transparent{color:var(--oui-theme-color-background-transparent)}.text-background-transparent-strong{color:var(--oui-theme-color-background-transparent-strong)}.text-black_20{--tw-text-opacity:1;color:rgb(204 204 204/var(--tw-text-opacity,1))}.text-blue_bk{--tw-text-opacity:1;color:rgb(37 84 118/var(--tw-text-opacity,1))}.text-blue_steel{--tw-text-opacity:1;color:rgb(127 144 158/var(--tw-text-opacity,1))}.text-blue_txt{--tw-text-opacity:1;color:rgb(89 182 250/var(--tw-text-opacity,1))}.text-border-brand{color:var(--oui-theme-color-border-brand)}.text-border-brand-hover{color:var(--oui-theme-color-border-brand-hover)}.text-border-default{color:var(--oui-theme-color-border-default)}.text-border-default-hover{color:var(--oui-theme-color-border-default-hover)}.text-border-disabled{color:var(--oui-theme-color-border-disabled)}.text-border-knockout{color:var(--oui-theme-color-border-knockout)}.text-border-status-error{color:var(--oui-theme-color-border-status-error)}.text-border-status-info{color:var(--oui-theme-color-border-status-info)}.text-border-status-neutral{color:var(--oui-theme-color-border-status-neutral)}.text-border-status-success{color:var(--oui-theme-color-border-status-success)}.text-border-status-warning{color:var(--oui-theme-color-border-status-warning)}.text-btn_primary_hover{--tw-text-opacity:1;color:rgb(2 49 91/var(--tw-text-opacity,1))}.text-button-color-background-default{color:var(--oui-theme-button-color-background-default)}.text-button-color-background-default-hover{color:var(--oui-theme-button-color-background-default-hover)}.text-button-color-background-knockout{color:var(--oui-theme-button-color-background-knockout)}.text-button-color-background-knockout-hover{color:var(--oui-theme-button-color-background-knockout-hover)}.text-button-color-border-default{color:var(--oui-theme-button-color-border-default)}.text-button-color-border-default-hover{color:var(--oui-theme-button-color-border-default-hover)}.text-button-color-content-default{color:var(--oui-theme-button-color-content-default)}.text-button-color-content-default-hover{color:var(--oui-theme-button-color-content-default-hover)}.text-button-color-content-knockout{color:var(--oui-theme-button-color-content-knockout)}.text-button-color-content-knockout-hover{color:var(--oui-theme-button-color-content-knockout-hover)}.text-card_subhead{--tw-text-opacity:1;color:rgb(127 144 158/var(--tw-text-opacity,1))}.text-completed_1{--tw-text-opacity:1;color:rgb(31 114 173/var(--tw-text-opacity,1))}.text-completed_2{--tw-text-opacity:1;color:rgb(221 247 251/var(--tw-text-opacity,1))}.text-content-brand{color:var(--oui-theme-color-content-brand)}.text-content-brand-disabled{color:var(--oui-theme-color-content-brand-disabled)}.text-content-brand-hover{color:var(--oui-theme-color-content-brand-hover)}.text-content-brand-knockout{color:var(--oui-theme-color-content-brand-knockout)}.text-content-brand-knockout-hover{color:var(--oui-theme-color-content-brand-knockout-hover)}.text-content-default{color:var(--oui-theme-color-content-default)}.text-content-default-hover{color:var(--oui-theme-color-content-default-hover)}.text-content-disabled{color:var(--oui-theme-color-content-disabled)}.text-content-knockout{color:var(--oui-theme-color-content-knockout)}.text-content-status-error{color:var(--oui-theme-color-content-status-error)}.text-content-status-error-knockout{color:var(--oui-theme-color-content-status-error-knockout)}.text-content-status-info{color:var(--oui-theme-color-content-status-info)}.text-content-status-info-knockout{color:var(--oui-theme-color-content-status-info-knockout)}.text-content-status-neutral{color:var(--oui-theme-color-content-status-neutral)}.text-content-status-neutral-knockout{color:var(--oui-theme-color-content-status-neutral-knockout)}.text-content-status-success{color:var(--oui-theme-color-content-status-success)}.text-content-status-success-knockout{color:var(--oui-theme-color-content-status-success-knockout)}.text-content-status-warning{color:var(--oui-theme-color-content-status-warning)}.text-content-status-warning-knockout{color:var(--oui-theme-color-content-status-warning-knockout)}.text-content-subtle{color:var(--oui-theme-color-content-subtle)}.text-content-subtle-hover{color:var(--oui-theme-color-content-subtle-hover)}.text-electric_blue{--tw-text-opacity:1;color:rgb(40 134 236/var(--tw-text-opacity,1))}.text-error_red{--tw-text-opacity:1;color:rgb(180 49 29/var(--tw-text-opacity,1))}.text-error_red_2{--tw-text-opacity:1;color:rgb(255 209 209/var(--tw-text-opacity,1))}.text-expire_orange{--tw-text-opacity:1;color:rgb(238 154 16/var(--tw-text-opacity,1))}.text-flame_red{--tw-text-opacity:1;color:rgb(222 79 56/var(--tw-text-opacity,1))}.text-focus-ring-color-border-default{color:var(--oui-theme-focus-ring-color-border-default)}.text-form-color-background-active{color:var(--oui-theme-form-color-background-active)}.text-form-color-background-default{color:var(--oui-theme-form-color-background-default)}.text-form-color-background-disabled{color:var(--oui-theme-form-color-background-disabled)}.text-form-color-background-focus{color:var(--oui-theme-form-color-background-focus)}.text-form-color-background-hover{color:var(--oui-theme-form-color-background-hover)}.text-form-color-border-active{color:var(--oui-theme-form-color-border-active)}.text-form-color-border-default{color:var(--oui-theme-form-color-border-default)}.text-form-color-border-disabled{color:var(--oui-theme-form-color-border-disabled)}.text-form-color-border-focus{color:var(--oui-theme-form-color-border-focus)}.text-form-color-border-hover{color:var(--oui-theme-form-color-border-hover)}.text-green_1{--tw-text-opacity:1;color:rgb(210 255 226/var(--tw-text-opacity,1))}.text-green_2{--tw-text-opacity:1;color:rgb(21 119 58/var(--tw-text-opacity,1))}.text-green_bl{--tw-text-opacity:1;color:rgb(25 67 17/var(--tw-text-opacity,1))}.text-green_txt{--tw-text-opacity:1;color:rgb(61 209 117/var(--tw-text-opacity,1))}.text-header_blue{--tw-text-opacity:1;color:rgb(6 33 54/var(--tw-text-opacity,1))}.text-label{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-light_gray{--tw-text-opacity:1;color:rgb(243 245 245/var(--tw-text-opacity,1))}.text-link-color-content-active{color:var(--oui-theme-link-color-content-active)}.text-link-color-content-default{color:var(--oui-theme-link-color-content-default)}.text-link-color-content-hover{color:var(--oui-theme-link-color-content-hover)}.text-link-color-content-visited{color:var(--oui-theme-link-color-content-visited)}.text-lt_blue{--tw-text-opacity:1;color:rgb(227 237 247/var(--tw-text-opacity,1))}.text-main_background{--tw-text-opacity:1;color:rgb(246 244 244/var(--tw-text-opacity,1))}.text-main_text{--tw-text-opacity:1;color:rgb(77 78 83/var(--tw-text-opacity,1))}.text-midnight_blue{--tw-text-opacity:1;color:rgb(6 33 54/var(--tw-text-opacity,1))}.text-oec_blue{--tw-text-opacity:1;color:rgb(0 60 113/var(--tw-text-opacity,1))}.text-oec_grey{--tw-text-opacity:1;color:rgb(77 78 83/var(--tw-text-opacity,1))}.text-red_bl{--tw-text-opacity:1;color:rgb(56 44 60/var(--tw-text-opacity,1))}.text-red_txt{--tw-text-opacity:1;color:rgb(252 110 87/var(--tw-text-opacity,1))}.text-school_bus_yellow{--tw-text-opacity:1;color:rgb(238 205 69/var(--tw-text-opacity,1))}.text-search_bar_blue{--tw-text-opacity:1;color:rgb(18 49 71/var(--tw-text-opacity,1))}.text-spring_green{--tw-text-opacity:1;color:rgb(66 200 91/var(--tw-text-opacity,1))}.text-tab_grey{--tw-text-opacity:1;color:rgb(191 196 205/var(--tw-text-opacity,1))}.text-table_header{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-table_header_70{--tw-text-opacity:1;color:rgb(151 156 166/var(--tw-text-opacity,1))}.text-teal{--tw-text-opacity:1;color:rgb(18 179 168/var(--tw-text-opacity,1))}.text-volt_yellow{--tw-text-opacity:1;color:rgb(206 248 0/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-xx_lt_grey{--tw-text-opacity:1;color:rgb(252 252 253/var(--tw-text-opacity,1))}.text-yellow_bl{--tw-text-opacity:1;color:rgb(53 64 53/var(--tw-text-opacity,1))}.text-yellow_txt{--tw-text-opacity:1;color:rgb(233 183 67/var(--tw-text-opacity,1))}.svg-inline--fa{height:100%!important}.focus-visible\\:outline-visible:focus-visible{outline-style:solid}:host{display:contents}.hover-bridge{clip-path:polygon(var(--hover-bridge-top-left-x,0) var(--hover-bridge-top-left-y,0),var(--hover-bridge-top-right-x,0) var(--hover-bridge-top-right-y,0),var(--hover-bridge-bottom-right-x,0) var(--hover-bridge-bottom-right-y,0),var(--hover-bridge-bottom-left-x,0) var(--hover-bridge-bottom-left-y,0))}.body-default{font-family:var(--oui-theme-typography-body-default-font-family);font-size:var(--oui-theme-typography-body-default-font-size);font-weight:var(--oui-theme-typography-body-default-font-weight);line-height:var(--oui-theme-typography-body-default-line-height)}.body-lg{font-family:var(--oui-theme-typography-body-lg-font-family);font-size:var(--oui-theme-typography-body-lg-font-size);font-weight:var(--oui-theme-typography-body-lg-font-weight);line-height:var(--oui-theme-typography-body-lg-line-height)}.body-sm{font-family:var(--oui-theme-typography-body-sm-font-family);font-size:var(--oui-theme-typography-body-sm-font-size);font-weight:var(--oui-theme-typography-body-sm-font-weight);line-height:var(--oui-theme-typography-body-sm-line-height)}.display-default{font-family:var(--oui-theme-typography-display-default-font-family);font-size:var(--oui-theme-typography-display-default-font-size);font-weight:var(--oui-theme-typography-display-default-font-weight);line-height:var(--oui-theme-typography-display-default-line-height)}.display-lg{font-family:var(--oui-theme-typography-display-lg-font-family);font-size:var(--oui-theme-typography-display-lg-font-size);font-weight:var(--oui-theme-typography-display-lg-font-weight);line-height:var(--oui-theme-typography-display-lg-line-height)}.display-sm{font-family:var(--oui-theme-typography-display-sm-font-family);font-size:var(--oui-theme-typography-display-sm-font-size);font-weight:var(--oui-theme-typography-display-sm-font-weight);line-height:var(--oui-theme-typography-display-sm-line-height)}.label-default{font-family:var(--oui-theme-typography-label-default-font-family);font-size:var(--oui-theme-typography-label-default-font-size);font-weight:var(--oui-theme-typography-label-default-font-weight);line-height:var(--oui-theme-typography-label-default-line-height)}.label-lg{font-family:var(--oui-theme-typography-label-lg-font-family);font-size:var(--oui-theme-typography-label-lg-font-size);font-weight:var(--oui-theme-typography-label-lg-font-weight);line-height:var(--oui-theme-typography-label-lg-line-height)}.label-sm{font-family:var(--oui-theme-typography-label-sm-font-family);font-size:var(--oui-theme-typography-label-sm-font-size);font-weight:var(--oui-theme-typography-label-sm-font-weight);line-height:var(--oui-theme-typography-label-sm-line-height)}.title-default{font-family:var(--oui-theme-typography-title-default-font-family);font-size:var(--oui-theme-typography-title-default-font-size);font-weight:var(--oui-theme-typography-title-default-font-weight);line-height:var(--oui-theme-typography-title-default-line-height)}.title-lg{font-family:var(--oui-theme-typography-title-lg-font-family);font-size:var(--oui-theme-typography-title-lg-font-size);font-weight:var(--oui-theme-typography-title-lg-font-weight);line-height:var(--oui-theme-typography-title-lg-line-height)}.title-sm{font-family:var(--oui-theme-typography-title-sm-font-family);font-size:var(--oui-theme-typography-title-sm-font-size);font-weight:var(--oui-theme-typography-title-sm-font-weight);line-height:var(--oui-theme-typography-title-sm-line-height)}.static{position:static}.hidden{display:none}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.left-0{left:0}.top-0{top:0}.isolate{isolation:isolate}.z-40{z-index:40}.z-\\[-1\\]{z-index:-1}.size-2\\.5{height:.625rem;width:.625rem}.rotate-45{--tw-rotate:45deg}.rotate-45,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-z-10{z-index:-10}.m-0{margin:0}.ms-2{margin-inline-start:.5rem}.mt-1{margin-top:.25rem}.flex{display:flex}.inline-flex{display:inline-flex}.size-full{height:100%;width:100%}.max-h-40{max-height:10rem}.w-full{width:100%}.min-w-0{min-width:0}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-grow{flex-grow:1}.rotate-0{--tw-rotate:0deg}.rotate-0,.rotate-180{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-start{justify-content:flex-start}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-radius-lg{border-radius:var(--oui-theme-border-radius-lg)}.border{border-width:1px}.border-none{border-style:none}.border-transparent{border-color:transparent}.p-0{padding:0}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pe-3{padding-inline-end:.75rem}.align-middle{vertical-align:middle}.opacity-0{opacity:0}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-width-lg{outline-width:var(--oui-theme-border-width-lg)}.outline-offset-0{outline-offset:0}.outline-border-status-error{outline-color:var(--oui-theme-color-border-status-error)}.outline-focus-ring-color-border-default{outline-color:var(--oui-theme-focus-ring-color-border-default)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-\\[rotate\\]{transition-duration:.15s;transition-property:rotate;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-\\[250ms\\]{transition-duration:.25s}.placeholder\\:ps-2::placeholder{padding-inline-start:.5rem}.placeholder\\:text-content-subtle::placeholder{color:var(--oui-theme-color-content-subtle)}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.h-4{height:1rem}.h-6{height:1.5rem}.h-8{height:2rem}.w-4{width:1rem}.w-6{width:1.5rem}.w-8{width:2rem}.justify-center{justify-content:center}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pointer-events-none{pointer-events:none}.z-60{z-index:60}.block{display:block}.inline-block{display:inline-block}.w-fit{width:fit-content}.w-max{width:max-content}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rounded-lg{border-radius:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.text-start{text-align:start}.text-sm{font-size:.875rem;line-height:1.25rem}.font-normal{font-weight:400}.leading-\\[21px\\]{line-height:21px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}";

const OPopup = /*@__PURE__*/ proxyCustomElement(class OPopup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /** The open state of the popup, defaults to closed (false) */
        this.active = false;
        /** Position of the popup relative to the anchor */
        this.placement = 'top';
        /** Sets whether popup uses fixed positioning, defaults to absolute */
        this.strategy = 'absolute';
        /** Determines amount of space between anchor and popup content, defaults to zero */
        this.distance = 0;
        /** Allows popup to change position on axis to remain in view, defaults to false */
        this.flip = false;
        /** Sets whether an arrow displays along the bottom edge of the popup */
        this.arrow = false;
        /** Allows for creation of element between popup and anchor when popup is active to maintain hover state */
        this.hoverBridge = false;
        /* istanbul ignore next */
        this.updateHoverBridge = () => {
            if (this.hoverBridge && this.anchorEl) {
                const anchorRect = this.anchorEl.getBoundingClientRect();
                const popupRect = this.popup.getBoundingClientRect();
                const isVertical = this.placement.includes('top') || this.placement.includes('bottom');
                let topLeftX = 0;
                let topLeftY = 0;
                let topRightX = 0;
                let topRightY = 0;
                let bottomLeftX = 0;
                let bottomLeftY = 0;
                let bottomRightX = 0;
                let bottomRightY = 0;
                if (isVertical) {
                    if (anchorRect.top < popupRect.top) {
                        // Anchor is above
                        topLeftX = anchorRect.left;
                        topLeftY = anchorRect.bottom;
                        topRightX = anchorRect.right;
                        topRightY = anchorRect.bottom;
                        bottomLeftX = popupRect.left;
                        bottomLeftY = popupRect.top;
                        bottomRightX = popupRect.right;
                        bottomRightY = popupRect.top;
                    }
                    else {
                        // Anchor is below
                        topLeftX = popupRect.left;
                        topLeftY = popupRect.bottom;
                        topRightX = popupRect.right;
                        topRightY = popupRect.bottom;
                        bottomLeftX = anchorRect.left;
                        bottomLeftY = anchorRect.top;
                        bottomRightX = anchorRect.right;
                        bottomRightY = anchorRect.top;
                    }
                }
                else {
                    if (anchorRect.left < popupRect.left) {
                        // Anchor is on the left
                        topLeftX = anchorRect.right;
                        topLeftY = anchorRect.top;
                        topRightX = popupRect.left;
                        topRightY = popupRect.top;
                        bottomLeftX = anchorRect.right;
                        bottomLeftY = anchorRect.bottom;
                        bottomRightX = popupRect.left;
                        bottomRightY = popupRect.bottom;
                    }
                    else {
                        // Anchor is on the right
                        topLeftX = popupRect.right;
                        topLeftY = popupRect.top;
                        topRightX = anchorRect.left;
                        topRightY = anchorRect.top;
                        bottomLeftX = popupRect.right;
                        bottomLeftY = popupRect.bottom;
                        bottomRightX = anchorRect.left;
                        bottomRightY = anchorRect.bottom;
                    }
                }
                this.hoverBridgeEl.style.setProperty('--hover-bridge-top-left-x', `${topLeftX}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-top-left-y', `${topLeftY}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-top-right-x', `${topRightX}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-top-right-y', `${topRightY}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-bottom-left-x', `${bottomLeftX}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-bottom-left-y', `${bottomLeftY}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-bottom-right-x', `${bottomRightX}px`);
                this.hoverBridgeEl.style.setProperty('--hover-bridge-bottom-right-y', `${bottomRightY}px`);
            }
        };
    }
    watchActive() {
        this.update('active');
    }
    connectedCallback() {
        this.start();
    }
    async disconnectedCallback() {
        await this.stop();
    }
    /* istanbul ignore next */
    start() {
        if (typeof jest === 'undefined') {
            if (!this.anchorEl || !this.active) {
                return;
            }
            this.cleanup = autoUpdate(this.anchorEl, this.popup, async () => {
                await this.reposition();
            });
        }
    }
    async stop() {
        return new Promise((resolve) => {
            if (this.cleanup) {
                this.cleanup();
                this.cleanup = undefined;
                requestAnimationFrame(() => resolve());
            }
            else {
                resolve();
            }
        });
    }
    async handleAnchorChange() {
        var _a;
        await this.stop();
        this.anchorEl = (_a = this.host) === null || _a === void 0 ? void 0 : _a.querySelector('[slot="anchor"]');
        // if anchor is <slot>, dig a layer deeper to set the anchor appropriately (used in the case of nested popups)
        /* istanbul ignore next */
        if (typeof jest === 'undefined') {
            if (this.anchorEl instanceof HTMLSlotElement) {
                this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
            }
        }
        if (this.anchorEl && this.active) {
            this.start();
        }
    }
    /* istanbul ignore next */
    async update(property) {
        if (typeof jest === 'undefined') {
            if (property === 'active') {
                if (this.active) {
                    this.start();
                }
                else {
                    await this.stop();
                }
            }
            if (this.active) {
                await this.reposition();
            }
        }
    }
    /* istanbul ignore next */
    roundByDPR(value) {
        const dpr = window.devicePixelRatio || 1;
        return Math.round(value * dpr) / dpr;
    }
    /* istanbul ignore next */
    async reposition() {
        const middleware = [offset(this.distance)];
        // padding from side of popup container to arrow
        const ARROW_PADDING = 10;
        if (this.sync) {
            middleware.push(size({
                apply: ({ rects }) => {
                    const syncWidth = this.sync === 'width' || this.sync === 'both';
                    const syncHeight = this.sync === 'height' || this.sync === 'both';
                    this.popup.style.width = syncWidth ? `${rects.reference.width}px` : '';
                    this.popup.style.height = syncHeight ? `${rects.reference.height}px` : '';
                }
            }));
        }
        else {
            this.popup.style.width = '';
            this.popup.style.height = '';
        }
        if (this.flip) {
            middleware.push(flip());
        }
        if (this.arrow) {
            middleware.push(arrow({
                element: this.arrowEl,
                padding: ARROW_PADDING
            }));
        }
        const getOffsetParent = this.strategy === 'absolute'
            ? (element) => platform.getOffsetParent(element, e)
            : platform.getOffsetParent;
        computePosition(this.anchorEl, this.popup, {
            placement: this.placement,
            middleware,
            strategy: this.strategy,
            platform: Object.assign(Object.assign({}, platform), { getOffsetParent })
        }).then(({ x, y, middlewareData, placement }) => {
            Object.assign(this.popup.style, {
                left: '0',
                top: '0',
                transform: `translate(${this.roundByDPR(x)}px,${this.roundByDPR(y)}px)`
            });
            if (this.arrow) {
                const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]];
                const arrowX = middlewareData.arrow.x;
                const arrowY = middlewareData.arrow.y;
                Object.assign(this.arrowEl.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    [staticSide]: `${ -10 / 2}px`
                });
            }
        });
        requestAnimationFrame(() => this.updateHoverBridge());
    }
    render() {
        const displayClass = this.active ? '' : 'hidden';
        return (h(Host, { key: '3292ae258460dfb6f6f6ae581926c20e1c1ff344' }, h("slot", { key: 'e93dbf938efa797f77483853c25af4164d032495', name: "anchor", onSlotchange: () => this.handleAnchorChange() }), h("span", { key: '34280e23396f795c3f4cbc85d13fa09bf7dba0a3', ref: (el) => (this.hoverBridgeEl = el), class: `hover-bridge fixed inset-0 ${!(this.hoverBridge && this.active) ? 'hidden' : ''}` }), h("div", { key: 'be9ce1e45701eac044d68eebfd68f39ae113a020', ref: (el) => (this.popup = el), class: `isolate top-0 left-0 z-40 ${this.strategy} ${displayClass}` }, h("slot", { key: 'c88eec123964aa52ad8edd807b74eceec3d77573' }), this.arrow && (h("div", { key: '3b5f0ed804fb9cf9d8da022be195c41f7e68323b', ref: (el) => {
                this.arrowEl = el;
            }, class: `absolute size-2.5 bg-main_text z-[-1] rotate-45 ${displayClass}`, role: "presentation" })))));
    }
    get host() { return this; }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
    static get style() { return oPopupCss; }
}, [1, "o-popup", {
        "active": [516],
        "placement": [513],
        "strategy": [513],
        "distance": [2],
        "sync": [1],
        "flip": [4],
        "arrow": [4],
        "hoverBridge": [4, "hover-bridge"],
        "reposition": [64]
    }, undefined, {
        "active": ["watchActive"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["o-popup"];
    components.forEach(tagName => { switch (tagName) {
        case "o-popup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, OPopup);
            }
            break;
    } });
}

export { OPopup as O, defineCustomElement as d };
//# sourceMappingURL=p-DxEsWj3j.js.map

//# sourceMappingURL=p-DxEsWj3j.js.map