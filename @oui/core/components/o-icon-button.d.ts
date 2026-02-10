import type { Components, JSX } from "../dist/types/components";

interface OIconButton extends Components.OIconButton, HTMLElement {}
export const OIconButton: {
    prototype: OIconButton;
    new (): OIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
