import { h, Host } from "@stencil/core";
let id = 0;
export class OTab {
    constructor() {
        this.componentId = `tab-${++id}`;
        /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
        this.panel = '';
        /** Set to true to draw the tab in an active state. */
        this.active = false;
        /** Set to true to draw the tab in a disabled state. */
        this.disabled = false;
    }
    /** Sets focus to the tab. */
    async setFocus(options) {
        var _a;
        (_a = this.tab) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
    /** Removes focus from the tab. */
    async removeFocus() {
        var _a;
        (_a = this.tab) === null || _a === void 0 ? void 0 : _a.blur();
    }
    render() {
        var _a;
        const tabGroup = this.host.closest('o-tab-group');
        const placement = (_a = tabGroup === null || tabGroup === void 0 ? void 0 : tabGroup.placement) !== null && _a !== void 0 ? _a : 'top';
        return (h(Host, { key: '9464c9047047f2b467281c986e3f569531cc28c9' }, h("div", { key: '8091914e7edc350619442912a3be9399d6500cf7', id: this.host.id || this.componentId, class: "relative" }, h("div", { key: 'a04d2e82e5a112602bbf9a9e905c4416bdbd220f', ref: (el) => (this.tab = el), class: `flex items-center whitespace-nowrap select-none w-full font-bold focus:outline-none focus-visible:outline-[3px] focus:outline-offset-0 focus-visible:outline-accent_blue_1 pt-3.5 pb-4 mt-[3px] mx-[3px] justify-center text-sm
              			${this.disabled ? 'text-tab_grey cursor-not-allowed' : 'cursor-pointer'}
              			${this.active ? 'text-accent_blue_1' : this.disabled ? '' : 'text-table_header hover:text-accent_blue_1'}
              			${this.active && !this.disabled ? 'text-accent_blue_1' : ''}`, role: "tab", "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.disabled || !this.active ? '-1' : '0' }, h("slot", { key: '56bd88cdb322bab9d775d376d31a7fcaebf0d5b5' })), h("div", { key: '4c92f34bacab135ebf76f4c64c4de79ed9166ae9', class: `absolute left-[3px] ${this.active ? 'bg-accent_blue_1' : ''}
              ${placement === 'top' ? 'bottom-0 h-1 w-full' : ''}
            ` }))));
    }
    static get is() { return "o-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-tab.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-tab.css"]
        };
    }
    static get properties() {
        return {
            "panel": {
                "type": "string",
                "attribute": "panel",
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
                    "text": "The name of the tab panel the tab will control. The panel must be located in the same tab group."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
                    "text": "Set to true to draw the tab in an active state."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
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
                    "text": "Set to true to draw the tab in a disabled state."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get methods() {
        return {
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
                    "text": "Sets focus to the tab.",
                    "tags": []
                }
            },
            "removeFocus": {
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
                    "text": "Removes focus from the tab.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-tab.js.map
