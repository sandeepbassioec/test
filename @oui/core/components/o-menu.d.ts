import type { Components, JSX } from "../dist/types/components";

interface OMenu extends Components.OMenu, HTMLElement {}
export const OMenu: {
    prototype: OMenu;
    new (): OMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
