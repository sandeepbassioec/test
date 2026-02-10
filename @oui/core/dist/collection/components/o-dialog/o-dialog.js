import { Host, h } from "@stencil/core";
import { createFocusTrap, setupSlotChangeHandlers } from "../../internal/a11y";
export class ODialog {
    constructor() {
        /** State to track if the dialog is open. */
        this.isOpen = false;
        /** Indicates whether or not the dialog is open. */
        this.open = false;
        /** The label for the dialog header. */
        this.label = '';
        /** Determines whether the close button is shown. */
        this.noClose = false;
        this.focusTrap = null;
        this.slotCleanup = null;
        this.focusTrapOptions = {
            autoFocus: false
        };
        /** State to prevent calling hide if already hiding */
        this.isHiding = false;
        /** Handles the close button click event. */
        this.handleCloseButtonClick = () => {
            this.requestClose('close-button');
        };
        /** Handles the overlay click event to close the dialog. */
        this.handleOverlayClick = (_event) => {
            this.requestClose('overlay');
        };
        /** Handles keyboard events for closing the dialog. */
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.requestClose('keyboard');
            }
        };
    }
    /** Watches for changes to the 'open' property and updates the dialog state accordingly. */
    async watchOpen(newValue) {
        if (this.isHiding)
            return;
        this.isOpen = newValue;
        if (this.isOpen) {
            await this.show();
        }
        else {
            await this.hide();
        }
    }
    /** Watches for changes to the 'noClose' property. */
    watchNoClose(_newValue) { }
    /** Sets the initial state of the dialog based on the 'open' property before the component loads. */
    componentWillLoad() {
        this.isOpen = this.open;
        if (this.isOpen) {
            document.body.style.overflow = 'hidden';
        }
    }
    /** Clean up listeners when component is removed */
    disconnectedCallback() {
        this.cleanupAccessibility();
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    /** Clean up focus trap and related accessibility resources */
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
    /** Initialize and activate focus trap  */
    async setupAccessibility() {
        // Clean up any existing trap first
        this.cleanupAccessibility();
        if (!this.panel)
            return;
        try {
            // Create the focus trap
            this.focusTrap = createFocusTrap(Object.assign({ rootElement: this.panel }, this.focusTrapOptions));
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
            console.error('Error initializing accessibility:', error);
        }
    }
    /** Public method to show the dialog. */
    async show() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeyDown);
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await this.animateDialog('dialog.show', 'dialog.overlay.show');
        this.oShow.emit();
        await this.setupAccessibility();
    }
    /** Public method to hide the dialog. */
    async hide() {
        if (this.isHiding)
            return;
        this.isHiding = true;
        this.cleanupAccessibility();
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await this.animateDialog('dialog.hide', 'dialog.overlay.hide');
        this.isOpen = false;
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', this.handleKeyDown);
        this.oHide.emit();
        this.isHiding = false;
    }
    /** Animate the dialog and overlay */
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
            'dialog.show': {
                keyframes: [
                    { opacity: 0, transform: 'scale(0.8)' },
                    { opacity: 1, transform: 'scale(1)' }
                ],
                options: { duration: 250, easing: 'ease' }
            },
            'dialog.hide': {
                keyframes: [
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0.8)' }
                ],
                options: { duration: 250, easing: 'ease' }
            },
            'dialog.overlay.show': {
                keyframes: [{ opacity: 0 }, { opacity: 1 }],
                options: { duration: 250 }
            },
            'dialog.overlay.hide': {
                keyframes: [{ opacity: 1 }, { opacity: 0 }],
                options: { duration: 250 }
            },
            'dialog.shake': {
                keyframes: [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(5px)' },
                    { transform: 'translateX(0)' }
                ],
                options: { duration: 300, easing: 'ease-in-out' }
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
    /** Requests to close the dialog and emits a custom event. */
    requestClose(source) {
        const closeEvent = this.oRequestClose.emit({ source });
        // If the event is not prevented, close the dialog.
        if (!closeEvent.defaultPrevented) {
            this.hide();
        }
        else {
            this.shakeDialog();
        }
    }
    /** Triggers the shake animation on the dialog */
    async shakeDialog() {
        if (this.panel) {
            const shakeAnimation = this.getAnimation('dialog.shake');
            await this.animateTo(this.panel, shakeAnimation.keyframes, shakeAnimation.options);
        }
    }
    /** Renders the dialog component. */
    render() {
        return (h(Host, { key: '947e36f6c2b37734e9128d589c9adc5601b18e7a' }, h("dialog", { key: '79b43c477f6d10c401e38ef0eedc023d9afc5690', class: this.isOpen ? 'flex items-center justify-center fixed inset-0 z-50 p-4 bg-transparent w-full' : '' }, this.isOpen && (h("div", { key: 'e60f4a21dfbc6d12519c9abd3c19c2d5da37387e', tabindex: -1, class: "fixed inset-0 bg-black bg-opacity-60 z-60 transition-opacity", onClick: this.handleOverlayClick, ref: (el) => (this.overlay = el) })), this.isOpen && (h("div", { key: 'd4e809c3fbc86408948bd98907d46d0ad4560530', id: "basic-modal", class: "static z-60 overflow-hidden flex-1 items-center justify-center rounded-lg max-w-[37.5em] focus:outline-none", role: "dialog", "aria-modal": "true", tabIndex: 0, ref: (el) => (this.panel = el) }, h("div", { key: 'fc5768118290787287f66b26ddcdaf5ba030b222', class: "bg-white shadow-dialog w-full overflow-auto max-h-full rounded-lg" }, !(this.noClose && !this.label) && (h("div", { key: '54f8ca981fed4057fa9e40b22fb879ebc19c5c2b', class: "p-4 border-b border-tab_grey dark:border-gray-700/60" }, h("div", { key: '78bae5052a1f03d2c948c82d68147777bf370d2d', class: "flex justify-between items-center" }, this.label && h("h4", { key: 'f0a3d883b4eb5aaff1b01df58e64233ae6d0d470', class: "text-[21px] text-main_text" }, this.label), !this.noClose && (h("o-icon-button", { key: 'aa009ae350cb2dbf989803a04e682ee7e553898a', name: "close", size: "sm", onClick: this.handleCloseButtonClick }))))), h("div", { key: '3a774df5968d7d22e01c889a332f2fbde3d1fa6c', tabindex: -1, class: "px-8 py-6 border-b border-tab_grey max-h-[68.333vh] overflow-auto" }, h("div", { key: '89a52e8d7f2a9a3d3a69b15c83298b16f5b92ba7', tabindex: -1, class: "text-sm text-main_text" }, h("slot", { key: 'b9e876b718c7cb9b296a1bec46ffeafe462233f0', ref: (el) => (this.bodySlot = el) }), " ")), h("div", { key: '4e905d6b0fa3a19407dc3b9c1c2fca0e21775596', class: "px-4 py-2" }, h("div", { key: '8e75fdfe0a731ae67f10ba1ee55df6db4554052c', class: "flex flex-wrap justify-end space-x-2" }, h("slot", { key: '0cebaeddd986cb7f8b716a11fe7c27080d7a9118', name: "footer", ref: (el) => (this.footerSlot = el) }), ' '))))))));
    }
    static get is() { return "o-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-dialog.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-dialog.css"]
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
                    "text": "Indicates whether or not the dialog is open."
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
                    "text": "The label for the dialog header."
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
            "isHiding": {}
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
                    "text": "Emitted when the dialog opens"
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
                    "text": "Emitted when the dialog closes"
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
                    "text": "Emitted when dialog close is requested with the source of the request"
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
                    "text": "Public method to show the dialog.",
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
                    "text": "Public method to hide the dialog.",
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
//# sourceMappingURL=o-dialog.js.map
