class TokenSpecimen extends HTMLElement {
    connectedCallback() {
        const semanticName = this.getAttribute('semantic-name') || '';
        const cssVariable = this.getAttribute('css-variable') || '';
        const value = this.getAttribute('value') || '';
        const variant = this.getAttribute('variant') || 'color';
        const knockoutBackground = this.getAttribute('knockout-background') || null;
        if (variant === 'content') {
            this.innerHTML = this.renderContentToken(semanticName, cssVariable, value, knockoutBackground);
        }
        else if (variant === 'border-radius') {
            this.innerHTML = this.renderBorderRadiusToken(semanticName, cssVariable, value);
        }
        else if (variant === 'border-width') {
            this.innerHTML = this.renderBorderWidthToken(semanticName, cssVariable, value);
        }
        else if (variant === 'shadow') {
            this.innerHTML = this.renderShadowToken(semanticName, cssVariable, value);
        }
        else if (variant === 'spacing') {
            this.innerHTML = this.renderSpacingToken(semanticName, cssVariable, value);
        }
        else if (variant === 'z-index') {
            this.innerHTML = this.renderZIndexToken(semanticName, cssVariable, value);
        }
        else {
            this.innerHTML = this.renderColorToken(semanticName, cssVariable, value);
        }
    }
    renderColorToken(name, cssVar, value) {
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch" style="background: ${value};" title="${value}"></div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderContentToken(name, cssVar, value, knockoutBackground) {
        const isKnockout = name.includes('knockout') || cssVar.includes('knockout');
        const swatchClass = isKnockout
            ? 'token-row__swatch token-row__swatch--text token-row__swatch--knockout'
            : 'token-row__swatch token-row__swatch--text';
        const swatchStyle = knockoutBackground ? `background: ${knockoutBackground};` : '';
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="${swatchClass}" style="${swatchStyle}">
            <span style="color: ${value};">Aa</span>
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderBorderRadiusToken(name, cssVar, value) {
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch token-row__swatch--border-radius" style="border-radius: ${value};">
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderBorderWidthToken(name, cssVar, value) {
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch token-row__swatch--border-width">
            <div class="border-width-line" style="border-top: ${value} solid var(--oui-theme-color-border-brand);"></div>
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderShadowToken(name, cssVar, value) {
        const boxShadowValue = value.replace(/(-?\d+)(?=\s)/g, '$1px');
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch" >
            <div class="token-row__swatch--shadow" style="box-shadow: ${boxShadowValue};"></div>
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderSpacingToken(name, cssVar, value) {
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch token-row__swatch--spacing">
            <div class="spacing-box" style="width: ${value}; height: ${value};"></div>
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
    renderZIndexToken(name, cssVar, value) {
        const getAvailableTokens = () => {
            var _a;
            try {
                const tokens = window.ouiTokens;
                if (!((_a = tokens === null || tokens === void 0 ? void 0 : tokens.core) === null || _a === void 0 ? void 0 : _a['z-index']))
                    return [];
                const tokenValues = tokens.core['z-index'].map((token) => token.value);
                // Sort: positive values descending, negative values at end
                return tokenValues.sort((a, b) => {
                    const numA = parseInt(a, 10);
                    const numB = parseInt(b, 10);
                    if (numA < 0 && numB >= 0)
                        return 1;
                    if (numB < 0 && numA >= 0)
                        return -1;
                    return numB - numA;
                });
            }
            catch (error) {
                console.warn('Could not load z-index tokens:', error);
                return [];
            }
        };
        // Get tokens and calculate layer data
        const availableTokens = getAvailableTokens();
        const positiveTokens = availableTokens.filter((val) => parseInt(val, 10) >= 0);
        const numericValue = parseInt(value, 10);
        const isNegative = numericValue < 0;
        const layerPosition = isNegative ? -1 : positiveTokens.indexOf(value);
        const totalLayers = positiveTokens.length;
        // Generate layer elements
        const layerElements = Array.from({ length: totalLayers }, (_, index) => {
            const isActive = index === layerPosition;
            const cssClass = `z-index-layer${isActive ? ' z-index-layer--active' : ''}`;
            return `<div class="${cssClass}"></div>`;
        }).join('');
        return `
      <div class="token-row">
        <div class="token-row__info">
          <div class="token-row__name">${name}</div>
          <code class="token-row__css-var">${cssVar}</code>
        </div>
        <div class="token-row__value">
          <div class="token-row__swatch token-row__swatch--z-index">
            <div class="z-index-visual-container">
              ${layerElements}
            </div>
          </div>
          <code class="token-row__value-text">${value}</code>
        </div>
      </div>
    `;
    }
}
if (!customElements.get('token-specimen')) {
    customElements.define('token-specimen', TokenSpecimen);
}
export default TokenSpecimen;
//# sourceMappingURL=token-specimen.js.map
