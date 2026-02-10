import { Host, h } from "@stencil/core";
import { getColors } from "../../internal/color";
export class OTag {
    constructor() {
        /** Determines if the tag is closable (shows a close button) */
        this.closable = false;
        /** Color variant of the tag */
        this.color = 'uncategorized';
        /** Handles click events on the tag */
        this.handleClick = (event) => {
            if (this.oClick) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            event.preventDefault();
            this.oClick.emit();
        };
    }
    handleRemoveClick(event) {
        event.stopPropagation(); // Prevent triggering the click event on the tag
        this.oRemove.emit();
        this.host.remove(); // Remove the o-tag from the DOM
    }
    render() {
        const baseClasses = 'inline-flex items-center justify-center font-inter font-medium text-sm rounded-full px-4 py-1 max-w-full truncate';
        const categoricalColors = getColors('categorical');
        return (h(Host, { key: 'e9b89157970a38ba227f613f820fce464f4f4277' }, h("div", { key: 'd70ed9957db67ca272104a6db4e5708065759761', class: `${baseClasses} relative`, onClick: this.handleClick, style: {
                backgroundColor: `${categoricalColors[this.color].textColor}`,
                border: `1px solid ${categoricalColors[this.color].color}`,
                color: `${categoricalColors[this.color].color}`
            } }, h("div", { key: '27fd783fad5e110a100168e07c7e5f6a4f78b03b', class: `flex items-center gap-2 ${this.closable ? 'mr-4' : ''} max-w-full` }, h("slot", { key: '7a6f30a4baaeffb168fc250df4afa98298c58da1', name: "startIcon" }), h("span", { key: '5bc0640abb05d950ab6368ef8d07c417c163528e', class: "truncate" }, h("slot", { key: '539b48135f9a21d5b5727a4555233c1784f398c5' })), this.closable && (h("o-icon-button", { key: 'dacbee77e19c26d0db1fd2c1019b1b8d7329c073', name: "close", color: categoricalColors[this.color].color, class: "absolute right-1", onClick: (event) => this.handleRemoveClick(event) }))))));
    }
    static get is() { return "o-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-tag.css"]
        };
    }
    static get properties() {
        return {
            "closable": {
                "type": "boolean",
                "attribute": "closable",
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
                    "text": "Determines if the tag is closable (shows a close button)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Color variant of the tag"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'uncategorized'"
            }
        };
    }
    static get events() {
        return [{
                "method": "oRemove",
                "name": "oRemove",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the close button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oClick",
                "name": "oClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the tag is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=o-tag.js.map
