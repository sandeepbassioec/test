export declare class OAvatar {
    /** Optional full name (first and last) */
    initials?: string;
    /** Label for Accessability purposes  */
    label: string;
    /** Ensure only up to 2 alphabetic characters are used */
    private get characters();
    render(): any;
}
