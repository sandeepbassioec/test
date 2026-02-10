import { html } from "lit";
export default {
    title: 'Components/Tooltip',
    argTypes: {
        content: { control: 'text' },
        placement: {
            control: 'select',
            options: [
                'top',
                'top-start',
                'top-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'right',
                'right-start',
                'right-end',
                'left',
                'left-start',
                'left-end'
            ],
            table: { defaultValue: { summary: 'top' } }
        },
        open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        hoist: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        trigger: {
            control: 'text',
            description: 'Action that opens the tooltip. Can be one or more of the following, separated by a space: hover, focus, click, manual',
            table: {
                defaultValue: { summary: 'hover focus' }
            }
        },
        maxWidth: { control: 'number', table: { defaultValue: { summary: '20' } } }
    },
    args: {
        content: 'This is a tooltip!',
        placement: 'top',
        open: false,
        disabled: false,
        hoist: false,
        trigger: 'hover focus',
        maxWidth: 20
    }
};
const customHeightDecorator = (storyFn) => {
    return html `
		<div style="height: 200px; padding-top: 80px; padding-left: 80px; padding-right: 80px">${storyFn()}</div>
	`;
};
const Template = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        }
    },
    render: (args) => html `
		<o-tooltip
			content="${args.content}"
			placement="${args.placement}"
			open="${args.open}"
			disabled="${args.disabled}"
			hoist="${args.hoist}"
			trigger="${args.trigger}"
			max-width="${args.maxWidth}"
		>
			<o-button>Target</o-button>
		</o-tooltip>
	`
};
const TemplateManual = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        }
    },
    render: (args) => html `
		<div style="display:flex">
			<o-button style="margin-right: 100px" id="open-tooltip">Click for Tooltip</o-button>
			<o-tooltip
				id="tooltip"
				content="${args.content}"
				placement="${args.placement}"
				open="${args.open}"
				disabled="${args.disabled}"
				hoist="${args.hoist}"
				trigger="${args.trigger}"
			>
				<o-icon name="circle-info" size="md"></o-icon>
			</o-tooltip>
		</div>

		<script>
			// Add event listener for the button to open the tooltip
			document.getElementById('open-tooltip').addEventListener('click', () => {
				document.getElementById('tooltip').show();
			});
		</script>
	`
};
export const DefaultTooltip = Object.assign(Object.assign({}, Template), { args: {
        open: false
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A tooltip that displays when hovered or focused.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OTooltip
} from '@oui/react/dist/components';

	return (
    <OTooltip content="${args.content}">
      <OButton>
			  Target
		  </OButton>
    </OTooltip>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-button, o-tooltip } from "@oui/vue";
  
<o-tooltip content="${args.content}">
  <o-button>
    Target
  </o-button>
</o-tooltip>
					`;
                }
            }
        }
    } });
export const DisabledTooltip = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        disabled: true
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A disabled tooltip, which prevents the tooltip from opening.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OTooltip
} from '@oui/react/dist/components';

	return (
    <OTooltip content="${args.content}" disabled="${args.disabled}">
      <OButton>
			  Target
		  </OButton>
    </OTooltip>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-button, o-tooltip } from "@oui/vue";
  
<o-tooltip content="${args.content}" disabled="${args.disabled}">
  <o-button>
    Target
  </o-button>
</o-tooltip>
					`;
                }
            }
        }
    } });
export const MaxWidth = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        content: 'This is a long tooltip. A very long tooltip with a lot of content.',
        maxWidth: 10
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A tooltip with a maximum width, allowing the contents to wrap onto multiple lines.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OTooltip
} from '@oui/react/dist/components';

	return (
    <OTooltip content="${args.content}" maxWidth="${args.maxWidth}">
      <OButton>
			  Target
		  </OButton>
    </OTooltip>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-button, o-tooltip } from "@oui/vue";
  
<o-tooltip content="${args.content}" max-width="${args.maxWidth}">
  <o-button>
    Target
  </o-button>
</o-tooltip>
					`;
                }
            }
        }
    } });
export const ClickTrigger = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        trigger: 'click'
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A tooltip with a click trigger.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OTooltip
} from '@oui/react/dist/components';

	return (
    <OTooltip content="${args.content}" trigger="${args.trigger}">
      <OButton>
			  Target
		  </OButton>
    </OTooltip>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-button, o-tooltip } from "@oui/vue";
  
<o-tooltip content="${args.content}" trigger="${args.trigger}">
  <o-button>
    Target
  </o-button>
</o-tooltip>
					`;
                }
            }
        }
    } });
export const ManualTrigger = Object.assign(Object.assign({}, TemplateManual), { args: {
        open: false,
        trigger: 'manual'
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A tooltip with a manual trigger.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OTooltip
} from '@oui/react/dist/components';
  
  return (
    <OButton onClick={handleClick}>
      Click for Tooltip
    </OButton>
    <OTooltip content="${args.content}" trigger="${args.trigger}">
      <OIcon name='circle-info' size='md'></OIcon>
    </OTooltip>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-button, o-tooltip } from "@oui/vue";
  <o-button>
    Click for Tooltip
  </o-button>
<o-tooltip content="${args.content}" trigger="${args.trigger}">
  <o-icon name='circle-info' size='md'></o-icon>
</o-tooltip>
					`;
                }
            }
        }
    } });
//# sourceMappingURL=o-tooltip.stories.js.map
