import { html } from "lit";
export default {
    title: 'Components/Checkbox',
    argTypes: {
        checked: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        nameValue: { control: 'text', table: { defaultValue: { summary: 'checkboxfield' } } },
        disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        indeterminate: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        label: { control: 'text', table: { defaultValue: { summary: 'Default Checkbox' } } },
        required: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        errorText: { control: 'text', table: { defaultValue: { summary: '' } } }
    },
    args: {
        checked: false,
        disabled: false,
        indeterminate: false,
        label: 'label',
        nameValue: 'idString',
        required: false,
        errorText: ''
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
		<o-checkbox
			?id=${args.nameValue}
			?checked=${args.checked}
			?disabled=${args.disabled}
			?indeterminate=${args.indeterminate}
			label=${args.label}
			required=${args.required}
			error-text=${args.errorText}
		></o-checkbox>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        nameValue: 'checkboxfield',
        label: 'Default Checkbox'
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
  
  import { OCheckbox } from "@oui/vue";
  
  <o-checkbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></o-checkbox>
  
-----------------------
// React Code Snippet
-----------------------
  
  import { OCheckbox } from "@oui/react";
  
  <OCheckbox 
    id="${args.nameValue}" 
    checked="${args.checked}" 
    disabled="${args.disabled}" 
    indeterminate="${args.indeterminate}" 
    label="${args.label}" 
    required="${args.required}" 
    error-text="${args.errorText}"
    onOChange={event.detail.checked}
  ></OCheckbox>
  
  `;
                }
            },
            description: {
                story: 'The default state of the checkbox, <strong>unchecked</strong> and <strong>enabled</strong>.'
            }
        }
    } });
export const Checked = Object.assign(Object.assign({}, Template), { args: {
        label: 'Checked Checkbox',
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
  
  import { OCheckbox } from "@oui/vue";
  
  <o-checkbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></o-checkbox>
  
-----------------------
// React Code Snippet
-----------------------
  
  import { OCheckbox } from "@oui/react";
  
  <OCheckbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></OCheckbox>
  
  `;
                }
            },
            description: {
                story: 'A checkbox in the checked state, indicating a <strong>selected</strong> option.'
            }
        }
    } });
export const Indeterminate = Object.assign(Object.assign({}, Template), { args: {
        label: 'indeterminate Checkbox',
        indeterminate: true
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
  
  import { OCheckbox } from "@oui/vue";
  
  <o-checkbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></o-checkbox>
  
-----------------------
// React Code Snippet
-----------------------
  
  import { OCheckbox } from "@oui/react";
  
  <OCheckbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></OCheckbox>
  
  `;
                }
            },
            description: {
                story: 'A checkbox in the indeterminate state, indicating a <strong>indeterminate</strong> option.'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        label: 'Disabled Checkbox',
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
  
  import { OCheckbox } from "@oui/vue";
  
  <o-checkbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></o-checkbox>
  
-----------------------
// React Code Snippet
-----------------------
  
  import { OCheckbox } from "@oui/react";
  
  <OCheckbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></OCheckbox>
  
  `;
                }
            },
            description: {
                story: 'A <strong>disabled</strong> checkbox that cannot be interacted with.'
            }
        }
    } });
export const CustomLabel = Object.assign(Object.assign({}, Template), { args: {
        label: 'Custom Label Checkbox'
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
  
  import { OCheckbox } from "@oui/vue";
  
  <o-checkbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></o-checkbox>
  
-----------------------
// React Code Snippet
-----------------------
  
  import { OCheckbox } from "@oui/react";
  
  <OCheckbox id="${args.nameValue}" checked="${args.checked}" disabled="${args.disabled}" indeterminate="${args.indeterminate}" label="${args.label}" required="${args.required}" error-text="${args.errorText}"></OCheckbox>
  
  `;
                }
            },
            description: {
                story: 'A checkbox with a <strong>custom label text</strong>.'
            }
        }
    } });
//# sourceMappingURL=o-checkbox.stories.js.map
