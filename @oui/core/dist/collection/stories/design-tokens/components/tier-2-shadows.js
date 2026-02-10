import "./token-specimen";
class Tier2Shadows extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier2 || !this.tokens.tier2.shadows) {
            return [];
        }
        return this.tokens.tier2.shadows || [];
    }
    renderShadowTokens(tokens) {
        if (!tokens || tokens.length === 0) {
            return '<p>No tokens available</p>';
        }
        return tokens
            .map((token) => {
            var _a;
            const cssVariable = ((_a = token.value.match(/var\(([^)]+)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || token.cssVar;
            const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim() || token.value;
            return `
        <token-specimen
          semantic-name="${token.name}"
          css-variable="${cssVariable}"
          value="${computedValue}"
           variant="shadow"
        ></token-specimen>
      `;
        })
            .join('');
    }
    render() {
        const shadowTokens = this.filterTokens();
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Box Shadows</h2>
        </header>
        <div class="token-list">
          ${this.renderShadowTokens(shadowTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-2-shadows')) {
    customElements.define('tier-2-shadows', Tier2Shadows);
}
export default Tier2Shadows;
//# sourceMappingURL=tier-2-shadows.js.map
