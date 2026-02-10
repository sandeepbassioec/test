import type { Components, JSX } from "../dist/types/components";

interface OButton extends Components.OButton, HTMLElement {}
export const OButton: {
    prototype: OButton;
    new (): OButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
