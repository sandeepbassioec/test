import { h, Host } from "@stencil/core";
export class OAlert {
    constructor() {
        /** Indicates whether or not the alert is open. */
        this.open = false;
        /** The variant of the alert. */
        this.variant = 'primary';
        this.handleCloseClick = () => {
            this.hide();
        };
    }
    handleOpenChange() {
        if (this.open) {
            this.oShow.emit();
        }
        else {
            this.oHide.emit();
        }
    }
    /** Shows the alert. */
    async show() {
        this.open = true;
    }
    /** Hides the alert. */
    async hide() {
        this.open = false;
    }
    getIconDetails() {
        switch (this.variant) {
            case 'success':
                return { iconName: 'circle-check', iconColor: 'spring_green' };
            case 'warning':
                return { iconName: 'circle-exclamation', iconColor: 'expire_orange' };
            case 'danger':
                return { iconName: 'circle-xmark', iconColor: 'flame_red' };
            case 'neutral':
                return { iconName: 'circle-info', iconColor: 'main_text' };
            case 'primary':
            default:
                return { iconName: 'circle-info', iconColor: 'accent_blue_1' };
        }
    }
    getVariantClasses() {
        switch (this.variant) {
            case 'success':
                return 'border-border-status-success';
            case 'neutral':
                return 'border-border-status-neutral';
            case 'warning':
                return 'border-border-status-warning';
            case 'danger':
                return 'border-border-status-error';
            default:
                return 'border-border-status-info';
        }
    }
    render() {
        const { iconName, iconColor } = this.getIconDetails();
        return (h(Host, { key: '6e91795fa04e1cc329658e2fecd246931984493d' }, h("div", { key: '0fd4008ae5904c3ce866e10fac517c4fe18e8a54', class: `${this.open ? 'block' : 'hidden'} ${this.getVariantClasses()} p-4 rounded-radius-md flex items-center justify-between bg-background-default text-content-default border-t-width-xl`, role: "alert", "aria-hidden": !this.open }, h("span", { key: 'e34e2af33b9921de96913f1fd4a2bf9101d3b119', class: "mr-2" }, h("o-icon", { key: 'eb9293e0e9f7a3db85961bbd6fbece1dac5a21b3', name: iconName, color: iconColor, size: "md", class: "pr-7" })), h("span", { key: 'aa10376a5eb6265a0ab0fa1222a28d450dea6a46', class: "flex-1" }, h("slot", { key: '4eec4499ffaf65c83e62c8175d4345a3ed04e381' })), h("o-icon-button", { key: '68d7c7499b89936693126a7ab65f1dd7a4e363e5', name: "xmark", onClick: this.handleCloseClick, "aria-label": "Close alert" }))));
    }
    static get is() { return "o-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-alert.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates whether or not the alert is open."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
                    "resolved": "\"danger\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The variant of the alert."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'primary'"
            }
        };
    }
    static get events() {
        return [{
                "method": "oShow",
                "name": "oShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the alert opens."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oHide",
                "name": "oHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the alert closes."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the alert.",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the alert.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
//# sourceMappingURL=o-alert.js.map
