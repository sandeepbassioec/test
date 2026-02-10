import type { Components, JSX } from "../dist/types/components";

interface OTabGroup extends Components.OTabGroup, HTMLElement {}
export const OTabGroup: {
    prototype: OTabGroup;
    new (): OTabGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
