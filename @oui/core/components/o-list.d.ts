import type { Components, JSX } from "../dist/types/components";

interface OList extends Components.OList, HTMLElement {}
export const OList: {
    prototype: OList;
    new (): OList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
