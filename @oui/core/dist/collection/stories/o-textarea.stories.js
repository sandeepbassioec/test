import { html } from "lit";
export default {
    title: 'Components/Textarea',
    argTypes: {
        label: { control: 'text', table: { defaultValue: { summary: 'Default Textarea' } } },
        placeholder: { control: 'text', table: { defaultValue: { summary: 'Enter text here' } } },
        value: { control: 'text', table: { defaultValue: { summary: '' } } },
        nameValue: { control: 'text', table: { defaultValue: { summary: 'idString' } } },
        required: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        errorText: { control: 'text', table: { defaultValue: { summary: '' } } },
        helpText: { control: 'text', table: { defaultValue: { summary: '' } } }
    },
    args: {
        label: 'Default Textarea',
        placeholder: 'Enter text here',
        value: '',
        nameValue: 'idString',
        required: false,
        disabled: false,
        errorText: '',
        helpText: ''
    }
};
const Template = {
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-textarea
			label=${args.label}
			placeholder=${args.placeholder}
			value=${args.value}
			required=${args.required}
			disabled=${args.disabled}
			error-text=${args.errorText}
			help-text=${args.helpText}
			name-value=${args.nameValue}
		></o-textarea>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
// Vue Code Snippet
-----------------------

import { OTextarea } from "@oui/vue";

<o-textarea
	label="${args.label}"
	placeholder="${args.placeholder}"
	required="${args.required}"
	disabled="${args.disabled}"
</o-textarea>

// React Code Snippet
-----------------------

import { OTextarea } from "@oui/react";

<OTextarea
  	label="${args.label}"
    placeholder="${args.placeholder}"
	required="${args.required}"
	disabled="${args.disabled}"
></OTextarea>
          `;
                }
            },
            description: {
                story: 'A default <strong>Textarea</strong>.'
            }
        }
    } });
export const Required = Object.assign(Object.assign({}, Template), { args: {
        label: 'Required Textarea',
        required: true,
        errorText: 'This field is required!'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
// Vue Code Snippet
-----------------------

import { OTextarea } from "@oui/vue";

<o-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      required="${args.required}"
      error-text="${args.errorText}"
    ></o-textarea>

// React Code Snippet
-----------------------

import { OTextarea } from "@oui/react";

<OTextarea
  	label="${args.label}"
      placeholder="${args.placeholder}"
      required="${args.required}"
      error-text="${args.errorText}"
></OTextarea>
          `;
                }
            },
            description: {
                story: 'A <strong>Textarea</strong> that includes required astrict to indicate required content.'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        label: 'Disabled Textarea',
        disabled: true
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
// Vue Code Snippet
-----------------------

import { OTextarea } from "@oui/vue";

<o-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      disabled="${args.disabled}"
    ></o-textarea>

// React Code Snippet
-----------------------

import { OTextarea } from "@oui/react";

<OTextarea
  	label="${args.label}"
    placeholder="${args.placeholder}"
	disabled="${args.disabled}"
></OTextarea>
          `;
                }
            },
            description: {
                story: 'A <strong>Textarea</strong> that has been disabled.'
            }
        }
    } });
export const WithHelpText = Object.assign(Object.assign({}, Template), { args: {
        label: 'Textarea with Help Text',
        helpText: 'This is some help text.'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    // Create dynamic code example using args
                    return `
// Vue Code Snippet
-----------------------

import { OTextarea } from "@oui/vue";

<o-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      help-text="${args.helpText}"
    ></o-textarea>

// React Code Snippet
-----------------------

import { OTextarea } from "@oui/react";

<OTextarea
  	label="${args.label}"
    placeholder="${args.placeholder}"
	help-text="${args.helpText}"
></OTextarea>
          `;
                }
            },
            description: {
                story: 'A <strong>Textarea</strong> with some help text below.'
            }
        }
    } });
//# sourceMappingURL=o-textarea.stories.js.map
