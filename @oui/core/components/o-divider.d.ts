import type { Components, JSX } from "../dist/types/components";

interface ODivider extends Components.ODivider, HTMLElement {}
export const ODivider: {
    prototype: ODivider;
    new (): ODivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
