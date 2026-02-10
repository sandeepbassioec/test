import type { Components, JSX } from "../dist/types/components";

interface OLabel extends Components.OLabel, HTMLElement {}
export const OLabel: {
    prototype: OLabel;
    new (): OLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
