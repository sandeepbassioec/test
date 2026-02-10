import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OTag {
    host: HTMLElement;
    /** Determines if the tag is closable (shows a close button) */
    closable: boolean;
    /** Color variant of the tag */
    color: 'brand' | 'order' | 'payment' | 'shipping' | 'uncategorized';
    /** Event emitted when the close button is clicked */
    oRemove: EventEmitter<void>;
    /** Event emitted when the tag is clicked */
    oClick: EventEmitter<void>;
    private handleRemoveClick;
    /** Handles click events on the tag */
    private handleClick;
    render(): any;
}
