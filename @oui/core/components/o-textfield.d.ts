import type { Components, JSX } from "../dist/types/components";

interface OTextfield extends Components.OTextfield, HTMLElement {}
export const OTextfield: {
    prototype: OTextfield;
    new (): OTextfield;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
