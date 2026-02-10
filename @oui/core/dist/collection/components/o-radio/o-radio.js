import { h } from "@stencil/core";
export class ORadio {
    constructor() {
        /** @prop {string} nameValue - The id attribute for the radio input. */
        this.nameValue = 'default';
        /** @prop {boolean} checked - Determines the initial checked state of the radio. Default is false. */
        this.checked = false;
        /** @prop {boolean} disabled - Whether the input is disabled. Default is false. */
        this.disabled = false;
        /** @prop {string} name - The name attribute for the radio input. Used to bind radios together in a radio group. */
        this.name = 'default';
    }
    /** Returns the HTMLInputElement if found. */
    getRadioElement() {
        var _a;
        return (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input[type="radio"]');
    }
    /** Watches for changes to the 'checked' property. */
    watchChecked(newValue) {
        const radio = this.getRadioElement();
        if (radio) {
            radio.checked = newValue;
        }
    }
    render() {
        const disabledClasses = this.disabled
            ? 'disabled:border-form-color-border-disabled disabled:bg-form-color-background-disabled disabled:checked:bg-background-brand-knockout-disabled disabled:cursor-not-allowed'
            : '';
        return (h("div", { key: '5d1da2c17c5951aceba8a168574fce17fe338240', class: "mb-3 flex items-center antialiased" }, h("input", { key: 'eadc39e32e430eb45b6e6a8c3cab8742122b61cd', id: this.nameValue, type: "radio", class: `appearance-none bg-form-color-background-default border-width-sm checked:bg-background-brand-knockout checked:hover:bg-background-brand-knockout checked:focus:bg-background-brand-knockout focus:outline-width-lg focus:outline-focus-ring-color-border-default focus:outline-offset-0 ${disabledClasses}`, value: this.value, checked: this.checked, disabled: this.disabled, name: this.name }), h("slot", { key: 'd2e531dccdbfda4760c1c79c335f6f427e838d24' }), h("span", { key: 'e06ede0d125249c1ef3539bc7084754971305459', class: "ml-2 flex items-center" }, h("o-label", { key: 'd6d386e02b6c9f8a4d5a10c4d35910d314d2a405', htmlFor: this.nameValue, label: this.label, variant: this.disabled ? 'disabled' : undefined }))));
    }
    static get is() { return "o-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-radio.css"]
        };
    }
    static get properties() {
        return {
            "nameValue": {
                "type": "string",
                "attribute": "name-value",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} nameValue - The id attribute for the radio input."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} value - The value attribute for the radio input."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
                "mutable": true,
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
                            "text": "{boolean} checked - Determines the initial checked state of the radio. Default is false."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                            "text": "{boolean} disabled - Whether the input is disabled. Default is false."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} name - The name attribute for the radio input. Used to bind radios together in a radio group."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'default'"
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
                    "tags": [{
                            "name": "prop",
                            "text": "{string} label - The label text for the radio input."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "watchChecked"
            }];
    }
}
//# sourceMappingURL=o-radio.js.map
