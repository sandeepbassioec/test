export declare class OTextarea {
    private defaultValue;
    private valueHasChanged;
    /** @prop {string} nameValue - The name attribute for the input. Default is 'default'. */
    nameValue: string;
    /** @prop {string} label - The label text for the textarea. */
    label: string;
    /** @prop {string} placeholder - The placeholder text for the textarea. */
    placeholder?: string;
    /** @prop {string} value - The current value of the textarea. */
    value?: string;
    /** @prop {boolean} required - Whether the textarea is required. Default is false. */
    required: boolean;
    /** @prop {boolean} disabled - Whether the textarea is disabled. Default is false. */
    disabled: boolean;
    /** @prop {string} errorText - The error message to display when validation fails. */
    errorText: string;
    /** @prop {string} helpText - The help text to display below the textarea. */
    helpText: string;
    /** @state {boolean} hasError - Tracks whether the textarea has an error. */
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
    /**
     * Validates the textarea value.
     * @param {string} value - The textarea value to validate.
     */
    validateInput(_value: string): void;
    /** Update validity state for form association */
    private updateValidityState;
    /** Handle textarea change */
    handleInput(event: Event): void;
    render(): any;
}
