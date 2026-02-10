import { Host, h } from "@stencil/core";
export class OSidebar {
    render() {
        return (h(Host, { key: 'b67a64e6ff32116cda88d40c534cb843d80b5861' }, h("div", { key: 'fd0179891a2388feca8fa85222822fc74ef41d6b', class: `shadow-sm-bottom bg-background-default w-full fixed left-0 top-0 z-50 rounded-r-radius-lg p-5 box-border` }, h("div", { key: 'cd908459780603d3c082824b254b2388c92ed237', class: "size-full rounded-r-radius-lg break-words overflow-auto" }, h("slot", { key: 'effd4959c28fc133c21b21524b2c30f991b36c41' })))));
    }
    static get is() { return "o-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-sidebar.css"]
        };
    }
}
//# sourceMappingURL=o-sidebar.js.map
