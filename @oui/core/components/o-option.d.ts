import type { Components, JSX } from "../dist/types/components";

interface OOption extends Components.OOption, HTMLElement {}
export const OOption: {
    prototype: OOption;
    new (): OOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
