import { Host, h } from "@stencil/core";
export class OSkeleton {
    render() {
        return (h(Host, { key: '61133c62d2e02789adf7673488e36c9d92822ad2' }, h("div", { key: '20dece72893e8b5389b5b02df6f2fffb55e46011', class: "animate-pulse size-full bg-background-strong rounded-radius-lg min-h-4" })));
    }
    static get is() { return "o-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-skeleton.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-skeleton.css"]
        };
    }
}
//# sourceMappingURL=o-skeleton.js.map
