import "./token-specimen";
class Tier2Colors extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier2 || !this.tokens.tier2.colors) {
            return [];
        }
        return this.tokens.tier2.colors[category] || [];
    }
    renderTokenGroup(tokens) {
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
          variant="color"
        ></token-specimen>
      `;
        })
            .join('');
    }
    findKnockoutBackground(contentTokenName) {
        var _a;
        const backgroundTokenName = contentTokenName.replace('content-', 'background-');
        const backgroundTokens = this.filterTokens('background');
        const matchingBgToken = backgroundTokens.find((token) => token.name === backgroundTokenName);
        if (matchingBgToken) {
            const bgCssVariable = ((_a = matchingBgToken.value.match(/var\(([^)]+)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || matchingBgToken.cssVar;
            return getComputedStyle(document.documentElement).getPropertyValue(bgCssVariable).trim() || matchingBgToken.value;
        }
        return null;
    }
    renderContentTokenGroup(tokens) {
        if (!tokens || tokens.length === 0) {
            return '<p>No tokens available</p>';
        }
        return tokens
            .map((token) => {
            var _a;
            const cssVariable = ((_a = token.value.match(/var\(([^)]+)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || token.cssVar;
            const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim() || token.value;
            const isKnockout = token.name.includes('knockout');
            const knockoutBg = isKnockout ? this.findKnockoutBackground(token.name) : null;
            return `
        <token-specimen
          semantic-name="${token.name}"
          css-variable="${cssVariable}"
          value="${computedValue}"
          variant="content"
          ${knockoutBg ? `knockout-background="${knockoutBg}"` : ''}
        ></token-specimen>
      `;
        })
            .join('');
    }
    renderBorderTokenGroup(tokens) {
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
          variant="color"
        ></token-specimen>
      `;
        })
            .join('');
    }
    render() {
        const backgroundTokens = this.filterTokens('background');
        const contentTokens = this.filterTokens('content');
        const borderTokens = this.filterTokens('border');
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Background Colors</h2>
        </header>
        <div class="token-list">
          ${this.renderTokenGroup(backgroundTokens)}
        </div>
      </section>

      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Content Colors</h2>
        </header>
        <div class="token-list">
          ${this.renderContentTokenGroup(contentTokens)}
        </div>
      </section>

      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Border Colors</h2>
        </header>
        <div class="token-list">
          ${this.renderBorderTokenGroup(borderTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-2-colors')) {
    customElements.define('tier-2-colors', Tier2Colors);
}
export default Tier2Colors;
//# sourceMappingURL=tier-2-colors.js.map
