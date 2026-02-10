import "./token-specimen";
class Tier3AppBar extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier3 || !this.tokens.tier3['app-bar']) {
            return [];
        }
        return this.tokens.tier3['app-bar'] || [];
    }
    groupTokensByType(tokens) {
        const groups = {
            background: [],
            content: []
        };
        tokens.forEach((token) => {
            if (token.name.includes('-background-')) {
                groups.background.push(token);
            }
            else if (token.name.includes('-content-')) {
                groups.content.push(token);
            }
        });
        return groups;
    }
    getAppBarBackground() {
        var _a;
        const tokens = this.filterTokens();
        const bgToken = tokens.find((token) => token.name.includes('-background-'));
        if (bgToken) {
            const cssVariable = ((_a = bgToken.value.match(/var\(([^)]+)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || bgToken.cssVar;
            return getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim() || bgToken.value;
        }
        return null;
    }
    renderTokenGroup(tokens, variant = 'color') {
        if (!tokens || tokens.length === 0) {
            return '';
        }
        const appBarBg = variant === 'content' ? this.getAppBarBackground() : null;
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
          ${appBarBg ? `knockout-background="${appBarBg}"` : ''}
        ></token-specimen>
      `;
        })
            .join('');
    }
    render() {
        const tokens = this.filterTokens();
        if (!tokens || tokens.length === 0) {
            this.innerHTML = '<p>No app bar tokens available</p>';
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

      ${groups.content.length > 0
            ? `
        <section class="section">
          <header class="section__header">
            <h2 class="section__heading">Content Colors</h2>
          </header>
          <div class="token-list">
            ${this.renderTokenGroup(groups.content, 'content')}
          </div>
        </section>
      `
            : ''}
    `;
    }
}
if (!customElements.get('tier-3-app-bar')) {
    customElements.define('tier-3-app-bar', Tier3AppBar);
}
export default Tier3AppBar;
//# sourceMappingURL=tier-3-app-bar.js.map
