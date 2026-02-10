import './token-specimen';
declare class Tier3AppBar extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(): import("../types").TokenObject[];
    groupTokensByType(tokens: any): {
        background: any[];
        content: any[];
    };
    getAppBarBackground(): string;
    renderTokenGroup(tokens: any, variant?: string): any;
    render(): void;
}
export default Tier3AppBar;
