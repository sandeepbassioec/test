import { html } from "lit";
export default {
    title: 'Components/Dropdown',
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
// Custom decorator to increase height
const customHeightDecorator = (storyFn, context) => {
    return html ` <div style="height: 400px;">${storyFn(context.args, context)}</div> `;
};
const customWidthDecorator = (storyFn, context) => {
    return html `
		<div style="display:flex; justify-content:center; width:300px;">${storyFn(context.args, context)}</div>
	`;
};
const Template = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-dropdown ?open="${args.open}" placement="${args.placement}" ?disabled="${args.disabled}">
			<o-button id="open-dropdown-button" variant="primary" slot="trigger">Open Dropdown</o-button>
			<div
				style="width: 200px; border-radius: 8px; border: 2px solid #BFC4CD; padding: 2px; font-size:14px; text-align: center"
			>
				Dropdown Panel Content Here
			</div>
		</o-dropdown>
	`
};
const TemplateComplicatedMenu = {
    decorators: [customHeightDecorator, customWidthDecorator],
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-dropdown ?open="${args.open}" placement="${args.placement}" ?disabled="${args.disabled}">
			<o-button id="open-dropdown-button" variant="primary" slot="trigger">Open Dropdown</o-button>
			<o-menu>
				<o-menu-label>First Grouping of Items</o-menu-label>
				<o-menu-item value="1">The Top of the List (Menu Item 1)</o-menu-item>
				<o-menu-item value="2">Menu Item 2</o-menu-item>
				<o-divider></o-divider>
				<o-menu-label>Second Grouping of Items</o-menu-label>
				<o-menu-item value="3">Menu Item 3</o-menu-item>
				<o-menu-item value="4">Menu Item Four (4)</o-menu-item>
				<o-menu-item value="5">Menu Item 5</o-menu-item>
				<o-menu-item value="6">This One is the Sixth Menu Item</o-menu-item>
			</o-menu>
		</o-dropdown>
	`
};
export const Default = Object.assign(Object.assign({}, TemplateComplicatedMenu), { args: {
        open: false,
        placement: 'bottom',
        disabled: false
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

<template>
<o-dropdown open="${args.open}" ?placement="${args.placement}" ?disabled="${args.disabled}">
	<o-menu>
		<o-menu-label>First Grouping of Items</o-menu-label>
		<o-menu-item value="1">The Top of the List (Menu Item 1)</o-menu-item>
		<o-menu-item value="2">Menu Item 2</o-menu-item>
		<o-divider></o-divider>
		<o-menu-label>Second Grouping of Items</o-menu-label>
		<o-menu-item value="3">Menu Item 3</o-menu-item>
		<o-menu-item value="4">Menu Item Four (4)</o-menu-item>
		<o-menu-item value="5">Menu Item 5</o-menu-item>
		<o-menu-item value="6">This is the Sixth Menu Item</o-menu-item>
	</o-menu>
</o-dropdown>
</template>

-----------------------
// React Code Snippet
-----------------------

return (
<ODropdown open="${args.open}" placement="${args.placement}" disabled="${args.disabled}">
	<OMenu>
		  <OMenuLabel>First Grouping of Items</OMenuLabel>
			<OMenuItem value="1">The Top of the List (Menu Item 1)</OMenuItem>
			<OMenuItem value="2">Menu Item 2</OMenuItem>
			<ODivider></ODivider>
			<OMenuLabel>Second Grouping of Items</OMenuLabel>
			<OMenuItem value="3">Menu Item 3</OMenuItem>
			<OMenuItem value="4">Menu Item Four (4)</OMenuItem>
			<OMenuItem value="5">Menu Item 5</OMenuItem>
			<OMenuItem value="6">This is the Sixth Menu Item</OMenuItem>
		</OMenu>
</ODropdown>
);
}
			`;
                }
            },
            description: {
                story: 'A basic dropdown using a button as the trigger and showing a menu when clicked.'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        open: true,
        placement: 'bottom',
        disabled: true
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

<template>
<o-dropdown open="${args.open}" ?placement="${args.placement}" ?disabled="${args.disabled}">
<o-button id="open-dropdown-button" variant="primary" slot="trigger">Open Dropdown (It Won't)</o-button>
<div>Panel that will not be seen</div>
</o-dropdown>
</template>

-----------------------
// React Code Snippet
-----------------------

return (
<ODropdown open="${args.open}" placement="${args.placement}" disabled="${args.disabled}">
	<OButton id="open-dropdown-button" variant="primary" slot="trigger">Open Dropdown (It Won't)></OButton>
	<Div>Panel that will not be seen</Div>
</ODropdown>
);
}
			`;
                }
            },
            description: {
                story: 'A disabled dropdown that will not open the panel when the trigger is clicked.'
            }
        }
    } });
//# sourceMappingURL=o-dropdown.stories.js.map
