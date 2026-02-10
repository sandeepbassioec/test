import { h, Host } from "@stencil/core";
export class OTextfield {
    constructor() {
        this.defaultValue = '';
        this.valueHasChanged = false;
        /** @prop {string} nameValue - The name attribute for the input. Default is 'default'. */
        this.nameValue = 'default';
        /** Label for the text field */
        this.label = '';
        /** Placeholder text for the input */
        this.placeholder = '';
        /** Input type (e.g., text, password, email) */
        this.type = 'text';
        /** Indicates if the input is required */
        this.required = false;
        /** Indicates if the input is disabled */
        this.disabled = false;
        /** @prop {string} errorText - The error message to display when validation fails. */
        this.errorText = '';
        /** Help text to display below the input */
        this.helpText = '';
        /** Value of the input field */
        this.value = '';
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
    /** Validates the input value */
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
    /** Handle input change */
    handleInput(event) {
        const input = event.target;
        this.value = input.value;
        this.validateInput(this.value);
        this.internals.setFormValue(this.value);
    }
    render() {
        const baseClasses = 'placeholder:text-content-subtle text-content-default border-width-sm rounded-radius-lg py-2 px-3 w-full body-default appearance-none focus:outline-width-lg focus:-outline-offset-2 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default';
        const disabledClasses = this.disabled
            ? `${baseClasses} border-form-color-border-disabled text-content-disabled bg-form-color-background-disabled cursor-not-allowed`
            : '';
        const errorClasses = this.hasError ? `${baseClasses} border-border-status-error` : '';
        const defaultClasses = !this.hasError && !this.disabled
            ? `${baseClasses} border-form-color-border-default bg-form-color-background-default`
            : '';
        // Check if startIcon and endIcon slots are filled
        const hasStartIcon = !!this.el.querySelector('[slot="startIcon"]');
        const hasEndIcon = !!this.el.querySelector('[slot="endIcon"]');
        // Add padding if startIcon or endIcon slots are filled
        const iconPaddingClasses = `
			${hasStartIcon ? 'pl-10' : ''}
			${hasEndIcon ? 'pr-10' : ''}
		`;
        return (h(Host, { key: '6d943ed89b3bf507b91d9c188b915ab4c59f610c' }, h("div", { key: '1b8d7ca187771cd908a778c550cd4ce17334ab46', class: "antialiased relative" }, this.label && (h("o-label", { key: '74cc7cea70219644335cf699a1381fbb3c1155b4', htmlFor: this.nameValue, label: this.label, variant: this.hasError ? 'error' : this.disabled ? 'disabled' : undefined, required: this.required })), h("div", { key: '3aafe9148ef5b8b5ca93bc3fbc0cd9f877a95bc3', class: "relative" }, hasStartIcon && (h("div", { key: '8e7adc744af9f2bea2d7baa148850d25a365198b', class: "absolute inset-y-0 left-3 flex items-center pointer-events-none" }, h("slot", { key: '7fd6dbf26f5eee86f7cb02c48dd4475eca1d950b', name: "startIcon" }))), h("input", Object.assign({ key: 'aa2f93e8d42187e750be90c43ddd396d9b0f89d8', class: `${defaultClasses} ${errorClasses} ${disabledClasses} ${iconPaddingClasses}`, id: this.nameValue, type: this.type, placeholder: this.placeholder, value: this.value, disabled: this.disabled, required: this.required, onInput: (event) => this.handleInput(event) }, (this.disabled ? { disabled: true } : {}))), hasEndIcon && (h("div", { key: '0a91e31c8de9fd7c5096613aa6acddd84a357211', class: "absolute inset-y-0 right-3 flex items-center pointer-events-none" }, h("slot", { key: '13e181649553469c46105666cf7ade3ba5f2f548', name: "endIcon" })))), this.hasError && (h("div", { key: '6e03510c395351c86ce9ade5a44bdd884fb7e462', class: "body-default mt-1" }, h("span", { key: '18acc75b7a8351aded70c744a1002ddc2e61c9e2', class: "text-content-status-error" }, this.errorText))), this.helpText && !this.hasError && (h("div", { key: '7f8fa39439157bc8ed9771a3f619470860954fc4', class: `body-default mt-1 ${this.disabled ? 'text-content-disabled' : 'text-content-default'}` }, this.helpText)))));
    }
    static get is() { return "o-textfield"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-textfield.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-textfield.css"]
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
                    "tags": [],
                    "text": "Label for the text field"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text for the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'text' | 'password' | 'email' | 'number' | 'time'",
                    "resolved": "\"email\" | \"number\" | \"password\" | \"text\" | \"time\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Input type (e.g., text, password, email)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'text'"
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
                    "tags": [],
                    "text": "Indicates if the input is required"
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
                    "tags": [],
                    "text": "Indicates if the input is disabled"
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
                    "tags": [],
                    "text": "Help text to display below the input"
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
                    "tags": [],
                    "text": "Value of the input field"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
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
//# sourceMappingURL=o-textfield.js.map
