import { html } from "lit";
export default {
    title: 'Components/Select',
    argTypes: {
        nameValue: {
            control: 'text',
            table: {
                defaultValue: { summary: 'idString' }
            }
        },
        open: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        label: {
            control: 'text',
            table: {
                defaultValue: { summary: 'Default Label' }
            }
        },
        placement: {
            control: 'select',
            options: ['top', 'bottom'],
            table: {
                defaultValue: { summary: 'bottom' }
            }
        },
        placeholder: {
            control: 'text',
            table: {
                defaultValue: { summary: '' }
            }
        },
        disabled: {
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
        required: {
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        errorText: {
            control: 'text',
            table: {
                defaultValue: { summary: 'This field is required!' }
            }
        }
    },
    args: {
        nameValue: 'idString',
        open: false,
        label: 'Select Label',
        placement: 'bottom',
        placeholder: 'Select an option...',
        disabled: false,
        helpText: '',
        required: false,
        errorText: ''
    }
};
// Custom decorator to increase height
const customHeightDecorator = (storyFn, context) => {
    return html ` <div style="height: 300px;">${storyFn(context.args, context)}</div> `;
};
const Template = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-select
			open="${args.open}"
			label="${args.label}"
			placement="${args.placement}"
			placeholder="${args.placeholder}"
			disabled="${args.disabled}"
			help-text="${args.helpText}"
			required="${args.required}"
			errorText="${args.errorText}"
		>
			<o-option value="option1">Option One</o-option>
			<o-option value="option2">Option Two</o-option>
		</o-select>
	`
};
const TemplateComplicatedOptions = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: (args) => html `
		<o-select
			open="${args.open}"
			label="${args.label}"
			placement="${args.placement}"
			placeholder="${args.placeholder}"
			disabled="${args.disabled}"
			help-text="${args.helpText}"
			required="${args.required}"
			errorText="${args.errorText}"
		>
			<o-option value="option1">Option One</o-option>
			<o-option value="option2">Option Two</o-option>
			<o-divider></o-divider>
			<o-option value="option3">Option Three</o-option>
			<o-option value="option4" disabled>Option Four (Disabled)</o-option>
			<o-option value="option5">Option Five</o-option>
		</o-select>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        label: 'Select Label',
        placement: 'bottom',
        placeholder: 'Select an option...',
        disabled: false,
        helpText: '',
        required: false,
        errorText: ''
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

<o-select open="${args.open}" label="${args.label}" placement="${args.placement}" placeholder="${args.placeholder}" disabled="${args.disabled}" help-text="${args.helpText}" required="${args.required}" errorText="${args.errorText}">
	<o-option value="optiona">Option A</o-option>
	<o-option value="optionb">Option B</o-option>
	<o-option value="optionc">Option C</o-option>
	<o-option value="optiond">Option D</o-option>
	<o-option value="optione">Option E</o-option>
	<o-option value="optionf">Option F</o-option>
	<o-option value="optiong">Option G</o-option>
	<o-option value="optionh">Option H</o-option>
	<o-option value="optioni">Option I</o-option>
	<o-option value="optionj">Option J</o-option>
	<o-option value="optionk">Option K</o-option>
</o-select>

-----------------------
// React Code Snippet
-----------------------

return (
<OSelect open="${args.open}" label="${args.label}" placement="${args.placement}" placeholder="${args.placeholder}" disabled="${args.disabled}" help-text="${args.helpText}" required="${args.required}" errorText="${args.errorText} onOChange={event.detail.value}">
	<OOption value="optiona">Option A</OOption>
	<OOption value="optionb">Option B</OOption>
	<OOption value="optionc">Option C</OOption>
	<OOption value="optiond">Option D</OOption>
	<OOption value="optione">Option E</OOption>
	<OOption value="optionf">Option F</OOption>
	<OOption value="optiong">Option G</OOption>
	<OOption value="optionh">Option H</OOption>
	<OOption value="optioni">Option I</OOption>
	<OOption value="optionj">Option J</OOption>
	<OOption value="optionk">Option K</OOption>
</OSelect>
);
}
			`;
                }
            },
            description: {
                story: 'A default select.'
            }
        }
    } });
export const Disabled = Object.assign(Object.assign({}, Template), { args: {
        label: 'This Select is Disabled',
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

<o-select label="${args.label}" disabled="${args.disabled}">
	<o-option value="option1">Option One</o-option>
	<o-option value="option2">Option Two</o-option>
</o-select>

-----------------------
// React Code Snippet
-----------------------

return (
<OSelect label="${args.label}" disabled="${args.disabled}">
	<OOption value="option1">Option One</OOption>
	<OOption value="option2">Option Two</OOption>
</OSelect>
);

			`;
                }
            },
            description: {
                story: 'A disabled select that will not open the listbox when the combobox is clicked.'
            }
        }
    } });
