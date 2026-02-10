/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */
export * from './components';
export { oTableTheme } from './components/table/aggridtheme';
// Theme Manager
export { ThemeManager } from './internal/theme-manager';
export async function applyPolyfills() {
    /**
     * Placeholder to not break existing applications
     * https://github.com/ionic-team/stencil/issues/5780
     */
}
//# sourceMappingURL=index.js.map
