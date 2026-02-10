import { html } from "lit";
export default {
    title: 'Components/Radio Group',
    argTypes: {
        label: { control: 'text', table: { defaultValue: { summary: 'Default Radio Group' } } },
        name: { control: 'text', table: { defaultValue: { summary: 'options' } } },
        value: { control: 'text', table: { defaultValue: { summary: '' } } },
        helpText: { control: 'text', table: { defaultValue: { summary: '' } } },
        errorText: { control: 'text', table: { defaultValue: { summary: '' } } },
        required: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        label: 'Select one of the options:',
        name: 'options',
        value: '',
        helpText: '',
        errorText: '',
        required: false
    }
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        }
    },
    render: (args) => html `
		<o-radio-group
			name=${args.name}
			label=${args.label}
			value=${args.value}
			help-text=${args.helpText}
			error-text=${args.errorText}
			required=${args.required}
		>
			<o-radio value="1" label="This is option one"></o-radio>
			<o-radio value="2" label="This is option two"></o-radio>
			<o-radio value="3" label="This is option three"></o-radio>
		</o-radio-group>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        label: 'Default radio group:'
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
	
	import { ORadioGroup } from "@oecui/vue";
	
	<o-radio-group name=${args.name} label=${args.label} value=${args.value} help-text=${args.helpText} error-text=${args.errorText} required=${args.required}>
		<o-radio value="1" label="This is option one"></o-radio>
		<o-radio value="2" label="This is option two"></o-radio>
		<o-radio value="3" label="This is option three"></o-radio>
	</o-radio-group>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadioGroup } from "@oecui/react";

	<ORadioGroup name=${args.name} label=${args.label} value=${args.value} helpText=${args.helpText} errorText=${args.errorText} required=${args.required} onOChange={event.detail.value}>
		<ORadio value="1" label="This is option one"></ORadio>
		<ORadio value="2" label="This is option two"></ORadio>
		<ORadio value="3" label="This is option three"></ORadio>
	</ORadioGroup>
	
	`;
                }
            },
            description: {
                story: 'A default radio group with three radios.'
            }
        }
    } });
export const PreSelected = Object.assign(Object.assign({}, Template), { args: {
        label: 'Radio group with preselected value:',
        value: '1'
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
	
	import { ORadioGroup } from "@oecui/vue";
	
	<o-radio-group label=${args.label} value=${args.value}>
		<o-radio value="1" label="This is option one"></o-radio>
		<o-radio value="2" label="This is option two"></o-radio>
		<o-radio value="3" label="This is option three"></o-radio>
	</o-radio-group>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadioGroup } from "@oecui/react";

	<ORadioGroup label=${args.label} value=${args.value}>
		<ORadio value="1" label="This is option one"></ORadio>
		<ORadio value="2" label="This is option two"></ORadio>
		<ORadio value="3" label="This is option three"></ORadio>
	</ORadioGroup>
	
	`;
                }
            },
            description: {
                story: 'A radio group with three radios where one is preselected.'
            }
        }
    } });
export const Required = Object.assign(Object.assign({}, Template), { args: {
        label: 'Radio group that is required:',
        required: true
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
	
	import { ORadioGroup } from "@oecui/vue";
	
	<o-radio-group label=${args.label} required=${args.required}>
		<o-radio value="1" label="This is option one"></o-radio>
		<o-radio value="2" label="This is option two"></o-radio>
		<o-radio value="3" label="This is option three"></o-radio>
	</o-radio-group>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadioGroup } from "@oecui/react";

	<ORadioGroup label=${args.label} required=${args.required}>
		<ORadio value="1" label="This is option one"></ORadio>
		<ORadio value="2" label="This is option two"></ORadio>
		<ORadio value="3" label="This is option three"></ORadio>
	</ORadioGroup>
	
	`;
                }
            },
            description: {
                story: 'A radio group where a selection is required.'
            }
        }
    } });
export const HelpText = Object.assign(Object.assign({}, Template), { args: {
        label: 'Radio group with help text:',
        helpText: 'Please select one of the options above'
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
	
	import { ORadioGroup } from "@oecui/vue";
	
	<o-radio-group label=${args.label} help-text=${args.helpText}>
		<o-radio value="1" label="This is option one"></o-radio>
		<o-radio value="2" label="This is option two"></o-radio>
		<o-radio value="3" label="This is option three"></o-radio>
	</o-radio-group>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadioGroup } from "@oecui/react";

	<ORadioGroup label=${args.label} helpText=${args.helpText}>
		<ORadio value="1" label="This is option one"></ORadio>
		<ORadio value="2" label="This is option two"></ORadio>
		<ORadio value="3" label="This is option three"></ORadio>
	</ORadioGroup>
	
	`;
                }
            },
            description: {
                story: 'A radio group with help text displayed below.'
            }
        }
    } });
//# sourceMappingURL=o-radio-group.stories.js.map
