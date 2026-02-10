import { Host, h } from "@stencil/core";
export class OAppBar {
    constructor() {
        /** A description that gets read by assistive devices. */
        this.label = '';
    }
    render() {
        return (h(Host, { key: 'e2adc0c9fdf1d2356aa76e8e04996a0cce151a5f' }, h("header", { key: 'a68054defd44996e8d2bbe2ae8b8b999bcaaa3dc', "aria-label": this.label, class: "fixed z-10 top-0 left-0 w-full h-16 flex items-center justify-between  bg-[image:--oui-theme-app-bar-color-background-default] px-4" }, h("div", { key: 'ef973c6426364fb2531ba0a165bf544bf24e5f78', class: "items-center gap-4" }, h("slot", { key: '7a1838eebb4391dbfeff456f3d2eefaa478981fb', name: "left" })), h("div", { key: '6180503ff0fe7d8cda5f42d4a0d5035965114936', class: "justify-center gap-4" }, h("slot", { key: 'de1fe7a5d2fc7bb18d2400737d17bcf5a2d9a8ac', name: "center" })), h("div", { key: '8aff6b252ba72706f73b0ebc1a08f684eaaf9d73', class: "items-center gap-4" }, h("slot", { key: '86ff3d9eee3a41c6ee6463887888294803d51fc8', name: "right" })))));
    }
    static get is() { return "o-app-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-app-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-app-bar.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A description that gets read by assistive devices."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=o-app-bar.js.map
