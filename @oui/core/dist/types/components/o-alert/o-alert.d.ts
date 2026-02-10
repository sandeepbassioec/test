import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OAlert {
    host: HTMLOAlertElement;
    /** Indicates whether or not the alert is open. */
    open: boolean;
    /** The variant of the alert. */
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    /** Emitted when the alert opens. */
    oShow: EventEmitter<void>;
    /** Emitted when the alert closes. */
    oHide: EventEmitter<void>;
    handleOpenChange(): void;
    /** Shows the alert. */
    show(): Promise<void>;
    /** Hides the alert. */
    hide(): Promise<void>;
    private handleCloseClick;
    private getIconDetails;
    private getVariantClasses;
    render(): any;
}
