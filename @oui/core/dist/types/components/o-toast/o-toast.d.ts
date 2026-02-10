import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OToast {
    private autoHideTimeout?;
    host: HTMLOToastElement;
    isVisible: boolean;
    isExiting: boolean;
    isEntering: boolean;
    /** Indicates whether or not the toast is open. */
    open: boolean;
    /** Set to true to make the toast closable. */
    closable: boolean;
    /** The variant of the toast. */
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    /** The length of time, in milliseconds, the toast will show before closing itself. */
    duration: number;
    /** Emitted when the toast opens. */
    oShow: EventEmitter<void>;
    /** Emitted when the toast closes. */
    oHide: EventEmitter<void>;
    handleOpenChange(): void;
    handleDurationChange(): void;
    componentWillLoad(): void;
    /** Shows the toast. */
    show(): Promise<void>;
    /** Hides the toast. */
    hide(): Promise<void>;
    /** Displays the toast notification. */
    toast(): Promise<void>;
    /** Pauses the autoHide functionality. */
    private pauseAutoHide;
    /** Resets the autoHide timer. */
    private resetAutoHide;
    /** Restarts the autoHide timer. */
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleTransitionEnd;
    private getIconDetails;
    private getVariantClasses;
    render(): any;
}
