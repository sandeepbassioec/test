import type { Components, JSX } from "../dist/types/components";

interface OToast extends Components.OToast, HTMLElement {}
export const OToast: {
    prototype: OToast;
    new (): OToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
