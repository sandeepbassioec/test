import { h, Host } from "@stencil/core";
let id = 0;
export class OTabPanel {
    constructor() {
        this.componentId = `tab-panel-${++id}`;
        /** The tab panel's name. */
        this.name = '';
        /** When true, the tab panel will be shown. */
        this.active = false;
    }
    render() {
        return (h(Host, { key: '12be73eff51538f471eecb34df5f153442afd56c' }, h("div", { key: '8d72d6ba8f8dbe6ddd1bcf77568050e9fbce8546', id: this.host.id || this.componentId, class: this.active ? 'block' : 'hidden' }, h("div", { key: 'cc0f84a37c9a149b57ec8d8dbee73a99c2c00596', class: "text-sm text-main_text py-9", role: "tabpanel" }, h("slot", { key: '9aeafec205051471b413712a62b5b127b20fdbc7' })))));
    }
    static get is() { return "o-tab-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-tab-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-tab-panel.css"]
        };
    }
    static get properties() {
        return {
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
                    "tags": [],
                    "text": "The tab panel's name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "When true, the tab panel will be shown."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-tab-panel.js.map
