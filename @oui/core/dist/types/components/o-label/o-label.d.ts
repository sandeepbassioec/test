export declare class OLabel {
    /** The ID of the input element the label is associated with */
    htmlFor?: string;
    /** The label text to display */
    label: string;
    /** Variant for different label states */
    variant?: 'error' | 'disabled';
    /** Indicates if the field is required - shows asterisk */
    required?: boolean;
    render(): any;
}
