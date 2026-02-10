import { html } from "lit";
export default {
    title: 'Components/Alert',
    component: 'o-alert',
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'success', 'neutral', 'warning', 'danger'],
            table: {
                defaultValue: { summary: 'primary' }
            }
        },
        open: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        variant: 'primary',
        open: false
    }
};
const InfoTemplate = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Information Alert!</strong>
			<p>This is some more information about the alert.</p>
		</o-alert>
	`
};
const SuccessTemplate = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Success!</strong>
			<p>Your order has been submitted!</p>
		</o-alert>
	`
};
const WarningTemplate = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Warning!</strong>
			<p>Please review your information before proceeding.</p>
		</o-alert>
	`
};
const DangerTemplate = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Error!</strong>
			<p>Something went wrong. Please try again.</p>
		</o-alert>
	`
};
const NeutralTemplate = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Information!</strong>
			<p>Here is some general information for your reference.</p>
		</o-alert>
	`
};
const TemplateNoContent = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Information Alert!</strong>
		</o-alert>
	`
};
const TemplateMultipleLines = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-alert variant="${args.variant}" ?open="${args.open}">
			<strong>Information Alert!</strong>
			<p>This is some more information about the alert.</p>
			<p>This is a second line with more information.</p>
		</o-alert>
	`
};
export const Information = Object.assign(Object.assign({}, InfoTemplate), { args: {
        variant: 'primary',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open>
	<strong>Information Alert!</strong>
	<p>This is some more information about the alert.</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open>
	<strong>Information Alert!</strong>
	<p>This is some more information about the alert.</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Primary</strong> Alert. Used to display important information.'
            }
        }
    } });
export const Success = Object.assign(Object.assign({}, SuccessTemplate), { args: {
        variant: 'success',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open>
	<strong>Success!</strong>
	<p>Your order has been submitted!</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open>
	<strong>Success!</strong>
	<p>Your order has been submitted!</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Success</strong> Alert. Used to indicate successful actions.'
            }
        }
    } });
export const Warning = Object.assign(Object.assign({}, WarningTemplate), { args: {
        variant: 'warning',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open>
	<strong>Warning!</strong>
	<p>Please review your information before proceeding.</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open>
	<strong>Warning!</strong>
	<p>Please review your information before proceeding.</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Warning</strong> Alert. Used to indicate potential issues.'
            }
        }
    } });
export const Danger = Object.assign(Object.assign({}, DangerTemplate), { args: {
        variant: 'danger',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open>
	<strong>Error!</strong>
	<p>Something went wrong. Please try again.</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open>
	<strong>Error!</strong>
	<p>Something went wrong. Please try again.</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Danger</strong> Alert. Used to indicate critical issues.'
            }
        }
    } });
export const Neutral = Object.assign(Object.assign({}, NeutralTemplate), { args: {
        variant: 'neutral',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open>
	<strong>Information!</strong>
	<p>Here is some general information for your reference.</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open>
	<strong>Information!</strong>
	<p>Here is some general information for your reference.</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Neutral</strong> Alert. Used for general information.'
            }
        }
    } });
export const MultipleLines = Object.assign(Object.assign({}, TemplateMultipleLines), { args: {
        variant: 'primary',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open="${args.open}">
	<strong>Information Alert!</strong>
	<p>This is some more information about the alert.</p>
	<p>This is a second line with more information.</p>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open="${args.open}">
	<strong>Information Alert!</strong>
	<p>This is some more information about the alert.</p>
	<p>This is a second line with more information.</p>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>Multiple Lines</strong> Alert. Demonstrates the alert with multiple lines.'
            }
        }
    } });
export const NoContent = Object.assign(Object.assign({}, TemplateNoContent), { args: {
        variant: 'primary',
        open: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAlert } from "@oui/vue";

<o-alert variant="${args.variant}" open="${args.open}">
  <strong>Information Alert!</strong>
</o-alert>

-----------------------
// React Code Snippet
-----------------------

import { OAlert } from "@oui/react";

<OAlert variant="${args.variant}" open="${args.open}">
  <strong>Information Alert!</strong>
</OAlert>
          `;
                }
            },
            description: {
                story: 'A <strong>No Content</strong> Alert. Demonstrates the alert with no added content.'
            }
        }
    } });
//# sourceMappingURL=o-alert.stories.js.map
