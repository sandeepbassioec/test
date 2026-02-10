import type { IconName } from '@fortawesome/fontawesome-svg-core';
export declare class OIcon {
    /** The size of the icon, can be 'sm', 'md', 'lg'. */
    size: 'sm' | 'md' | 'lg';
    /** Optional color for the icon, can be a hex value or a color name. */
    color?: string;
    /** The name of the icon to be rendered. */
    name: IconName;
    /** Holds the SVG representation of the icon. */
    svg: any;
    /** Holds the size class for the icon based on the size prop. */
    sizeClass: string;
    /** Lifecycle method that runs before the component loads. Initializes the icon library and sets the icon SVG. */
    componentWillLoad(): void;
    /** Watch for changes to the size prop and update the size class accordingly. */
    watchSizeHandler(): void;
    /** Updates the SVG based on the current name. */
    private updateIcon;
    /** Sets the size class based on the size prop. */
    setSize(): void;
    render(): any;
}
