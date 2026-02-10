import { html } from "lit";
export default {
    title: 'Components/Toast',
    argTypes: {
        open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        closable: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
        variant: {
            control: 'select',
            options: ['primary', 'success', 'neutral', 'warning', 'danger'],
            table: { defaultValue: { summary: 'primary' } }
        },
        duration: { control: 'number', table: { defaultValue: { summary: '3000' } } }
    },
    args: {
        open: false,
        closable: true,
        variant: 'success',
        duration: 3000
    }
};
// Counter to generate unique IDs
let toastCounter = 0;
const notify = (message, variant = 'primary', duration = 3000, closable = true) => {
    const toast = document.createElement('o-toast');
    toast.variant = variant;
    toast.closable = closable;
    toast.duration = duration;
    // Set the inner HTML for the toast
    toast.innerHTML = message;
    // Append the toast to the body and call the toast method
    document.body.append(toast);
    toast.show();
};
// Attach notify to the window object
document.notify = notify;
const createToast = (args) => {
    const buttonId = `show-toast-button-${toastCounter++}`;
    return html `
		<o-button id="${buttonId}">Show ${args.variant} Toast</o-button>

		<script>
			document.getElementById('${buttonId}').addEventListener('click', () => {
				const message = \`<strong>A ${args.variant.charAt(0).toUpperCase() + args.variant.slice(1)} toast.</strong>
				<div>This is information for the ${args.variant} toast.</div>\`;
				document.notify(message, '${args.variant}', ${args.duration}, ${args.closable});
			});
		</script>
	`;
};
const Template = {
    render: (args) => createToast(args)
};
export const PrimaryToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: true,
        variant: 'primary',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A primary toast that shows success message when the button is clicked.'
            },
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OButton,
	OToast
} from '@oui/react/dist/components';

function App() {
const notify = (message, variant = '${args.variant}', duration = ${args.duration}) => {
	const toast = document.createElement('o-toast');
	toast.variant = variant;
	toast.closable = ${args.closable};
	toast.duration = duration;
	toast.innerHTML = 
		message
	;
	document.body.append(toast);
	toast.show().then(() => {
		console.log('Toast shown');
	});
};


	const handleCreateToast = () => {
		notify(
			'<strong>A Primary toast.</strong><div>This is information for the primary toast.</div>',
			'${args.variant}',
			${args.duration}
		);
	};

	return (
		<OButton variant="primary" onClick={handleCreateToast}>
			Create Toast
		</OButton>
	);
}
					`;
                }
            }
        }
    } });
export const SuccessToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: true,
        variant: 'success',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A success toast that shows a success message when the button is clicked.'
            }
        }
    } });
export const WarningToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: true,
        variant: 'warning',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A warning toast that provides a warning message.'
            }
        }
    } });
export const DangerToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: true,
        variant: 'danger',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A danger toast that indicates an error or critical issue.'
            }
        }
    } });
export const NeutralToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: true,
        variant: 'neutral',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A neutral toast that provides general information.'
            }
        }
    } });
export const NonClosableToast = Object.assign(Object.assign({}, Template), { args: {
        open: false,
        closable: false,
        variant: 'success',
        duration: 3000
    }, parameters: {
        docs: {
            description: {
                story: 'A non-closable toast that cannot be dismissed by the user.'
            }
        }
    } });
//# sourceMappingURL=o-toast.stories.js.map
