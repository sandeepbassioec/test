import './token-specimen';
declare class Tier3Form extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(): import("../types").TokenObject[];
    groupTokensByType(tokens: any): {
        background: any[];
        border: any[];
    };
    renderTokenGroup(tokens: any, variant?: string): any;
    render(): void;
}
export default Tier3Form;
