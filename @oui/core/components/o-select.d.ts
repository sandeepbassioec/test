import type { Components, JSX } from "../dist/types/components";

interface OSelect extends Components.OSelect, HTMLElement {}
export const OSelect: {
    prototype: OSelect;
    new (): OSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
