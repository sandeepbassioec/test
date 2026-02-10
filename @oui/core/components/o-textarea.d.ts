import type { Components, JSX } from "../dist/types/components";

interface OTextarea extends Components.OTextarea, HTMLElement {}
export const OTextarea: {
    prototype: OTextarea;
    new (): OTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
