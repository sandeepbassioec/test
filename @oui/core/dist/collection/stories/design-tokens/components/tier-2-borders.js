import "./token-specimen";
class Tier2Borders extends HTMLElement {
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
    filterTokens(category) {
        if (!this.tokens || !this.tokens.tier2 || !this.tokens.tier2.borders) {
            return [];
        }
        return this.tokens.tier2.borders[category] || [];
    }
    renderRadiusTokens(tokens) {
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
           variant="border-radius"
        ></token-specimen>
      `;
        })
            .join('');
    }
    renderWidthTokens(tokens) {
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
           variant="border-width"
        ></token-specimen>
      `;
        })
            .join('');
    }
    render() {
        const radiusTokens = this.filterTokens('radius');
        const widthTokens = this.filterTokens('width');
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Border Radius</h2>
        </header>
        <div class="token-list">
          ${this.renderRadiusTokens(radiusTokens)}
        </div>
      </section>

      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Border Width</h2>
        </header>
        <div class="token-list">
          ${this.renderWidthTokens(widthTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-2-borders')) {
    customElements.define('tier-2-borders', Tier2Borders);
}
export default Tier2Borders;
//# sourceMappingURL=tier-2-borders.js.map
