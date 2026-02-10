import { Host, h } from "@stencil/core";
export class OFooter {
    /** The content to display in the footer when no custom content is provided. */
    render() {
        return (h(Host, { key: '19f194bc49cfd4d0bd5d8255e4c0cb1d8d4de6e6' }, h("footer", { key: 'd24b241ad115e4124d6e4a65e050db31d5914e38' }, h("div", { key: '9f5a965842a66289c0e4006b6a00893e37503e21', class: "px-6 bg-background-default border-t border-border-default" }, h("div", { key: '6e8d28fd6e1b7dcfd4faa3054b68b03ac1aecd76', class: "flex justify-between py-4 body-sm text-content-default my-2" }, h("slot", { key: '1542ed0b852b9e0462436dc609a8c42830a3c474' }))))));
    }
    static get is() { return "o-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-footer.css"]
        };
    }
}
//# sourceMappingURL=o-footer.js.map
