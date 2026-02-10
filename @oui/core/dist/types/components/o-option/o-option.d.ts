export declare class OOption {
    host: HTMLOptionElement;
    value: string;
    disabled: boolean;
    selected: boolean;
    current: boolean;
    handleValueChange(): void;
    getTextContent(): Promise<string>;
    render(): any;
}
