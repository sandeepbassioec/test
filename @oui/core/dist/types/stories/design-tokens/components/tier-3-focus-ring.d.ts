import './token-specimen';
declare class Tier3FocusRing extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(): import("../types").TokenObject[];
    renderTokenGroup(tokens: any, variant?: string): any;
    render(): void;
}
export default Tier3FocusRing;