export const Required = Object.assign(Object.assign({}, Template), { args: {
        label: 'This Select is Required',
        required: true
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

<o-select label="${args.label}" required="${args.required}">
	<o-option value="optiona">Option A</o-option>
	<o-option value="optionb">Option B</o-option>
	<o-option value="optionc">Option C</o-option>
	<o-option value="optiond">Option D</o-option>
	<o-option value="optione">Option E</o-option>
	<o-option value="optionf">Option F</o-option>
	<o-option value="optiong">Option G</o-option>
	<o-option value="optionh">Option H</o-option>
	<o-option value="optioni">Option I</o-option>
	<o-option value="optionj">Option J</o-option>
	<o-option value="optionk">Option K</o-option>
</o-select>

-----------------------
// React Code Snippet
-----------------------

return (
<OSelect label=${args.label} required="${args.required}">
	<OOption value="optiona">Option A</OOption>
	<OOption value="optionb">Option B</OOption>
	<OOption value="optionc">Option C</OOption>
	<OOption value="optiond">Option D</OOption>
	<OOption value="optione">Option E</OOption>
	<OOption value="optionf">Option F</OOption>
	<OOption value="optiong">Option G</OOption>
	<OOption value="optionh">Option H</OOption>
	<OOption value="optioni">Option I</OOption>
	<OOption value="optionj">Option J</OOption>
	<OOption value="optionk">Option K</OOption>
</OSelect>
);

			`;
                }
            },
            description: {
                story: 'A required select.'
            }
        }
    } });
export const HelpText = Object.assign(Object.assign({}, Template), { args: {
        label: 'This Select has Help Text',
        helpText: 'This is the help text!'
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

<o-select label="${args.label}" help-text="${args.helpText}">
	<o-option value="optiona">Option A</o-option>
	<o-option value="optionb">Option B</o-option>
	<o-option value="optionc">Option C</o-option>
	<o-option value="optiond">Option D</o-option>
	<o-option value="optione">Option E</o-option>
	<o-option value="optionf">Option F</o-option>
	<o-option value="optiong">Option G</o-option>
	<o-option value="optionh">Option H</o-option>
	<o-option value="optioni">Option I</o-option>
	<o-option value="optionj">Option J</o-option>
	<o-option value="optionk">Option K</o-option>
</o-select>

-----------------------
// React Code Snippet
-----------------------

return (
<OSelect label="${args.label}" help-text="${args.helpText}">
	<OOption value="optiona">Option A</OOption>
	<OOption value="optionb">Option B</OOption>
	<OOption value="optionc">Option C</OOption>
	<OOption value="optiond">Option D</OOption>
	<OOption value="optione">Option E</OOption>
	<OOption value="optionf">Option F</OOption>
	<OOption value="optiong">Option G</OOption>
	<OOption value="optionh">Option H</OOption>
	<OOption value="optioni">Option I</OOption>
	<OOption value="optionj">Option J</OOption>
	<OOption value="optionk">Option K</OOption>
</OSelect>
);

			`;
                }
            },
            description: {
                story: 'A select with help text.'
            }
        }
    } });
export const ComplicatedSelect = Object.assign(Object.assign({}, TemplateComplicatedOptions), { args: {
        label: 'This Select has More Complex Options'
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

<o-select label="${args.label}">
	<o-option value="option1">Option One</o-option>
	<o-option value="option2">Option Two</o-option>
	<o-divider></o-divider>
	<o-option value="option3">Option Three</o-option>
	<o-option value="option4" disabled>Option Four (Disabled)</o-option>
	<o-option value="option5">Option Five</o-option>
</o-select>

-----------------------
// React Code Snippet
-----------------------

return (
<OSelect label="${args.label}">
	<OOption value="option1">Option One</OOption>
	<OOption value="option2">Option Two</OOption>
	<ODivider></ODivider>
	<OOption value="option3">Option Three</OOption>
	<OOption value="option4" disabled>Option Four (Disabled)</OOption>
	<OOption value="option5">Option Five</OOption>
</OSelect>
);

			`;
                }
            },
            description: {
                story: 'A select with a more complex menu of options, including a disabled option and a divider.'
            }
        }
    } });
//# sourceMappingURL=o-select.stories.js.map
