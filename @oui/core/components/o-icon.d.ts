import type { Components, JSX } from "../dist/types/components";

interface OIcon extends Components.OIcon, HTMLElement {}
export const OIcon: {
    prototype: OIcon;
    new (): OIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
