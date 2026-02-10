import { Host, h } from "@stencil/core";
import { arrow, autoUpdate, computePosition, offset, size, flip, platform } from "@floating-ui/dom";
import { offsetParent } from "composed-offset-position";
export class OPopup {
    constructor() {
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
        // width and height of initial arrow box, before rotation and shift
        const ARROW_BOX_SIZE = 10;
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
            ? (element) => platform.getOffsetParent(element, offsetParent)
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
                    [staticSide]: `${-ARROW_BOX_SIZE / 2}px`
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
    static get is() { return "o-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-popup.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-popup.css"]
        };
    }
    static get properties() {
        return {
            "active": {
                "type": "boolean",
                "attribute": "active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The open state of the popup, defaults to closed (false)"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "| 'top'\r\n\t\t| 'top-start'\r\n\t\t| 'top-end'\r\n\t\t| 'bottom'\r\n\t\t| 'bottom-start'\r\n\t\t| 'bottom-end'\r\n\t\t| 'right'\r\n\t\t| 'right-start'\r\n\t\t| 'right-end'\r\n\t\t| 'left'\r\n\t\t| 'left-start'\r\n\t\t| 'left-end'",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the popup relative to the anchor"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'top'"
            },
            "strategy": {
                "type": "string",
                "attribute": "strategy",
                "mutable": false,
                "complexType": {
                    "original": "'absolute' | 'fixed'",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets whether popup uses fixed positioning, defaults to absolute"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'absolute'"
            },
            "distance": {
                "type": "number",
                "attribute": "distance",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines amount of space between anchor and popup content, defaults to zero"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "sync": {
                "type": "string",
                "attribute": "sync",
                "mutable": false,
                "complexType": {
                    "original": "'width' | 'height' | 'both'",
                    "resolved": "\"both\" | \"height\" | \"width\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Syncs sizing of popup content to anchor sizing"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "flip": {
                "type": "boolean",
                "attribute": "flip",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Allows popup to change position on axis to remain in view, defaults to false"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "arrow": {
                "type": "boolean",
                "attribute": "arrow",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets whether an arrow displays along the bottom edge of the popup"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hoverBridge": {
                "type": "boolean",
                "attribute": "hover-bridge",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Allows for creation of element between popup and anchor when popup is active to maintain hover state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get methods() {
        return {
            "reposition": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Element": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "../../node_modules/.pnpm/@stencil+core@4.29.0/node_modules/@stencil/core/internal/stencil-core/index.d.ts::Element"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "watchActive"
            }];
    }
}
//# sourceMappingURL=o-popup.js.map
