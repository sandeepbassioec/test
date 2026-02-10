import type { Components, JSX } from "../dist/types/components";

interface ORadioGroup extends Components.ORadioGroup, HTMLElement {}
export const ORadioGroup: {
    prototype: ORadioGroup;
    new (): ORadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
