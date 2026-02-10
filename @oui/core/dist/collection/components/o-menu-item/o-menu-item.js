import { h, Host } from "@stencil/core";
export class OMenuItem {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.index = -1;
        /* istanbul ignore next */
        this.handleHostClick = (event) => {
            if (this.disabled) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        };
        /* istanbul ignore next */
        this.handleMouseOver = (event) => {
            this.host.focus();
            event.stopPropagation();
        };
    }
    /* istanbul ignore next */
    connectedCallback() {
        this.host.addEventListener('click', this.handleHostClick);
        this.host.addEventListener('mouseover', this.handleMouseOver);
    }
    /* istanbul ignore next */
    disconnectedCallback() {
        this.host.removeEventListener('click', this.handleHostClick);
        this.host.removeEventListener('mouseover', this.handleMouseOver);
    }
    async setFocus() {
        this.item.focus();
    }
    render() {
        const disabledClass = this.disabled
            ? 'outline-none cursor-not-allowed text-content-disabled'
            : 'hover:bg-background-default-hover cursor-pointer focus:ring-0 focus-visible:ring-focus-ring-color-border-default focus:outline-width-lg focus:outline-focus-ring-color-border-default focus:outline-offset-0';
        return (h(Host, { key: 'df91538609e95748af0ba1dd752533cffd8bb81d' }, h("div", { key: '3ba6ede443e0564d4b1a734634a4d7986d6dec01', ref: (el) => (this.item = el), tabIndex: this.index, role: "menuitem", "aria-disabled": this.disabled ? 'true' : 'false', class: `relative body-default text-content-default px-4 py-2 ${disabledClass}` }, h("span", { key: '6817da6d15fea263804aaf8a86318495901483ae', class: "flex items-center gap-2" }, h("slot", { key: '0a4e963a742312957f43def714fd7c5e59a7e012', name: "startIcon" }), h("slot", { key: '87fae1c5ac892b43c3ee8c55c2ffa228e157c205' })))));
    }
    static get is() { return "o-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-menu-item.css"]
        };
    }
    static get properties() {
        return {
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
            "index": {
                "type": "number",
                "attribute": "index",
                "mutable": false,
                "complexType": {
                    "original": "0 | -1",
                    "resolved": "-1 | 0",
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
                "defaultValue": "-1"
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-menu-item.js.map
