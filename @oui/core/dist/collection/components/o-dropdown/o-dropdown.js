import { Host, h } from "@stencil/core";
export class ODropdown {
    constructor() {
        this.open = false;
        this.placement = 'bottom';
        this.disabled = false;
        /* istanbul ignore next */
        this.handleTriggerClick = () => {
            if (this.open) {
                this.hide();
            }
            else {
                this.show();
                this.focusOnTrigger();
            }
        };
        /* istanbul ignore next */
        this.handleTriggerKeyDown = (event) => {
            if ([' ', 'Enter'].includes(event.key)) {
                event.preventDefault();
                this.handleTriggerClick();
                return;
            }
            if (this.menu) {
                const firstMenuItem = this.menuItems[0];
                const lastMenuItem = this.menuItems[this.menuItems.length - 1];
                if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
                    event.preventDefault();
                    if (!this.open)
                        () => this.show();
                    if (this.menuItems.length > 0) {
                        if (event.key === 'ArrowUp' || event.key === 'Home') {
                            this.menu.setCurrentItem(firstMenuItem);
                            firstMenuItem.setFocus();
                        }
                        if (event.key === 'ArrowDown' || event.key === 'End') {
                            this.menu.setCurrentItem(lastMenuItem);
                            lastMenuItem.setFocus();
                        }
                    }
                }
            }
        };
        /* istanbul ignore next */
        this.handlePanelSelect = () => {
            this.hide();
            this.focusOnTrigger();
        };
        /* istanbul ignore next */
        this.handleKeyDown = (event) => {
            if (this.open && event.key === 'Escape') {
                event.stopPropagation();
                this.hide();
                this.focusOnTrigger();
            }
        };
        /* istanbul ignore next */
        this.handleDocumentKeyDown = (event) => {
            var _a;
            if (event.key === 'Escape' && this.open) {
                event.stopPropagation();
                this.focusOnTrigger();
                this.hide();
                return;
            }
            if (event.key === 'Tab') {
                if (this.open && ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'o-menu-item') {
                    event.preventDefault();
                    this.hide();
                    this.focusOnTrigger();
                    return;
                }
            }
        };
        /* istanbul ignore next */
        this.handleDocumentMouseDown = (event) => {
            const path = event.composedPath();
            if (this.host && !path.includes(this.host))
                this.hide();
        };
    }
    async watchOpen() {
        var _a, _b, _c, _d;
        if (this.disabled) {
            this.open = false;
            return;
        }
        if (this.open) {
            this.addListeners();
            this.panel.hidden = false;
            this.popup.active = true;
            const { keyframes, options } = this.getAnimation('dropdown.show');
            await Promise.resolve(this.animateTo((_b = (_a = this.popup) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('div'), keyframes, options));
        }
        else {
            this.removeListeners();
            this.panel.hidden = true;
            this.popup.active = false;
            const { keyframes, options } = this.getAnimation('dropdown.hide');
            await Promise.resolve(this.animateTo((_d = (_c = this.popup) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('div'), keyframes, options));
        }
    }
    focusOnTrigger() {
        var _a, _b;
        const trigger = (_b = (_a = this.trigger).assignedElements) === null || _b === void 0 ? void 0 : _b.call(_a, { flatten: true })[0];
        if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
            trigger.focus();
        }
    }
    getMenu() {
        var _a, _b;
        return (_b = (_a = this.panel).assignedElements) === null || _b === void 0 ? void 0 : _b.call(_a, { flatten: true }).find((el) => el.tagName.toLowerCase() === 'o-menu');
    }
    /* istanbul ignore next */
    addListeners() {
        this.panel.addEventListener('o-menu-select', this.handlePanelSelect);
        this.panel.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
    }
    /* istanbul ignore next */
    removeListeners() {
        this.panel.removeEventListener('o-menu-select', this.handlePanelSelect);
        this.panel.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    }
    async show() {
        if (this.open)
            return;
        this.open = true;
    }
    async hide() {
        if (!this.open)
            return;
        this.open = false;
    }
    /* istanbul ignore next */
    async handleContentSlotChange() {
        this.menu = this.getMenu();
        if (this.menu) {
            this.menuItems = await this.menu.getMenuItems();
        }
        // Apply drop shadow to slotted content
        const slottedContent = this.panel.assignedElements({ flatten: true })[0];
        if (slottedContent) {
            slottedContent.style.boxShadow = '0px 2px 4px 0px rgba(0, 0, 0, 0.25)';
            slottedContent.style.borderRadius = '8px';
        }
    }
    getAnimation(animationName) {
        const animations = {
            'dropdown.show': {
                keyframes: [
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1 }
                ],
                options: { duration: 100, easing: 'ease' }
            },
            'dropdown.hide': {
                keyframes: [
                    { opacity: 1, scale: 1 },
                    { opacity: 0, scale: 0.9 }
                ],
                options: { duration: 100, easing: 'ease' }
            }
        };
        return animations[animationName] || { keyframes: [], options: {} };
    }
    async animateTo(element, keyframes, options) {
        if (element) {
            const animation = element.animate(keyframes, options);
            return new Promise((resolve) => {
                animation.onfinish = () => resolve();
            });
        }
        else {
            return Promise.resolve();
        }
    }
    render() {
        return (h(Host, { key: '231cceba41e3d7eb1fc7a1f57bf023717c864fde' }, h("o-popup", { key: '43fc8aa164390efee54dca60008c25707ef3480a', ref: (el) => (this.popup = el), placement: this.placement }, h("div", { key: '3942628d4e788bdff23eb11e1c589e4d5645b40b', slot: "anchor", onClick: this.handleTriggerClick, onKeyDown: this.handleTriggerKeyDown }, h("slot", { key: '27dc746219276d05d55f99378c77fde4a7427d67', ref: (el) => (this.trigger = el), name: "trigger" })), h("div", { key: '9069fd90492c9ebdd2e79346e8e60377aac84f1c', "aria-hidden": this.open ? 'false' : 'true', "aria-labelledby": "dropdown" }, h("slot", { key: 'f7b84d1af6b649dedd4dc662eae5b0f8b2048b8d', ref: (el) => (this.panel = el), onSlotchange: () => this.handleContentSlotChange() })))));
    }
    static get is() { return "o-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpen"
            }];
    }
}
//# sourceMappingURL=o-dropdown.js.map
