import { html } from "lit";
export default {
    title: 'Components/Divider',
    argTypes: {
        variant: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                defaultValue: { summary: 'horizontal' }
            }
        }
    },
    args: {
        variant: 'horizontal'
    }
};
const Template = {
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<div style="margin-top: 20px; display: block; align-items: center;">
			<o-divider variant="${args.variant}"></o-divider>
		</div>
	`
};
export const Horizontal = Object.assign(Object.assign({}, Template), { args: {
        variant: 'horizontal'
    }, render: (args) => html `
		<div
			style="margin-top: 20px; display: ${args.variant === 'horizontal'
        ? 'block'
        : 'flex'}; align-items: center; height: ${args.variant === 'horizontal' ? 'auto' : '2rem'}"
		>
			<a style="display: inline-block; padding: 8px;">Privacy Policy</a>
			<o-divider variant="${args.variant}"></o-divider>
			<a style="display: inline-block; padding: 8px;">Terms of Service</a>
		</div>
	`, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: () => `
-----------------------
// Vue Code Snippet
-----------------------

import { ODivider } from "@oui/vue";

<o-divider variant="horizontal">
</o-divider>

-----------------------
// React Code Snippet
-----------------------

import { ODivider } from "@oui/react";

<ODivider variant="horizontal">
</ODivider>
				`
            },
            description: {
                story: 'A divider that is used for when the content is displayed ontop of one another and need separation.'
            }
        }
    } });
export const Vertical = Object.assign(Object.assign({}, Template), { args: {
        variant: 'vertical'
    }, render: (args) => html ` <div style="margin-top: 20px; display: flex; align-items: center; height: 2rem;">
			<a style="display: inline-block; padding: 8px;">Privacy Policy</a>
			<o-divider variant="${args.variant}"></o-divider>
			<a style="display: inline-block; padding: 8px;">Terms of Service</a>
		</div>`, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { ODivider } from "@oui/vue";

<o-divider variant="horizontal">
</o-divider>

-----------------------
// React Code Snippet
-----------------------

import { ODivider } from "@oui/react";

<ODivider variant="horizontal">
</ODivider>
        `;
                }
            },
            description: {
                story: 'A divider that is used for when the content is displayed side by side and need separation.'
            }
        }
    } });
//# sourceMappingURL=o-divider.stories.js.map
