import { html } from "lit";
export default {
    title: 'Components/App Bar',
    argTypes: {},
    args: {}
};
// Custom decorator to increase width
const customHeightDecorator = (story) => {
    return html `<div style="height: 200px;">${story()}</div>`;
};
const Template = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    // Create dynamic code example using args
                    return;
                }
            }
        }
    },
    render: () => html `
		<o-app-bar>
			<div slot="right"><o-avatar></o-avatar></div>
		</o-app-bar>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { render: () => html `
		<o-app-bar>
			<div slot="right"><o-avatar></o-avatar></div>
		</o-app-bar>
	`, parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'The default App Bar component'
            }
        }
    } });
//# sourceMappingURL=o-app-bar.stories.js.map
