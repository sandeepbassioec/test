import type { Components, JSX } from "../dist/types/components";

interface OSkeleton extends Components.OSkeleton, HTMLElement {}
export const OSkeleton: {
    prototype: OSkeleton;
    new (): OSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
