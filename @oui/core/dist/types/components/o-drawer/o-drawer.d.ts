import type { EventEmitter } from '../../stencil-public-runtime';
export declare class ODrawer {
    el: HTMLODrawerElement;
    /** State to track if the drawer is open. */
    isOpen: boolean;
    /** Indicates whether or not the drawer is open. */
    open: boolean;
    /** The label for the aria label. */
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
    /** Track pending operations to prevent conflicts */
    isAnimating: boolean;
    private pendingOperation;
    /** Emitted when the drawer opens */
    oShow: EventEmitter<void>;
    /** Emitted when the drawer closes */
    oHide: EventEmitter<void>;
    /** Emitted when drawer close is requested with the source of the request */
    oRequestClose: EventEmitter<{
        source: 'close-button' | 'keyboard' | 'overlay';
    }>;
    /** Watches for changes to the 'open' property and updates the drawer state accordingly. */
    watchOpen(newValue: boolean): Promise<void>;
    /** Watches for changes to the 'noClose' property. */
    watchNoClose(_newValue: boolean): void;
    /** Sets the initial state of the drawer based on the 'open' property before the component loads. */
    componentWillLoad(): void;
    /**
     * Clean up event listeners when the component is removed
     */
    disconnectedCallback(): void;
    /**
     * Clean up focus trap and related resources
     */
    private cleanupAccessibility;
    /**
     * Initialize and activate the focus trap with proper timing
     */
    private setupAccessibility;
    /** Public method to show the drawer. */
    show(): Promise<void>;
    /** Public method to hide the drawer. */
    hide(): Promise<void>;
    /** Animate the drawer and overlay */
    private animateDialog;
    /** Get animation configuration */
    private getAnimation;
    /** Animate to a specific element */
    private animateTo;
    /** Handles the close button click event. */
    private handleCloseButtonClick;
    /** Handles the overlay click event to close the drawer. */
    private handleOverlayClick;
    /** Handles keyboard events for closing the drawer. */
    private handleKeyDown;
    /** Requests to close the drawer and dispatches a custom event. */
    private requestClose;
    render(): any;
}
