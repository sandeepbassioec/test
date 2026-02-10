/**
 * OButton component supports different variants, colors, and states.
 *
 * @component
 * @since 0.1.0
 * @slot startIcon - Slot for icon at left side of the button
 * @slot - Default slot for button text content
 * @example
 * ```html
 * <o-button variant="primary" color="brand">Click me</o-button>
 * ```
 */
export declare class OButton {
    host: HTMLOButtonElement;
    /**
     * The visual style variant of the OButton.
     *
     * @prop variant
     * @type {'primary' | 'secondary' | 'text'}
     * @default 'primary'
     * @since 0.1.0
     */
    variant?: 'primary' | 'secondary' | 'text';
    /**
     * The color theme of the button.
     *
     * @prop color
     * @type {'brand' | 'buyer' | 'seller' | 'payment' | 'order' | 'shipping'}
     * @default 'brand'
     * @since 0.6.0
     */
    color?: 'brand' | 'buyer' | 'seller' | 'payment' | 'order' | 'shipping';
    /**
     * Indicates whether the button is disabled, preventing user interaction.
     *
     * @prop disabled
     * @type {boolean}
     * @default false
     * @since 0.1.0
     */
    disabled: boolean;
    /**
     * Indicates whether the button is loading, preventing user interaction.
     *
     * @prop loading
     * @type {boolean}
     * @default false
     * @since 0.3.0
     */
    loading: boolean;
    /**
     * Indicates whether the button is part of a button group.
     *
     * @prop isButtonGroup
     * @type {boolean}
     * @default false
     * @since 0.1.0
     */
    isButtonGroup?: boolean;
    /**
     * Indicates whether the button takes up the full width of the container.
     *
     * @prop fullWidth
     * @type {boolean}
     * @default false
     * @since 0.2.0
     */
    fullWidth: boolean;
    /**
     * The type of the button.
     *
     * @prop type
     * @type {'button' | 'submit' | 'reset'}
     * @default 'submit'
     * @since 0.4.0
     */
    type: 'button' | 'submit' | 'reset';
    /** Reference to the internal button element */
    private buttonEl;
    private focusHandler;
    watchIsButtonGroup(newValue: boolean): void;
    /**
     * Runs when the component is connected to the DOM
     */
    connectedCallback(): void;
    /**
     * Runs when the component is disconnected from the DOM
     */
    disconnectedCallback(): void;
    /**
     * Programmatically focus the button element.
     *
     * @method setFocus
     * @returns {Promise<void>} A promise that resolves when focus is set
     * @since 0.3.0
     * @example
     * ```typescript
     * const button = document.querySelector('o-button');
     * await button.setFocus();
     * ```
     */
    setFocus(): Promise<void>;
    /** Handles click events on the button or link. */
    private handleClick;
    render(): any;
}
