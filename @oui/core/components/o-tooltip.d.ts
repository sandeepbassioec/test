import type { Components, JSX } from "../dist/types/components";

interface OTooltip extends Components.OTooltip, HTMLElement {}
export const OTooltip: {
    prototype: OTooltip;
    new (): OTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
