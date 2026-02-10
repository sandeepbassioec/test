import { Host, h } from "@stencil/core";
export class OCarouselItem {
    render() {
        return (h(Host, { key: 'b4b8bc19886fd1c4e2dfd89e40520ac5199e2c9a' }, h("div", { key: '86face3934f44139cc5b81c6b34147ac00f6121c', class: 'flex flex-col snap-start snap-always w-full max-h-full overflow-auto justify-center' }, h("slot", { key: 'f0766ee4df907245f50e3b8b2aa3812352106aa1' }))));
    }
    static get is() { return "o-carousel-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["o-carousel-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["o-carousel-item.css"]
        };
    }
}
//# sourceMappingURL=o-carousel-item.js.map
