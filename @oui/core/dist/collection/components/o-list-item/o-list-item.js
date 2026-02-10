import { Host, h } from "@stencil/core";
export class OListItem {
    constructor() {
        this.selected = false;
        this.disabled = false;
        this.name = '';
        this.radioRef = false;
        this.handleRadioChange = (_event) => {
            if (!this.disabled && this.value) {
                const syntheticEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    detail: 1
                });
                this.oItemClick.emit({
                    value: this.value,
                    native: syntheticEvent
                });
            }
        };
    }
    handleValueChange() {
        var _a;
        if (this.value != null && typeof this.value !== 'string') {
            this.value = String(this.value);
        }
        // replace spaces with underscores as spaces can cause issues in some scenarios
        if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.includes(' ')) {
            this.value = this.value.replace(/ /g, '_');
        }
    }
    async setRadio(show) {
        this.radioRef = show;
    }
    async setSelected(selected) {
        this.selected = selected;
    }
    async setFocus(options) {
        if (this.listItemRef) {
            this.listItemRef.focus(options);
        }
    }
    selectedHandler() {
        this.hostElement.setAttribute('aria-selected', this.selected ? 'true' : 'false');
    }
    disabledHandler() {
        this.hostElement.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    componentWillLoad() {
        this.selectedHandler();
        this.disabledHandler();
    }
    render() {
        const baseClasses = 'mb-2.5 p-4 body-default text-content-default transition-all duration-150 bg-form-color-background-default border-width-sm rounded-radius-lg border-form-color-border-default flex flex-row align-items-center';
        const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';
        const outlineClass = this.selected
            ? 'outline outline-width-sm outline-focus-ring-color-border-default border-transparent'
            : 'focus:outline-width-lg focus:outline-offset-0 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default';
        const disabledRadioClasses = this.disabled
            ? 'disabled:border-form-color-border-disabled disabled:bg-form-color-background-disabled disabled:cursor-not-allowed'
            : '';
        const itemTitleClasses = 'title-sm text-content-default mb-1';
        const descriptionClasses = 'body-default text-content-default';
        const shouldShowRadio = this.radioRef;
        const radioClasses = shouldShowRadio
            ? `mr-4 self-center appearance-none checked:bg-background-brand-knockout checked:hover:bg-background-brand-knockout checked:focus:bg-background-brand-knockout ${disabledRadioClasses} focus:ring-offset-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus:outline-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none`
            : 'sr-only';
        return (h(Host, { key: '7940930d085f55f3c92a564483c52cb848fdf067' }, h("label", { key: '6879f820fe1100c3efb54fe3e0f25f311ce20b45', "aria-labelledby": "item-title", tabIndex: this.disabled ? -1 : 0, ref: (el) => (this.listItemRef = el), class: `${baseClasses} ${disabledClass} ${outlineClass}` }, h("input", { key: 'abb96bd0e7b74a991f9578030d796e9d10fff499', "aria-describedby": "item-description", type: "radio", name: this.name, value: this.value, checked: this.selected, disabled: this.disabled, tabIndex: -1, onChange: (event) => this.handleRadioChange(event), class: radioClasses }), h("div", { key: '7e13d4e812f46d0d55b483a94e0f317f0d44e17e' }, h("div", { key: 'fc5c403578fcba4a733a31f4fe5f53d9a3c62edf', class: itemTitleClasses }, h("slot", { key: '032e918e9e003ed994928d5efce93c84d418d670' })), h("div", { key: '68a9c8cf6a6ac04433ff14d5573526d5ebcf4d8f', class: descriptionClasses }, h("slot", { key: '6c64122fa440f27b2ea88d6b956378e3287eb403', name: "description" }))))));
    }
    static get is() { return "o-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-list-item.css"]
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
                "reflect": true
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "reflect": true,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "radioRef": {}
        };
    }
    static get events() {
        return [{
                "method": "oItemClick",
                "name": "oItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ value: string; native: MouseEvent }",
                    "resolved": "{ value: string; native: MouseEvent; }",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "setRadio": {
                "complexType": {
                    "signature": "(show: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "show",
                            "type": "boolean",
                            "docs": ""
                        }],
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
            "setSelected": {
                "complexType": {
                    "signature": "(selected: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "selected",
                            "type": "boolean",
                            "docs": ""
                        }],
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
            "setFocus": {
                "complexType": {
                    "signature": "(options?: FocusOptions) => Promise<void>",
                    "parameters": [{
                            "name": "options",
                            "type": "FocusOptions",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "FocusOptions": {
                            "location": "global",
                            "id": "global::FocusOptions"
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
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "selected",
                "methodName": "selectedHandler"
            }, {
                "propName": "disabled",
                "methodName": "disabledHandler"
            }];
    }
}
//# sourceMappingURL=o-list-item.js.map
