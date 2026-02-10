import type { Components, JSX } from "../dist/types/components";

interface OMenuLabel extends Components.OMenuLabel, HTMLElement {}
export const OMenuLabel: {
    prototype: OMenuLabel;
    new (): OMenuLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
