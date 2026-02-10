import { Host, h } from "@stencil/core";
import { submitForm } from "../../internal/forms";
import { createFocusHandler } from "../../internal/a11y";
import { getColors } from "../../internal/color";
/**
 * OButton component supports different variants, colors, and states.
 *
 * @component
 * @since 0.1.0
 * @slot startIcon - Slot for icon at left side of the button
 * @slot - Default slot for button text content
 * @example
 * ```html
 * <o-button variant="primary" color="brand">Click me</o-button>
 * ```
 */
export class OButton {
    constructor() {
        /**
         * The visual style variant of the OButton.
         *
         * @prop variant
         * @type {'primary' | 'secondary' | 'text'}
         * @default 'primary'
         * @since 0.1.0
         */
        this.variant = 'primary';
        /**
         * The color theme of the button.
         *
         * @prop color
         * @type {'brand' | 'buyer' | 'seller' | 'payment' | 'order' | 'shipping'}
         * @default 'brand'
         * @since 0.6.0
         */
        this.color = 'brand';
        /**
         * Indicates whether the button is disabled, preventing user interaction.
         *
         * @prop disabled
         * @type {boolean}
         * @default false
         * @since 0.1.0
         */
        this.disabled = false;
        /**
         * Indicates whether the button is loading, preventing user interaction.
         *
         * @prop loading
         * @type {boolean}
         * @default false
         * @since 0.3.0
         */
        this.loading = false;
        /**
         * Indicates whether the button is part of a button group.
         *
         * @prop isButtonGroup
         * @type {boolean}
         * @default false
         * @since 0.1.0
         */
        this.isButtonGroup = false;
        /**
         * Indicates whether the button takes up the full width of the container.
         *
         * @prop fullWidth
         * @type {boolean}
         * @default false
         * @since 0.2.0
         */
        this.fullWidth = false;
        /**
         * The type of the button.
         *
         * @prop type
         * @type {'button' | 'submit' | 'reset'}
         * @default 'submit'
         * @since 0.4.0
         */
        this.type = 'submit';
        // Create focus handler
        this.focusHandler = createFocusHandler(this, () => this.buttonEl);
        /** Handles click events on the button or link. */
        this.handleClick = (event) => {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            event.preventDefault();
            submitForm(this.host);
        };
    }
    watchIsButtonGroup(newValue) {
        if (newValue) {
            this.host.setAttribute('is-button-group', 'true');
        }
        else {
            this.host.removeAttribute('is-button-group');
        }
    }
    /**
     * Runs when the component is connected to the DOM
     */
    connectedCallback() {
        // Setup focus handling
        this.focusHandler.setupFocusHandling();
    }
    /**
     * Runs when the component is disconnected from the DOM
     */
    disconnectedCallback() {
        // Clean up focus handling
        this.focusHandler.cleanupFocusHandling();
    }
    /**
     * Programmatically focus the button element.
     *
     * @method setFocus
     * @returns {Promise<void>} A promise that resolves when focus is set
     * @since 0.3.0
     * @example
     * ```typescript
     * const button = document.querySelector('o-button');
     * await button.setFocus();
     * ```
     */
    async setFocus() {
        return this.focusHandler.setFocus();
    }
    render() {
        const categoricalColors = getColors('categorical');
        const baseClasses = 'font-inter text-sm font-medium inline-flex items-center justify-center border rounded-lg leading-5 shadow-sm transition px-3 py-2 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent_blue_1 focus-visible:outline-offset-0';
        const getColorClass = () => {
            const suffix = this.variant === 'primary' ? '' : `-${this.variant}`;
            return `${this.color}${suffix}`;
        };
        const colorClass = getColorClass();
        let btnClassName;
        //Loading icon color
        let loadingIconColor;
        switch (this.variant) {
            case 'primary':
                btnClassName = `${baseClasses} max-w-full truncate dark:text-oec_blue dark:bg-white dark:border-white dark:hover:bg-tab_grey dark:hover:border-tab_grey dark:hover:text-btn_primary_hover border-transparent`;
                loadingIconColor = categoricalColors[this.color].textColor;
                break;
            case 'secondary':
                btnClassName = `${baseClasses} max-w-full truncate border dark:text-table_header_70 dark:bg-search_bar_blue dark:border-table_header dark:hover:bg-header_blue dark:hover:border-table_header_70 secondary`;
                loadingIconColor = categoricalColors[this.color].color;
                break;
            case 'text':
                btnClassName = `max-w-full truncate font-inter text-sm font-regular focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent_blue_1 dark:text-table_header_70`;
                break;
        }
        const disabledClass = this.disabled
            ? this.variant === 'text'
                ? `${this.color}-text-disabled block text-sm cursor-not-allowed`
                : `${this.color}-disabled ${baseClasses} cursor-not-allowed`
            : '';
        // Add a class to indicate the button is in loading state
        const loadingClass = this.loading ? 'pointer-events-none' : '';
        // Add a Tailwind class for button to extend full-width
        const fullWide = this.fullWidth ? 'w-full flex justify-center' : '';
        // Add border-radius classes based on isButtonGroup prop
        const borderRadiusClass = this.isButtonGroup
            ? this.host.classList.contains('first-button')
                ? 'rounded-r-none '
                : this.host.classList.contains('last-button')
                    ? 'rounded-l-none -ml-1'
                    : this.host.classList.contains('inner-button')
                        ? 'rounded-none -ml-1'
                        : ''
            : '';
        return (h(Host, null, h("button", { class: `${colorClass} ${this.disabled ? disabledClass : btnClassName} ${disabledClass} ${borderRadiusClass} ${fullWide} ${loadingClass}`, disabled: this.disabled, onClick: this.handleClick, ref: (el) => (this.buttonEl = el), tabIndex: 0, type: this.type }, h("span", { class: "flex items-center gap-2 relative" }, h("slot", { name: "startIcon" }), h("span", { class: `${this.loading ? 'invisible' : 'truncate'}` }, h("slot", null)), this.loading && (h("o-icon", { name: "arrows-rotate", color: loadingIconColor, size: "sm", class: "animate-spin absolute top-2/4 left-2/4 -mt-1.5 -ml-1.5" }))))));
    }
    static get is() { return "o-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'text'",
                    "resolved": "\"primary\" | \"secondary\" | \"text\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "variant"
                        }, {
                            "name": "type",
                            "text": "{'primary' | 'secondary' | 'text'}"
                        }, {
                            "name": "default",
                            "text": "'primary'"
                        }, {
                            "name": "since",
                            "text": "0.1.0"
                        }],
                    "text": "The visual style variant of the OButton."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'primary'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'buyer' | 'seller' | 'payment' | 'order' | 'shipping'",
                    "resolved": "\"brand\" | \"buyer\" | \"order\" | \"payment\" | \"seller\" | \"shipping\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "color"
                        }, {
                            "name": "type",
                            "text": "{'brand' | 'buyer' | 'seller' | 'payment' | 'order' | 'shipping'}"
                        }, {
                            "name": "default",
                            "text": "'brand'"
                        }, {
                            "name": "since",
                            "text": "0.6.0"
                        }],
                    "text": "The color theme of the button."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'brand'"
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
                    "tags": [{
                            "name": "prop",
                            "text": "disabled"
                        }, {
                            "name": "type",
                            "text": "{boolean}"
                        }, {
                            "name": "default",
                            "text": "false"
                        }, {
                            "name": "since",
                            "text": "0.1.0"
                        }],
                    "text": "Indicates whether the button is disabled, preventing user interaction."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "loading"
                        }, {
                            "name": "type",
                            "text": "{boolean}"
                        }, {
                            "name": "default",
                            "text": "false"
                        }, {
                            "name": "since",
                            "text": "0.3.0"
                        }],
                    "text": "Indicates whether the button is loading, preventing user interaction."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "isButtonGroup": {
                "type": "boolean",
                "attribute": "is-button-group",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "isButtonGroup"
                        }, {
                            "name": "type",
                            "text": "{boolean}"
                        }, {
                            "name": "default",
                            "text": "false"
                        }, {
                            "name": "since",
                            "text": "0.1.0"
                        }],
                    "text": "Indicates whether the button is part of a button group."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "fullWidth": {
                "type": "boolean",
                "attribute": "full-width",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "fullWidth"
                        }, {
                            "name": "type",
                            "text": "{boolean}"
                        }, {
                            "name": "default",
                            "text": "false"
                        }, {
                            "name": "since",
                            "text": "0.2.0"
                        }],
                    "text": "Indicates whether the button takes up the full width of the container."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "type"
                        }, {
                            "name": "type",
                            "text": "{'button' | 'submit' | 'reset'}"
                        }, {
                            "name": "default",
                            "text": "'submit'"
                        }, {
                            "name": "since",
                            "text": "0.4.0"
                        }],
                    "text": "The type of the button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'submit'"
            }
        };
    }
    static get methods() {
        return {
            "setFocus": {
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
                    "text": "Programmatically focus the button element.",
                    "tags": [{
                            "name": "method",
                            "text": "setFocus"
                        }, {
                            "name": "returns",
                            "text": "A promise that resolves when focus is set"
                        }, {
                            "name": "since",
                            "text": "0.3.0"
                        }, {
                            "name": "example",
                            "text": "```typescript\r\nconst button = document.querySelector('o-button');\r\nawait button.setFocus();\r\n```"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "isButtonGroup",
                "methodName": "watchIsButtonGroup"
            }];
    }
}
//# sourceMappingURL=o-button.js.map
