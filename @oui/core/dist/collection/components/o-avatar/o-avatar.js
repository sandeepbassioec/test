import { Host, h } from "@stencil/core";
export class OAvatar {
    /** Ensure only up to 2 alphabetic characters are used */
    get characters() {
        if (!this.initials)
            return null;
        return this.initials
            .replace(/[^a-zA-Z]/g, '')
            .toUpperCase()
            .slice(0, 2);
    }
    render() {
        var _a;
        return (h(Host, { key: 'fe3e5d85b66dd46e3728be69f55ff5945a517f49' }, h("div", { key: '35423a8730694cda2a387d55d4a665499636b6fe', class: "size-12 flex grow-0 shrink-0 items-center justify-center rounded-radius-full border-width-sm border-border-brand bg-background-brand text-content-brand body-default", "aria-label": this.label }, (_a = this.characters) !== null && _a !== void 0 ? _a : h("o-icon", { key: '130877cd3195a64acbd8b7b011591bedeac93c94', name: "user", color: "oec_blue", size: "md" }))));
    }
    static get is() { return "o-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-avatar.css"]
        };
    }
    static get properties() {
        return {
            "initials": {
                "type": "string",
                "attribute": "initials",
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
                    "text": "Optional full name (first and last)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Label for Accessability purposes"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=o-avatar.js.map
