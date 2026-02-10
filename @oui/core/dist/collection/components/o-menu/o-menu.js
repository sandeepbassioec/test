import { h } from "@stencil/core";
export class OMenu {
    constructor() {
        /* istanbul ignore next */
        this.handleClick = (event) => {
            const composedPath = event.composedPath();
            const target = composedPath.find((el) => { var _a; return ((_a = el === null || el === void 0 ? void 0 : el.getAttribute) === null || _a === void 0 ? void 0 : _a.call(el, 'role')) === 'menuitem'; });
            if (!target)
                return;
            target.blur();
            this.oMenuSelect.emit({ item: target });
        };
        /* istanbul ignore next */
        this.handleMouseDown = (event) => {
            const target = event.target;
            if (this.isMenuItem(target))
                this.setCurrentItem(target);
        };
        /* istanbul ignore next */
        this.handleKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                event.stopPropagation();
                if (this.activeItem.index === 0)
                    this.activeItem.shadowRoot.querySelector('div').click();
            }
            else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                let index = this.activeItem ? this.menuItems.indexOf(this.activeItem) : 0;
                if (this.menuItems.length > 0) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (event.key === 'ArrowDown') {
                        index++;
                    }
                    else if (event.key === 'ArrowUp') {
                        index--;
                    }
                    else if (event.key === 'Home') {
                        index = 0;
                    }
                    else if (event.key === 'End') {
                        index = this.menuItems.length - 1;
                    }
                    if (index < 0) {
                        index = this.menuItems.length - 1;
                    }
                    if (index > this.menuItems.length - 1) {
                        index = 0;
                    }
                    this.setCurrentItem(this.menuItems[index]);
                    this.menuItems[index].setFocus();
                }
            }
        };
    }
    async handleSlotChange() {
        const items = await this.getMenuItems();
        this.menuItems = await this.getMenuItems();
        if (items.length > 0)
            this.setCurrentItem(items[0]);
    }
    isMenuItem(item) {
        return item.tagName.toLowerCase() === 'o-menu-item';
    }
    async getCurrentItem() {
        return (await this.getMenuItems()).find((i) => i.index === 0);
    }
    async setCurrentItem(item) {
        this.activeItem = item;
        const items = await this.getMenuItems();
        items.forEach((i) => {
            i.index = i === item ? 0 : -1;
        });
    }
    async getMenuItems() {
        var _a, _b;
        return [...(_b = (_a = this.menu).assignedElements) === null || _b === void 0 ? void 0 : _b.call(_a, { flatten: true })].filter((el) => {
            if (el.inert || !this.isMenuItem(el)) {
                return false;
            }
            return true;
        });
    }
    render() {
        return (h("div", { key: '95471a84f8eabda2ba94ec6e439860fde7da3514', role: "menu", onClick: this.handleClick, onMouseDown: this.handleMouseDown, onKeyDown: this.handleKeyDown, class: "bg-background-default border-width-sm border-border-default rounded-radius-lg py-2" }, h("slot", { key: 'dce976a0e97c4d6b08bc603485d21aef6cc2e79a', ref: (el) => (this.menu = el), onSlotchange: () => this.handleSlotChange() })));
    }
    static get is() { return "o-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-menu.css"]
        };
    }
    static get events() {
        return [{
                "method": "oMenuSelect",
                "name": "oMenuSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "OMenuSelectPayload",
                    "resolved": "OMenuSelectPayload",
                    "references": {
                        "OMenuSelectPayload": {
                            "location": "local",
                            "path": "E:/Source/__Agent01/_work/3785/s/packages/core/src/components/o-menu/o-menu.tsx",
                            "id": "src/components/o-menu/o-menu.tsx::OMenuSelectPayload"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "setCurrentItem": {
                "complexType": {
                    "signature": "(item: OMenuItem) => Promise<void>",
                    "parameters": [{
                            "name": "item",
                            "type": "OMenuItem",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "OMenuItem": {
                            "location": "import",
                            "path": "../o-menu-item/o-menu-item",
                            "id": "src/components/o-menu-item/o-menu-item.tsx::OMenuItem"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getMenuItems": {
                "complexType": {
                    "signature": "() => Promise<OMenuItem[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "OMenuItem": {
                            "location": "import",
                            "path": "../o-menu-item/o-menu-item",
                            "id": "src/components/o-menu-item/o-menu-item.tsx::OMenuItem"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<OMenuItem[]>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-menu.js.map
