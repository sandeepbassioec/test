export declare class OTab {
    private componentId;
    private tab?;
    host: HTMLOTabElement;
    /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
    panel: string;
    /** Set to true to draw the tab in an active state. */
    active: boolean;
    /** Set to true to draw the tab in a disabled state. */
    disabled: boolean;
    /** Sets focus to the tab. */
    setFocus(options?: FocusOptions): Promise<void>;
    /** Removes focus from the tab. */
    removeFocus(): Promise<void>;
    render(): any;
}
