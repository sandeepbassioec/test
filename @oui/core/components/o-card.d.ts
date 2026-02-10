import type { Components, JSX } from "../dist/types/components";

interface OCard extends Components.OCard, HTMLElement {}
export const OCard: {
    prototype: OCard;
    new (): OCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
