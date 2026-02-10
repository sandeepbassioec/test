import { h, Host } from "@stencil/core";
const toastStack = Object.assign(document.createElement('div'), {
    // ToDo: When we expose root.css we should replace the
    // hardcoded properties with css variables.
    // position: var(--o-toast-stack-position);
    // top: var(--o-toast-stack-top);
    // right: var(--o-toast-stack-right);
    // z-index: var(--o-toast-stack-z-index);
    style: `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
    `
});
export class OToast {
    constructor() {
        this.isVisible = false;
        this.isExiting = false;
        this.isEntering = false;
        /** Indicates whether or not the toast is open. */
        this.open = false;
        /** Set to true to make the toast closable. */
        this.closable = false;
        /** The variant of the toast. */
        this.variant = 'primary';
        /** The length of time, in milliseconds, the toast will show before closing itself. */
        this.duration = Infinity;
        this.handleCloseClick = () => {
            this.hide();
        };
        this.handleMouseEnter = () => {
            this.pauseAutoHide();
        };
        this.handleMouseLeave = () => {
            this.resetAutoHide();
        };
        /* istanbul ignore next */
        this.handleTransitionEnd = (event) => {
            const target = event.target;
            if (event.propertyName === 'opacity' && target.classList.contains('toast')) {
                this.isVisible = this.open;
            }
        };
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    handleDurationChange() {
        this.restartAutoHide();
    }
    componentWillLoad() {
        if (this.open) {
            this.show();
        }
    }
    /** Shows the toast. */
    async show() {
        if (this.isVisible) {
            return;
        }
        // Check if the host is connected to the DOM
        if (this.host.isConnected) {
            const event = this.oShow.emit();
            if (event.defaultPrevented) {
                this.open = false;
                return;
            }
        }
        this.isEntering = true;
        this.isVisible = true;
        this.open = true;
        /* istanbul ignore next */
        // Perform DOM manipulation if not in a testing environment
        if (typeof jest === 'undefined') {
            // Append the toastStack to the body if it's not already there
            if (!toastStack.parentElement) {
                document.body.append(toastStack);
            }
            // Append the current toast to the toastStack
            toastStack.append(this.host);
        }
        /* istanbul ignore next */
        // RequestAnimationFrame for entering animation in non-test environments
        if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(() => {
                this.isEntering = false;
            });
        }
        else {
            // Fallback for testing
            this.isEntering = false;
        }
        if (this.duration < Infinity) {
            this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
        }
    }
    /** Hides the toast. */
    async hide() {
        if (!this.isVisible) {
            return;
        }
        const event = this.oHide.emit();
        if (event.defaultPrevented) {
            this.open = true;
            return;
        }
        clearTimeout(this.autoHideTimeout);
        this.isExiting = true;
        this.isVisible = false;
        this.open = false;
        /* istanbul ignore next */
        // Perform DOM manipulation if not in a testing environment
        if (typeof jest === 'undefined') {
            // Remove the toast from the stack after a delay
            await new Promise((resolve) => setTimeout(resolve, 300));
            this.isVisible = false;
            this.open = false;
            this.isExiting = false;
            this.host.remove();
            if (toastStack.childElementCount === 0) {
                toastStack.remove();
            }
        }
    }
    /** Displays the toast notification. */
    async toast() {
        return new Promise((resolve) => {
            /* istanbul ignore next */
            if (typeof jest === 'undefined') {
                if (!toastStack.parentElement) {
                    document.body.append(toastStack);
                }
                toastStack.append(this.host);
            }
            requestAnimationFrame(() => this.show());
            this.host.addEventListener('o-toast-hide', () => {
                resolve();
            }, { once: true });
        });
    }
    /** Pauses the autoHide functionality. */
    pauseAutoHide() {
        clearTimeout(this.autoHideTimeout);
    }
    /** Resets the autoHide timer. */
    resetAutoHide() {
        if (this.open && this.duration < Infinity) {
            this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
        }
    }
    /** Restarts the autoHide timer. */
    restartAutoHide() {
        this.pauseAutoHide();
        this.resetAutoHide();
    }
    getIconDetails() {
        switch (this.variant) {
            case 'success':
                return { iconName: 'circle-check', iconColor: 'spring_green' };
            case 'warning':
                return { iconName: 'circle-exclamation', iconColor: 'expire_orange' };
            case 'danger':
                return { iconName: 'circle-xmark', iconColor: 'flame_red' };
            case 'neutral':
                return { iconName: 'circle-info', iconColor: 'white' };
            case 'primary':
            default:
                return { iconName: 'circle-info', iconColor: 'accent_blue_1' };
        }
    }
    getVariantClasses() {
        switch (this.variant) {
            case 'success':
                return 'border-spring_green';
            case 'warning':
                return 'border-expire_orange';
            case 'danger':
                return 'border-flame_red';
            case 'neutral':
                return 'border-white';
            case 'primary':
            default:
                return 'border-accent_blue_1';
        }
    }
    render() {
        // Return null if the toast is not visible
        if (!this.isVisible) {
            return null;
        }
        const { iconName, iconColor } = this.getIconDetails();
        const baseClass = 'flex items-center transition-opacity duration-300 ease-in-out border-t-4 rounded-lg shadow-lg bg-header_blue bg-opacity-90 text-white w-[330px] xl:w-[440px] px-[25px] py-[17px] mb-3.5';
        const stateClass = this.isExiting
            ? 'opacity-0 -translate-y-4'
            : this.isEntering
                ? 'opacity-0 translate-y-4'
                : 'opacity-100 translate-y-0';
        const variantClass = this.getVariantClasses();
        return (h(Host, null, h("div", { class: `${baseClass} ${stateClass} ${variantClass}`, role: "alert", "aria-live": "assertive", "aria-atomic": "true", "aria-hidden": !this.open, onTransitionEnd: this.handleTransitionEnd, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("o-icon", { name: iconName, color: iconColor, size: "md", class: "pr-7" }), h("div", { class: "text-sm flex-1 overflow-hidden" }, h("slot", null)), this.closable && (h("div", { class: "relative top-[-10px]" }, h("o-icon-button", { name: "xmark", size: "sm", color: "white", onClick: this.handleCloseClick, label: "Close", class: "scale-[1.4]" }))))));
    }
    static get is() { return "o-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-toast.css"]
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
                    "text": "Indicates whether or not the toast is open."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "closable": {
                "type": "boolean",
                "attribute": "closable",
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
                    "text": "Set to true to make the toast closable."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": true,
                "complexType": {
                    "original": "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
                    "resolved": "\"danger\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The variant of the toast."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'primary'"
            },
            "duration": {
                "type": "number",
                "attribute": "duration",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The length of time, in milliseconds, the toast will show before closing itself."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "Infinity"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "isExiting": {},
            "isEntering": {}
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
                    "text": "Emitted when the toast opens."
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
                    "text": "Emitted when the toast closes."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
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
                    "text": "Shows the toast.",
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
                    "text": "Hides the toast.",
                    "tags": []
                }
            },
            "toast": {
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
                    "text": "Displays the toast notification.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "duration",
                "methodName": "handleDurationChange"
            }];
    }
}
//# sourceMappingURL=o-toast.js.map
