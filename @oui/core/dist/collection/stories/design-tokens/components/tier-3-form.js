import "./token-specimen";
class Tier3Form extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier3 || !this.tokens.tier3.form) {
            return [];
        }
        return this.tokens.tier3.form || [];
    }
    groupTokensByType(tokens) {
        const groups = {
            background: [],
            border: []
        };
        tokens.forEach((token) => {
            if (token.name.includes('-background-')) {
                groups.background.push(token);
            }
            else if (token.name.includes('-border-')) {
                groups.border.push(token);
            }
        });
        return groups;
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
            this.innerHTML = '<p>No form tokens available</p>';
            return;
        }
        const groups = this.groupTokensByType(tokens);
        this.innerHTML = `
      ${groups.background.length > 0
            ? `
        <section class="section">
          <header class="section__header">
            <h2 class="section__heading">Background Colors</h2>
          </header>
          <div class="token-list">
            ${this.renderTokenGroup(groups.background, 'color')}
          </div>
        </section>
      `
            : ''}

      ${groups.border.length > 0
            ? `
        <section class="section">
          <header class="section__header">
            <h2 class="section__heading">Border Colors</h2>
          </header>
          <div class="token-list">
            ${this.renderTokenGroup(groups.border, 'color')}
          </div>
        </section>
      `
            : ''}
    `;
    }
}
if (!customElements.get('tier-3-form')) {
    customElements.define('tier-3-form', Tier3Form);
}
export default Tier3Form;
//# sourceMappingURL=tier-3-form.js.map
