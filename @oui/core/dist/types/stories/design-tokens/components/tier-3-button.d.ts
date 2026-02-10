import './token-specimen';
declare class Tier3Button extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(): import("../types").TokenObject[];
    findKnockoutBackground(contentTokenName: any): string;
    groupTokensByType(tokens: any): {
        background: any[];
        content: any[];
        border: any[];
    };
    renderTokenGroup(tokens: any, variant?: string): any;
    render(): void;
}
export default Tier3Button;
