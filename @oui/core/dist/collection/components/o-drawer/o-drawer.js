import { Host, h } from "@stencil/core";
import { createFocusTrap, setupSlotChangeHandlers } from "../../internal/a11y";
export class ODrawer {
    constructor() {
        /** State to track if the drawer is open. */
        this.isOpen = false;
        /** Indicates whether or not the drawer is open. */
        this.open = false;
        /** The label for the aria label. */
        this.label = '';
        /** Determines whether the close button is shown. */
        this.noClose = false;
        this.focusTrap = null;
        this.slotCleanup = null;
        this.focusTrapOptions = {
            autoFocus: false
        };
        /** Track pending operations to prevent conflicts */
        this.isAnimating = false;
        this.pendingOperation = null;
        /** Handles the close button click event. */
        this.handleCloseButtonClick = () => {
            this.requestClose('close-button');
        };
        /** Handles the overlay click event to close the drawer. */
        this.handleOverlayClick = (_event) => {
            this.requestClose('overlay');
        };
        /** Handles keyboard events for closing the drawer. */
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.requestClose('keyboard');
            }
        };
    }
    /** Watches for changes to the 'open' property and updates the drawer state accordingly. */
    async watchOpen(newValue) {
        // If ongoing animating, ignore
        if (this.isAnimating &&
            ((newValue && this.pendingOperation === 'show') || (!newValue && this.pendingOperation === 'hide'))) {
            return;
        }
        // Cancel any pending operation and start new one
        if (newValue) {
            this.pendingOperation = 'show';
            await this.show();
        }
        else {
            this.pendingOperation = 'hide';
            await this.hide();
        }
    }
    /** Watches for changes to the 'noClose' property. */
    watchNoClose(_newValue) { }
    /** Sets the initial state of the drawer based on the 'open' property before the component loads. */
    componentWillLoad() {
        this.isOpen = this.open;
        if (this.isOpen) {
            document.body.style.overflow = 'hidden';
        }
    }
    /**
     * Clean up event listeners when the component is removed
     */
    disconnectedCallback() {
        this.cleanupAccessibility();
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    /**
     * Clean up focus trap and related resources
     */
    cleanupAccessibility() {
        if (this.focusTrap) {
            this.focusTrap.deactivate();
            this.focusTrap = null;
        }
        if (this.slotCleanup) {
            this.slotCleanup();
            this.slotCleanup = null;
        }
    }
    /**
     * Initialize and activate the focus trap with proper timing
     */
    async setupAccessibility() {
        // Clean up any existing focus trap
        this.cleanupAccessibility();
        if (!this.panel)
            return;
        try {
            // Create the focus trap with the panel as the root element
            this.focusTrap = createFocusTrap(Object.assign({ rootElement: this.panel }, this.focusTrapOptions));
            // Setup slot change handlers right after creating the focus trap
            if (this.bodySlot || this.footerSlot) {
                const slots = [this.bodySlot, this.footerSlot].filter(Boolean);
                if (slots.length > 0 && this.focusTrap) {
                    this.slotCleanup = setupSlotChangeHandlers(this.focusTrap, slots);
                }
            }
            await new Promise((resolve) => setTimeout(resolve, 50));
            // Activate the focus trap
            if (this.focusTrap) {
                this.focusTrap.activate();
            }
        }
        catch (error) {
            console.error('Error setting up accessibility features:', error);
        }
    }
    /** Public method to show the drawer. */
    async show() {
        // Prevent multiple simultaneous show operations
        if (this.isAnimating && this.pendingOperation === 'show')
            return;
        this.isAnimating = true;
        this.pendingOperation = 'show';
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeyDown);
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await this.animateDialog('drawer.show', 'drawer.overlay.show');
        this.oShow.emit();
        // Setup accessibility features
        await this.setupAccessibility();
        this.isAnimating = false;
        this.pendingOperation = null;
    }
    /** Public method to hide the drawer. */
    async hide() {
        // Prevent multiple simultaneous hide operations
        if (this.isAnimating && this.pendingOperation === 'hide')
            return;
        this.isAnimating = true;
        this.pendingOperation = 'hide';
        // Clean up accessibility features
        this.cleanupAccessibility();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await this.animateDialog('drawer.hide', 'drawer.overlay.hide');
        // Update state after animation
        this.isOpen = false;
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', this.handleKeyDown);
        this.oHide.emit();
        this.isAnimating = false;
        this.pendingOperation = null;
    }
    /** Animate the drawer and overlay */
    async animateDialog(dialogAnimation, overlayAnimation) {
        const panelAnimation = this.getAnimation(dialogAnimation);
        const overlayAnimationConfig = this.getAnimation(overlayAnimation);
        if (this.panel && this.overlay) {
            await Promise.all([
                this.animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
                this.animateTo(this.overlay, overlayAnimationConfig.keyframes, overlayAnimationConfig.options)
            ]);
        }
    }
    /** Get animation configuration */
    getAnimation(animationName) {
        const animations = {
            'drawer.show': {
                keyframes: [
                    { opacity: 0, transform: 'translateX(100%)' },
                    { opacity: 1, transform: 'translateX(0)' }
                ],
                options: { duration: 250, easing: 'ease', fill: 'forwards' }
            },
            'drawer.hide': {
                keyframes: [
                    { opacity: 1, transform: 'translateX(0)' },
                    { opacity: 0, transform: 'translateX(100%)' }
                ],
                options: { duration: 250, easing: 'ease', fill: 'forwards' }
            },
            'drawer.overlay.show': {
                keyframes: [{ opacity: 0 }, { opacity: 1 }],
                options: { duration: 250, fill: 'forwards' }
            },
            'drawer.overlay.hide': {
                keyframes: [{ opacity: 1 }, { opacity: 0 }],
                options: { duration: 250, fill: 'forwards' }
            }
        };
        return animations[animationName] || { keyframes: [], options: {} };
    }
    /** Animate to a specific element */
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
    /** Requests to close the drawer and dispatches a custom event. */
    requestClose(source) {
        const closeEvent = this.oRequestClose.emit({ source });
        if (!closeEvent.defaultPrevented) {
            this.hide();
        }
    }
    render() {
        // Check if Footer slot is filled
        const hasFooter = !!this.el.querySelector('[slot="footer"]');
        return (h(Host, { key: '764265077521ccb2e62d4fc9609c918486133446' }, h("div", { key: '567c1a96b8fd28308f3537484433c78bfda9672d', class: this.isOpen ? 'flex items-center justify-center fixed inset-0 z-50' : '' }, this.isOpen && (h("div", { key: '3e494d92a9eb5a85f3edfa852f06f6bdd9bc8f09', tabindex: -1, class: "fixed inset-0 bg-table_header bg-opacity-60 z-60 transition-opacity", onClick: this.handleOverlayClick, ref: (el) => (this.overlay = el) })), this.isOpen && (h("div", { key: '696d476dea01c1d32b99333a1a1a872822754182', id: "basic-drawer", class: "fixed right-0 h-full w-[28em] bg-white shadow-lg z-60 flex flex-col focus:outline-none max-w-full", role: "dialog", "aria-modal": "true", "aria-label": this.label || 'Drawer', tabIndex: 0, ref: (el) => {
                this.panel = el;
            } }, !(this.noClose && !this.label) && (h("div", { key: '322a74b5e9c94d2c041781c97b0173eccbd5fa44', class: "px-5 py-8 flex justify-end items-center" }, !this.noClose && (h("o-icon-button", { key: '4a16fcf128ff88bf81940483b8f0ee03137bc0da', name: "close", size: "sm", onClick: this.handleCloseButtonClick })))), h("div", { key: '6d6ef47c93e03f2937f47765e3afb54809b43c1b', tabindex: -1, class: "px-7 flex-1 overflow-auto text-sm text-main_text" }, h("slot", { key: 'd726e0f50378894420c6f8cc9be953f0ae4a9ae7', ref: (el) => (this.bodySlot = el) })), hasFooter && (h("div", { key: 'fa1aa7837950f940ff6cc0e203f9eb9710e9c45a', class: "py-7 px-5 flex justify-end" }, h("slot", { key: '585a64f6f40e21881f328f9724e1a05c897661bd', name: "footer", ref: (el) => (this.footerSlot = el) }))))))));
    }
    static get is() { return "o-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-drawer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                    "text": "Indicates whether or not the drawer is open."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label for the aria label."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "noClose": {
                "type": "boolean",
                "attribute": "no-close",
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
                    "text": "Determines whether the close button is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "isAnimating": {}
        };
    }
    static get events() {
        return [{
                "method": "oShow",
                "name": "oShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer opens"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oHide",
                "name": "oHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer closes"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oRequestClose",
                "name": "oRequestClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when drawer close is requested with the source of the request"
                },
                "complexType": {
                    "original": "{ source: 'close-button' | 'keyboard' | 'overlay' }",
                    "resolved": "{ source: \"keyboard\" | \"close-button\" | \"overlay\"; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Public method to show the drawer.",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Public method to hide the drawer.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpen"
            }, {
                "propName": "noClose",
                "methodName": "watchNoClose"
            }];
    }
}
//# sourceMappingURL=o-drawer.js.map
