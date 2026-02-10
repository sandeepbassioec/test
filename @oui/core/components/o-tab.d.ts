import type { Components, JSX } from "../dist/types/components";

interface OTab extends Components.OTab, HTMLElement {}
export const OTab: {
    prototype: OTab;
    new (): OTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
