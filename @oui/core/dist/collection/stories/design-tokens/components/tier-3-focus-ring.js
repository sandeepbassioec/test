import "./token-specimen";
class Tier3FocusRing extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier3 || !this.tokens.tier3['focus-ring']) {
            return [];
        }
        return this.tokens.tier3['focus-ring'] || [];
    }
    renderTokenGroup(tokens, variant = 'color') {
        if (!tokens || tokens.length === 0) {
            return '';
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
          variant="${variant}"
        ></token-specimen>
      `;
        })
            .join('');
    }
    render() {
        const tokens = this.filterTokens();
        if (!tokens || tokens.length === 0) {
            this.innerHTML = '<p>No focus ring tokens available</p>';
            return;
        }
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Border Colors</h2>
        </header>
        <div class="token-list">
          ${this.renderTokenGroup(tokens, 'color')}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-3-focus-ring')) {
    customElements.define('tier-3-focus-ring', Tier3FocusRing);
}
export default Tier3FocusRing;
//# sourceMappingURL=tier-3-focus-ring.js.map
