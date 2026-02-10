import './token-specimen';
declare class Tier2Typography extends HTMLElement {
    private tokens;
    constructor();
    connectedCallback(): void;
    loadTokens(): void;
    filterTokens(category: any): {
        name: string;
        className: any;
        properties: any;
        size: any;
    }[];
    renderTypographyToken(token: any): string;
    renderTypographyGroup(tokens: any): any;
    render(): void;
}
export default Tier2Typography;
