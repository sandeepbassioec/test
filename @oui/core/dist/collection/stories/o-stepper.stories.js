import { html } from "lit";
export default {
    title: 'Components/Stepper',
    argTypes: {
        variant: {
            control: 'select',
            options: ['completed', 'active', 'default', 'error']
        }
    },
    args: {
        variant: 'default'
    }
};
// Custom decorator to increase width
const customHeightDecorator = (storyFn, context) => {
    return html ` <div style="height: 350px;">${storyFn(context.args, context)}</div> `;
};
const TemplateDefault = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: () => html ` <o-stepper>
			<o-step variant="completed" position="first">Step 1</o-step>
			<o-step variant="active" position="inner">Step 2</o-step>
			<o-step variant="default" position="inner">Step 3</o-step>
			<o-step variant="error" position="last">Step 4</o-step>
		</o-stepper>`
};
export const Default = Object.assign(Object.assign({}, TemplateDefault), { args: { variant: 'default' }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    //Create Dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OStepper } from "@oui/vue";
import { OStep } from "@oui/vue";

<o-stepper>
<o-step variant="${args.variant}">
  Step Label
</o-step>
</o-stepper>

-----------------------
// React Code Snippet
-----------------------

import { OStepper } from "@oui/react";
import { OStep } from "@oui/react";

<OStepper>
<OStep variant="${args.variant}">
  Step Label
</OStep>
</OStepper>
        `;
                }
            }
        }
    } });
//# sourceMappingURL=o-stepper.stories.js.map
