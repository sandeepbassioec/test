import { Host, h } from "@stencil/core";
export class OButtonGroup {
    /**
     * Updates button properties and classes.
     */
    updateButtonGroupProps() {
        const buttons = Array.from(this.host.querySelectorAll('o-button'));
        buttons.forEach((button, index) => {
            button.isButtonGroup = true;
            if (index === 0) {
                button.classList.add('first-button');
            }
            else if (index === buttons.length - 1) {
                button.classList.add('last-button');
            }
            else {
                button.classList.add('inner-button');
            }
        });
    }
    render() {
        return (h(Host, { key: 'dca4fba98bce85eddaa862f54e2189237c8e0562' }, h("div", { key: '2d8826bfe2e1c9465e19b8bb852e893e7eafbafe', class: "flex" }, h("slot", { key: '8e4003fa9e1c844a7ec7696d260a41a81e0c9638', onSlotchange: () => this.updateButtonGroupProps() }))));
    }
    static get is() { return "o-button-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-button-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-button-group.css"]
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-button-group.js.map
