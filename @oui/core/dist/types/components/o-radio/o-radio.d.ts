export declare class ORadio {
    el: HTMLORadioElement;
    /** @prop {string} nameValue - The id attribute for the radio input. */
    nameValue: string;
    /** @prop {string} value - The value attribute for the radio input. */
    value: string;
    /** @prop {boolean} checked - Determines the initial checked state of the radio. Default is false. */
    checked: boolean;
    /** @prop {boolean} disabled - Whether the input is disabled. Default is false. */
    disabled: boolean;
    /** @prop {string} name - The name attribute for the radio input. Used to bind radios together in a radio group. */
    name: string;
    /** @prop {string} label - The label text for the radio input. */
    label: string;
    /** Returns the HTMLInputElement if found. */
    private getRadioElement;
    /** Watches for changes to the 'checked' property. */
    watchChecked(newValue: boolean): void;
    render(): any;
}
