export declare class OBadge {
    /**
     * @prop variant - The variant of the component, which determines its style.
     *
     * @deprecated The prop 'variant' is deprecated as of v0.6.0
     *
     * @see {@link http://oecui.oec.oeconnection.com/?path=/docs/components-badge--docs} OBadge Documentation
     *
     * @since 0.1.0 - Initial introduction of variant prop
     * @since 0.6.0 - Variant prop deprecated
     */
    variant: 'default' | 'order' | 'neutral' | 'shipping' | 'payment';
    /** The color of the badge, can be "brand", "order", "payment", "shipping", "uncategorized" */
    color: 'brand' | 'order' | 'payment' | 'shipping' | 'uncategorized';
    /** Get the variant class based on the variant prop. */
    private get variantClass();
    render(): any;
}
