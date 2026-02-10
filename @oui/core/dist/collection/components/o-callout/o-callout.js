import { Host, h } from "@stencil/core";
export class OCallout {
    render() {
        return (h(Host, { key: '52bba8a0f87e1a3171e3340b36a3d37feb85100a' }, h("div", { key: '3b3b15b20b9ede17b9bdd3a2e0e61fc9e0a6dea5', class: "bg-background-subtle p-4 rounded-radius-lg" }, h("slot", { key: 'a4cf394fbc08bbe4add3cabd5c5f18d4a5682973' }))));
    }
    static get is() { return "o-callout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-callout.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-callout.css"]
        };
    }
}
//# sourceMappingURL=o-callout.js.map
