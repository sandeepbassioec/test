import type { Components, JSX } from "../dist/types/components";

interface OTag extends Components.OTag, HTMLElement {}
export const OTag: {
    prototype: OTag;
    new (): OTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
