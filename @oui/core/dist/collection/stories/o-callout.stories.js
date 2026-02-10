import { html } from "lit";
export default {
    title: 'Components/Callout',
    argTypes: {},
    args: {}
};
// Custom padding to increase padding for a Button Full Width
const customPaddingDecorator = (story) => {
    return html `<div style="padding: 30px 20px;">${story()}</div>`;
};
const TemplateDefault = {
    parameters: {
        layout: 'fullscreen'
    },
    render: () => html ` <o-callout> Place content here </o-callout>`
};
export const Default = Object.assign(Object.assign({}, TemplateDefault), { decorators: [customPaddingDecorator], args: {}, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    //Create Dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OCallout } from "@oui/vue";

<o-callout><slot></slot></o-callout>

-----------------------
// React Code Snippet
-----------------------

import { OCallout } from "@oui/react";

<OCallout><slot></slot></OCallout>
        `;
                }
            }
        }
    } });
//# sourceMappingURL=o-callout.stories.js.map
