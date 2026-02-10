import "./token-specimen";
class Tier1Spacing extends HTMLElement {
    constructor() {
        super();
        this.tokens = null;
    }
    connectedCallback() {
        this.loadTokens();
        this.render();
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                this.loadTokens();
                this.render();
            }, 10);
        });
    }
    loadTokens() {
        if (window.ouiTokens) {
            this.tokens = window.ouiTokens;
        }
    }
    filterTokens() {
        if (!this.tokens || !this.tokens.core || !this.tokens.core.spacing) {
            return [];
        }
        return this.tokens.core.spacing || [];
    }
    renderTokenGroup(tokens) {
        if (!tokens || tokens.length === 0) {
            return '<p>No tokens available</p>';
        }
        return tokens
            .map((token) => {
            return `
          <token-specimen
            semantic-name="${token.name}"
            css-variable="${token.cssVar}"
            value="${token.value}"
            variant="spacing"
          ></token-specimen>
        `;
        })
            .join('');
    }
    render() {
        const spacingTokens = this.filterTokens();
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Spacing</h2>
        </header>
        <div class="token-list">
          ${this.renderTokenGroup(spacingTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-1-spacing')) {
    customElements.define('tier-1-spacing', Tier1Spacing);
}
export default Tier1Spacing;
//# sourceMappingURL=tier-1-spacing.js.map
