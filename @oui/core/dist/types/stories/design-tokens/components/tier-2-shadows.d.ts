import './token-specimen';
declare class Tier2Shadows extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(): import("../types").TokenObject[];
    renderShadowTokens(tokens: any): any;
    render(): void;
}
export default Tier2Shadows;
