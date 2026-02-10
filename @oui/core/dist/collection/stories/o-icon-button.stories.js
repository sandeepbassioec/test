import { html } from "lit";
export default {
    title: 'Components/Icon Button',
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
            table: { defaultValue: { summary: 'sm' } }
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            table: {
                defaultValue: { summary: 'submit' }
            }
        },
        name: { control: 'text', table: { defaultValue: { summary: 'house' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        label: { control: 'text', table: { defaultValue: { summary: 'house-icon' } } },
        color: {
            options: [
                'xx_lt_grey',
                'card_subhead',
                'table_header',
                'table_header_70',
                'main_text',
                'header_blue',
                'lt_blue',
                'search_bar_blue',
                'tab_grey',
                'accent_blue_1',
                'completed_1',
                'completed_2',
                'awaiting_1',
                'awaiting_2',
                'accent_blue_21',
                'error_red',
                'label',
                'black_20',
                'btn_primary_hover',
                'accent_blue_50',
                'expire_orange',
                'oec_blue',
                'white',
                'midnight_blue',
                'teal',
                'light_gray',
                'accent_blue',
                'oec_grey',
                'blue_steel',
                'flame_red',
                'volt_yellow',
                'school_bus_yellow',
                'spring_green',
                'electric_blue'
            ],
            control: { type: 'select' },
            table: { defaultValue: { summary: 'oec_blue' } }
        }
    },
    args: {
        size: 'md',
        type: 'submit',
        name: 'house',
        disabled: false,
        label: 'house-icon',
        color: 'oec_blue'
    }
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    render: (args) => html `
		<o-icon-button
			name="${args.name}"
			size="${args.size}"
			type="${args.type}"
			disabled="${args.disabled}"
			label="${args.label}"
			color="${args.color}"
		></o-icon-button>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        size: 'md',
        name: 'house',
        disabled: false,
        label: 'house-icon',
        color: 'oec_blue'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIconButton } from "@oui/vue";
 
<o-icon-button name="${args.name}" disabled="${args.disabled}" size="${args.size}" color="${args.color}" type="${args.type}"></o-icon-button>
 
// React Code Snippet
-----------------------
import { OIconButton } from "@oui/react";
 
<OIconButton name="${args.name}" disabled="${args.disabled}" size="${args.size}" color="${args.color}" type="${args.type}"></OIconButton>
          `;
                }
            }
        }
    } });
export const Sizing = {
    render: (args) => html `
		<div style="display: flex; align-items: flex-end;">
			<o-icon-button
				name="${args.name}"
				size="sm"
				disabled="${args.disabled}"
				label="${args.label}"
				color="${args.color}"
				type="${args.type}"
			></o-icon-button>
			<o-icon-button
				name="${args.name}"
				size="md"
				disabled="${args.disabled}"
				label="${args.label}"
				color="${args.color}"
				type="${args.type}"
			></o-icon-button>
			<o-icon-button
				name="${args.name}"
				size="lg"
				disabled="${args.disabled}"
				label="${args.label}"
				color="${args.color}"
				type="${args.type}"
			></o-icon-button>
			<div></div>
		</div>
	`,
    parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIconButton } from "@oui/vue";
 
<o-icon-button name="${args.name}" size="md" disabled="${args.disabled}" label="${args.label}" color="${args.color}" type="${args.type}"></o-icon-button>
 
// React Code Snippet
-----------------------
import { OIconButton } from "@oui/react";
 
<OIconButton name="${args.name}" size="md" disabled="${args.disabled}" label="${args.label}" color="${args.color}" type="${args.type}"></OIconButton>
          `;
                }
            }
        }
    }
};
export const Disabled = {
    render: (args) => html `
		<div style="display: flex; align-items: flex-end;">
			<o-icon-button
				name="${args.name}"
				size="lg"
				disabled="${args.disabled}"
				label="${args.label}"
				color="${args.color}"
				type="${args.type}"
			></o-icon-button>
			<div></div>
		</div>
	`,
    args: {
        size: 'md',
        name: 'house',
        disabled: true,
        label: 'house-icon',
        color: 'oec_blue'
    },
    parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIconButton } from "@oui/vue";
 
<o-icon-button name="${args.name}" size="lg" disabled="${args.disabled}" label="${args.label}" color="${args.color}" type="${args.type}"></o-icon-button>
 
// React Code Snippet
-----------------------
import { OIconButton } from "@oui/react";
 
<OIconButton name="${args.name}" size="lg" disabled="${args.disabled}" label="${args.label}" color="${args.color}" type="${args.type}"></OIconButton>
          `;
                }
            }
        }
    }
};
//# sourceMappingURL=o-icon-button.stories.js.map
