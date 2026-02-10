import { html } from "lit";
export default {
    title: 'Components/List',
    argTypes: {
        label: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        },
        name: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        },
        showRadio: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        required: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        helpText: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        },
        errorText: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        }
    },
    args: {
        label: 'List Label',
        required: false,
        helpText: '',
        errorText: '',
        showRadio: false,
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
		<o-list
			id="List Label"
			name="${args.name}"
			label="${args.label}"
			?required="${args.required}"
			.helpText="${args.helpText}"
			.errorText="${args.errorText}"
			?show-radio="${args.showRadio}"
		>
			<o-list-item value="1"
				>Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2">
				Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3"
				>Item 3
				<div slot="description">This is the description for the third item.</div></o-list-item
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
		<o-list
			id="list-label"
			name="${args.name}"
			label="${args.label}"
			?show-radio="${args.showRadio}"
			?required="${args.required}"
			.helpText="${args.helpText}"
			.errorText="${args.errorText}"
		>
			<o-list-item value="1">
				Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2">
				Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3">
				Item 3
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
		</o-list>
	`
};
const TemplateRadioDisabled = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    render: (args) => html `
		<o-list
			id="List Label"
			name="${args.name}"
			label="${args.label}"
			?required="${args.required}"
			.helpText="${args.helpText}"
			.errorText="${args.errorText}"
			?show-radio="${args.showRadio}"
		>
			<o-list-item value="1">
				Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2">
				Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3" disabled>
				Item 3 (Disabled)
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
		</o-list>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OList } from "@oui/vue";
<o-list label="${args.label}">
    <o-list-item value="1"
				>Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2"
				>Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3"
				>Item 3
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OList } from "@oui/react";
<OList label="${args.label}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A default list with items.'
            }
        }
    } });
export const WithLabelText = Object.assign(Object.assign({}, Template), { args: {
        label: 'List Items'
    }, parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OList } from "@oui/vue";
<o-list label="${args.label}">
    <o-list-item value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </o-list-item>
    <o-list-item value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </o-list-item>
    <o-list-item value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OList } from "@oui/react";
<OList label="${args.label}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list with a label.'
            }
        }
    } });
export const WithHelpText = Object.assign(Object.assign({}, Template), { args: {
        label: 'List Items',
        helpText: 'This is a help text for the list.'
    }, parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OList } from "@oui/vue";
<o-list label="${args.label}" help-text="${args.helpText}">
    <o-list-item value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </o-list-item>
    <o-list-item value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </o-list-item>
    <o-list-item value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OList } from "@oui/react";
<OList label="${args.label}" helpText="${args.helpText}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list with help text.'
            }
        }
    } });
export const RequiredList = Object.assign(Object.assign({}, Template), { args: {
        required: true,
        errorText: 'This field is required.',
        label: 'List Items'
    }, parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
import { OList } from "@oui/vue";
<o-list required="${args.required}" error-text="${args.errorText}">
    <o-list-item value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </o-list-item>
    <o-list-item value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </o-list-item>
    <o-list-item value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </o-list-item>
</o-list>
-----------------------
// React Code Snippet
-----------------------
import { OList } from "@oui/react";
<OList required={${args.required}} errorText="${args.errorText}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A required list with help text.'
            }
        }
    } });
export const WithRadioButton = Object.assign(Object.assign({}, TemplateRadio), { args: {
        label: 'List Items',
        name: 'list-radio',
        showRadio: true
    }, parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
<o-list show-radio="${args.showRadio}" name="${args.name}" label="${args.label}">
    <o-list-item value="1"
				>Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2"
				>Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3"
				>Item 3
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
</o-list>
-----------------------
// React Code Snippet
-----------------------
<OList showRadio={${args.showRadio}} name="${args.name}" label="${args.label}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list with radio buttons enabled.'
            }
        }
    } });
export const WithRadioDisabled = Object.assign(Object.assign({}, TemplateRadioDisabled), { args: {
        label: 'List Items',
        name: 'list-radio-disabled',
        showRadio: true
    }, parameters: {
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------
<o-list show-radio="${args.showRadio}" name="${args.name}" label="${args.label}">
    <o-list-item value="1"
				>Item 1
				<div slot="description">This is the description for the first item.</div></o-list-item
			>
			<o-list-item value="2"
				>Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3"
				>Item 3
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
</o-list>
				>Item 2
				<div slot="description">This is the description for the second item.</div></o-list-item
			>
			<o-list-item value="3" disabled
				>Item 3 (disabled)
				<div slot="description">This is the description for the third item.</div></o-list-item
			>
</o-list>
-----------------------
// React Code Snippet
-----------------------
<OList showRadio={${args.showRadio}} name="${args.name}" label="${args.label}">
    <OListItem value="1">
        Item 1
        <div slot="description">This is the description for the first item.</div>
    </OListItem>
    <OListItem value="2">
        Item 2
        <div slot="description">This is the description for the second item.</div>
    </OListItem>
    <OListItem value="3">
        Item 3 (disabled)
        <div slot="description">This is the description for the third item.</div>
    </OListItem>
</OList>
                    `;
                }
            },
            description: {
                story: 'A list with radio buttons enabled.'
            }
        }
    } });
//# sourceMappingURL=o-list.stories.js.map
