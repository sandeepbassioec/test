import { html } from "lit";
export default {
    title: 'Components/Radio',
    argTypes: {
        nameValue: { control: 'text', table: { defaultValue: { summary: 'idValue' } } },
        label: { control: 'text', table: { defaultValue: { summary: 'Default Radio' } } },
        value: { control: 'text', table: { defaultValue: { summary: 'value' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        checked: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        nameValue: 'idValue',
        label: 'label',
        value: 'value',
        disabled: false,
        checked: false
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
		<o-radio
			id=${args.nameValue}
			label=${args.label}
			value=${args.value}
			?disabled=${args.disabled}
			?checked=${args.checked}
		></o-radio>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        label: 'Default Radio'
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
	
	import { ORadio } from "@oecui/vue";
	
	<o-radio id=${args.nameValue} value=${args.indeterminate} label=${args.label} disabled=${args.disabled} checked=${args.checked}></o-radio>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadio } from "@oecui/react";
	
	<ORadio id=${args.nameValue} value=${args.indeterminate} label=${args.label} disabled=${args.disabled} checked=${args.checked}></ORadio>
	
	`;
                }
            },
            description: {
                story: 'The default state of the radio, <strong>unchecked</strong> and <strong>enabled</strong>.'
            }
        }
    } });
export const Checked = Object.assign(Object.assign({}, Template), { args: {
        label: 'Checked Radio',
        checked: true
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
	
	import { ORadio } from "@oecui/vue";
	
	<o-radio id=${args.nameValue} checked=${args.checked} label=${args.label}></o-radio>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadio } from "@oecui/react";
	
	<ORadio id=${args.nameValue} checked=${args.checked} label=${args.label}></ORadio>
	
	`;
                }
            },
            description: {
                story: 'A radio in the checked state, indicating a <strong>selected</strong> option.'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        label: 'Disabled Radio',
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
	
	import { ORadio } from "@oecui/vue";
	
	<o-radio id=${args.nameValue} disabled=${args.disabled} label=${args.label}></o-radio>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadio } from "@oecui/react";
	
	<ORadio id=${args.nameValue} disabled=${args.disabled} label=${args.label}></ORadio>
	
	`;
                }
            },
            description: {
                story: 'A <strong>disabled</strong> radio that cannot be interacted with.'
            }
        }
    } });
export const CustomLabel = Object.assign(Object.assign({}, Template), { args: {
        label: 'Custom Label Radio'
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
	
	import { ORadio } from "@oecui/vue";
	
	<o-radio id=${args.nameValue} label=${args.label}></o-radio>
	
-----------------------
// React Code Snippet
-----------------------
	
	import { ORadio } from "@oecui/react";
	
	<ORadio id=${args.nameValue} label=${args.label}></ORadio>
	
	`;
                }
            },
            description: {
                story: 'A radio with a <strong>custom label text</strong>.'
            }
        }
    } });
//# sourceMappingURL=o-radio.stories.js.map
