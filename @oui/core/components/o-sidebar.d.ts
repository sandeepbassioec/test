import type { Components, JSX } from "../dist/types/components";

interface OSidebar extends Components.OSidebar, HTMLElement {}
export const OSidebar: {
    prototype: OSidebar;
    new (): OSidebar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
