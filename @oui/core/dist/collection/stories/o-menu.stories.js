import { html } from "lit";
export default {
    title: 'Components/Menu',
    argTypes: {
        open: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
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
            table: {
                defaultValue: { summary: 'bottom' }
            }
        },
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        }
    },
    args: {
        open: false,
        placement: 'bottom',
        disabled: false
    }
};
// Custom decorator to increase width
const customHeightDecorator = (storyFn) => {
    return html ` <div style="height: 250px;">${storyFn()}</div> `;
};
const TemplateSimpleMenu = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: () => html `
		<o-menu>
			<o-menu-label>This is a menu label</o-menu-label>
			<o-menu-item value="1">Menu Item 1</o-menu-item>
			<o-menu-item value="2">Menu Item 2</o-menu-item>
		</o-menu>
	`
};
const TemplateMenuWithDividerAndStartIcon = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: () => html `
		<o-menu>
			<o-menu-label>First Grouping of Items w/icons</o-menu-label>
			<o-menu-item value="1"
				><o-icon name="user" size="sm" color="oec_blue" slot="startIcon"></o-icon>Menu Item 1 w/icon</o-menu-item
			>
			<o-menu-item value="2"
				><o-icon name="comments" size="sm" color="oec_blue" slot="startIcon"></o-icon>Menu Item 2 w/icon</o-menu-item
			>
			<o-divider></o-divider>
			<o-menu-label>Second Grouping of Items</o-menu-label>
			<o-menu-item value="3">Menu Item 3</o-menu-item>
			<o-menu-item value="4">Menu Item 4</o-menu-item>
			<o-menu-item value="5">Menu Item 5</o-menu-item>
		</o-menu>
	`
};
export const Default = Object.assign(Object.assign({}, TemplateSimpleMenu), { args: {
        open: true
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    return `
            -----------------------
// Vue Code Snippet
-----------------------

	<o-menu>
		<o-menu-label>First Grouping of Items</o-menu-label>
		<o-menu-item value="1">Menu Item 1</o-menu-item>
		<o-menu-item value="2">Menu Item 2</o-menu-item>
		<o-menu-item value="3">Menu Item 3</o-menu-item>
	</o-menu>

-----------------------
// React Code Snippet
-----------------------

	<OMenu>
		  <OMenuLabel>First Grouping of Items</OMenuLabel>
			<OMenuItem value="1">Menu Item 1</OMenuItem>
			<OMenuItem value="2">Menu Item 2</OMenuItem>
			<OMenuItem value="3">Menu Item 3</OMenuItem>
		</OMenu>
          `;
                }
            },
            description: {
                story: 'A simple menu displayed directly in the container.'
            }
        }
    } });
export const MenuWithDividerAndStartIcon = Object.assign(Object.assign({}, TemplateMenuWithDividerAndStartIcon), { args: {
        open: true
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    return `
  -----------------------
// Vue Code Snippet
-----------------------

	<o-menu>
		<o-menu-label>First Grouping of Items</o-menu-label>
		<o-menu-item value="1"><o-icon name="user" size="sm" color="oec_blue" slot="startIcon"></o-icon>Menu Item 1 w/icon</o-menu-item>
		<o-menu-item value="2"><o-icon name="comments" size="sm" color="oec_blue" slot="startIcon"></o-icon>Menu Item 2 w/icon</o-menu-item>
		<o-divider></o-divider>
		<o-menu-label>Second Grouping of Items</o-menu-label>
		<o-menu-item value="3">Menu Item 3</o-menu-item>
		<o-menu-item value="4">Menu Item Four (4)</o-menu-item>
		<o-menu-item value="5">Menu Item 5</o-menu-item>
	</o-menu>

-----------------------
// React Code Snippet
-----------------------

	<OMenu>
		  <OMenuLabel>First Grouping of Items w/icon</OMenuLabel>
          <OMenuItem value="1"><OIcon name="user" size="sm" color="oec_blue" slot="startIcon"></OIconn>Menu Item 1 w/icon</OMenuItem>
		  <OMenuItem value="2"><OIcon name="comments" size="sm" color="oec_blue" slot="startIcon"></OIcon>Menu Item 2 w/icon</OMenuItem>
			<OMenuItem value="1">The Top of the List (Menu Item 1)</OMenuItem>
			<OMenuItem value="2">Menu Item 2</OMenuItem>
			<ODivider></ODivider>
			<OMenuLabel>Second Grouping of Items</OMenuLabel>
			<OMenuItem value="3">Menu Item 3</OMenuItem>
			<OMenuItem value="4">Menu Item Four (4)</OMenuItem>
			<OMenuItem value="5">Menu Item 5</OMenuItem>
		</OMenu>
          `;
                }
            },
            description: {
                story: 'A more refined example of a menu utilizing the divider component and start icon slot.'
            }
        }
    } });
//# sourceMappingURL=o-menu.stories.js.map
