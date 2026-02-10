import type { Components, JSX } from "../dist/types/components";

interface OCheckbox extends Components.OCheckbox, HTMLElement {}
export const OCheckbox: {
    prototype: OCheckbox;
    new (): OCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
