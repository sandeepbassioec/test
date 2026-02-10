import { Host, h } from "@stencil/core";
export class ORadioGroup {
    constructor() {
        this.valueHasChanged = false;
        /** @prop {string} helpText - The help text to display below the radio group. */
        this.helpText = '';
        /** @prop {string} errorText - The error message to display when validation fails. */
        this.errorText = '';
        /** @prop {boolean} required - Whether selection from the radio group is required. Default is false. */
        this.required = false;
        /** @state {boolean} hasError - Tracks whether the radio group has an error. */
        this.hasError = false;
        this.internals = null;
        /* istanbul ignore next */
        this.handleClick = (event) => {
            const target = event.target.closest('o-radio');
            const radios = Array.from(this.host.querySelectorAll('o-radio'));
            if (!target || target.disabled) {
                return;
            }
            if (!this.valueHasChanged && this.defaultValue === target.value) {
                return;
            }
            this.value = target.value;
            radios.forEach((radio) => (radio.checked = radio === target));
            this.validateInput(this.value);
            this.updateFormValue(this.value);
            this.oChange.emit({ value: this.value });
            this.valueHasChanged = true;
        };
        // Validation to allow unit tests to run without ElementInternals support
        try {
            if (typeof this.host.attachInternals === 'function') {
                this.internals = this.host.attachInternals();
            }
        }
        catch (e) {
            /* istanbul ignore next */
            console.warn('ElementInternals not supported', e.message);
        }
    }
    connectedCallback() {
        this.validateInput(this.value);
    }
    componentDidLoad() {
        this.defaultValue = this.value;
    }
    /* istanbul ignore next */
    watchValue(newValue) {
        if (!this.valueHasChanged && this.defaultValue === newValue) {
            return;
        }
        this.validateInput(newValue);
        this.updateFormValue(newValue);
        this.updateRadioGroupProps();
        this.valueHasChanged = true;
    }
    errorTextChanged() {
        this.validateInput(this.value);
        this.updateValidityState();
    }
    updateRadioGroupProps() {
        const radios = Array.from(this.host.querySelectorAll('o-radio'));
        radios.forEach((radio) => {
            radio.name = this.name;
            radio.checked = radio.value === this.value;
        });
    }
    /** Validates the radio group state */
    validateInput(selectedValue) {
        this.hasError = (!selectedValue || selectedValue.trim() === '') && this.errorText.trim() !== '';
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
                (_b = (_a = this.internals).setValidity) === null || _b === void 0 ? void 0 : _b.call(_a, { customError: true }, this.errorText, this.host.shadowRoot.querySelector('fieldset'));
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
    /** Update form value for form association */
    updateFormValue(value) {
        var _a;
        /* istanbul ignore if */
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(value || null);
            }
            catch (e) {
                console.warn('Form value update not supported', e.message);
            }
        }
    }
    render() {
        return (h(Host, { key: '5c9e8e8687192163f6f420cf81c0747ead842d6c' }, h("fieldset", { key: 'd003f830b025edcb7ef562ea3897295a665d27ed', onClick: this.handleClick }, h("legend", { key: '2f5c3e4ec85db4932f633b0c99a7ba3b36709b4e', class: "pb-2" }, this.label && (h("o-label", { key: '01dd167417f087b55448658f07d5765d791b4357', label: this.label, variant: this.hasError ? 'error' : undefined, required: this.required }))), h("slot", { key: '1948ce22361f9dcce0ed2ea72f1ede01138d9fac', onSlotchange: () => this.updateRadioGroupProps() })), h("div", { key: '1c50122cdad43395ee0f9fbe36a29c3446d2b36c', class: "body-default" }, this.helpText && h("div", { key: 'c17ca082532897433c8b7f7a5baf868abcf4e448', class: "mt-1 text-content-default" }, this.helpText), this.hasError && (h("div", { key: '74a06fd82b54465d1c16f0d3ea2856da0e7fd75c', class: "mt-1" }, h("span", { key: 'ebca3d9420f916bfff4349c0bed2f4c20386b094', class: "text-content-status-error" }, this.errorText))))));
    }
    static get is() { return "o-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-radio-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-radio-group.css"]
        };
    }
    static get properties() {
        return {
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
                            "text": "{string} label - The label text for the radio group."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                            "text": "{string} name - The name attribute used to bind the child radios together."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "{string} value - The value attribute for the radio group."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                            "text": "{string} helpText - The help text to display below the radio group."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                            "text": "{boolean} required - Whether selection from the radio group is required. Default is false."
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
                    "tags": [],
                    "text": "Emitted when the radio group value changes"
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "errorText",
                "methodName": "errorTextChanged"
            }];
    }
}
//# sourceMappingURL=o-radio-group.js.map
