import { html } from "lit";
export default {
    title: 'Components/Button',
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'text'],
            table: {
                defaultValue: { summary: 'primary' }
            }
        },
        color: {
            control: 'select',
            options: ['brand', 'buyer', 'seller', 'payment', 'order', 'shipping'],
            table: {
                defaultValue: { summary: 'brand' }
            }
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            table: {
                defaultValue: { summary: 'submit' }
            }
        },
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        fullWidth: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        loading: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        }
    },
    args: {
        variant: 'primary',
        type: 'submit',
        disabled: false,
        fullWidth: false,
        loading: false
    }
};
// Custom padding to increase padding for a Button Full Width
const customPaddingDecorator = (storyFn) => {
    return html ` <div style="padding: 30px 20px;">${storyFn()}</div> `;
};
const TemplateWithIcon = {
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => html `
		<o-button
			variant="${args.variant}"
			color="${args.color}"
			?loading="${args.loading}"
			type="${args.type}"
			?disabled="${args.disabled}"
			?full-width="${args.fullWidth}"
		>
			Button Text
		</o-button>
	`
};
const Template = {
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-button
			variant="${args.variant}"
			color="${args.color}"
			type="${args.type}"
			?disabled="${args.disabled}"
			?loading="${args.loading}"
		>
			Button Text
		</o-button>
	`
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
		<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
			<o-icon name="house" color="white" slot="startIcon"></o-icon>
			Button
		</o-button>
	`
};
const SecondaryTemplateStartIcon = {
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
		<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
			<o-icon name="house" color="oec_blue" slot="startIcon"></o-icon>
			Button
		</o-button>
	`
};
export const PrimaryButton = Object.assign(Object.assign({}, TemplateWithIcon), { decorators: [customPaddingDecorator], args: {
        variant: 'primary',
        color: 'brand',
        fullWidth: false
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Primary</strong> Button. Used as the main button on a page.'
            }
        }
    } });
export const SecondaryButton = Object.assign(Object.assign({}, Template), { args: {
        variant: 'secondary',
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Secondary</strong> Button. Used as the alternative button on a page.'
            }
        }
    } });
export const TextButton = Object.assign(Object.assign({}, Template), { args: {
        variant: 'text',
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}">
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Link</strong> Button used for Links.'
            }
        }
    } });
export const DisabledButton = Object.assign(Object.assign({}, Template), { args: {
        variant: 'primary',
        color: 'brand',
        disabled: true
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}" disabled>
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}" disabled>
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Disabled</strong> Button.'
            }
        }
    } });
export const FullWidthPrimaryButton = Object.assign(Object.assign({}, TemplateWithIcon), { decorators: [customPaddingDecorator], args: {
        variant: 'primary',
        color: 'brand',
        fullWidth: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}" full-width="${args.fullWidth}">
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}" fullWidth="${args.fullWidth}">
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Full-width</strong> Primary Button.'
            }
        }
    } });
export const FullWidthSecondaryButton = Object.assign(Object.assign({}, TemplateWithIcon), { decorators: [customPaddingDecorator], args: {
        variant: 'secondary',
        color: 'brand',
        fullWidth: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}" full-width="${args.fullWidth}">
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}" fullWidth="${args.fullWidth}">
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Full-width</strong> Secondary Button.'
            }
        }
    } });
export const LoadingPrimaryButton = Object.assign(Object.assign({}, Template), { args: {
        variant: 'primary',
        loading: true,
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}" loading=${args.loading}>
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}" loading=${args.loading}>
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Loading</strong> Primary Button.'
            }
        }
    } });
export const LoadingSecondaryButton = Object.assign(Object.assign({}, Template), { args: {
        variant: 'secondary',
        color: 'brand',
        loading: true
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}" loading=${args.loading}>
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}" loading=${args.loading}>
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Loading</strong> Secondary Button.'
            }
        }
    } });
export const PrimaryButtonUsingStartIcon = Object.assign(Object.assign({}, TemplateStartIcon), { args: {
        variant: 'primary',
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
<o-icon name="house" color="white" slot="startIcon"></o-icon>
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}">
<o-icon name="house" color="white" slot="startIcon"></o-icon>
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Start icon</strong> tag applied to a Primary Button.'
            }
        }
    } });
export const SecondaryButtonUsingStartIcon = Object.assign(Object.assign({}, SecondaryTemplateStartIcon), { args: {
        variant: 'secondary',
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

import { OButton } from "@oui/vue";

<o-button variant="${args.variant}" color="${args.color}" type="${args.type}">
<o-icon name="house" color="oec_blue" slot="startIcon"></o-icon>
  Button Text
</o-button>

-----------------------
// React Code Snippet
-----------------------

import { OButton } from "@oui/react";

<OButton variant="${args.variant}" color="${args.color}" type="${args.type}">
<o-icon name="house" color="oec_blue" slot="startIcon"></o-icon>
  Button Text
</OButton>
        `;
                }
            },
            description: {
                story: 'A <strong>Start icon</strong> tag applied to a Seconary Button.'
            }
        }
    } });
//# sourceMappingURL=o-button.stories.js.map
