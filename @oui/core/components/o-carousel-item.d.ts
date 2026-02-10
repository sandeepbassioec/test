import type { Components, JSX } from "../dist/types/components";

interface OCarouselItem extends Components.OCarouselItem, HTMLElement {}
export const OCarouselItem: {
    prototype: OCarouselItem;
    new (): OCarouselItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
