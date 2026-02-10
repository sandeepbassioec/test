import type { Components, JSX } from "../dist/types/components";

interface OMenuItem extends Components.OMenuItem, HTMLElement {}
export const OMenuItem: {
    prototype: OMenuItem;
    new (): OMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
