import type { Components, JSX } from "../dist/types/components";

interface ODrawer extends Components.ODrawer, HTMLElement {}
export const ODrawer: {
    prototype: ODrawer;
    new (): ODrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
