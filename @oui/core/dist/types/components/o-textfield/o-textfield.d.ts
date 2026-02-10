export declare class OTextfield {
    private defaultValue;
    private valueHasChanged;
    /** @prop {string} nameValue - The name attribute for the input. Default is 'default'. */
    nameValue: string;
    /** Label for the text field */
    label: string;
    /** Placeholder text for the input */
    placeholder: string;
    /** Input type (e.g., text, password, email) */
    type: 'text' | 'password' | 'email' | 'number' | 'time';
    /** Indicates if the input is required */
    required: boolean;
    /** Indicates if the input is disabled */
    disabled: boolean;
    /** @prop {string} errorText - The error message to display when validation fails. */
    errorText: string;
    /** Help text to display below the input */
    helpText: string;
    /** Value of the input field */
    value?: string;
    /** Indicates if the input has an error */
    hasError: boolean;
    /** Reference to the host element */
    el: HTMLElement;
    private internals;
    constructor();
    connectedCallback(): void;
    componentDidLoad(): void;
    valueChanged(newValue: string): void;
    errorTextChanged(): void;
    helpTextChanged(): void;
    /** Validates the input value */
    validateInput(_value: string): void;
    /** Update validity state for form association */
    private updateValidityState;
    /** Handle input change */
    handleInput(event: Event): void;
    render(): any;
}
