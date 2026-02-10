import type { Components, JSX } from "../dist/types/components";

interface OStep extends Components.OStep, HTMLElement {}
export const OStep: {
    prototype: OStep;
    new (): OStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
