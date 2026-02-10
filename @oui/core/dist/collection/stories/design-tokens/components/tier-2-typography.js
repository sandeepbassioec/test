import "./token-specimen";
class Tier2Typography extends HTMLElement {
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
        if (!this.tokens || !this.tokens.tier2 || !this.tokens.tier2.typography) {
            return [];
        }
        const typographyCategory = this.tokens.tier2.typography[category];
        if (!typographyCategory)
            return [];
        return Object.keys(typographyCategory).map((key) => ({
            name: key,
            className: typographyCategory[key].className,
            properties: typographyCategory[key].properties,
            size: typographyCategory[key].size
        }));
    }
    renderTypographyToken(token) {
        var _a, _b, _c, _d;
        const props = token.properties;
        const fontFamily = getComputedStyle(document.documentElement)
            .getPropertyValue((_a = props['font-family'].match(/var\(([^)]+)\)/)) === null || _a === void 0 ? void 0 : _a[1])
            .trim();
        const fontWeight = getComputedStyle(document.documentElement)
            .getPropertyValue((_b = props['font-weight'].match(/var\(([^)]+)\)/)) === null || _b === void 0 ? void 0 : _b[1])
            .trim();
        const fontSize = getComputedStyle(document.documentElement)
            .getPropertyValue((_c = props['font-size'].match(/var\(([^)]+)\)/)) === null || _c === void 0 ? void 0 : _c[1])
            .trim();
        const lineHeight = getComputedStyle(document.documentElement)
            .getPropertyValue((_d = props['line-height'].match(/var\(([^)]+)\)/)) === null || _d === void 0 ? void 0 : _d[1])
            .trim();
        const convertRemToPx = (value) => {
            if (value.includes('rem')) {
                const remValue = parseFloat(value);
                return `${remValue * 16}px`;
            }
            return value;
        };
        const fontSizePx = convertRemToPx(fontSize);
        const lineHeightPx = convertRemToPx(lineHeight);
        const propertiesDisplay = `font-family: ${fontFamily}
font-weight: ${fontWeight}
font-size: ${fontSizePx}
line-height: ${lineHeightPx}`;
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${token.name}</div>
          <pre class="token-row__typography-props">${propertiesDisplay}</pre>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch token-row__swatch--typography" 
               style="font-family: ${fontFamily}; font-weight: ${fontWeight}; font-size: ${fontSize}; line-height: ${lineHeight};">
            <span>Typography-example</span>
          </div>
        </div>
      </div>
    `;
    }
    renderTypographyGroup(tokens) {
        if (!tokens || tokens.length === 0) {
            return '<p>No tokens available</p>';
        }
        return tokens.map((token) => this.renderTypographyToken(token)).join('');
    }
    render() {
        const displayTokens = this.filterTokens('display');
        const titleTokens = this.filterTokens('title');
        const bodyTokens = this.filterTokens('body');
        const labelTokens = this.filterTokens('label');
        this.innerHTML = `
      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Display</h2>
        </header>
        <div class="token-list">
          ${this.renderTypographyGroup(displayTokens)}
        </div>
      </section>

      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Title</h2>
        </header>
        <div class="token-list">
          ${this.renderTypographyGroup(titleTokens)}
        </div>
      </section>

      <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Body</h2>
        </header>
        <div class="token-list">
          ${this.renderTypographyGroup(bodyTokens)}
        </div>
      </section>

	  <section class="section">
        <header class="section__header">
          <h2 class="section__heading">Label</h2>
        </header>
        <div class="token-list">
          ${this.renderTypographyGroup(labelTokens)}
        </div>
      </section>
    `;
    }
}
if (!customElements.get('tier-2-typography')) {
    customElements.define('tier-2-typography', Tier2Typography);
}
export default Tier2Typography;
//# sourceMappingURL=tier-2-typography.js.map
