import { html } from "lit";
export default {
    title: 'Components/List Item',
    argTypes: {
        name: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        },
        selected: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
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
        selected: false,
        disabled: false,
        name: ''
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
		<o-list id="list-item-1">
			<o-list-item ?selected="${args.selected}" ?disabled="${args.disabled}"
				>Item 1
				<div slot="description">This is the description.</div></o-list-item
			>
		</o-list>
	`
};
const TemplateRadio = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    render: (args) => html `
		<o-list id="list-item-1">
			<o-list-item ?selected="${args.selected}"
				>Item 1
				<div slot="description">This is the description.</div></o-list-item
			>
		</o-list>
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
import { OListItem } from "@oui/vue";
<o-list id="list-item-1">
<o-list-item>Item 1</o-list-item>
	<div slot="description">This is the description.</div>
</o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OListItem } from "@oui/react";
<OList id="list-item-1">
<OListItem>Item 1 <div slot="description">This is the description.</div></OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A default list item.'
            }
        }
    } });
export const WithDisabledState = Object.assign(Object.assign({}, Template), { render: () => html `
		<o-list>
			<o-list-item disabled
				>Item 2 (Disabled)
				<div slot="description">This is the description.</div></o-list-item
			>
		</o-list>
	`, parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OListItem } from "@oui/vue";
<o-list id="list-item-1">
	<o-list-item disabled>Item 2 (Disabled) <div slot="description">This is the description.</div></o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OListItem } from "@oui/react";
<OList id="list-item-1">
	<OListItem disabled>Item 2 (Disabled) <div slot="description">This is the description.</div></OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list item that is disabled and cannot be selected.'
            }
        }
    } });
export const WithRadioButton = Object.assign(Object.assign({}, TemplateRadio), { args: {
        showRadio: true
    }, render: (args) => html `
		<o-list id="list-item-1" show-radio="true">
			<o-list-item ?selected="${args.selected}" value="1">
				Item 1 with Radio
				<div slot="description">This is the description.</div>
			</o-list-item>
		</o-list>
	`, parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OList, OListItem } from "@oui/vue";
<o-list show-radio="true">
    <o-list-item value="1">Item 1 with Radio 
        <div slot="description">This is the description.</div>
    </o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OList, OListItem } from "@oui/react";
<OList showRadio={true}>
    <OListItem value="1">Item 1 with Radio
        <div slot="description">This is the description.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list item that displays a radio button when the parent list has showRadio enabled.'
            }
        }
    } });
//# sourceMappingURL=o-list-item.stories.js.map
