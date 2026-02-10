import type { Components, JSX } from "../dist/types/components";

interface ODialog extends Components.ODialog, HTMLElement {}
export const ODialog: {
    prototype: ODialog;
    new (): ODialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
