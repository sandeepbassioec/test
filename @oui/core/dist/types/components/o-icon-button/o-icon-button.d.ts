import type { IconName } from '@fortawesome/fontawesome-svg-core';
export declare class OIconButton {
    host: HTMLOIconButtonElement;
    /** Indicates whether the button is disabled, preventing user interaction. */
    disabled?: boolean;
    /** The name of the icon to be rendered. */
    name?: IconName;
    /** The size of the icon, can be 'sm', 'md', 'lg'. */
    size: 'sm' | 'md' | 'lg';
    /** A description that gets read by assistive devices. */
    label?: string;
    /** Optional color for the icon, can be a hex value or a color name. */
    color?: string;
    /** The type of the button, can be "button", "submit", "reset". */
    type: 'button' | 'submit' | 'reset';
    /** Reference to the internal button element */
    private buttonEl;
    private focusHandler;
    /** Handles click events on the button or link. */
    private handleClick;
    /**
     * Runs when the component is connected to the DOM
     */
    connectedCallback(): void;
    /**
     * Runs when the component is disconnected from the DOM
     */
    disconnectedCallback(): void;
    /**
     * Public method to focus the button
     * The name is setFocus() to avoid conflicts with the native focus() method
     */
    setFocus(): Promise<void>;
    render(): any;
}
