/**
 *
 * ******************************************************************
 * Utility for managing focus trapping within OUI components.
 * This allows components like ODrawer, ODialogs, etc. to trap focus
 * within their boundaries for improved accessibility.
 * ******************************************************************
 *
 */
// Define default focusable selector
const DEFAULT_FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), o-button:not([disabled]), o-icon-button:not([disabled])';
export class FocusTrap {
    constructor(rootElement, focusableSelector = DEFAULT_FOCUSABLE_SELECTOR, autoFocus = false) {
        this.rootElement = rootElement;
        this.focusableSelector = focusableSelector;
        this.autoFocus = autoFocus;
        this.focusableElements = [];
        this.isActive = false;
        this.resizeObserver = null;
        this.mutationObserver = null;
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.collectFocusableElements = this.collectFocusableElements.bind(this);
        this.isVisible = this.isVisible.bind(this);
        if (focusableSelector) {
            this.focusableSelector = `${DEFAULT_FOCUSABLE_SELECTOR}, ${focusableSelector}`;
        }
        else {
            this.focusableSelector = DEFAULT_FOCUSABLE_SELECTOR;
        }
    }
    /**
     * Activates the focus trap
     */
    activate() {
        if (this.isActive)
            return;
        this.isActive = true;
        document.addEventListener('keydown', this.handleKeyDown);
        this.collectFocusableElements();
        this.setupObservers();
        setTimeout(() => {
            this.collectFocusableElements();
            if (this.autoFocus) {
                if (this.focusableElements.length) {
                    this.focusableElements[0].focus();
                }
            }
            else {
                // Focus the root element if autoFocus is false
                this.rootElement.focus();
            }
        }, 150);
    }
    /**
     * Deactivates the focus trap
     */
    deactivate() {
        if (!this.isActive)
            return;
        this.isActive = false;
        document.removeEventListener('keydown', this.handleKeyDown);
        this.cleanupObservers();
        this.focusableElements = [];
    }
    /**
     * Set up observers to track DOM changes
     */
    setupObservers() {
        this.mutationObserver = new MutationObserver(() => this.isActive && this.collectFocusableElements());
        this.resizeObserver = new ResizeObserver(() => this.isActive && this.collectFocusableElements());
        if (this.rootElement) {
            this.mutationObserver.observe(this.rootElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['disabled', 'tabindex', 'hidden', 'style']
            });
            this.resizeObserver.observe(this.rootElement);
        }
    }
    /**
     * Clean up observers
     */
    cleanupObservers() {
        var _a, _b;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.mutationObserver = null;
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        this.resizeObserver = null;
    }
    /**
     * Updates the list of focusable elements
     * @param slot Optional slot that changed, to only process specific elements
     */
    update(slot) {
        if (this.isActive) {
            slot ? this.addFocusableElements(slot.assignedElements({ flatten: true })) : this.collectFocusableElements();
        }
    }
    /**
     * Collects all focusable elements within the component
     */
    collectFocusableElements() {
        this.focusableElements = [];
        if (!this.rootElement)
            return;
        try {
            const query = (selector, root) => Array.from(root.querySelectorAll(selector)).filter(this.isVisible);
            // Check if the root element itself is focusable
            if (this.rootElement.matches('[tabindex]:not([tabindex="-1"])') && this.isVisible(this.rootElement)) {
                this.focusableElements.push(this.rootElement);
            }
            this.focusableElements.push(...query(this.focusableSelector, this.rootElement));
            this.rootElement.querySelectorAll('slot').forEach((slot) => {
                slot.assignedElements({ flatten: true }).forEach((el) => {
                    if (el instanceof HTMLElement) {
                        if (el.matches(this.focusableSelector) && this.isVisible(el)) {
                            this.focusableElements.push(el);
                        }
                        if (el.querySelectorAll) {
                            try {
                                this.focusableElements.push(...query(this.focusableSelector, el));
                            }
                            catch (err) {
                                console.error('Error querying nested focusable elements:', err);
                            }
                        }
                    }
                });
            });
            // Remove duplicates and sort
            this.focusableElements = Array.from(new Set(this.focusableElements));
            this.sortFocusableElements();
        }
        catch (err) {
            console.error('Error in collectFocusableElements:', err);
        }
    }
    /**
     * Sort focusable elements by tabindex
     */
    sortFocusableElements() {
        this.focusableElements.sort((a, b) => {
            const aTabIndex = a.tabIndex;
            const bTabIndex = b.tabIndex;
            return aTabIndex > 0 && bTabIndex > 0 ? aTabIndex - bTabIndex : aTabIndex > 0 ? -1 : bTabIndex > 0 ? 1 : 0;
        });
    }
    /**
     * Check if an element is visible
     */
    isVisible(element) {
        if (!element)
            return false;
        try {
            const { visibility, display } = window.getComputedStyle(element);
            return ((element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0) &&
                visibility !== 'hidden' &&
                display !== 'none');
        }
        catch (_err) {
            return false;
        }
    }
    /**
     * Helper method to add focusable elements from a node list
     */
    addFocusableElements(elements) {
        try {
            const newElements = [];
            elements.forEach((element) => {
                if (element instanceof HTMLElement) {
                    if (element.matches(this.focusableSelector) && this.isVisible(element)) {
                        newElements.push(element);
                    }
                    if (element.querySelectorAll) {
                        try {
                            const childFocusable = Array.from(element.querySelectorAll(this.focusableSelector)).filter(this.isVisible);
                            newElements.push(...childFocusable);
                        }
                        catch (err) {
                            console.error('Error querying child focusable elements:', err);
                        }
                    }
                }
            });
            this.focusableElements = Array.from(new Set([...this.focusableElements, ...newElements]));
            this.sortFocusableElements();
        }
        catch (err) {
            console.error('Error in addFocusableElements:', err);
        }
    }
    /**
     * Handles Tab key events to trap focus
     */
    handleKeyDown(event) {
        if (!this.isActive || event.key !== 'Tab')
            return;
        this.collectFocusableElements();
        if (this.focusableElements.length < 2) {
            event.preventDefault();
            return;
        }
        const [firstElement, lastElement] = [this.focusableElements[0], this.focusableElements.at(-1)];
        const currentActiveElement = this.rootElement.getRootNode().activeElement;
        if (event.shiftKey && currentActiveElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
        else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
}
/**
 * Creates a focus trap instance for the given element
 * @param options Configuration options for the focus trap
 * @returns A new FocusTrap instance
 */
export function createFocusTrap(options) {
    return new FocusTrap(options.rootElement, options.focusableSelector, options.autoFocus);
}
/**
 * Registers slot change handlers to update focus trap
 * @param focusTrap The focus trap instance
 * @param slots Array of slots to monitor for changes
 * @returns A function to cleanup the event listeners
 */
export function setupSlotChangeHandlers(focusTrap, slots) {
    const cleanups = slots.filter(Boolean).map((slot) => {
        const handler = () => focusTrap.update(slot);
        slot.addEventListener('slotchange', handler);
        return () => slot.removeEventListener('slotchange', handler);
    });
    return () => cleanups.forEach((cleanup) => cleanup());
}
/**
 * Creates focus handling functionality for OUI components
 *
 * @param component The component instance that implements FocusableComponent interface
 * @param internalElementGetter Function that returns the internal focusable element
 * @returns Object with focus handling methods
 */
export function createFocusHandler(component, internalElementGetter) {
    // Handler function for focus events on the host element
    const handleHostFocus = () => {
        const internalEl = internalElementGetter();
        if (internalEl && !component.disabled) {
            internalEl.focus();
        }
    };
    /**
     * Setup focus handling - call this in connectedCallback
     */
    const setupFocusHandling = () => {
        // Add focus event listener to forward focus to internal element
        component.host.addEventListener('focus', handleHostFocus);
        // Store original focus method
        const originalFocus = component.host.focus;
        component.host.focus = () => {
            const internalEl = internalElementGetter();
            if (internalEl && !component.disabled) {
                internalEl.focus();
            }
            else if (originalFocus) {
                originalFocus.call(component.host);
            }
        };
    };
    /**
     * Clean up focus handling - call this in disconnectedCallback
     */
    const cleanupFocusHandling = () => {
        component.host.removeEventListener('focus', handleHostFocus);
    };
    /**
     * Public method to focus the element - implement this as a @Method in the component
     * The name is setFocus() to avoid conflicts with the native focus() method
     */
    const setFocus = async () => {
        const internalEl = internalElementGetter();
        if (internalEl && !component.disabled) {
            internalEl.focus();
        }
        return Promise.resolve();
    };
    return {
        handleHostFocus,
        setupFocusHandling,
        cleanupFocusHandling,
        setFocus
    };
}
//# sourceMappingURL=a11y.js.map
