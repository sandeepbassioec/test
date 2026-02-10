import { h, Host } from "@stencil/core";
export class OCard {
    /** Checks if the header slot has content */
    hasHeaderSlot() {
        return !!this.el.querySelector('[slot="header-text"], [slot="header-icon"]');
    }
    render() {
        return (h(Host, { key: 'c875f4544563be34c238502cacb1e36403f76d15' }, h("div", { key: '36b90778e743e493ba22c9c2068b4763cece7fef', class: "w-full bg-background-default rounded-radius-lg flex flex-col" }, this.hasHeaderSlot() && (h("div", { key: 'aea99ad5a975093f913886ba831aaeb8dc8019fe', class: "flex justify-between items-center px-3 py-2 border-b-width-sm border-border-default title-default" }, h("slot", { key: '0ccaf359a8da955682bd883b8669f5edc8dd2341', name: "header-text" }), h("slot", { key: '90dbf40416a441f0a56fbc32ea70602b837cf25e', name: "header-icon" }))), h("div", { key: '246b0c88799f9e9d21e545ee6a8cddb88203338c', class: "p-4 w-full" }, h("slot", { key: '2861aa73c0a0aea0cd6a15ff2d7cc00cf13ef01a' })))));
    }
    static get is() { return "o-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-card.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=o-card.js.map
