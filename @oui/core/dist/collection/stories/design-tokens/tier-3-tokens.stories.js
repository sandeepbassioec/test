import { html } from "lit";
import "./design-tokens.css";
import "./components/tier-3-app-bar";
import "./components/tier-3-button";
import "./components/tier-3-form";
import "./components/tier-3-focus-ring";
import "./components/tier-3-link";
const meta = {
    title: 'Design Tokens/Tier 3: Component',
    tags: ['!autodocs']
};
export default meta;
export const AppBarTokens = {
    render: () => html `<tier-3-app-bar></tier-3-app-bar>`
};
export const ButtonTokens = {
    render: () => html `<tier-3-button></tier-3-button>`
};
export const FormTokens = {
    render: () => html `<tier-3-form></tier-3-form>`
};
export const FocusRingTokens = {
    render: () => html `<tier-3-focus-ring></tier-3-focus-ring>`
};
export const LinkTokens = {
    render: () => html `<tier-3-link></tier-3-link>`
};
//# sourceMappingURL=tier-3-tokens.stories.js.map
