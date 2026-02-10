import { html } from "lit";
export default {
    title: 'Components/Step',
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
const TemplateDefault = {
    args: {
        variant: 'default'
    },
    parameters: {
        layout: 'centered'
    },
    render: (args) => html ` <o-step variant="${args.variant}" }>Default</o-step>`
};
const TemplateActive = {
    args: {
        variant: 'active'
    },
    parameters: {
        layout: 'centered'
    },
    render: (args) => html ` <o-step variant="${args.variant}" }>Active</o-step> `
};
const TemplateCompleted = {
    args: {
        variant: 'completed'
    },
    parameters: {
        layout: 'centered'
    },
    render: (args) => html ` <o-step variant="${args.variant}" }>Complete</o-step> `
};
const TemplateError = {
    args: {
        variant: 'error'
    },
    parameters: {
        layout: 'centered'
    },
    render: (args) => html ` <o-step variant="${args.variant}" }>Error</o-step> `
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
export const Active = Object.assign(Object.assign({}, TemplateActive), { args: { variant: 'active' }, parameters: {
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
export const Completed = Object.assign(Object.assign({}, TemplateCompleted), { args: { variant: 'completed' }, parameters: {
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
</OStepper> `;
                }
            }
        }
    } });
export const Error = Object.assign(Object.assign({}, TemplateError), { args: { variant: 'error' }, parameters: {
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
//# sourceMappingURL=o-step.stories.js.map
