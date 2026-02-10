import { Host, h } from "@stencil/core";
export class OStep {
    constructor() {
        /** Visual variant of the step */
        this.variant = 'default';
        /** Indicates whether the step is currently selected */
        this.selected = false;
        /** Enables click interaction for the step */
        this.clickable = false;
        /** Position of the step within the stepper (internal) */
        this.position = 'inner';
        /** (Circle Number) Index of the step (starting from 1) */
        this.index = 1;
    }
    get baseIconClasses() {
        return 'w-[38px] h-[38px] flex items-center justify-center rounded-full text-base font-medium font-inter m-1';
    }
    handleClick() {
        if (this.clickable) {
            this.oSelectedChanged.emit(this.hostElement);
        }
    }
    render() {
        // Label Class
        let labelClass = 'text-tab_grey';
        switch (this.variant) {
            case 'error':
                labelClass = 'text-error_red';
                break;
            case 'completed':
                labelClass = 'text-main_text';
                break;
            case 'active':
                labelClass = 'text-oec_blue';
                break;
        }
        // Icon Element
        let iconElement;
        switch (this.variant) {
            case 'error':
                iconElement = (h("div", { key: '9cddeaa4b87fcbd3c08127ed0b212a710848bc34', class: `${this.baseIconClasses} border-2 border-error_red bg-white text-error_red` }, h("o-icon", { key: '6230ce54a4987eb632185656e74ae637816ed1bb', name: "triangle-exclamation", color: "error_red", size: "sm", class: "scale-[1.4]" })));
                break;
            case 'completed':
                iconElement = (h("div", { key: '6dd1c362fafdcda93caa6aea116bb8ed376f65c6', class: `${this.baseIconClasses} border-2 border-green_txt bg-green_txt text-white` }, h("o-icon", { key: '28fa5920d942f5a9f66377a3aa347200eecb6428', name: "check", color: "white", size: "sm", class: "scale-150" })));
                break;
            case 'active':
                iconElement = (h("div", { key: 'b9e9d99f1e986a54491bdfbe050f014d9628d537', class: "rounded-full border-2 border-oec_blue inline-block m-0.5 bg-white" }, h("div", { key: 'd4b7a07fa27e67978b62ed44e5eb1c6997e5633d', class: "size-[34px] flex items-center justify-center rounded-full border border-white bg-oec_blue text-white text-base font-medium font-inter m-[0.12rem]" }, this.index)));
                break;
            default:
                iconElement = (h("div", { key: 'e6f3ee39521d5af8fc623f41b046722a06fa3716', class: `${this.baseIconClasses} border-2 border-tab_grey bg-white text-tab_grey` }, this.index));
        }
        return (h(Host, { key: 'd158df9138be15a716c9cd9ad7aa0e63c6218419', tabIndex: this.clickable ? 0 : -1, onClick: () => this.handleClick(), class: {
                step: true,
                'step-selected': this.selected,
                'step-clickable': this.clickable,
                [`step-position-${this.position}`]: true,
                [`step-variant-${this.variant}`]: true
            } }, h("div", { key: '7e0f01ddc4e5a53c05987666e43a06fa18b68fb9', class: "flex flex-row items-start space-x-4 space-y-3" }, h("div", { key: '381079b4e30b784dc587dd47c1b87b1af5f6f094', class: "relative flex flex-col items-center min-h-[80px]" }, ' ', (this.position === 'inner' || this.position === 'last') && (h("div", { key: 'bd8b96d44ea610b7b03c8c3d122dfdb2aabc2cdc', class: "absolute top-0 h-1/2 w-[2px] bg-tab_grey z-0" })), h("div", { key: 'eb3199cb5f6da1927a02e1a4df87fe9b79faa88b', class: "z-10" }, iconElement), (this.position === 'first' || this.position === 'inner') && (h("div", { key: '4a20433a631f9001679b7e9439dc693bef499d3d', class: "absolute bottom-0 h-1/2 w-[2px] bg-tab_grey z-0" }))), h("div", { key: '8ac6c45c1d583d298a4a06bfffe98595b3232161', class: `text-sm font-inter ${labelClass}` }, h("slot", { key: '0a60dd893bdd8a628046ea54f70c8fd05778f7b3' })))));
    }
    static get is() { return "o-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-step.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'completed' | 'active' | 'default' | 'error'",
                    "resolved": "\"active\" | \"completed\" | \"default\" | \"error\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual variant of the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates whether the step is currently selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables click interaction for the step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "'first' | 'last' | 'single' | 'inner'",
                    "resolved": "\"first\" | \"inner\" | \"last\" | \"single\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the step within the stepper (internal)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'inner'"
            },
            "index": {
                "type": "number",
                "attribute": "index",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(Circle Number) Index of the step (starting from 1)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            }
        };
    }
    static get events() {
        return [{
                "method": "oSelectedChanged",
                "name": "oSelectedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the step is clicked and its selection state changes"
                },
                "complexType": {
                    "original": "HTMLOStepElement",
                    "resolved": "HTMLOStepElement",
                    "references": {
                        "HTMLOStepElement": {
                            "location": "global",
                            "id": "global::HTMLOStepElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=o-step.js.map
