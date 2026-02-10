import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OTooltip {
    private popup;
    private body;
    private hoverTimeout;
    private animationTimeout;
    private isAnimating;
    /** Reference to the host element */
    host: HTMLOTooltipElement;
    /** The text content to be displayed in the tooltip */
    content: string;
    /** The open state of the tooltip, defaults to closed (false) */
    open: boolean;
    /** Position of the tooltip relative to the target */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** Whether the tooltip is disabled, preventing user interaction. */
    disabled: boolean;
    /** If true, sets the popup positioning strategy to fixed instead of absolute - can be used to get around overflow issues */
    hoist: boolean;
    /** The trigger type of the tooltip, separated by a space - can be hover, focus, click, manual, or a combination */
    trigger: string;
    /** Maximum width (in rem) of the tooltip popover, allowing optional text wrapping */
    maxWidth: number | null;
    /** Emitted when tooltip shown */
    oShow: EventEmitter<void>;
    /** Emitted when tooltip hidden */
    oHide: EventEmitter<void>;
    /** Emitted after tooltip shown */
    oAfterShow: EventEmitter<void>;
    /** Emitted after tooltip hidden */
    oAfterHide: EventEmitter<void>;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): void;
    handleDisabledChange(): void;
    show(): Promise<any>;
    hide(): Promise<any>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    hasTrigger(triggerType: string): boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    handleClick: () => void;
    handleDocumentKeyDown: (event: KeyboardEvent) => void;
    handleMouseOver: () => void;
    handleMouseOut: () => void;
    private stopAnimations;
    private getTransformOrigin;
    private getAnimationConfig;
    private animateTooltip;
    render(): any;
}
