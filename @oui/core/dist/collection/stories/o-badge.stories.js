import { html } from "lit";
export default {
    title: 'Components/Badge',
    argTypes: {
        color: {
            control: 'select',
            options: ['uncategorized', 'order', 'payment', 'shipping', 'brand', 'buyer', 'seller'],
            table: {
                defaultValue: { summary: 'uncategorized' }
            }
        }
    },
    args: {
        color: 'uncategorized'
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
    render: (args) => html ` <o-badge color="${args.color}"> 123 </o-badge> `
};
export const Uncategorized = Object.assign(Object.assign({}, Template), { args: {
        color: 'uncategorized'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with the uncategorized color variant applied.'
            }
        }
    } });
export const Order = Object.assign(Object.assign({}, Template), { args: {
        color: 'order'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with the order color variant applied.'
            }
        }
    } });
export const Payment = Object.assign(Object.assign({}, Template), { args: {
        color: 'payment'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with payment color variant applied.'
            }
        }
    } });
export const Shipping = Object.assign(Object.assign({}, Template), { args: {
        color: 'shipping'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with shipping color variant applied.'
            }
        }
    } });
export const Brand = Object.assign(Object.assign({}, Template), { args: {
        color: 'brand'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with brand color variant applied.'
            }
        }
    } });
export const Buyer = Object.assign(Object.assign({}, Template), { args: {
        color: 'buyer'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with buyer color variant applied.'
            }
        }
    } });
export const Seller = Object.assign(Object.assign({}, Template), { args: {
        color: 'seller'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OBadge } from "@oui/vue";

<o-badge color="${args.color}">
  123
</o-badge>

-----------------------
// React Code Snippet
-----------------------

import { OBadge } from "@oui/react";

<OBadge color="${args.color}">
  123
</OBadge>
        `;
                }
            },
            description: {
                story: 'Badge with seller color variant applied.'
            }
        }
    } });
export const NoValue = Object.assign(Object.assign({}, Template), { render: () => html ` <o-badge color="uncategorized"> </o-badge> `, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
  -----------------------
  // Vue Code Snippet
  -----------------------
  
  import { OBadge } from "@oui/vue";

  <o-badge color="${args.color}">
   
  </o-badge>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OBadge } from "@oui/react";

  <OBadge color="${args.color}">

  </OBadge>
          `;
                }
            },
            description: {
                story: 'Default Badge with no value supplied.'
            }
        }
    } });
//# sourceMappingURL=o-badge.stories.js.map
