import type { EventEmitter } from '../../stencil-public-runtime';
export declare class ODialog {
    el: HTMLODialogElement;
    /** State to track if the dialog is open. */
    isOpen: boolean;
    /** Indicates whether or not the dialog is open. */
    open: boolean;
    /** The label for the dialog header. */
    label: string;
    /** Determines whether the close button is shown. */
    noClose: boolean;
    private panel;
    private overlay;
    private bodySlot;
    private footerSlot;
    private focusTrap;
    private slotCleanup;
    private focusTrapOptions;
    /** State to prevent calling hide if already hiding */
    isHiding: boolean;
    /** Emitted when the dialog opens */
    oShow: EventEmitter<void>;
    /** Emitted when the dialog closes */
    oHide: EventEmitter<void>;
    /** Emitted when dialog close is requested with the source of the request */
    oRequestClose: EventEmitter<{
        source: 'close-button' | 'keyboard' | 'overlay';
    }>;
    /** Watches for changes to the 'open' property and updates the dialog state accordingly. */
    watchOpen(newValue: boolean): Promise<void>;
    /** Watches for changes to the 'noClose' property. */
    watchNoClose(_newValue: boolean): void;
    /** Sets the initial state of the dialog based on the 'open' property before the component loads. */
    componentWillLoad(): void;
    /** Clean up listeners when component is removed */
    disconnectedCallback(): void;
    /** Clean up focus trap and related accessibility resources */
    private cleanupAccessibility;
    /** Initialize and activate focus trap  */
    private setupAccessibility;
    /** Public method to show the dialog. */
    show(): Promise<void>;
    /** Public method to hide the dialog. */
    hide(): Promise<void>;
    /** Animate the dialog and overlay */
    private animateDialog;
    /** Get animation configuration */
    private getAnimation;
    /** Animate to a specific element */
    private animateTo;
    /** Handles the close button click event. */
    private handleCloseButtonClick;
    /** Handles the overlay click event to close the dialog. */
    private handleOverlayClick;
    /** Handles keyboard events for closing the dialog. */
    private handleKeyDown;
    /** Requests to close the dialog and emits a custom event. */
    private requestClose;
    /** Triggers the shake animation on the dialog */
    private shakeDialog;
    /** Renders the dialog component. */
    render(): any;
}
