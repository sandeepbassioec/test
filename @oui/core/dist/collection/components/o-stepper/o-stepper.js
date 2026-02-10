import { Host, h } from "@stencil/core";
export class OStepper {
    constructor() {
        /**
         * The index of the currently selected step
         */
        this.selectedIndex = 0;
        /**
         * Enables click navigation on the steps
         */
        this.clickable = false;
    }
    /**
     * Get all steps in the stepper
     */
    getSteps() {
        return Array.from(this.hostElement.querySelectorAll('o-step'));
    }
    /**
     * Sets the selected step to the specified index
     */
    async setSelectedIndex(index) {
        if (index !== this.selectedIndex) {
            const steps = this.getSteps();
            if (index >= 0 && index < steps.length) {
                this.selectedIndex = index;
                this.updateSteps();
                this.oStepSelected.emit(index);
            }
        }
    }
    /**
     * Watch for changes in the selected index
     */
    selectedIndexHandler() {
        this.updateSteps();
        this.oStepSelected.emit(this.selectedIndex);
    }
    /**
     * Listen for step selection events
     */
    onStepSelectionChanged(event) {
        const eventTarget = event.detail;
        const steps = this.getSteps();
        const clickIndex = steps.findIndex((step) => step === eventTarget);
        if (clickIndex >= 0) {
            const clientEvent = this.oStepSelected.emit(clickIndex);
            if (!clientEvent.defaultPrevented) {
                this.selectedIndex = clickIndex;
                this.updateSteps();
            }
        }
    }
    /**
     * Update all steps with proper properties
     */
    updateSteps() {
        const steps = this.getSteps();
        steps.forEach((step, index) => {
            step.clickable = this.clickable;
            step.selected = this.selectedIndex === index;
            // Set position property for each step
            if (steps.length === 1) {
                step.position = 'single';
            }
            else if (index === 0) {
                step.position = 'first';
            }
            else if (index === steps.length - 1) {
                step.position = 'last';
            }
            else {
                step.position = 'inner';
            }
            // Pass the index (starting from 1) to o-step
            step.index = index + 1;
        });
    }
    componentWillLoad() {
        this.updateSteps();
    }
    componentDidLoad() {
        // Set the initial selected index after the component has loaded
        this.setSelectedIndex(this.selectedIndex);
        // Create mutation observer to handle dynamic changes to steps
        /* istanbul ignore next */
        if (!OStepper.DISABLE_MUTATION_OBSERVER) {
            this.observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === 'childList') {
                        this.updateSteps();
                    }
                }
            });
            this.observer.observe(this.hostElement, { childList: true, subtree: true });
        }
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    componentDidRender() {
        this.updateSteps();
    }
    render() {
        return (h(Host, { key: 'da64c3a3d2c7b80018f4f84434c68c70193e84ee' }, h("div", { key: 'f540cac9b247a12e55c6d36a57e877658c971433' }, h("slot", { key: 'd8a43bacd7f369c1be08a6004be3273f72b307ee' }))));
    }
    static get is() { return "o-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-stepper.css"]
        };
    }
    static get properties() {
        return {
            "selectedIndex": {
                "type": "number",
                "attribute": "selected-index",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The index of the currently selected step"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "Enables click navigation on the steps"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "oStepSelected",
                "name": "oStepSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the selected step changes"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setSelectedIndex": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets the selected step to the specified index",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "selectedIndex",
                "methodName": "selectedIndexHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "oSelectedChanged",
                "method": "onStepSelectionChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
/**
 * Flags to disable the MutationObserver for unit tests
 */
OStepper.DISABLE_MUTATION_OBSERVER = false;
//# sourceMappingURL=o-stepper.js.map
