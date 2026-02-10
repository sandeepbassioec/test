import type { OMenu } from '../o-menu/o-menu';
export declare class ODropdown {
    private popup;
    private panel;
    private trigger;
    private menu;
    private menuItems;
    host: HTMLODropdownElement;
    open: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    watchOpen(): Promise<void>;
    focusOnTrigger(): void;
    getMenu(): OMenu | undefined;
    addListeners(): void;
    removeListeners(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    handleContentSlotChange(): Promise<void>;
    handleTriggerClick: () => void;
    handleTriggerKeyDown: (event: KeyboardEvent) => void;
    handlePanelSelect: () => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    handleDocumentKeyDown: (event: KeyboardEvent) => void;
    handleDocumentMouseDown: (event: MouseEvent) => void;
    getAnimation(animationName: string): any;
    animateTo(element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions): Promise<void>;
    render(): any;
}
