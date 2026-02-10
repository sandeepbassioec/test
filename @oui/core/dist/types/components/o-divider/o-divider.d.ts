export declare class ODivider {
    /** Divider variant: 'horizontal' (default) or 'vertical' */
    variant: 'horizontal' | 'vertical';
    /** Stores the class for the divider */
    dividerClass: string;
    /** Watch for variant changes and update classes */
    handleVariantChange(newVariant: 'horizontal' | 'vertical'): void;
    /** Take Tailwind classes based on variant */
    private computeClass;
    /** Set initial class */
    componentWillLoad(): void;
    render(): any;
}
