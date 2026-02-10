import { Host, h } from "@stencil/core";
export class OList {
    constructor() {
        var _a;
        this.internals = null;
        this.defaultValue = '';
        this.valueHasChanged = false;
        this.value = '';
        this.required = false;
        this.errorText = '';
        this.showRadio = false;
        this.hasError = false;
        this.isInitialized = false;
        // Validation to allow unit tests to run without ElementInternals support
        try {
            if (typeof ((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.attachInternals) === 'function') {
                this.internals = this.hostElement.attachInternals();
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
    getListItems() {
        return Array.from(this.hostElement.querySelectorAll('o-list-item'));
    }
    updateListItemProps() {
        const items = this.getListItems();
        items.forEach((item) => {
            item.name = this.getRadioGroupName();
            item.selected = item.value === this.value;
        });
    }
    async setSelectedItem(value) {
        if (value !== this.value) {
            const items = this.getListItems();
            const targetItem = items.find((item) => item.value && item.value === value);
            if (targetItem && !targetItem.disabled) {
                this.value = value;
                this.updateListItemProps();
                return true;
            }
            else if (value === '') {
                this.value = value;
                this.updateListItemProps();
                return true;
            }
        }
        return false;
    }
    requiredHandler() {
        this.validateInput(this.value);
    }
    async showRadioHandler() {
        await this.updateListItems();
    }
    async nameHandler() {
        this.updateListItemProps();
    }
    async valueHandler(newValue) {
        if (!this.valueHasChanged && this.defaultValue === newValue) {
            return;
        }
        await this.updateListItems();
        this.validateInput(newValue);
        this.updateFormValue(newValue);
        this.oItemSelected.emit({ value: this.value });
        this.oValueChange.emit({ value: this.value });
        this.valueHasChanged = true;
    }
    errorTextChanged() {
        this.validateInput(this.value);
        this.updateValidityState();
    }
    helpTextChanged() {
        this.validateInput(this.value);
    }
    validateInput(value) {
        if (!this.required) {
            this.hasError = false;
            this.updateValidityState();
            return;
        }
        const isEmpty = !value || value.trim() === '';
        const isRequiredAndEmpty = this.required && isEmpty;
        this.hasError = this.isInitialized && isRequiredAndEmpty;
        this.updateValidityState();
    }
    updateValidityState() {
        var _a, _b, _c, _d;
        if (!this.internals)
            return;
        try {
            if (this.hasError && this.required) {
                const message = this.errorText || 'This field is required';
                (_b = (_a = this.internals).setValidity) === null || _b === void 0 ? void 0 : _b.call(_a, { customError: true }, message);
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
        if ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) {
            try {
                this.internals.setFormValue(value || null);
            }
            catch (e) {
                console.warn('Form value update not supported', e.message);
            }
        }
    }
    handleDefaultSlotChange() {
        const allItems = this.getListItems();
        const itemValues = [];
        // Check for duplicate values and collect valid values
        allItems.forEach((item) => {
            if (item.value) {
                itemValues.push(item.value);
            }
        });
        if (this.value) {
            const matchedItem = allItems.find((item) => item.value && this.value === item.value);
            if (matchedItem) {
                this.setSelectedItem(matchedItem.value);
            }
        }
    }
    async componentWillLoad() {
        this.defaultValue = this.value;
        this.updateListItemProps();
    }
    async componentDidLoad() {
        await this.updateListItems();
        this.hostElement.addEventListener('oItemClick', async (event) => {
            const clickedValue = event.detail.value;
            await this.setSelectedItem(clickedValue);
            this.validateInput(this.value);
        });
        if (!OList.DISABLE_MUTATION_OBSERVER) {
            this.observer = new MutationObserver(async () => {
                await this.updateListItems();
            });
            this.observer.observe(this.hostElement, { childList: true, subtree: true });
        }
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    async componentDidRender() {
        this.applyMarginClasses();
    }
    applyMarginClasses() {
        const items = this.getListItems();
        items.forEach((item, index) => {
            var _a;
            const listItem = (_a = item.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('li');
            if (listItem) {
                if (index < items.length - 1) {
                    listItem.classList.add('mb-2.5');
                }
                else {
                    listItem.classList.remove('mb-2.5');
                }
            }
        });
    }
    getRadioGroupName() {
        return this.name;
    }
    async updateListItems() {
        const items = this.getListItems();
        this.updateListItemProps();
        const promises = items.map(async (item) => {
            await item.setRadio(this.showRadio);
        });
        await Promise.all(promises);
    }
    render() {
        return (h(Host, { key: 'dfb208fc15490cb9b01e555e2c0dedec8e3b295b' }, h("fieldset", { key: '3251f3c868e924503c5ec04efab5a747d1e6cd80', class: "border-0 p-0 m-0" }, this.label && (h("legend", { key: '3ffb3686ece330932ec2ce27cc92f1802d71ab25', class: "flex p-0 mb-0" }, h("o-label", { key: 'f4fd651f5fcda196c8ca189b4f5a2de257a1b534', label: this.label, variant: this.hasError ? 'error' : undefined, required: this.required }))), h("div", { key: '20237795957746544f5fdbccafdce2d7dba3cf2d', class: "list-none p-0" }, h("slot", { key: '01c390b7e444152582a8023422c2d78a6d020c91', onSlotchange: () => this.handleDefaultSlotChange() }))), this.helpText && h("div", { key: '6cede39a8d802e000a993ced8ad10a499a23827c', class: "body-default mt-1 text-content-default" }, this.helpText), this.hasError && (h("div", { key: '800bbcd9a06534c651cf350fc9ea0c5fb4b338bd', class: "body-default mt-1" }, h("span", { key: 'c013c1e7268d8aff60d73f3261dd386b44b2d12d', class: "text-content-status-error" }, this.errorText)))));
    }
    static get is() { return "o-list"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["o-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-list.css"]
        };
    }
    static get properties() {
        return {
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
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": true,
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
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": true,
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
            "helpText": {
                "type": "string",
                "attribute": "help-text",
                "mutable": true,
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
            "errorText": {
                "type": "string",
                "attribute": "error-text",
                "mutable": true,
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
            "showRadio": {
                "type": "boolean",
                "attribute": "show-radio",
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
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasError": {},
            "isInitialized": {}
        };
    }
    static get events() {
        return [{
                "method": "oItemSelected",
                "name": "oItemSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "oValueChange",
                "name": "oValueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the list item value changes"
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
            "setSelectedItem": {
                "complexType": {
                    "signature": "(value: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "value",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "required",
                "methodName": "requiredHandler"
            }, {
                "propName": "showRadio",
                "methodName": "showRadioHandler"
            }, {
                "propName": "name",
                "methodName": "nameHandler"
            }, {
                "propName": "value",
                "methodName": "valueHandler"
            }, {
                "propName": "errorText",
                "methodName": "errorTextChanged"
            }, {
                "propName": "helpText",
                "methodName": "helpTextChanged"
            }];
    }
}
OList.DISABLE_MUTATION_OBSERVER = false;
//# sourceMappingURL=o-list.js.map
