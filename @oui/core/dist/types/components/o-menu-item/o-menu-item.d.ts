export declare class OMenuItem {
    private item;
    host: HTMLOMenuItemElement;
    value: string;
    disabled: boolean;
    index: 0 | -1;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setFocus(): Promise<void>;
    private handleHostClick;
    private handleMouseOver;
    render(): any;
}
