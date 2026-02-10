import type { Components, JSX } from "../dist/types/components";

interface ODropdown extends Components.ODropdown, HTMLElement {}
export const ODropdown: {
    prototype: ODropdown;
    new (): ODropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
