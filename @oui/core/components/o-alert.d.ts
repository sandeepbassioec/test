import type { Components, JSX } from "../dist/types/components";

interface OAlert extends Components.OAlert, HTMLElement {}
export const OAlert: {
    prototype: OAlert;
    new (): OAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
