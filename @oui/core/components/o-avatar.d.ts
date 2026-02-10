import type { Components, JSX } from "../dist/types/components";

interface OAvatar extends Components.OAvatar, HTMLElement {}
export const OAvatar: {
    prototype: OAvatar;
    new (): OAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
