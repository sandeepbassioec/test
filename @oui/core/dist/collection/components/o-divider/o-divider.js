import { h, Host } from "@stencil/core";
export class ODivider {
    constructor() {
        /** Divider variant: 'horizontal' (default) or 'vertical' */
        this.variant = 'horizontal';
    }
    /** Watch for variant changes and update classes */
    handleVariantChange(newVariant) {
        this.dividerClass = this.computeClass(newVariant);
    }
    /** Take Tailwind classes based on variant */
    computeClass(variant) {
        return variant === 'horizontal' ? 'w-full h-[0px] my-[7px] ' : 'h-full w-[0px] mx-[7px] ';
    }
    /** Set initial class */
    componentWillLoad() {
        this.dividerClass = this.computeClass(this.variant);
    }
    render() {
        return (h(Host, { key: '2a89fb3acd99f5b957e0693ad48cab3462a15772' }, h("div", { key: '0ce452ccdf90d4af97faa6634367efe245a5bf4d', class: `border-width-sm border-border-default ${this.dividerClass}` })));
    }
    static get is() { return "o-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-divider.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Divider variant: 'horizontal' (default) or 'vertical'"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'horizontal'"
            }
        };
    }
    static get states() {
        return {
            "dividerClass": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "variant",
                "methodName": "handleVariantChange"
            }];
    }
}
//# sourceMappingURL=o-divider.js.map
