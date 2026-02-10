import { Host, h } from "@stencil/core";
export class OSelect {
    constructor() {
        this.internals = null;
        this.defaultValue = '';
        this.valueHasChanged = false;
        this.nameValue = 'default';
        this.open = false;
        this.placement = 'bottom';
        this.placeholder = '';
        this.disabled = false;
        this.required = false;
        this.errorText = '';
        this.value = '';
        this.isOpen = false;
        this.isInitialized = false;
        this.displayLabel = '';
        this.hasFocus = false;
        this.hasError = false;
        this.handleDocumentKeyDown = (event) => {
            if (event.key === 'Escape' && this.open) {
                event.preventDefault();
                event.stopPropagation();
                this.hide();
                this.displayInput.focus({ preventScroll: true });
            }
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                event.stopImmediatePropagation();
                if (!this.open) {
                    this.show();
                    return;
                }
                if (this.currentOption && !this.currentOption.disabled) {
                    this.valueHasChanged = true;
                    this.setSelectedOption(this.currentOption);
                    this.hide();
                    this.displayInput.focus({ preventScroll: true });
                }
                return;
            }
            if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
                const allOptions = this.getAllOptions();
                const currentIndex = allOptions.indexOf(this.currentOption);
                let newIndex = Math.max(0, currentIndex);
                event.preventDefault();
                if (!this.open) {
                    this.show();
                    if (this.currentOption) {
                        return;
                    }
                }
                if (event.key === 'ArrowDown') {
                    newIndex = currentIndex + 1;
                    if (newIndex > allOptions.length - 1)
                        newIndex = 0;
                }
                else if (event.key === 'ArrowUp') {
                    newIndex = currentIndex - 1;
                    if (newIndex < 0)
                        newIndex = allOptions.length - 1;
                }
                else if (event.key === 'Home') {
                    newIndex = 0;
                }
                else if (event.key === 'End') {
                    newIndex = allOptions.length - 1;
                }
                this.setCurrentOption(allOptions[newIndex]);
            }
        };
        /* istanbul ignore next */
        this.handleDocumentMouseDown = (event) => {
            const path = event.composedPath();
            if (this.host && !path.includes(this.host))
                this.hide();
        };
        /* istanbul ignore next */
        this.handleComboboxMouseDown = (event) => {
            if (this.disabled) {
                return;
            }
            event.preventDefault();
            this.displayInput.focus({ preventScroll: true });
            this.open = !this.open;
        };
        this.handleComboboxKeyDown = (event) => {
            if (event.key === 'Tab') {
                return;
            }
            event.stopPropagation();
            this.handleDocumentKeyDown(event);
        };
        /* istanbul ignore next */
        this.handleOptionClick = (event) => {
            const target = event.target;
            const option = target.closest('o-option');
            if (option && !option.disabled && !(this.value === (option === null || option === void 0 ? void 0 : option.value))) {
                this.valueHasChanged = true;
                this.setSelectedOption(option);
            }
            this.displayInput.focus({ preventScroll: true });
            this.hide();
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
        this.updateFormValue(this.value);
        this.isInitialized = true;
    }
    componentDidLoad() {
        this.defaultValue = this.value;
    }
    async handleOpenChange() {
        var _a, _b, _c, _d;
        if (this.open && !this.disabled) {
            // reset current option
            const allOptions = this.getAllOptions();
            const selectedOption = allOptions === null || allOptions === void 0 ? void 0 : allOptions.filter((el) => el === null || el === void 0 ? void 0 : el.selected)[0];
            this.setCurrentOption(selectedOption || allOptions[0]);
            this.isOpen = true;
            this.addListeners();
            this.listbox.hidden = false;
            this.popup.active = true;
            requestAnimationFrame(() => {
                this.setCurrentOption(this.currentOption);
            });
            const { keyframes, options } = this.getAnimation('select.show');
            await Promise.resolve(this.animateTo((_b = (_a = this.popup) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('div'), keyframes, options));
        }
        else {
            this.isOpen = false;
            this.removeListeners();
            this.popup.active = false;
            this.listbox.hidden = true;
            const { keyframes, options } = this.getAnimation('select.hide');
            await Promise.resolve(this.animateTo((_d = (_c = this.popup) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('div'), keyframes, options));
        }
    }
    handleDisabledChange() {
        if (this.disabled) {
            this.open = false;
            return;
        }
    }
    async handleValueChange(newValue) {
        if (!this.valueHasChanged && this.defaultValue === newValue) {
            return;
        }
        const allOptions = this.getAllOptions();
        await this.setSelectedOption(allOptions === null || allOptions === void 0 ? void 0 : allOptions.filter((el) => this.value === el.value)[0]);
        this.validateInput(newValue);
        this.updateFormValue(newValue);
        this.oChange.emit({ value: this.value });
        this.valueHasChanged = true;
    }
    /* istanbul ignore next */
    errorTextChanged() {
        this.validateInput(this.value);
        this.updateValidityState();
    }
    helpTextChanged() {
        this.validateInput(this.value);
    }
    async show() {
        if (this.open || this.disabled) {
            return;
        }
        this.open = true;
    }
    async hide() {
        this.open = false;
    }
    handleFocus() {
        this.hasFocus = true;
    }
    handleBlur() {
        this.hasFocus = false;
    }
    handleDefaultSlotChange() {
        const allOptions = this.getAllOptions();
        const optionsValues = [];
        // Check for duplicate values
        allOptions.forEach((option) => optionsValues.push(option.value));
        // Select only the option that matches the new value
        if (this.value)
            this.setSelectedOption(allOptions === null || allOptions === void 0 ? void 0 : allOptions.filter((el) => this.value === el.value)[0]);
    }
    /* istanbul ignore next */
    addListeners() {
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    /* istanbul ignore next */
    removeListeners() {
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    getAllOptions() {
        return Array.from(this.host.querySelectorAll('o-option'));
    }
    async setSelectedOption(option) {
        const allOptions = this.getAllOptions();
        allOptions.forEach((el) => (el.selected = false));
        if (option)
            option.selected = true;
        await this.updateSelection();
    }
    async updateSelection() {
        var _a, _b, _c;
        // ensure updateSelection does not count as update to dirty state
        const cachedValueHasChanged = this.valueHasChanged;
        const options = this.getAllOptions();
        const selectedOption = options.filter((el) => el.selected)[0];
        this.value = (_a = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) !== null && _a !== void 0 ? _a : '';
        this.displayLabel = (_c = (await ((_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.getTextContent) === null || _b === void 0 ? void 0 : _b.call(selectedOption)))) !== null && _c !== void 0 ? _c : '';
        this.valueHasChanged = cachedValueHasChanged;
    }
    setCurrentOption(option) {
        const allOptions = this.getAllOptions();
        allOptions.forEach((el) => {
            el.current = false;
            el.tabIndex = -1;
        });
        if (option) {
            this.currentOption = option;
            option.current = true;
            option.tabIndex = 0;
            option.focus();
        }
    }
    validateInput(value) {
        this.hasError = this.isInitialized && (!value || value.trim() === '') && this.errorText.trim() !== '';
        this.updateValidityState();
    }
    updateValidityState() {
        var _a, _b, _c, _d;
        if (!this.internals)
            return;
        try {
            /* istanbul ignore if */
            if (this.hasError) {
                (_b = (_a = this.internals).setValidity) === null || _b === void 0 ? void 0 : _b.call(_a, { customError: true }, this.errorText, this.valueInput);
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
    getAnimation(animationName) {
        const animations = {
            'select.show': {
                keyframes: [
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1 }
                ],
                options: { duration: 100, easing: 'ease' }
            },
            'select.hide': {
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
        const baseComboboxClasses = 'body-default bg-background-default rounded-radius-lg border flex-grow flex w-full min-w-0 relative items-center justify-start align-middle overflow-hidden pe-3';
        const defaultComboboxClasses = !this.disabled ? `${baseComboboxClasses} cursor-pointer` : '';
        const disabledComboboxClasses = this.disabled
            ? `${baseComboboxClasses} text-content-disabled bg-form-color-background-disabled cursor-not-allowed outline-none`
            : '';
        const baseFocusComboboxClasses = `${defaultComboboxClasses} outline outline-visible outline-width-lg outline-focus-ring-color-border-default outline-offset-0`;
        const focusComboboxClasses = this.hasFocus
            ? this.hasError
                ? `${baseFocusComboboxClasses} outline-border-status-error`
                : `${baseFocusComboboxClasses} outline-focus-ring-color-border-default`
            : '';
        const errorComboboxClasses = this.hasError
            ? `${defaultComboboxClasses} border-border-status-error`
            : `${defaultComboboxClasses} border-border-default`;
        return (h(Host, { key: '6c9afaa8e488341d9d64e9349da31a92cb7754f0' }, h("div", { key: '531c8e360fa9dd4b818e0ccd1e7529e3a2723e12' }, this.label && (h("o-label", { key: '950975b9ee1da930d6f0a024574df6c7ae2483c6', htmlFor: this.nameValue, label: this.label, variant: this.hasError ? 'error' : this.disabled ? 'disabled' : undefined, required: this.required })), h("o-popup", { key: '14e23b0f3280d976a8339d8d8f1f59c1c061d8ac', ref: (el) => (this.popup = el), placement: this.placement, flip: true, distance: 3, sync: "width", class: "inline-flex flex-auto w-full relative align-middle" }, h("div", { key: '3108599413d4745a709c92e4d5fd5435887bffa4', slot: "anchor", class: `${defaultComboboxClasses} ${disabledComboboxClasses} ${focusComboboxClasses} ${errorComboboxClasses}`, onMouseDown: this.handleComboboxMouseDown, onKeyDown: this.handleComboboxKeyDown }, h("input", { key: '485db7df73b2c808ffb2a59e366a38bf12e7ed2c', ref: (el) => (this.displayInput = el), class: `relative w-full body-default placeholder:text-content-subtle placeholder:ps-2 text-content-default border-transparent focus:border-transparent focus:ring-0 rounded-radius-lg overflow-hidden py-2 m-0 focus:outline-none ${this.disabled
                ? 'bg-form-color-background-disabled text-content-disabled cursor-not-allowed'
                : 'cursor-pointer'}`, type: "text", placeholder: this.placeholder, value: this.displayLabel, disabled: this.disabled, readonly: true, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", "aria-labelledby": "label", "aria-disabled": this.disabled ? 'true' : 'false', role: "combobox", tabIndex: 0, onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }), h("input", { key: 'd03c1ecab9d55262d17799e0183602d568592870', ref: (el) => (this.valueInput = el), class: `opacity-0 absolute size-full body-default border-none rounded-radius-lg p-0 m-0 -z-10`, type: "text", disabled: this.disabled, value: this.value, tabIndex: -1, "aria-hidden": "true" }), h("o-icon", { key: '2d8709b22a74dd07084dbaa8dee27b820be8dded', class: `${this.isOpen ? 'rotate-180' : 'rotate-0'} flex-none flex items-center ms-2 transition-[rotate] duration-[250ms]`, name: "chevron-down", color: this.disabled ? 'content-disabled' : 'content-default' })), h("div", { key: '9608f4f553baccaedacba1a3a77564ea4114c6ba', class: "relative border border-border-default bg-background-default rounded-radius-lg overflow-hidden", role: "listbox", tabIndex: -1, onMouseUp: this.handleOptionClick }, h("div", { key: 'b5c25a7b45e8bcb50a7c52d336015ad8cb0a3990', class: "overflow-auto max-h-40" }, h("slot", { key: '04113bad926b8757ff126bc34b22b29753996bba', ref: (el) => (this.listbox = el), onSlotchange: () => this.handleDefaultSlotChange() })))), this.helpText && (h("div", { key: 'cbc9bc2fa67be8a7212027acb50802f83c63b607', class: `body-default mt-1 ${this.disabled ? 'text-content-disabled' : 'text-content-default'}` }, this.helpText)), this.hasError && (h("div", { key: '64c886a7e13c76ca11e3c282ffcc74122bfeba59', class: "body-default mt-1" }, h("span", { key: '8f80439b40a704e22221853bf4caa35a63e27049', class: "text-content-status-error" }, this.errorText))))));
    }
    static get is() { return "o-select"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-select.css"]
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
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
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
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
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
                    "original": "'top' | 'bottom'",
                    "resolved": "\"bottom\" | \"top\"",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": true,
                "defaultValue": "false"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "tags": [],
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
                    "tags": [],
                    "text": ""
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
            "isOpen": {},
            "isInitialized": {},
            "displayLabel": {},
            "hasFocus": {},
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
                    "text": "Emitted when the select value changes"
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
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
                    "text": "",
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
                    "text": "",
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
                "propName": "disabled",
                "methodName": "handleDisabledChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "errorText",
                "methodName": "errorTextChanged"
            }, {
                "propName": "helpText",
                "methodName": "helpTextChanged"
            }];
    }
}
//# sourceMappingURL=o-select.js.map
