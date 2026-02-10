import { html } from "lit";
export default {
    title: 'Components/Sidebar',
    argTypes: {},
    args: {}
};
// Custom decorator to increase height
const customHeightDecorator = (storyFn) => {
    return html ` <div style="height: 500px; background-color: grey;">${storyFn()}</div> `;
};
const TemplateDefault = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: () => html ` <o-sidebar>
			<h1>Header Text</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et quam sit amet quam mollis luctus. Aenean vitae
				felis sed orci posuere vestibulum at non tortor. Donec risus nunc, elementum a tortor id, lacinia aliquam diam.
				Vivamus vehicula est ac porta mollis. Vivamus sagittis commodo tortor sit amet aliquam. Praesent aliquam diam
				purus, et semper nulla pulvinar eu. In hac habitasse platea dictumst. Nam lobortis quam quis magna tempor
				malesuada.
			</p>
			<o-button variant="primary">Submit</o-button>
		</o-sidebar>`
};
export const Default = Object.assign(Object.assign({}, TemplateDefault), { args: {}, parameters: {
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

import { OSidebar } from "@oui/vue";

<o-sidebar>Content</o-sidebar>

-----------------------
// React Code Snippet
-----------------------

import { OSidebar } from "@oui/react";

<OSidebar>Content</OSidebar>
        `;
                }
            }
        }
    } });
//# sourceMappingURL=o-sidebar.stories.js.map
