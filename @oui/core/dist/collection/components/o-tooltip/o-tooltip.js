import { Host, h } from "@stencil/core";
export class OTooltip {
    constructor() {
        this.isAnimating = false;
        /** The text content to be displayed in the tooltip */
        this.content = '';
        /** The open state of the tooltip, defaults to closed (false) */
        this.open = false;
        /** Position of the tooltip relative to the target */
        this.placement = 'top';
        /** Whether the tooltip is disabled, preventing user interaction. */
        this.disabled = false;
        /** If true, sets the popup positioning strategy to fixed instead of absolute - can be used to get around overflow issues */
        this.hoist = false;
        /** The trigger type of the tooltip, separated by a space - can be hover, focus, click, manual, or a combination */
        this.trigger = 'hover focus';
        /** Maximum width (in rem) of the tooltip popover, allowing optional text wrapping */
        this.maxWidth = 20;
        /* istanbul ignore next */
        this.handleFocus = () => {
            if (this.hasTrigger('focus')) {
                this.show();
            }
        };
        /* istanbul ignore next */
        this.handleBlur = () => {
            if (this.hasTrigger('focus')) {
                this.hide();
            }
        };
        /* istanbul ignore next */
        this.handleClick = () => {
            if (this.hasTrigger('click')) {
                if (this.open) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }
        };
        this.handleDocumentKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                this.hide();
            }
        };
        /* istanbul ignore next */
        this.handleMouseOver = () => {
            if (this.hasTrigger('hover')) {
                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = window.setTimeout(() => this.show(), 150);
            }
        };
        /* istanbul ignore next */
        this.handleMouseOut = () => {
            if (this.hasTrigger('hover')) {
                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = window.setTimeout(() => this.hide(), 0);
            }
        };
    }
    async handleOpenChange() {
        // Prevent race conditions from multiple open/close calls
        if (this.isAnimating) {
            return;
        }
        if (this.open) {
            if (this.disabled) {
                return;
            }
            this.isAnimating = true;
            try {
                // Show
                this.oShow.emit();
                document.addEventListener('keydown', this.handleDocumentKeyDown);
                await this.stopAnimations();
                this.body.hidden = false;
                this.popup.active = true;
                const config = this.getAnimationConfig('show');
                await this.animateTooltip(config);
                this.oAfterShow.emit();
            }
            catch (error) {
                console.warn('o-tooltip show animation failed:', error);
            }
            finally {
                this.isAnimating = false;
            }
        }
        else {
            this.isAnimating = true;
            try {
                // Hide
                this.oHide.emit();
                document.removeEventListener('keydown', this.handleDocumentKeyDown);
                await this.stopAnimations();
                const config = this.getAnimationConfig('hide');
                await this.animateTooltip(config);
                this.popup.active = false;
                this.body.hidden = true;
                this.oAfterHide.emit();
            }
            catch (error) {
                console.warn('o-tooltip hide animation failed:', error);
            }
            finally {
                this.isAnimating = false;
            }
        }
    }
    handleOptionsChange() {
        this.popup.reposition();
    }
    handleDisabledChange() {
        if (this.disabled && this.open) {
            this.hide();
        }
    }
    async show() {
        if (this.open) {
            return undefined;
        }
        this.open = true;
    }
    async hide() {
        if (!this.open) {
            return undefined;
        }
        this.open = false;
    }
    connectedCallback() {
        this.host.addEventListener('focus', this.handleFocus, true);
        this.host.addEventListener('blur', this.handleBlur, true);
        this.host.addEventListener('click', this.handleClick);
        this.host.addEventListener('mouseover', this.handleMouseOver);
        this.host.addEventListener('mouseout', this.handleMouseOut);
    }
    disconnectedCallback() {
        this.host.removeEventListener('focus', this.handleFocus, true);
        this.host.removeEventListener('blur', this.handleBlur, true);
        this.host.removeEventListener('click', this.handleClick);
        this.host.removeEventListener('mouseover', this.handleMouseOver);
        this.host.removeEventListener('mouseout', this.handleMouseOut);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
        // Clean all timeouts
        if (this.hoverTimeout) {
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = undefined;
        }
        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
            this.animationTimeout = undefined;
        }
        // Reset animation state
        this.isAnimating = false;
    }
    hasTrigger(triggerType) {
        const triggers = this.trigger.split(' ');
        return triggers.includes(triggerType);
    }
    async stopAnimations() {
        // Stop animations on the body element, similar to Shoelace
        if (typeof jest === 'undefined' && this.body) {
            const animations = this.body.getAnimations();
            animations.forEach((animation) => animation.cancel());
        }
        return Promise.resolve();
    }
    /* istanbul ignore next */
    getTransformOrigin() {
        const placement = this.placement.split('-')[0];
        switch (placement) {
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            default:
                return 'center';
        }
    }
    /* istanbul ignore next */
    getAnimationConfig(type) {
        const baseConfig = {
            duration: 150,
            transition: 'opacity 150ms ease, transform 150ms ease'
        };
        if (type === 'show') {
            return Object.assign(Object.assign({}, baseConfig), { initialScale: 0.8, finalScale: 1, initialOpacity: '0', finalOpacity: '1' });
        }
        return Object.assign(Object.assign({}, baseConfig), { initialScale: 1, finalScale: 0.8, initialOpacity: '1', finalOpacity: '0' });
    }
    /* istanbul ignore next */
    async animateTooltip(config) {
        var _a;
        const popupElement = (_a = this.popup.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('div[class*="isolate"]');
        if (!popupElement)
            return;
        // Reposition first
        if (config.finalScale === 1) {
            await this.popup.reposition();
        }
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                // Set transform origin and get current positioning
                const transformOrigin = this.getTransformOrigin();
                popupElement.style.transformOrigin = transformOrigin;
                // Get current transform and adjust for existing scale if hiding
                let currentTransform = popupElement.style.transform;
                if (config.finalScale === 0.8) {
                    currentTransform = currentTransform.replace(/\s*scale\([^)]*\)/, '');
                }
                // Apply initial state without transition
                popupElement.style.transition = 'none';
                popupElement.style.transform = `${currentTransform} scale(${config.initialScale})`;
                popupElement.style.opacity = config.initialOpacity;
                // Force reflow
                popupElement.offsetHeight;
                // Animate to final state
                requestAnimationFrame(() => {
                    popupElement.style.transition = config.transition;
                    popupElement.style.transform = `${currentTransform} scale(${config.finalScale})`;
                    popupElement.style.opacity = config.finalOpacity;
                    // Wait for animation to complete
                    this.animationTimeout = window.setTimeout(() => {
                        if (config.finalScale === 0.8) {
                            popupElement.style.transition = '';
                            popupElement.style.opacity = '';
                            popupElement.style.transform = currentTransform;
                            popupElement.style.transformOrigin = '';
                        }
                        this.animationTimeout = undefined;
                        resolve();
                    }, config.duration);
                });
            });
        });
    }
    render() {
        let maxWidthString = '';
        maxWidthString = this.maxWidth ? `${this.maxWidth}rem` : '';
        return (h(Host, { key: 'c5a87c2b63f05392b8067fcbe13ee1f856a0b98f' }, h("o-popup", { key: 'fc41b2510a297b898080316521b6944150aa83aa', ref: (el) => (this.popup = el), distance: 10, placement: this.placement, strategy: this.hoist ? 'fixed' : 'absolute', arrow: true, hoverBridge: true }, h("span", { key: '86d68099960cc42b697dc15a4dd1127a009e3790', slot: "anchor", "aria-describedby": "tooltip", class: "inline-block w-fit" }, h("slot", { key: 'ffc10ea40df34db350b052d9440590c458bdbc6c' })), h("div", { key: '76e091335ec8cfab6ec6454264e0033ae1937066', ref: (el) => (this.body = el), role: "tooltip", class: `block ${this.maxWidth ? '' : 'w-max'} text-start rounded-lg bg-main_text text-white px-4 py-2 text-sm leading-[21px] font-normal pointer-events-none z-60`, "aria-live": this.open ? 'polite' : 'off', style: { maxWidth: `${this.maxWidth ? maxWidthString : ''}` } }, h("slot", { key: '088055367d19b554e891fbfeeb10c93634b2601a', name: "content" }, this.content)))));
    }
    static get is() { return "o-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "content": {
                "type": "string",
                "attribute": "content",
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
                    "text": "The text content to be displayed in the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
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
                    "text": "The open state of the tooltip, defaults to closed (false)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "| 'top'\r\n\t\t| 'top-start'\r\n\t\t| 'top-end'\r\n\t\t| 'bottom'\r\n\t\t| 'bottom-start'\r\n\t\t| 'bottom-end'\r\n\t\t| 'right'\r\n\t\t| 'right-start'\r\n\t\t| 'right-end'\r\n\t\t| 'left'\r\n\t\t| 'left-start'\r\n\t\t| 'left-end'",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the tooltip relative to the target"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'top'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Whether the tooltip is disabled, preventing user interaction."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hoist": {
                "type": "boolean",
                "attribute": "hoist",
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
                    "text": "If true, sets the popup positioning strategy to fixed instead of absolute - can be used to get around overflow issues"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "trigger": {
                "type": "string",
                "attribute": "trigger",
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
                    "text": "The trigger type of the tooltip, separated by a space - can be hover, focus, click, manual, or a combination"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'hover focus'"
            },
            "maxWidth": {
                "type": "number",
                "attribute": "max-width",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum width (in rem) of the tooltip popover, allowing optional text wrapping"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "20"
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
                    "text": "Emitted when tooltip shown"
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
                    "text": "Emitted when tooltip hidden"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oAfterShow",
                "name": "oAfterShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after tooltip shown"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "oAfterHide",
                "name": "oAfterHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after tooltip hidden"
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
                    "signature": "() => Promise<any>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<any>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<any>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<any>"
                },
                "docs": {
                    "text": "",
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
            }, {
                "propName": "content",
                "methodName": "handleOptionsChange"
            }, {
                "propName": "hoist",
                "methodName": "handleOptionsChange"
            }, {
                "propName": "placement",
                "methodName": "handleOptionsChange"
            }, {
                "propName": "disabled",
                "methodName": "handleDisabledChange"
            }];
    }
}
//# sourceMappingURL=o-tooltip.js.map
