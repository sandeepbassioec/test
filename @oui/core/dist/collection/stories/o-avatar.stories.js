import { html } from "lit";
export default {
    title: 'Components/Avatar',
    argTypes: {
        initials: {
            control: 'text',
            description: 'Initials',
            table: {
                defaultValue: { summary: '' }
            }
        },
        label: {
            control: 'text',
            description: 'Label intended for screen readers',
            table: {
                defaultValue: { summary: 'Default Label' }
            }
        }
    },
    args: {
        initials: '',
        label: 'Default Label'
    }
};
const Template = {
    parameters: {
        layout: 'centered',
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
    render: (args) => html ` <o-avatar initials="${args.initials}" label="${args.label}"> </o-avatar> `
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        initials: '',
        label: 'Default Label'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OAvatar } from "@oui/vue";
  
<o-avatar initials="" label="Label">
</o-avatar>

-----------------------
// React Code Snippet
-----------------------
  
import { OAvatar } from "@oui/react";

<OAvatar initials="" label="label">
</OAvatar>
          `;
                }
            },
            description: {
                story: 'The default Avatar when not signed in or no name used.'
            }
        }
    } });
export const Initials = Object.assign(Object.assign({}, Template), { args: {
        initials: 'JD',
        label: 'Default Label'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: () => {
                    return `
  -----------------------
  // Vue Code Snippet
  -----------------------
  
  import { OAvatar } from "@oui/vue";
    
  <o-avatar initials="JD" label="label">
  </o-avatar>
  
  -----------------------
  // React Code Snippet
  -----------------------
    
  import { OAvatar } from "@oui/react";
  
  <OAvatar initials="JD" label="label">
  </OAvatar>
            `;
                }
            },
            description: {
                story: 'The Avatar when sign in, with user first and last initial.'
            }
        }
    } });
//# sourceMappingURL=o-avatar.stories.js.map
