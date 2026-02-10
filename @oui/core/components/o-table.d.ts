import type { Components, JSX } from "../dist/types/components";

interface OTable extends Components.OTable, HTMLElement {}
export const OTable: {
    prototype: OTable;
    new (): OTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
