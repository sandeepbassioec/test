/**
 *
 * ******************************************************************
 * Utility for managing focus trapping within OUI components.
 * This allows components like ODrawer, ODialogs, etc. to trap focus
 * within their boundaries for improved accessibility.
 * ******************************************************************
 *
 */
export interface FocusTrapOptions {
    /** The root element of the component where focus will be trapped */
    rootElement: HTMLElement;
    /** The selector for additional focusable elements */
    focusableSelector?: string;
    /** Whether to initially focus the first element when trap is activated */
    autoFocus?: boolean;
}
export declare class FocusTrap {
    private rootElement;
    private focusableSelector;
    private autoFocus;
    private focusableElements;
    private isActive;
    private resizeObserver;
    private mutationObserver;
    constructor(rootElement: HTMLElement, focusableSelector?: string, autoFocus?: boolean);
    /**
     * Activates the focus trap
     */
    activate(): void;
    /**
     * Deactivates the focus trap
     */
    deactivate(): void;
    /**
     * Set up observers to track DOM changes
     */
    private setupObservers;
    /**
     * Clean up observers
     */
    private cleanupObservers;
    /**
     * Updates the list of focusable elements
     * @param slot Optional slot that changed, to only process specific elements
     */
    update(slot?: HTMLSlotElement): void;
    /**
     * Collects all focusable elements within the component
     */
    private collectFocusableElements;
    /**
     * Sort focusable elements by tabindex
     */
    private sortFocusableElements;
    /**
     * Check if an element is visible
     */
    private isVisible;
    /**
     * Helper method to add focusable elements from a node list
     */
    private addFocusableElements;
    /**
     * Handles Tab key events to trap focus
     */
    private handleKeyDown;
}
/**
 * Creates a focus trap instance for the given element
 * @param options Configuration options for the focus trap
 * @returns A new FocusTrap instance
 */
export declare function createFocusTrap(options: FocusTrapOptions): FocusTrap;
/**
 * Registers slot change handlers to update focus trap
 * @param focusTrap The focus trap instance
 * @param slots Array of slots to monitor for changes
 * @returns A function to cleanup the event listeners
 */
export declare function setupSlotChangeHandlers(focusTrap: FocusTrap, slots: HTMLSlotElement[]): () => void;
/**
 *
 * ********************************
 * Focus Handling utility functions
 * ********************************
 *
 */
/**
 * FocusableComponent interface defines the structure required for components
 * that can be focused
 */
export interface FocusableComponent {
    host: HTMLElement;
    disabled?: boolean;
    internalElement?: HTMLElement;
    setFocus?: () => Promise<void>;
}
/**
 * Creates focus handling functionality for OUI components
 *
 * @param component The component instance that implements FocusableComponent interface
 * @param internalElementGetter Function that returns the internal focusable element
 * @returns Object with focus handling methods
 */
export declare function createFocusHandler<T extends FocusableComponent>(component: T, internalElementGetter: () => HTMLElement | null | undefined): {
    handleHostFocus: () => void;
    setupFocusHandling: () => void;
    cleanupFocusHandling: () => void;
    setFocus: () => Promise<void>;
};
