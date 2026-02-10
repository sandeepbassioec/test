import { html } from "lit";
export default {
    title: 'Components/Textfield',
    argTypes: {
        label: { control: 'text', table: { defaultValue: { summary: 'Default Input' } } },
        placeholder: { control: 'text', table: { defaultValue: { summary: 'Enter text here' } } },
        value: { control: 'text', table: { defaultValue: { summary: '' } } },
        nameValue: { control: 'text', table: { defaultValue: { summary: 'idString' } } },
        type: {
            control: 'select',
            options: ['email', 'number', 'password', 'text', 'time'],
            table: { defaultValue: { summary: 'text' } }
        },
        required: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        errorText: { control: 'text', table: { defaultValue: { summary: 'This field is required!' } } },
        helpText: { control: 'text', table: { defaultValue: { summary: '' } } }
    },
    args: {
        label: 'Default Input',
        placeholder: 'Enter text here',
        value: '',
        nameValue: 'idString',
        type: 'text',
        required: false,
        disabled: false,
        errorText: '',
        helpText: 'Help text goes here!'
    }
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            iframeHeight: 100 // Ensure the iframe has enough height to display the component
        }
    },
    render: (args) => html `
		<o-textfield
			label=${args.label}
			placeholder=${args.placeholder}
			value=${args.value}
			type=${args.type}
			?required=${args.required}
			?disabled=${args.disabled}
			error-text=${args.errorText}
			help-text=${args.helpText}
			name-value=${args.nameValue}
		>
		</o-textfield>
	`
};
const templateStartIcon = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            iframeHeight: 100 // Ensure the iframe has enough height to display the component
        }
    },
    render: (args) => html `
		<o-textfield
			label=${args.label}
			placeholder=${args.placeholder}
			value=${args.value}
			type=${args.type}
			?required=${args.required}
			?disabled=${args.disabled}
			error-text=${args.errorText}
			help-text=${args.helpText}
			name-value=${args.nameValue}
		>
			<o-icon slot="startIcon" name="search" size="sm"></o-icon>
		</o-textfield>
	`
};
const templateEndIcon = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            iframeHeight: 100 // Ensure the iframe has enough height to display the component
        }
    },
    render: (args) => html `
		<o-textfield
			label=${args.label}
			placeholder=${args.placeholder}
			value=${args.value}
			type=${args.type}
			?required=${args.required}
			?disabled=${args.disabled}
			error-text=${args.errorText}
			help-text=${args.helpText}
			name-value=${args.nameValue}
		>
			<o-icon slot="endIcon" name="search" size="sm"></o-icon>
		</o-textfield>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        label: 'Default Input',
        required: false,
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'A basic Input field using a <strong>Label</strong>.'
            }
        }
    } });
export const Required = Object.assign(Object.assign({}, Template), { args: {
        label: 'Required Input',
        required: true,
        helpText: '',
        errorText: 'This field is required'
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'An Input field using the <strong>Label</strong> as well as <i>required</i> indicators.<br> A required Input field needs to include both the asterisk beside the label as well as the help text just below the input field.'
            }
        }
    } });
export const HasError = Object.assign(Object.assign({}, Template), { args: {
        label: 'Required Input',
        placeholder: 'Enter required text',
        value: '',
        required: true,
        errorText: 'This field is required!',
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'An input field that has a error and a required field'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        label: 'Disabled Input',
        disabled: true,
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'A disabled Input field using a <strong>Label</strong> but has been disabled.'
            }
        }
    } });
export const Time = Object.assign(Object.assign({}, Template), { args: {
        label: 'Time Input',
        placeholder: '',
        type: 'time',
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'A basic input field where the <strong>type</strong> property is set to <strong>time</strong>.'
            }
        }
    } });
export const CustomHelpText = Object.assign(Object.assign({}, Template), { args: {
        label: 'Input with Custom Help',
        helpText: 'This is a custom help message for the input.',
        nameValue: 'custom-help-input'
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    ></o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
></OTextfield>
          `;
                }
            },
            description: {
                story: 'A basic Input field using a <strong>Label</strong>. This input field allows you to use custom text in the label and help text at the bottom.'
            }
        }
    } });
export const StartIcon = Object.assign(Object.assign({}, templateStartIcon), { args: {
        label: 'Default Input',
        required: false,
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    >
	  <o-icon slot="startIcon" name="search" size="sm"></o-icon>
	</o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
>
	<OIcon slot="startIcon" name="search" size="sm"></OIcon>
</OTextfield>
          `;
                }
            },
            description: {
                story: 'A basic Input field using a <strong>StartIcon slot</strong>. This input field allows you to add a icon at the beginning of the textfield'
            }
        }
    } });
export const EndIcon = Object.assign(Object.assign({}, templateEndIcon), { args: {
        label: 'Default Input',
        required: false,
        helpText: ''
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

import { OTextfield } from "@oui/vue";

<o-textfield
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      disabled="${args.disabled}"
      error-text="${args.errorText}"
      help-text="${args.helpText}"
	  name-value="${args.nameValue}"
    >
	  <o-icon slot="startIcon" name="search" size="sm"></o-icon>
	</o-textfield>

// React Code Snippet
-----------------------

import { OTextfield } from "@oui/react";

<OTextfield
  	label="${args.label}"
	placeholder="${args.placeholder}"
	value="${args.value}"
	type="${args.type}"
	required="${args.required}"
	disabled="${args.disabled}"
	error-text="${args.errorText}"
	help-text="${args.helpText}"
	name-value="${args.nameValue}"
>
	<OIcon slot="startIcon" name="search" size="sm"></OIcon>
	</OTextfield>
          `;
                }
            },
            description: {
                story: 'A basic Input field using a <strong>EndIcon slot</strong>. This input field allows you to add a icon at the beginning of the textfield'
            }
        }
    } });
//# sourceMappingURL=o-textfield.stories.js.map
