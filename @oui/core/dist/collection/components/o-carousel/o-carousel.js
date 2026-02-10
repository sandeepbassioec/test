import { Host, h } from "@stencil/core";
export class OCarousel {
    constructor() {
        this.prevEnabled = false;
        this.nextEnabled = false;
        this.navigation = false;
        this.pagination = false;
        this.activeSlide = 0;
        this.slides = [];
        this.scrolling = false;
        this.handleKeyDown = async (event) => {
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
                const target = event.target;
                const focusInPagination = target.closest('button') != null;
                const isNext = event.key === 'ArrowUp' || event.key === 'ArrowRight';
                const isPrevious = event.key === 'ArrowDown' || event.key === 'ArrowLeft';
                event.preventDefault();
                if (isNext)
                    await this.next();
                if (isPrevious)
                    await this.previous();
                if (event.key === 'Home')
                    await this.goToSlide(0);
                if (event.key === 'End')
                    await this.goToSlide(this.getSlides().length - 1);
                if (focusInPagination) {
                    const paginationItems = this.paginationContainer.querySelectorAll('button');
                    const activePaginationItem = paginationItems[this.activeSlide];
                    if (activePaginationItem) {
                        activePaginationItem.focus();
                    }
                }
            }
        };
    }
    async previous() {
        if (!this.prevEnabled)
            return;
        await this.goToSlide(this.activeSlide - 1);
    }
    async next() {
        if (!this.nextEnabled)
            return;
        await this.goToSlide(this.activeSlide + 1);
    }
    async goToSlide(index) {
        const slides = this.getSlides();
        if (!slides.length) {
            return;
        }
        const newActiveSlide = this.getClampedValue(index, 0, slides.length - 1);
        this.activeSlide = newActiveSlide;
        const nextSlide = slides[newActiveSlide];
        this.scrollToSlide(nextSlide);
    }
    handleActiveSlideChange() {
        this.setNavigation();
        this.oSlideChange.emit({ index: this.activeSlide, slide: this.slides[this.activeSlide] });
    }
    componentDidLoad() {
        this.scrollToSlide(this.slides[this.activeSlide]);
        this.host.setAttribute('role', 'region');
        this.host.setAttribute('aria-label', 'Carousel');
    }
    handleSlotChange() {
        this.setNavigation();
        this.slides = this.getSlides();
        this.slides.forEach((slide, index) => {
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-label', `Slide number ${index + 1}`);
            if (this.pagination) {
                slide.setAttribute('id', `slide-${index + 1}`);
                slide.setAttribute('role', 'tabpanel');
                slide.removeAttribute('aria-label');
                slide.setAttribute('aria-labelledby', `tab-${index + 1}`);
            }
        });
    }
    isButton(item) {
        return item.tagName.toLowerCase() === 'button';
    }
    setNavigation() {
        this.prevEnabled = this.canScrollPrev();
        this.nextEnabled = this.canScrollNext();
    }
    canScrollPrev() {
        return this.activeSlide > 0;
    }
    canScrollNext() {
        return this.activeSlide < this.getSlides().length - 1;
    }
    isCarouselItem(item) {
        return item.tagName.toLowerCase() === 'o-carousel-item';
    }
    getSlides() {
        var _a, _b;
        return [...(_b = (_a = this.carousel).assignedElements) === null || _b === void 0 ? void 0 : _b.call(_a, { flatten: true })].filter((el) => {
            if (el.inert || !this.isCarouselItem(el)) {
                return false;
            }
            return true;
        });
    }
    /* istanbul ignore next */
    scrollToSlide(slide, behavior = 'smooth') {
        window.requestAnimationFrame(() => {
            if (!this.scrollContainer) {
                return;
            }
            const scrollContainer = this.scrollContainer;
            const scrollContainerRect = scrollContainer.getBoundingClientRect();
            const nextSlideRect = slide.getBoundingClientRect();
            const nextLeft = nextSlideRect.left - scrollContainerRect.left;
            const nextTop = nextSlideRect.top - scrollContainerRect.top;
            if (nextLeft || nextTop) {
                scrollContainer.scrollTo({
                    left: nextLeft + scrollContainer.scrollLeft,
                    top: nextTop + scrollContainer.scrollTop,
                    behavior
                });
            }
        });
    }
    getClampedValue(value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }
    render() {
        return (h(Host, { key: 'eb2e2badc88fe5893fe2cfd89bc3fbc6b3f1e051' }, h("div", { key: 'a5fa52423fc1bdedd6102124861c1fa91bb40eb2', class: `carousel grid grid-cols-[min-content_1fr_min-content] grid-rows-[1fr_min-content] items-center min-h-full min-w-full relative py-4 ${this.navigation ? 'gap-x-4' : ''} ${this.pagination ? 'gap-y-4' : ''}` }, h("div", { key: '5a10854955da81479afa57e2881282b7ed8ab8a0', id: "scroll-container", ref: (el) => (this.scrollContainer = el), class: 'slides scrollbar-hidden grid grid-flow-col auto-cols-[100%] auto-rows-[100%] size-full overflow-auto overflow-y-hidden overscroll-x-contain snap-mandatory snap-x relative rounded-radius-lg focus:outline-width-lg focus:-outline-offset-2 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default', "aria-busy": this.scrolling ? 'true' : 'false', "aria-atomic": "true", onKeyDown: (event) => void this.handleKeyDown(event) }, h("slot", { key: '3f790b38114123788224f0e51ae6617e3076bae6', ref: (el) => (this.carousel = el), onSlotchange: () => this.handleSlotChange() })), this.navigation && (h("div", { key: '0dba0b061a5cd14a2a2c0bd4e3dd054b08a9df65', class: 'contents' }, h("o-icon-button", { key: '8d8c77e1cf447bff769705aed153413efdcd1688', class: 'col-start-1 col-end-auto row-start-1 row-end-auto auto-cols-min flex flex-none items-center ml-2', name: "chevron-left", size: "md", disabled: !this.prevEnabled, onClick: () => void this.previous(), "aria-label": "Previous slide", "aria-controls": "scroll-container", "aria-disabled": this.prevEnabled ? 'false' : 'true' }), h("o-icon-button", { key: '2e91ffaf0b052a2ff0aae8e79573a7204878b716', class: 'col-start-3 col-end-auto row-start-1 row-end-auto flex flex-none items-center mr-2', name: "chevron-right", size: "md", disabled: !this.nextEnabled, onClick: () => void this.next(), "aria-label": "Next slide", "aria-controls": "scroll-container", "aria-disabled": this.nextEnabled ? 'false' : 'true' }))), this.pagination && (h("div", { key: '02457987c99382d563ce9e913cd913fb171f41a4', class: 'pagination flex flex-wrap row-start-2 col-span-3 gap-2 justify-center', ref: (el) => (this.paginationContainer = el) }, this.slides.map((_, index) => (h("button", { class: `block cursor-pointer bg-none rounded-full p-0 m-0 ${index === this.activeSlide ? 'bg-background-brand-knockout size-4' : 'bg-background-brand border-width-sm border-border-default size-3.5'} focus:outline-width-lg focus:-outline-offset-0 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default`, onClick: () => void this.goToSlide(index), "aria-controls": `slide-${index + 1}`, "aria-label": `${index === this.activeSlide ? 'Slide number ' + (index + 1) : 'Go to Slide ' + (index + 1)}`, tabIndex: index === this.activeSlide ? 0 : -1, onKeyDown: (event) => void this.handleKeyDown(event) }))))))));
    }
    static get is() { return "o-carousel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-carousel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-carousel.css"]
        };
    }
    static get properties() {
        return {
            "navigation": {
                "type": "boolean",
                "attribute": "navigation",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "pagination": {
                "type": "boolean",
                "attribute": "pagination",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "activeSlide": {},
            "slides": {},
            "scrolling": {}
        };
    }
    static get events() {
        return [{
                "method": "oSlideChange",
                "name": "oSlideChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ index: number; slide: HTMLOCarouselItemElement }",
                    "resolved": "{ index: number; slide: HTMLOCarouselItemElement; }",
                    "references": {
                        "HTMLOCarouselItemElement": {
                            "location": "global",
                            "id": "global::HTMLOCarouselItemElement"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "previous": {
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
                    "text": "",
                    "tags": []
                }
            },
            "next": {
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
                    "text": "",
                    "tags": []
                }
            },
            "goToSlide": {
                "complexType": {
                    "signature": "(index: any) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<void>"
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
                "propName": "activeSlide",
                "methodName": "handleActiveSlideChange"
            }];
    }
}
//# sourceMappingURL=o-carousel.js.map
