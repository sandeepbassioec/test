import "./token-specimen";
class Tier1ZIndex extends HTMLElement {
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
        if (!this.tokens || !this.tokens.core || !this.tokens.core['z-index']) {
            return [];
        }
        return this.tokens.core['z-index'] || [];
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
            variant="z-index"
          ></token-specimen>
        `;
        })
            .join('');
    }
    render() {
        const zIndexTokens = this.filterTokens();
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Z-Index</h2>
        </header>
        <div class="token-list">
          ${this.renderTokenGroup(zIndexTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-1-zindex')) {
    customElements.define('tier-1-zindex', Tier1ZIndex);
}
export default Tier1ZIndex;
//# sourceMappingURL=tier-1-zindex.js.map
