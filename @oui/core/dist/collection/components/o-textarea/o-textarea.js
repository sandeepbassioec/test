import { Host, h } from "@stencil/core";
export class OTextarea {
    constructor() {
        this.defaultValue = '';
        this.valueHasChanged = false;
        /** @prop {string} nameValue - The name attribute for the input. Default is 'default'. */
        this.nameValue = 'default';
        /** @prop {string} label - The label text for the textarea. */
        this.label = '';
        /** @prop {string} placeholder - The placeholder text for the textarea. */
        this.placeholder = '';
        /** @prop {string} value - The current value of the textarea. */
        this.value = '';
        /** @prop {boolean} required - Whether the textarea is required. Default is false. */
        this.required = false;
        /** @prop {boolean} disabled - Whether the textarea is disabled. Default is false. */
        this.disabled = false;
        /** @prop {string} errorText - The error message to display when validation fails. */
        this.errorText = '';
        /** @state {boolean} hasError - Tracks whether the textarea has an error. */
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
        this.validateInput(this.value);
        /* istanbul ignore if */
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(this.value);
            }
            catch (e) {
                console.warn('Form value update not supported', e.message);
            }
        }
    }
    componentDidLoad() {
        this.defaultValue = this.value;
    }
    valueChanged(newValue) {
        var _a;
        if (!this.valueHasChanged && this.defaultValue === newValue) {
            return;
        }
        this.validateInput(newValue);
        /* istanbul ignore if */
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(newValue);
            }
            catch (e) {
                console.warn('Form value update not supported', e.message);
            }
        }
        this.valueHasChanged = true;
    }
    errorTextChanged() {
        /* istanbul ignore next */
        this.validateInput(this.value);
        /* istanbul ignore next */
        this.updateValidityState();
    }
    helpTextChanged() {
        this.validateInput(this.value);
    }
    /**
     * Validates the textarea value.
     * @param {string} value - The textarea value to validate.
     */
    validateInput(_value) {
        this.hasError = this.errorText.trim() !== '';
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
                (_b = (_a = this.internals).setValidity) === null || _b === void 0 ? void 0 : _b.call(_a, { customError: true }, this.errorText, this.el.shadowRoot.querySelector('textarea'));
            }
            else {
                (_d = (_c = this.internals).setValidity) === null || _d === void 0 ? void 0 : _d.call(_c, {});
            }
        }
        catch (e) {
            console.warn('Validity state update not supported', e.message);
        }
    }
    /** Handle textarea change */
    handleInput(event) {
        var _a;
        const textarea = event.target;
        this.value = textarea.value;
        this.validateInput(this.value);
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            this.internals.setFormValue(this.value);
        }
    }
    render() {
        const baseClasses = 'placeholder:text-content-subtle text-content-default border-width-sm rounded-radius-lg body-default py-2 px-3 w-full appearance-none focus:outline-width-lg focus:-outline-offset-2 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default';
        // CSS classes for disabled state
        const disabledClasses = this.disabled
            ? `${baseClasses} border-form-color-border-disabled text-content-disabled bg-form-color-background-disabled cursor-not-allowed`
            : '';
        // CSS classes for error state
        const errorClasses = this.hasError ? `${baseClasses} border-border-status-error` : '';
        // CSS default state
        const defaultClasses = !this.hasError && !this.disabled
            ? `${baseClasses} border-form-color-border-default bg-form-color-background-default`
            : '';
        return (h(Host, { key: 'a668d379b6e35c60994ea543a273d6d3fe7214d6' }, h("div", { key: '3ac98c9ad4ec815dffd0ce8ec1ba0e70bd2f29eb' }, this.label && (h("o-label", { key: '7122bb7300f5627de9e1d284de8b7035f945a8bc', htmlFor: this.nameValue, label: this.label, variant: this.hasError ? 'error' : this.disabled ? 'disabled' : undefined, required: this.required })), h("textarea", Object.assign({ key: 'ff2541e783e62044882518bfd795b640039c9331', class: `${defaultClasses} ${disabledClasses} ${errorClasses}`, id: this.nameValue, placeholder: this.placeholder, value: this.value, disabled: this.disabled, required: this.required, onInput: (event) => this.handleInput(event) }, (this.disabled ? { disabled: true } : {}))), this.hasError && (h("div", { key: '0865082b4a6a1e6c58aad75f6c09d9f98e2d0052', class: "body-default mt-1" }, h("span", { key: '1e2f6930820090db6823fcbbaf519c61892d59ae', class: "text-content-status-error" }, this.errorText))), this.helpText && !this.hasError && (h("div", { key: 'b4fb9403c4ef11e0d9e2fc9c39f5d2fb1bd3217c', class: `body-default mt-1 ${this.disabled ? 'text-content-disabled' : 'text-content-default'}` }, this.helpText)))));
    }
    static get is() { return "o-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-textarea.css"]
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
                            "text": "{string} nameValue - The name attribute for the input. Default is 'default'."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                            "text": "{string} label - The label text for the textarea."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} placeholder - The placeholder text for the textarea."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} value - The current value of the textarea."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                            "text": "{boolean} required - Whether the textarea is required. Default is false."
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
                            "text": "{boolean} disabled - Whether the textarea is disabled. Default is false."
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
            "helpText": {
                "type": "string",
                "attribute": "help-text",
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
                            "text": "{string} helpText - The help text to display below the textarea."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "hasError": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "errorText",
                "methodName": "errorTextChanged"
            }, {
                "propName": "helpText",
                "methodName": "helpTextChanged"
            }];
    }
}
//# sourceMappingURL=o-textarea.js.map
