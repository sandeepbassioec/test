import { ComponentCompilerMeta } from '@stencil/core/internal';

interface NativeTypesOptions {
    components: ComponentCompilerMeta[];
    stencilPackageName: string;
    excludeComponents?: string[];
}
/**
 * Creates a TypeScript declaration file (.d.ts) that provides type definitions
 * for using Stencil web components as native custom elements in React 19+.
 *
 * The generated file augments the `react/jsx-runtime` module to provide proper
 * typing for custom elements when used directly in JSX without wrapper components.
 */
export declare const createNativeTypes: ({ components, stencilPackageName, excludeComponents, }: NativeTypesOptions) => string;
export {};
