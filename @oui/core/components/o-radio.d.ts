import type { Components, JSX } from "../dist/types/components";

interface ORadio extends Components.ORadio, HTMLElement {}
export const ORadio: {
    prototype: ORadio;
    new (): ORadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
