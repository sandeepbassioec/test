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
 * Available built-in theme names
 */
export type OuiThemeName = 'oui';
/**
 * Theme change event detail
 */
export interface OuiThemeChangeEvent {
    theme: OuiThemeName;
    previousTheme: OuiThemeName | null;
}
/**
 * Theme manager configuration options
 */
export interface ThemeManagerOptions {
    /** Default theme to use if no theme is set */
    defaultTheme?: OuiThemeName;
    /** Storage key for theme persistence */
    storageKey?: string;
    /** Whether to persist theme selection */
    persist?: boolean;
    /** Target element to apply theme data attribute */
    target?: HTMLElement;
}
/**
 * Theme Manager Class
 *
 * Manages theme state, persistence, and DOM updates for OUI component library.
 */
declare class OuiThemeManager {
    private currentTheme;
    private options;
    private initialized;
    constructor();
    /**
     * Initialize the theme manager
     * @param options - Configuration options
     */
    initialize(options?: ThemeManagerOptions): void;
    /**
     * Set the current theme
     * @param theme - Theme name to set
     * @param emitEvent - Whether to emit theme change event (default: true)
     */
    setTheme(theme: OuiThemeName, emitEvent?: boolean): void;
    /**
     * Get the current theme
     * @returns Current theme name or null if not set
     */
    getCurrentTheme(): OuiThemeName | null;
    /**
     * Check if theme manager is initialized
     * @returns True if initialized
     */
    isInitialized(): boolean;
    /**
     * Get available theme names
     * @returns Array of available theme names
     */
    getAvailableThemes(): OuiThemeName[];
    /**
     * Reset to default theme
     */
    resetToDefault(): void;
    /**
     * Clear persisted theme data
     */
    clearPersistedTheme(): void;
    /**
     * Update the DOM data attribute for theme
     * @private
     */
    private updateDomAttribute;
    /**
     * Persist theme to localStorage
     * @private
     */
    private persistTheme;
    /**
     * Load persisted theme from localStorage
     * @private
     */
    private loadPersistedTheme;
    /**
     * Emit custom theme change event
     * @private
     */
    private emitThemeChangeEvent;
}
/**
 * Singleton instance of the theme manager
 */
export declare const ThemeManager: OuiThemeManager;
/**
 * Declare global event type for TypeScript
 */
declare global {
    interface DocumentEventMap {
        'oui-theme-changed': CustomEvent<OuiThemeChangeEvent>;
    }
    interface HTMLElementEventMap {
        'oui-theme-changed': CustomEvent<OuiThemeChangeEvent>;
    }
}
export {};
