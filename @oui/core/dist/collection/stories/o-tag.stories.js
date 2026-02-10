import { html } from "lit";
export default {
    title: 'Components/Tag',
    argTypes: {
        color: {
            control: 'select',
            options: ['uncategorized', 'order', 'payment', 'shipping', 'brand', 'buyer', 'seller'],
            table: {
                defaultValue: { summary: 'uncategorized' }
            }
        },
        closable: { control: 'boolean' }
    },
    args: {
        color: 'uncategorized',
        closable: false
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
    render: (args) => html ` <o-tag color="${args.color}" ?closable="${args.closable}"> Content </o-tag> `
};
const TemplateStartIcon = {
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
    render: (args) => html `
		<o-tag color="${args.color}" ?closable="${args.closable}">
			<o-icon name="house" color="${args.color}" slot="startIcon"></o-icon>
			Content
		</o-tag>
	`
};
export const Uncategorized = Object.assign(Object.assign({}, Template), { args: {
        color: 'uncategorized',
        closable: false
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

import { OTag } from "@oui/vue";

<o-tag color="${args.color}" ?closable="${args.closable}">
	Content
</o-tag>

-----------------------
// React Code Snippet
-----------------------

import { OTag } from "@oui/react";

<OTag color="${args.color}" ?closable="${args.closable}">
  Content
</OTag>
        `;
                }
            },
            description: {
                story: 'Uncategorized Tag with the option to be closable and have a start Icon'
            }
        }
    } });
export const Order = Object.assign(Object.assign({}, Template), { args: {
        color: 'order',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
	<o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Order tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Payment = Object.assign(Object.assign({}, Template), { args: {
        color: 'payment',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Payment tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Shipping = Object.assign(Object.assign({}, Template), { args: {
        color: 'shipping',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Shipping tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Brand = Object.assign(Object.assign({}, Template), { args: {
        color: 'brand',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Brand tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Buyer = Object.assign(Object.assign({}, Template), { args: {
        color: 'buyer',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Buyer tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Seller = Object.assign(Object.assign({}, Template), { args: {
        color: 'seller',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Seller tag with the option to be closable and have a start Icon.'
            }
        }
    } });
export const Closable = Object.assign(Object.assign({}, Template), { args: {
        color: 'uncategorized',
        closable: true
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
    Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Default Tag that is closable.'
            }
        }
    } });
export const WithStartIcon = Object.assign(Object.assign({}, TemplateStartIcon), { args: {
        color: 'uncategorized',
        closable: false
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
  
  import { OTag } from "@oui/vue";
  
  <o-tag color="${args.color}" ?closable="${args.closable}">
		<o-icon name="house" slot="startIcon"></o-icon>
		Content
	</o-tag>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { OTag } from "@oui/react";
  
  <OTag color="${args.color}" ?closable="${args.closable}">
		<OIcon name="house" slot="startIcon"></OIcon>
		Content
  </OTag>
          `;
                }
            },
            description: {
                story: 'Default Tag with the start icon applied.'
            }
        }
    } });
//# sourceMappingURL=o-tag.stories.js.map
