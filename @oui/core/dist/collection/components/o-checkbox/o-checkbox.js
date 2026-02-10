import { h } from "@stencil/core";
export class OCheckbox {
    constructor() {
        this.valueHasChanged = false;
        /** @prop {string} nameValue - The name attribute for the checkbox. Default is 'default'. */
        this.nameValue = 'default';
        /** Determines the initial checked state of the checkbox. */
        this.checked = false;
        /** @prop {boolean} disabled - Whether the input is disabled. Default is false. */
        this.disabled = false;
        /** @prop {boolean} indeterminate - Whether the checkbox is in an indeterminate state. */
        this.indeterminate = false;
        /** @prop {string} errorText - The error message to display when validation fails. */
        this.errorText = '';
        /** @prop {boolean} required - Indicates if the checkbox is required */
        this.required = false;
        /** Indicates if the input has an error */
        this.hasError = false;
        this.internals = null;
        // Validation to allow unit tests to run without ElementInternals support
        try {
            if (typeof this.el.attachInternals === 'function') {
                this.internals = this.el.attachInternals();
            }
        }
        catch (e) {
            /* istanbul ignore next */
            console.warn('ElementInternals not supported', e.message);
        }
    }
    connectedCallback() {
        var _a;
        this.validateInput(this.checked);
        /* istanbul ignore if */
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(this.checked ? this.value || 'on' : null);
            }
            catch (e) {
                console.warn('Form value update not supported', e.message);
            }
        }
    }
    /** Returns the HTMLInputElement if found. */
    getCheckboxElement() {
        var _a;
        return (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input[type="checkbox"]');
    }
    /** Watches for changes to the 'indeterminate' property. */
    watchIndeterminate(newValue) {
        const checkbox = this.getCheckboxElement();
        if (checkbox) {
            checkbox.indeterminate = newValue;
        }
    }
    /** Watches for changes to the 'checked' property. */
    watchChecked(newValue) {
        var _a;
        if (!this.valueHasChanged && this.defaultValue === newValue) {
            return;
        }
        this.validateInput(newValue);
        const checkbox = this.getCheckboxElement();
        if (checkbox) {
            checkbox.checked = newValue;
            if (newValue) {
                this.indeterminate = false;
            }
            this.valueHasChanged = true;
        }
        /* istanbul ignore if */
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(newValue ? this.value || 'on' : null);
            }
            catch (e) {
                /* istanbul ignore next */
                console.warn('Form value update not supported', e.message);
            }
        }
    }
    errorTextChanged() {
        this.validateInput(this.checked);
        this.updateValidityState();
    }
    /** Validates the checkbox state */
    validateInput(isChecked) {
        this.hasError = !isChecked && this.errorText.trim() !== '';
        this.updateValidityState();
    }
    /** Update validity state for form association */
    updateValidityState() {
        var _a, _b, _c, _d;
        if (!this.internals)
            return;
        // Allow unit tests to run without ElementInternals support
        try {
            /* istanbul ignore if */
            if (this.hasError) {
                (_b = (_a = this.internals).setValidity) === null || _b === void 0 ? void 0 : _b.call(_a, { customError: true }, this.errorText, this.el.shadowRoot.querySelector('input'));
            }
            else {
                (_d = (_c = this.internals).setValidity) === null || _d === void 0 ? void 0 : _d.call(_c, {});
            }
        }
        catch (e) {
            /* istanbul ignore next */
            console.warn('Validity state update not supported', e.message);
        }
    }
    /** It sets the default value and initial indeterminate state of the checkbox element */
    componentDidLoad() {
        this.defaultValue = this.checked;
        const checkbox = this.getCheckboxElement();
        if (checkbox) {
            checkbox.indeterminate = this.indeterminate;
        }
        this.validateInput(this.checked);
    }
    /** Handle checkbox change */
    handleChange(event) {
        var _a;
        const checkbox = event.target;
        this.checked = checkbox.checked;
        this.validateInput(this.checked);
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            this.internals.setFormValue(this.checked ? this.value || 'on' : null);
        }
        this.oChange.emit({ checked: this.checked });
    }
    render() {
        /** Generates CSS classes for the disabled state of the checkbox. */
        const disabledClasses = this.disabled
            ? 'border-form-color-border-disabled bg-form-color-background-disabled cursor-not-allowed checked:border-form-color-border-disabled checked:bg-form-color-background-disabled  checked:disabled:bg-background-brand-knockout-disabled indeterminate:disabled:bg-background-brand-knockout-disabled'
            : '';
        const errorClasses = this.hasError ? 'border-border-status-error' : '';
        return (h("div", { key: 'ecc5460ab0f477fae3b29a3b3aa8cb39b2c6cd2e', class: "flex flex-col body-default antialiased" }, h("div", { key: 'c83a175ac6d696b4940c1f71b822b2dcad67fb6c', class: "flex items-center" }, h("input", { key: '33244a32097611ce59002f021250cd8976b30995', class: `appearance-none bg-form-color-background-default checked:bg-background-brand-knockout checked:hover:bg-background-brand-knockout checked:focus:bg-background-brand-knockout indeterminate:bg-background-brand-knockout indeterminate:focus:bg-background-brand-knockout indeterminate:hover:bg-background-brand-knockout rounded-radius-rounded border-form-color-border-default border-width-sm focus:outline-width-lg focus:outline-focus-ring-color-border-default focus:outline-offset-0 focus-visible:outline-width-lg focus-visible:ring-focus-ring-color-border-default ${disabledClasses} ${errorClasses}`, id: this.nameValue, type: "checkbox", checked: this.checked, disabled: this.disabled, value: this.value, required: this.required, onChange: (event) => this.handleChange(event) }), h("span", { key: '5644477ce81940794b701533d96a1aa8cda94753', class: "ml-2 flex items-center" }, h("o-label", { key: '814d19ecb7a273c4052bac05fdfea12a656a0ce5', htmlFor: this.nameValue, label: this.label, variant: this.hasError ? 'error' : this.disabled ? 'disabled' : undefined, required: this.required }))), this.hasError && (h("div", { key: 'd6000f095d5fdc413ed2dc86fff2126c6223fd36', class: "body-default mt-1" }, h("span", { key: '85a647d95dc7878c85e9f5b1f46534ac67ab1031', class: "text-content-status-error" }, this.errorText)))));
    }
    static get is() { return "o-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-checkbox.css"]
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
                            "text": "{string} nameValue - The name attribute for the checkbox. Default is 'default'."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
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
                    "tags": [],
                    "text": "Determines the initial checked state of the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "Used for Storybook documentation purposes."
                },
                "getter": false,
                "setter": false,
                "reflect": true
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
                            "text": "{string} value - The value of the checkbox input."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "indeterminate": {
                "type": "boolean",
                "attribute": "indeterminate",
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
                            "text": "{boolean} indeterminate - Whether the checkbox is in an indeterminate state."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "errorText": {
                "type": "string",
                "attribute": "error-text",
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
                            "text": "{string} errorText - The error message to display when validation fails."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                            "text": "{boolean} required - Indicates if the checkbox is required"
                        }],
                    "text": ""
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
            "hasError": {}
        };
    }
    static get events() {
        return [{
                "method": "oChange",
                "name": "oChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "event",
                            "text": "oChange"
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "{ checked: boolean }",
                    "resolved": "{ checked: boolean; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "indeterminate",
                "methodName": "watchIndeterminate"
            }, {
                "propName": "checked",
                "methodName": "watchChecked"
            }, {
                "propName": "errorText",
                "methodName": "errorTextChanged"
            }];
    }
}
//# sourceMappingURL=o-checkbox.js.map
