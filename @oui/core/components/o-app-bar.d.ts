import type { Components, JSX } from "../dist/types/components";

interface OAppBar extends Components.OAppBar, HTMLElement {}
export const OAppBar: {
    prototype: OAppBar;
    new (): OAppBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
