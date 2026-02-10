import type { EventEmitter } from '../../stencil-public-runtime';
/**
 * Interfaces for event payloads
 */
export interface OTabShowPayload {
    name: string;
}
export interface OTabHidePayload {
    name: string;
}
export declare class OTabGroup {
    private activeTab?;
    private body?;
    private mutationObserver?;
    private nav?;
    private resizeObserver?;
    private tabGroup?;
    private tabs?;
    host: HTMLOTabGroupElement;
    hasLeftControl: boolean;
    hasRightControl: boolean;
    /** The placement of the tabs. */
    placement: 'top';
    /** Disables the scroll arrows that appear when tabs overflow. */
    noScrollControls: boolean;
    /**
     * Flags to disable the IntersectionObserver, ResizeObserver, and MutationObserver
     * this is for unit test purposes as these are not supported in JEST
     * */
    static DISABLE_INTERSECTION_OBSERVER: boolean;
    static DISABLE_RESIZE_OBSERVER: boolean;
    static DISABLE_MUTATION_OBSERVER: boolean;
    handleNoScrollControlsChange(): void;
    /** Emitted when a tab is shown. */
    oTabShow: EventEmitter<OTabShowPayload>;
    /** Emitted when a tab is hidden. */
    oTabHide: EventEmitter<OTabHidePayload>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Shows the specified tab panel. */
    show(panel: string): Promise<void>;
    private getAllTabs;
    private getAllPanels;
    private getActiveTab;
    private handleClick;
    private handleKeyDown;
    private handleScrollLeft;
    private handleScrollRight;
    private calculateRightControlVisibility;
    private calculateLeftControlVisibility;
    private updateScrollControls;
    private setActiveTab;
    private setAriaLabels;
    render(): any;
}
