export declare class OPopup {
    private anchorEl;
    popup: HTMLElement | null;
    private arrowEl;
    private hoverBridgeEl;
    private cleanup;
    /** Reference to the host element */
    host: HTMLElement;
    /** The open state of the popup, defaults to closed (false) */
    active: boolean;
    /** Position of the popup relative to the anchor */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** Sets whether popup uses fixed positioning, defaults to absolute */
    strategy: 'absolute' | 'fixed';
    /** Determines amount of space between anchor and popup content, defaults to zero */
    distance: number;
    /** Syncs sizing of popup content to anchor sizing */
    sync: 'width' | 'height' | 'both';
    /** Allows popup to change position on axis to remain in view, defaults to false */
    flip: boolean;
    /** Sets whether an arrow displays along the bottom edge of the popup */
    arrow: boolean;
    /** Allows for creation of element between popup and anchor when popup is active to maintain hover state */
    hoverBridge: boolean;
    watchActive(): void;
    connectedCallback(): void;
    disconnectedCallback(): Promise<void>;
    start(): void;
    private stop;
    private handleAnchorChange;
    private update;
    roundByDPR(value: any): number;
    reposition(): Promise<void>;
    updateHoverBridge: () => void;
    render(): any;
}
