import type { Components, JSX } from "../dist/types/components";

interface OCallout extends Components.OCallout, HTMLElement {}
export const OCallout: {
    prototype: OCallout;
    new (): OCallout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
