import { html } from "lit";
import "./design-tokens.css";
import "./components/tier-2-colors";
import "./components/tier-2-borders";
import "./components/tier-2-shadows";
import "./components/tier-2-typography";
const meta = {
    title: 'Design Tokens/Tier 2: Usage',
    tags: ['!autodocs']
};
export default meta;
export const Colors = {
    render: () => html `<tier-2-colors></tier-2-colors>`
};
export const Borders = {
    render: () => html `<tier-2-borders></tier-2-borders>`
};
export const Shadows = {
    render: () => html `<tier-2-shadows></tier-2-shadows>`
};
export const Typography = {
    render: () => html `<tier-2-typography></tier-2-typography>`
};
//# sourceMappingURL=tier-2-tokens.stories.js.map
