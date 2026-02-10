import { h } from "@stencil/core";
/**
 * Utility Functions
 */
/**
 * Scrolls an element into view of its container. If the element is already in view, nothing will happen.
 * Defaults to horizontal scrolling.
 */
function scrollIntoView(element, container, behavior = 'smooth') {
    const offset = getOffset(element, container);
    const offsetLeft = offset.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    // Horizontal scrolling logic
    if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
    }
    else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
}
/**
 * Returns an element's offset relative to its parent. Similar to element.offsetTop and element.offsetLeft, except the
 * parent doesn't have to be positioned relative or absolute.
 *
 * NOTE: This was created to work around what appears to be a bug in Chrome where a slotted element's offsetParent
 * seems to ignore elements inside the surrounding shadow DOM: https://bugs.chromium.org/p/chromium/issues/detail?id=920069
 */
function getOffset(element, parent) {
    return {
        top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
}
/**
 * Animates a given `element` from the position and dimension of `fromElement` to
 * its current position and dimension. Can be useful to implement the FLIP animation technique.
 *
 * @see {@link https://css-tricks.com/animating-layouts-with-the-flip-technique/} for details on the FLIP technique.
 *
 */
function flipAnimate(element, fromElement, options = {
    duration: 150,
    easing: 'ease',
    fill: 'both'
}) {
    const dimensionsTo = fromElement.getBoundingClientRect();
    const dimensionsFrom = element.getBoundingClientRect();
    const deltaX = dimensionsTo.left - dimensionsFrom.left;
    const deltaY = dimensionsTo.top - dimensionsFrom.top;
    const deltaW = dimensionsTo.width / dimensionsFrom.width;
    const deltaH = dimensionsTo.height / dimensionsFrom.height;
    element.animate([
        {
            transformOrigin: 'top left',
            transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`
        },
        {
            transformOrigin: 'top left',
            transform: 'none'
        }
    ], options);
}
export class OTabGroup {
    constructor() {
        this.hasLeftControl = false;
        this.hasRightControl = false;
        /** The placement of the tabs. */
        this.placement = 'top';
        /** Disables the scroll arrows that appear when tabs overflow. */
        this.noScrollControls = false;
        /* istanbul ignore next */
        this.handleClick = (event) => {
            const target = event.target;
            const tab = target.closest('o-tab');
            const tabGroup = tab === null || tab === void 0 ? void 0 : tab.closest('o-tab-group');
            // Ensure the target tab is in this tab group
            if (tabGroup !== this.host) {
                return false;
            }
            if (tab != null) {
                this.setActiveTab(tab);
            }
        };
        /* istanbul ignore next */
        this.handleKeyDown = (event) => {
            if (this.nav == null)
                return;
            const target = event.target;
            const tab = target.closest('o-tab');
            const tabGroup = tab === null || tab === void 0 ? void 0 : tab.closest('o-tab-group');
            // Ensure the target tab is in this tab group
            if (tabGroup !== this.host) {
                return false;
            }
            // Move focus left or right
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
                const activeEl = document.activeElement;
                if (activeEl && activeEl.tagName.toLowerCase() === 'o-tab') {
                    const tabs = this.getAllTabs();
                    let index = tabs.indexOf(activeEl);
                    if (event.key === 'Home') {
                        index = 0;
                    }
                    else if (event.key === 'End') {
                        index = tabs.length - 1;
                    }
                    else if (event.key === 'ArrowLeft') {
                        index = Math.max(0, index - 1);
                    }
                    else if (event.key === 'ArrowRight') {
                        index = Math.min(tabs.length - 1, index + 1);
                    }
                    tabs[index].setFocus({ preventScroll: true });
                    this.setActiveTab(tabs[index]);
                    if (['top'].includes(this.placement)) {
                        scrollIntoView(tabs[index], this.nav);
                    }
                    event.preventDefault();
                }
            }
        };
        this.handleScrollLeft = () => {
            if (this.nav == null)
                return;
            this.nav.scroll({
                left: this.nav.scrollLeft - this.nav.clientWidth,
                behavior: 'smooth'
            });
        };
        this.handleScrollRight = () => {
            if (this.nav == null)
                return;
            this.nav.scroll({
                left: this.nav.scrollLeft + this.nav.clientWidth,
                behavior: 'smooth'
            });
        };
    }
    /* istanbul ignore next */
    handleNoScrollControlsChange() {
        this.updateScrollControls();
    }
    /* istanbul ignore next */
    componentDidLoad() {
        if (this.tabGroup == null || this.nav == null)
            return;
        if (!OTabGroup.DISABLE_INTERSECTION_OBSERVER) {
            // Set initial tab state when the tabs first become visible
            const observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].intersectionRatio > 0) {
                    this.setAriaLabels();
                    this.setActiveTab(this.getActiveTab() || this.getAllTabs()[0], false);
                    observer.unobserve(entries[0].target);
                }
            });
            observer.observe(this.host);
        }
        if (!OTabGroup.DISABLE_RESIZE_OBSERVER) {
            this.resizeObserver = new ResizeObserver(() => this.updateScrollControls());
            this.resizeObserver.observe(this.nav);
        }
        requestAnimationFrame(() => this.updateScrollControls());
        this.nav.addEventListener('scroll', () => {
            if (this.nav == null) {
                return;
            }
            this.hasRightControl = this.calculateRightControlVisibility();
            this.hasLeftControl = this.calculateLeftControlVisibility();
        });
        if (!OTabGroup.DISABLE_MUTATION_OBSERVER) {
            // Update aria labels if the DOM changes
            this.mutationObserver = new MutationObserver((mutations) => {
                if (mutations.some((mutation) => {
                    var _a;
                    return !['aria-labelledby', 'aria-controls'].includes((_a = mutation.attributeName) !== null && _a !== void 0 ? _a : '');
                })) {
                    setTimeout(() => this.setAriaLabels());
                }
            });
            this.mutationObserver.observe(this.host, { attributes: true, childList: true, subtree: true });
        }
    }
    /* istanbul ignore next */
    disconnectedCallback() {
        if (this.mutationObserver == null || this.tabGroup == null || this.nav == null || this.resizeObserver == null) {
            return;
        }
        this.mutationObserver.disconnect();
        this.resizeObserver.unobserve(this.nav);
    }
    /** Shows the specified tab panel. */
    async show(panel) {
        const tabs = this.getAllTabs();
        const tab = tabs.find((el) => el.panel === panel);
        if (tab != null) {
            this.setActiveTab(tab);
        }
    }
    getAllTabs(includeDisabled = false) {
        var _a, _b;
        const slot = (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        if (slot == null)
            return [];
        return [...(((_b = slot.assignedElements) === null || _b === void 0 ? void 0 : _b.call(slot)) || [])].filter((el) => {
            return includeDisabled
                ? el.tagName.toLowerCase() === 'o-tab'
                : el.tagName.toLowerCase() === 'o-tab' && !el.disabled;
        });
    }
    getAllPanels() {
        var _a, _b;
        const slot = (_a = this.body) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        if (slot == null)
            return [];
        return [...(((_b = slot.assignedElements) === null || _b === void 0 ? void 0 : _b.call(slot)) || [])].filter((el) => el.tagName.toLowerCase() === 'o-tab-panel');
    }
    getActiveTab() {
        return this.getAllTabs().find((el) => el.active);
    }
    calculateRightControlVisibility() {
        var _a, _b, _c;
        if (this.nav == null) {
            return false;
        }
        return Math.abs((_a = this.nav) === null || _a === void 0 ? void 0 : _a.scrollLeft) + ((_b = this.nav) === null || _b === void 0 ? void 0 : _b.clientWidth) < ((_c = this.nav) === null || _c === void 0 ? void 0 : _c.scrollWidth) - 1;
    }
    calculateLeftControlVisibility() {
        var _a;
        if (this.nav == null) {
            return false;
        }
        return Math.abs((_a = this.nav) === null || _a === void 0 ? void 0 : _a.scrollLeft) > 0;
    }
    updateScrollControls() {
        if (this.nav == null)
            return;
        this.hasRightControl = this.noScrollControls
            ? false
            : ['top'].includes(this.placement) && this.calculateRightControlVisibility();
    }
    setActiveTab(tab, emitEvents = true) {
        var _a, _b, _c;
        if (this.nav == null)
            return;
        const newIndicator = (_a = tab === null || tab === void 0 ? void 0 : tab.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tab__indicator');
        const oldIndicator = (_c = (_b = this.getActiveTab()) === null || _b === void 0 ? void 0 : _b.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.tab__indicator');
        if (oldIndicator != null && newIndicator != null) {
            flipAnimate(newIndicator, oldIndicator);
        }
        if (tab !== this.activeTab && !tab.disabled) {
            const previousTab = this.activeTab;
            this.activeTab = tab;
            // Sync tabs and panels
            this.getAllTabs().map((el) => (el.active = el === this.activeTab));
            this.getAllPanels().map((el) => { var _a; return (el.active = el.name === ((_a = this.activeTab) === null || _a === void 0 ? void 0 : _a.panel)); });
            if (['top'].includes(this.placement)) {
                scrollIntoView(this.activeTab, this.nav);
            }
            // Emit events
            if (emitEvents) {
                if (previousTab != null) {
                    this.oTabHide.emit({ name: previousTab.panel });
                }
                this.oTabShow.emit({ name: this.activeTab.panel });
            }
        }
    }
    /* istanbul ignore next */
    setAriaLabels() {
        const tabs = this.getAllTabs();
        const panels = this.getAllPanels();
        // Link each tab with its corresponding panel
        tabs.map((tab) => {
            var _a, _b;
            const panel = panels.find((el) => el.name === tab.panel);
            if (panel != null) {
                tab.setAttribute('aria-controls', (_a = panel.getAttribute('id')) !== null && _a !== void 0 ? _a : '');
                panel.setAttribute('aria-labelledby', (_b = tab.getAttribute('id')) !== null && _b !== void 0 ? _b : '');
            }
        });
    }
    render() {
        return (h("div", { key: '0abcfed9387dec7ba05a3531b91bb3c7af42b9b2', ref: (el) => (this.tabGroup = el), class: `flex flex-col ${this.hasRightControl || this.hasLeftControl ? 'overflow-hidden' : ''} 
          ${this.placement === 'top' ? 'flex-col' : ''}
        `, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, h("div", { key: 'c98b7793a65b16cbc4a262c7b9b496664e1bb9fc', class: "flex items-center" }, this.hasLeftControl && h("o-icon-button", { key: '0127d3b41805db148e29934819aff5f321392c3e', name: "chevron-left", onClick: this.handleScrollLeft }), h("div", { key: 'e82d1057d94dfe9930b94e676dd9cdb149c89ab4', ref: (el) => (this.nav = el), class: "overflow-hidden whitespace-nowrap border-solid border-b border-tab_grey w-full", role: "tablist" }, h("div", { key: '31314475141138ae6acfa50c723e5d893decaf28', ref: (el) => (this.tabs = el), class: "flex gap-4", role: "tablist" }, h("slot", { key: '81ddd213667e54d811aa6e8c51d46829a2ad2c8d', name: "nav" }))), this.hasRightControl && h("o-icon-button", { key: '60d66a5bcbd97855bfebf3111ebe9c22f9c674c3', name: "chevron-right", onClick: this.handleScrollRight })), h("div", { key: 'cda91a323b3803380a48984a2bc41f842cce85f2', ref: (el) => (this.body = el) }, h("slot", { key: '76c6695ae839e374bf7e2ce863200f33a55578fa' }))));
    }
    static get is() { return "o-tab-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-tab-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-tab-group.css"]
        };
    }
    static get properties() {
        return {
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "'top'",
                    "resolved": "\"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The placement of the tabs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'top'"
            },
            "noScrollControls": {
                "type": "boolean",
                "attribute": "no-scroll-controls",
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
                    "text": "Disables the scroll arrows that appear when tabs overflow."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasLeftControl": {},
            "hasRightControl": {}
        };
    }
    static get events() {
        return [{
                "method": "oTabShow",
                "name": "oTabShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a tab is shown."
                },
                "complexType": {
                    "original": "OTabShowPayload",
                    "resolved": "OTabShowPayload",
                    "references": {
                        "OTabShowPayload": {
                            "location": "local",
                            "path": "E:/Source/__Agent01/_work/3785/s/packages/core/src/components/o-tab-group/o-tab-group.tsx",
                            "id": "src/components/o-tab-group/o-tab-group.tsx::OTabShowPayload"
                        }
                    }
                }
            }, {
                "method": "oTabHide",
                "name": "oTabHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a tab is hidden."
                },
                "complexType": {
                    "original": "OTabHidePayload",
                    "resolved": "OTabHidePayload",
                    "references": {
                        "OTabHidePayload": {
                            "location": "local",
                            "path": "E:/Source/__Agent01/_work/3785/s/packages/core/src/components/o-tab-group/o-tab-group.tsx",
                            "id": "src/components/o-tab-group/o-tab-group.tsx::OTabHidePayload"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "(panel: string) => Promise<void>",
                    "parameters": [{
                            "name": "panel",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the specified tab panel.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "noScrollControls",
                "methodName": "handleNoScrollControlsChange"
            }];
    }
}
/**
 * Flags to disable the IntersectionObserver, ResizeObserver, and MutationObserver
 * this is for unit test purposes as these are not supported in JEST
 * */
OTabGroup.DISABLE_INTERSECTION_OBSERVER = false;
OTabGroup.DISABLE_RESIZE_OBSERVER = false;
OTabGroup.DISABLE_MUTATION_OBSERVER = false;
//# sourceMappingURL=o-tab-group.js.map
