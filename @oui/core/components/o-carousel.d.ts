import type { Components, JSX } from "../dist/types/components";

interface OCarousel extends Components.OCarousel, HTMLElement {}
export const OCarousel: {
    prototype: OCarousel;
    new (): OCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
