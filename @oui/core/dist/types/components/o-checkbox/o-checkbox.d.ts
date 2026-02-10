import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OCheckbox {
    private defaultValue;
    private valueHasChanged;
    el: HTMLElement;
    /** @prop {string} nameValue - The name attribute for the checkbox. Default is 'default'. */
    nameValue: string;
    /** Determines the initial checked state of the checkbox. */
    checked: boolean;
    /** Used for Storybook documentation purposes. */
    label: string;
    /** @prop {boolean} disabled - Whether the input is disabled. Default is false. */
    disabled: boolean;
    /** @prop {string} value - The value of the checkbox input. */
    value: string;
    /** @prop {boolean} indeterminate - Whether the checkbox is in an indeterminate state. */
    indeterminate: boolean;
    /** @prop {string} errorText - The error message to display when validation fails. */
    errorText: string;
    /** @prop {boolean} required - Indicates if the checkbox is required */
    required: boolean;
    /** Indicates if the input has an error */
    hasError: boolean;
    /**
     * @event oChange
     */
    oChange: EventEmitter<{
        checked: boolean;
    }>;
    private internals;
    constructor();
    connectedCallback(): void;
    /** Returns the HTMLInputElement if found. */
    private getCheckboxElement;
    /** Watches for changes to the 'indeterminate' property. */
    watchIndeterminate(newValue: boolean): void;
    /** Watches for changes to the 'checked' property. */
    watchChecked(newValue: boolean): void;
    errorTextChanged(): void;
    /** Validates the checkbox state */
    validateInput(isChecked: boolean): void;
    /** Update validity state for form association */
    private updateValidityState;
    /** It sets the default value and initial indeterminate state of the checkbox element */
    componentDidLoad(): void;
    /** Handle checkbox change */
    handleChange(event: Event): void;
    render(): any;
}
