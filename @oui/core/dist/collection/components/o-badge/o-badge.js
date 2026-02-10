import { Host, h } from "@stencil/core";
import { getColors } from "../../internal/color";
export class OBadge {
    constructor() {
        /**
         * @prop variant - The variant of the component, which determines its style.
         *
         * @deprecated The prop 'variant' is deprecated as of v0.6.0
         *
         * @see {@link http://oecui.oec.oeconnection.com/?path=/docs/components-badge--docs} OBadge Documentation
         *
         * @since 0.1.0 - Initial introduction of variant prop
         * @since 0.6.0 - Variant prop deprecated
         */
        this.variant = 'default';
        /** The color of the badge, can be "brand", "order", "payment", "shipping", "uncategorized" */
        this.color = 'uncategorized';
    }
    /** Get the variant class based on the variant prop. */
    get variantClass() {
        switch (this.variant) {
            case 'default':
                return 'bg-accent_blue_1';
            case 'order':
                return 'bg-accent_blue_1';
            case 'neutral':
                return 'bg-tab_grey';
            case 'shipping':
                return 'bg-[#3D857C]';
            case 'payment':
                return 'bg-[#542F7D]';
            default:
                return '';
        }
    }
    render() {
        const categoricalColors = getColors('categorical');
        return (h(Host, { key: '9849a970384c4fc138a14cc7c1baccef67413ca1' }, h("div", { key: 'a7f2532c08d394d4e4de05949bb0c0e57d2a6d35', class: `text-sm inline-flex items-center justify-center font-inter font-medium text-white rounded-full px-3 py-1 max-w-full truncate ${this.variantClass}`, style: {
                backgroundColor: `${categoricalColors[this.color].textColor}`,
                border: `1px solid ${categoricalColors[this.color].color}`,
                color: `${categoricalColors[this.color].color}`
            } }, h("span", { key: '7329dd8b6d16d54e1c20ca1bdce0aba92f96e347', class: "truncate" }, h("slot", { key: 'c53ec649f404877c7305939b559a343253254186' })))));
    }
    static get is() { return "o-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-badge.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'order' | 'neutral' | 'shipping' | 'payment'",
                    "resolved": "\"default\" | \"neutral\" | \"order\" | \"payment\" | \"shipping\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "prop",
                            "text": "variant - The variant of the component, which determines its style."
                        }, {
                            "name": "deprecated",
                            "text": "The prop 'variant' is deprecated as of v0.6.0"
                        }, {
                            "name": "see",
                            "text": "{@link http://oecui.oec.oeconnection.com/?path=/docs/components-badge--docs} OBadge Documentation"
                        }, {
                            "name": "since",
                            "text": "0.1.0 - Initial introduction of variant prop"
                        }, {
                            "name": "since",
                            "text": "0.6.0 - Variant prop deprecated"
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'order' | 'payment' | 'shipping' | 'uncategorized'",
                    "resolved": "\"brand\" | \"order\" | \"payment\" | \"shipping\" | \"uncategorized\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the badge, can be \"brand\", \"order\", \"payment\", \"shipping\", \"uncategorized\""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'uncategorized'"
            }
        };
    }
}
//# sourceMappingURL=o-badge.js.map
