import { type OuiThemeName } from '@oui/core';
/**
 * React hook for OUI theme management
 *
 * Provides reactive access to the current theme state and theme switching functionality.
 * Automatically updates when theme changes occur.
 *
 * @returns Object containing current theme, theme setter, and available themes
 *
 * @example
 * ```tsx
 * function ThemeSwitcher() {
 *   const { theme, setTheme, availableThemes } = useOuiTheme();
 *
 *   return (
 *     <select value={theme} onChange={(e) => setTheme(e.target.value as OuiThemeName)}>
 *       {availableThemes.map(themeName => (
 *         <option key={themeName} value={themeName}>{themeName}</option>
 *       ))}
 *     </select>
 *   );
 * }
 * ```
 */
export declare function useOuiTheme(): {
    theme: "oui";
    setTheme: (themeName: OuiThemeName) => void;
    availableThemes: "oui"[];
};
