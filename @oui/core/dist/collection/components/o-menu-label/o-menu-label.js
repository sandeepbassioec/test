import { Host, h } from "@stencil/core";
export class OMenuLabel {
    render() {
        return (h(Host, { key: '983f315da10ee73f09b9197adb9fabc559c4ef2f' }, h("span", { key: 'a57c5eee1b669940625c5dd3adae0a222e55ab13', class: 'inline-block title-sm text-content-default px-4 py-3' }, h("slot", { key: '7a2e67e447261b84f6e6b82b04a755e41c7862e2' }))));
    }
    static get is() { return "o-menu-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-menu-label.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-menu-label.css"]
        };
    }
}
//# sourceMappingURL=o-menu-label.js.map
