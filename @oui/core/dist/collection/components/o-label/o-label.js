import { h } from "@stencil/core";
export class OLabel {
    constructor() {
        /** Indicates if the field is required - shows asterisk */
        this.required = false;
    }
    render() {
        const baseClasses = 'label-default';
        const disabledClasses = this.variant === 'disabled' ? `${baseClasses} text-content-disabled` : '';
        const errorClasses = this.variant === 'error' ? `${baseClasses} text-content-status-error` : '';
        const defaultClasses = !this.variant ? `${baseClasses} text-content-default` : '';
        return (h("div", { key: '45cb52b1cc29af552f7cae6379644eac67f27c8a' }, h("label", { key: 'e6cf8e19edd632c2e1e901fce3f7721e9480d68f', htmlFor: this.htmlFor, class: `${defaultClasses} ${errorClasses} ${disabledClasses}` }, this.label, this.required ? h("span", null, "\u00A0*") : null)));
    }
    static get is() { return "o-label"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-label.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-label.css"]
        };
    }
    static get properties() {
        return {
            "htmlFor": {
                "type": "string",
                "attribute": "html-for",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The ID of the input element the label is associated with"
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label text to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'disabled'",
                    "resolved": "\"disabled\" | \"error\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant for different label states"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Indicates if the field is required - shows asterisk"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=o-label.js.map
