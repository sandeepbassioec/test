import type { Components, JSX } from "../dist/types/components";

interface OStepper extends Components.OStepper, HTMLElement {}
export const OStepper: {
    prototype: OStepper;
    new (): OStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
