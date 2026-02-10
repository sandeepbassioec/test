import type { Components, JSX } from "../dist/types/components";

interface OListItem extends Components.OListItem, HTMLElement {}
export const OListItem: {
    prototype: OListItem;
    new (): OListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
