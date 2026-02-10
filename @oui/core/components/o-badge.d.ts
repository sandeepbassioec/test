import type { Components, JSX } from "../dist/types/components";

interface OBadge extends Components.OBadge, HTMLElement {}
export const OBadge: {
    prototype: OBadge;
    new (): OBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
