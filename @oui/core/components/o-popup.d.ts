import type { Components, JSX } from "../dist/types/components";

interface OPopup extends Components.OPopup, HTMLElement {}
export const OPopup: {
    prototype: OPopup;
    new (): OPopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
