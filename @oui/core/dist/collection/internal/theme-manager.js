/**
 * OUI Theme Manager
 *
 * Provides theme management functionality for OUI library.
 * Handles theme switching, persistence, and event emission.
 *
 * Usage:
 * ```typescript
 * import { ThemeManager } from '@oui/core';
 *
 * // Initialize theme manager
 * ThemeManager.initialize();
 *
 * // Switch themes
 * ThemeManager.setTheme('white-label');
 *
 * // Listen for theme changes
 * document.addEventListener('oui-theme-changed', (event) => {
 *   console.log('New theme:', event.detail.theme);
 * });
 * ```
 */
/**
 * Default configuration
 */
const DEFAULT_OPTIONS = {
    defaultTheme: 'oui',
    storageKey: 'oui-theme',
    persist: true,
    target: document.documentElement
};
/**
 * Theme Manager Class
 *
 * Manages theme state, persistence, and DOM updates for OUI component library.
 */
class OuiThemeManager {
    constructor() {
        this.currentTheme = null;
        this.initialized = false;
        this.options = Object.assign({}, DEFAULT_OPTIONS);
    }
    /**
     * Initialize the theme manager
     * @param options - Configuration options
     */
    initialize(options = {}) {
        if (this.initialized) {
            console.warn('OUI Theme Manager is already initialized');
            return;
        }
        this.options = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.initialized = true;
        // Load persisted theme or use default
        const persistedTheme = this.loadPersistedTheme();
        const initialTheme = persistedTheme || this.options.defaultTheme;
        this.setTheme(initialTheme, false); // Don't emit event on initialization
    }
    /**
     * Set the current theme
     * @param theme - Theme name to set
     * @param emitEvent - Whether to emit theme change event (default: true)
     */
    setTheme(theme, emitEvent = true) {
        if (!this.initialized) {
            throw new Error('Theme Manager must be initialized before setting theme');
        }
        const previousTheme = this.currentTheme;
        // Only proceed if theme is actually changing
        if (previousTheme === theme) {
            return;
        }
        this.currentTheme = theme;
        // Update DOM data attribute
        this.updateDomAttribute(theme);
        // Persist theme if enabled
        if (this.options.persist) {
            this.persistTheme(theme);
        }
        // Emit theme change event
        if (emitEvent) {
            this.emitThemeChangeEvent(theme, previousTheme);
        }
    }
    /**
     * Get the current theme
     * @returns Current theme name or null if not set
     */
    getCurrentTheme() {
        return this.currentTheme;
    }
    /**
     * Check if theme manager is initialized
     * @returns True if initialized
     */
    isInitialized() {
        return this.initialized;
    }
    /**
     * Get available theme names
     * @returns Array of available theme names
     */
    getAvailableThemes() {
        return ['oui'];
    }
    /**
     * Reset to default theme
     */
    resetToDefault() {
        this.setTheme(this.options.defaultTheme);
    }
    /**
     * Clear persisted theme data
     */
    clearPersistedTheme() {
        if (typeof Storage !== 'undefined') {
            localStorage.removeItem(this.options.storageKey);
        }
    }
    /**
     * Update the DOM data attribute for theme
     * @private
     */
    updateDomAttribute(theme) {
        const target = this.options.target;
        if (!target) {
            console.warn('Theme Manager: No target element specified');
            return;
        }
        // Set the data-oui-theme attribute
        target.setAttribute('data-oui-theme', theme);
    }
    /**
     * Persist theme to localStorage
     * @private
     */
    persistTheme(theme) {
        if (typeof Storage !== 'undefined') {
            try {
                localStorage.setItem(this.options.storageKey, theme);
            }
            catch (error) {
                console.warn('Theme Manager: Failed to persist theme', error);
            }
        }
    }
    /**
     * Load persisted theme from localStorage
     * @private
     */
    loadPersistedTheme() {
        if (typeof Storage !== 'undefined') {
            try {
                const persisted = localStorage.getItem(this.options.storageKey);
                if (persisted && this.getAvailableThemes().includes(persisted)) {
                    return persisted;
                }
            }
            catch (error) {
                console.warn('Theme Manager: Failed to load persisted theme', error);
            }
        }
        return null;
    }
    /**
     * Emit custom theme change event
     * @private
     */
    emitThemeChangeEvent(theme, previousTheme) {
        const eventDetail = {
            theme,
            previousTheme
        };
        const event = new CustomEvent('oui-theme-changed', {
            detail: eventDetail,
            bubbles: true,
            cancelable: false
        });
        // Emit on both document and target element for flexibility
        document.dispatchEvent(event);
        if (this.options.target && this.options.target !== document.documentElement) {
            this.options.target.dispatchEvent(event);
        }
    }
}
/**
 * Singleton instance of the theme manager
 */
export const ThemeManager = new OuiThemeManager();
/**
 * Auto-initialize theme manager
 * This ensures OUI theme is applied by default.
 */
function autoInitializeThemeManager() {
    // Check if already manually initialized
    if (ThemeManager.isInitialized()) {
        return;
    }
    // Initialize with default OUI theme
    try {
        ThemeManager.initialize({
            defaultTheme: 'oui',
            persist: true,
            storageKey: 'oui-theme'
        });
    }
    catch (error) {
        // Fail - theme manager may be initialized in a context where DOM is not available
        console.warn('OUI Theme Manager: Auto-initialization deferred', error);
    }
}
// Auto-initialize immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        // DOM is still loading, wait for it
        document.addEventListener('DOMContentLoaded', autoInitializeThemeManager, { once: true });
    }
    else {
        // DOM is already ready, initialize immediately
        autoInitializeThemeManager();
    }
}
else {
    // Not in a browser environment
}
//# sourceMappingURL=theme-manager.js.map
