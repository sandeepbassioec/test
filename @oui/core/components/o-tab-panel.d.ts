import type { Components, JSX } from "../dist/types/components";

interface OTabPanel extends Components.OTabPanel, HTMLElement {}
export const OTabPanel: {
    prototype: OTabPanel;
    new (): OTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
