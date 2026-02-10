import type { EventEmitter } from '../../stencil-public-runtime';
export declare class ORadioGroup {
    private defaultValue;
    private valueHasChanged;
    host: HTMLORadioGroupElement;
    /** @prop {string} label - The label text for the radio group. */
    label: string;
    /** @prop {string} name - The name attribute used to bind the child radios together. */
    name: string;
    /** @prop {string} value - The value attribute for the radio group. */
    value: string;
    /** @prop {string} helpText - The help text to display below the radio group. */
    helpText: string;
    /** @prop {string} errorText - The error message to display when validation fails. */
    errorText: string;
    /** @prop {boolean} required - Whether selection from the radio group is required. Default is false. */
    required: boolean;
    /** @state {boolean} hasError - Tracks whether the radio group has an error. */
    hasError: boolean;
    /** Emitted when the radio group value changes */
    oChange: EventEmitter<{
        value: string;
    }>;
    private internals;
    constructor();
    connectedCallback(): void;
    componentDidLoad(): void;
    watchValue(newValue: string): void;
    errorTextChanged(): void;
    private updateRadioGroupProps;
    private handleClick;
    /** Validates the radio group state */
    private validateInput;
    /** Update validity state for form association */
    private updateValidityState;
    /** Update form value for form association */
    private updateFormValue;
    render(): any;
}
