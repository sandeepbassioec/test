import { html } from "lit";
export default {
    title: 'Components/Button Group'
};
const Template = {
    parameters: {
        layout: 'centered'
    },
    render: () => html `
		<o-button-group>
			<o-button variant="secondary">First Button</o-button>
			<o-button variant="secondary">Inner Button</o-button>
			<o-button variant="secondary">Last Button</o-button>
		</o-button-group>
	`
};
const TemplateMultiStyles = {
    parameters: {
        layout: 'centered'
    },
    render: () => html `
		<o-button-group>
			<o-button variant="secondary">First Button</o-button>
			<o-button variant="primary">Last Button</o-button>
		</o-button-group>
	`
};
const TemplateDisabled = {
    parameters: {
        layout: 'centered'
    },
    render: () => html `
		<o-button-group>
			<o-button variant="secondary">First Button</o-button>
			<o-button variant="secondary" disabled>Inner Button</o-button>
			<o-button variant="secondary" disabled>Last Button</o-button>
		</o-button-group>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OButtonGroup } from "@oui/vue";
  
<o-button-group>
  <o-button variant="secondary">First Button</o-button>
  <o-button variant="secondary">Inner Button</o-button>
  <o-button variant="secondary">Last Button</o-button>
</o-button-group>

-----------------------
// React Code Snippet
-----------------------
  
import { OButtonGroup } from "@oui/react";

<OButtonGroup>
  <OButton variant="secondary">First Button</OButton>
  <OButton variant="secondary">Inner Button</OButton>
  <OButton variant="secondary">Last Button</OButton>
</OButtonGroup>
          `;
                }
            },
            description: {
                story: 'A default button group with three buttons.'
            }
        }
    } });
export const MultiStylesButtons = Object.assign(Object.assign({}, TemplateMultiStyles), { parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
  -----------------------
  // Vue Code Snippet
  -----------------------

  import { OButtonGroup } from "@oui/vue";
    
  <o-button-group>
    <o-button variant="secondary">First Button</o-button>
    <o-button variant="primary">Last Button</o-button>
  </o-button-group>
  
  -----------------------
  // React Code Snippet
  -----------------------
    
  import { OButtonGroup } from "@oui/react";
  
  <OButtonGroup>
    <OButton variant="secondary">First Button</OButton>
    <OButton variant="primary">Last Button</OButton>
  </OButtonGroup>
            `;
                }
            },
            description: {
                story: 'A button group where the second buttons use primary variant.'
            }
        }
    } });
export const DisabledButtons = Object.assign(Object.assign({}, TemplateDisabled), { parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OButtonGroup } from "@oui/vue";

<o-button-group>
  <o-button variant="secondary">First Button</o-button>
  <o-button variant="secondary" disabled>Inner Button</o-button>
  <o-button variant="secondary" disabled>Last Button</o-button>
</o-button-group>

-----------------------
// React Code Snippet
-----------------------
  
import { OButtonGroup } from "@oui/react";

<OButtonGroup>
  <OButton variant="secondary">First Button</OButton>
  <OButton variant="secondary" disabled>Inner Button</OButton>
  <OButton variant="secondary" disabled>Last Button</OButton>
</OButtonGroup>
          `;
                }
            },
            description: {
                story: 'A button group where the second and third buttons are disabled.'
            }
        }
    } });
//# sourceMappingURL=o-button-group.stories.js.map
