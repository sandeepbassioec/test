import { Host, h } from "@stencil/core";
export class OOption {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.selected = false;
        this.current = false;
    }
    handleValueChange() {
        if (typeof this.value !== 'string') {
            this.value = String(this.value);
        }
        // replace spaces with underscores as spaces delimiters in multi-select scenarios
        if (this.value.includes(' ')) {
            this.value = this.value.replace(/ /g, '_');
        }
    }
    async getTextContent() {
        const nodes = Array.from(this.host.childNodes);
        let label = '';
        [...nodes].forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (!node.hasAttribute('slot')) {
                    label += node.textContent;
                }
            }
            if (node.nodeType === Node.TEXT_NODE) {
                label += node.textContent;
            }
        });
        return label.trim();
    }
    render() {
        const baseClasses = 'body-default relative flex items-center py-1 pl-2';
        const selectedClasses = 'bg-background-brand-knockout text-content-brand-knockout';
        const checkClasses = 'flex flex-none items-center justify-center';
        const disabledClasses = 'text-content-disabled cursor-not-allowed';
        const currentClasses = 'bg-background-brand-knockout text-content-brand-knockout outline-focus-ring-color-border-default';
        return (h(Host, { key: '9c3b49f4b376d402aa1166a6ce176fce9c14d2fb' }, h("div", { key: '8c5d3ad91222a0f23c5f1d52bc2512e12aff1cb4', "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', class: `${baseClasses} ${this.selected && !this.disabled ? selectedClasses : ''} ${this.disabled ? disabledClasses : 'cursor-pointer'} ${!this.selected && !this.disabled && !this.current ? 'text-content-default hover:bg-background-default-hover' : ''} ${this.current ? currentClasses : ''}` }, h("o-icon", { key: '819c4bbdf2ff5d01f729c68ba204f396b681c644', class: `${this.selected ? 'flex' : 'flex invisible'} ${checkClasses}`, name: "check", color: this.disabled ? 'content-disabled' : this.current ? 'content-brand-knockout' : '' }), h("div", { key: 'fbc9542becc2e931e7daa6f4c0cdb489a1315d1e', class: `pl-2 flex-auto inline-block` }, h("slot", { key: '939fba362c25216c603ae37e23ba879321ce8115' })))));
    }
    static get is() { return "o-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-option.css"]
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
            "current": {
                "type": "boolean",
                "attribute": "current",
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
            }
        };
    }
    static get methods() {
        return {
            "getTextContent": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<string>"
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
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=o-option.js.map
