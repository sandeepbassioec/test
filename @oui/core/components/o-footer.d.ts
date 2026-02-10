import type { Components, JSX } from "../dist/types/components";

interface OFooter extends Components.OFooter, HTMLElement {}
export const OFooter: {
    prototype: OFooter;
    new (): OFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
