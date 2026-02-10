import type { Components, JSX } from "../dist/types/components";

interface OButtonGroup extends Components.OButtonGroup, HTMLElement {}
export const OButtonGroup: {
    prototype: OButtonGroup;
    new (): OButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
