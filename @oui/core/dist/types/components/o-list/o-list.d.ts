import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OList {
    hostElement: HTMLOListElement;
    private internals;
    private defaultValue;
    private valueHasChanged;
    value: string;
    name: string;
    label: string;
    required: boolean;
    helpText: string;
    errorText: string;
    showRadio: boolean;
    hasError: boolean;
    isInitialized: boolean;
    oItemSelected: EventEmitter<{
        value: string;
    }>;
    /** Emitted when the list item value changes */
    oValueChange: EventEmitter<{
        value: string;
    }>;
    private observer?;
    static DISABLE_MUTATION_OBSERVER: boolean;
    constructor();
    connectedCallback(): void;
    private getListItems;
    private updateListItemProps;
    setSelectedItem(value: string): Promise<boolean>;
    requiredHandler(): void;
    showRadioHandler(): Promise<void>;
    nameHandler(): Promise<void>;
    valueHandler(newValue: string): Promise<void>;
    errorTextChanged(): void;
    helpTextChanged(): void;
    validateInput(value: string): void;
    updateValidityState(): void;
    updateFormValue(value: string): void;
    handleDefaultSlotChange(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    componentDidRender(): Promise<void>;
    private applyMarginClasses;
    private getRadioGroupName;
    private updateListItems;
    render(): any;
}
