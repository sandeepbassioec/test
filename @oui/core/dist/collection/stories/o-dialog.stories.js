import { html } from "lit";
export default {
    title: 'Components/Dialog',
    argTypes: {
        open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        label: { control: 'text', table: { defaultValue: { summary: 'Dialog Title' } } },
        noClose: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        open: false,
        label: 'Dialog Title',
        noClose: false
    }
};
// Custom decorator to increase width
const customHeightDecorator = (storyFn) => {
    return html ` <div style="height: 384px;">${storyFn()}</div> `;
};
const DefaultStoryTemplate = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const dialogId = 'story-default-dialog';
        const openButtonId = 'story-default-open-button';
        const closeButtonId = 'story-default-close-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Dialog</o-button>
			<o-dialog id="${dialogId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<div slot="footer">
					<o-button id="${closeButtonId}" variant="primary">Close</o-button>
				</div>
			</o-dialog>

			<script>
				// Close all existing dialogs before opening a new one
				function closeAllDialogs(excludeId) {
					const allDialogs = document.querySelectorAll('o-dialog');
					const visibleDialogs = Array.from(allDialogs).filter((dialog) => {
						return dialog.id !== excludeId && dialog.shadowRoot?.querySelector('dialog');
					});

					visibleDialogs.forEach((dialog) => {
						if (typeof dialog.hide === 'function') {
							dialog.hide();
						}
					});
				}

				// Add event listener for the button to open the dialog
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					closeAllDialogs('${dialogId}');
					document.getElementById('${dialogId}').show();
				});

				// Add event listener for the close button to close the dialog
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${dialogId}').hide();
				});

				// Restore body scrollbars when dialog opens
				document.getElementById('${dialogId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
const TemplateNoClose = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const dialogId = 'noclose-dialog';
        const openButtonId = 'noclose-open-button';
        const closeButtonId = 'noclose-close-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Dialog</o-button>
			<o-dialog id="${dialogId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<div slot="footer">
					<o-button id="${closeButtonId}" variant="primary">Close</o-button>
				</div>
			</o-dialog>

			<script>
				// Close all existing dialogs before opening a new one
				function closeAllDialogs(excludeId) {
					const allDialogs = document.querySelectorAll('o-dialog');
					const visibleDialogs = Array.from(allDialogs).filter((dialog) => {
						return dialog.id !== excludeId && dialog.shadowRoot?.querySelector('dialog');
					});

					visibleDialogs.forEach((dialog) => {
						if (typeof dialog.hide === 'function') {
							dialog.hide();
						}
					});
				}

				// Add event listener for the button to open the dialog
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					closeAllDialogs('${dialogId}');
					document.getElementById('${dialogId}').show();
				});

				// Add event listener for the close button to close the dialog
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${dialogId}').hide();
				});

				// Restore body scrollbars when dialog opens
				document.getElementById('${dialogId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
const TemplatePreventOverlay = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const dialogId = 'prevent-overlay-dialog';
        const openButtonId = 'prevent-overlay-open-button';
        const closeButtonId = 'prevent-overlay-close-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Dialog</o-button>
			<o-dialog id="${dialogId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<div slot="footer">
					<o-button id="${closeButtonId}" variant="primary">Submit</o-button>
				</div>
			</o-dialog>

			<script>
				// Close all existing dialogs before opening a new one
				function closeAllDialogs(excludeId) {
					const allDialogs = document.querySelectorAll('o-dialog');
					const visibleDialogs = Array.from(allDialogs).filter((dialog) => {
						return dialog.id !== excludeId && dialog.shadowRoot?.querySelector('dialog');
					});

					visibleDialogs.forEach((dialog) => {
						if (typeof dialog.hide === 'function') {
							dialog.hide();
						}
					});
				}

				// Add event listener for the button to open the dialog
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					closeAllDialogs('${dialogId}');
					document.getElementById('${dialogId}').show();
				});

				// Add event listener for the close button to close the dialog
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${dialogId}').hide();
				});

				// Add overlay/keyboard prevention listener
				document.getElementById('${dialogId}').addEventListener('oRequestClose', function (event) {
					if (event.detail.source === 'overlay') {
						event.preventDefault();
					}
					if (event.detail.source === 'keyboard') {
						event.preventDefault();
					} else {
						console.log('Dialog can be closed.');
					}
				});

				// Restore body scrollbars when dialog opens
				document.getElementById('${dialogId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
const TemplateNoHeader = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const dialogId = 'noheader-dialog';
        const openButtonId = 'noheader-open-button';
        const closeButtonId = 'noheader-close-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Dialog</o-button>
			<o-dialog id="${dialogId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<div slot="footer">
					<o-button id="${closeButtonId}" variant="primary">Close</o-button>
				</div>
			</o-dialog>

			<script>
				// Close all existing dialogs before opening a new one
				function closeAllDialogs(excludeId) {
					const allDialogs = document.querySelectorAll('o-dialog');
					const visibleDialogs = Array.from(allDialogs).filter((dialog) => {
						return dialog.id !== excludeId && dialog.shadowRoot?.querySelector('dialog');
					});

					visibleDialogs.forEach((dialog) => {
						if (typeof dialog.hide === 'function') {
							dialog.hide();
						}
					});
				}

				// Add event listener for the button to open the dialog
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					closeAllDialogs('${dialogId}');
					document.getElementById('${dialogId}').show();
				});

				// Add event listener for the close button to close the dialog
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${dialogId}').hide();
				});

				// Restore body scrollbars when dialog opens
				document.getElementById('${dialogId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
export const Primary = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const dialogId = 'preview-dialog';
        const openButtonId = 'preview-open-button';
        const closeButtonId = 'preview-close-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Dialog</o-button>
			<o-dialog id="${dialogId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<div slot="footer">
					<o-button id="${closeButtonId}" variant="primary">Close</o-button>
				</div>
			</o-dialog>

			<script>
				// Close all existing dialogs before opening a new one
				function closeAllDialogs(excludeId) {
					const allDialogs = document.querySelectorAll('o-dialog');
					const visibleDialogs = Array.from(allDialogs).filter((dialog) => {
						return dialog.id !== excludeId && dialog.shadowRoot?.querySelector('dialog');
					});

					visibleDialogs.forEach((dialog) => {
						if (typeof dialog.hide === 'function') {
							dialog.hide();
						}
					});
				}

				// Add event listener for the button to open the dialog
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					closeAllDialogs('${dialogId}');
					document.getElementById('${dialogId}').show();
				});

				// Add event listener for the close button to close the dialog
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${dialogId}').hide();
				});

				// Restore body scrollbars when dialog opens
				document.getElementById('${dialogId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
export const Default = Object.assign(Object.assign({}, DefaultStoryTemplate), { args: {
        open: false, // Ensure the dialog is closed by default
        noClose: false
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

<template>
<button @click="open = true">Open Dialog</button>
<o-dialog :open="open" label="${args.label}" :no-close="${args.noClose}">
    <div>Dialog content goes here.</div>
    <template #footer>
    <button @click="open = false">Close</button>
    </template>
</o-dialog>
</template>

<script>
export default {
data() {
    return {
    open: false, // Ensure the dialog is closed by default
    };
},
};
</script>

-----------------------
// React Code Snippet
-----------------------

import { useState } from 'react';

function App() {
const [open, setOpen] = useState(false); // Ensure the dialog is closed by default

return (
    <>
    <button onClick={() => setOpen(true)}>Open Dialog</button>
    <o-dialog open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
        <div>Dialog content goes here.</div>
        <div slot="footer">
        <button onClick={() => setOpen(false)}>Close</button>
        </div>
    </o-dialog>
    </>
);
}
        `;
                }
            },
            description: {
                story: 'A default dialog that opens when the button is clicked.'
            }
        }
    } });
export const NoCloseButton = Object.assign(Object.assign({}, TemplateNoClose), { args: {
        open: false, // Change this to false to ensure the dialog is closed by default
        noClose: true
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
  -----------------------
  // Vue Code Snippet
  -----------------------
  
  <template>
    <button @click="open = true">Open Dialog</button>
    <o-dialog :open="open" label="${args.label}" :no-close="${args.noClose}">
      <div>Dialog content goes here.</div>
      <template #footer>
        <button @click="open = false">Close</button>
      </template>
    </o-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false, // Ensure the dialog is closed by default
      };
    },
  };
  </script>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { useState } from 'react';
  
  function App() {
    const [open, setOpen] = useState(false); // Ensure the dialog is closed by default
  
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <o-dialog open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
          <div>Dialog content goes here.</div>
          <div slot="footer">
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </o-dialog>
      </>
    );
  }
          `;
                }
            },
            description: {
                story: 'A dialog with the noClose property set to true, hiding the built-in close button and requiring alternative ways to close it.'
            }
        }
    } });
export const PreventOverlay = Object.assign(Object.assign({}, TemplatePreventOverlay), { args: {
        open: false, // Change this to false to ensure the dialog is closed by default
        noClose: false
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
  -----------------------
  // Vue Code Snippet
  -----------------------
  
  <template>
    <button @click="open = true">Open Dialog</button>
    <o-dialog :open="open" label="${args.label}" :no-close="${args.noClose}">
      <div>Dialog content goes here.</div>
      <template #footer>
        <button @click="open = false">Close</button>
      </template>
    </o-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false, // Ensure the dialog is closed by default
      };
    },
  };
  </script>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { useState } from 'react';
  
  function App() {
    const [open, setOpen] = useState(false); // Ensure the dialog is closed by default
  
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <o-dialog open={open} label="${args.label}" noClose={${args.noClose}}>
          <div>Dialog content goes here.</div>
          <div slot="footer">
            <button onClick={() => setOpen(false)}>Submit</button>
          </div>
        </o-dialog>
      </>
    );
  }
          `;
                }
            },
            description: {
                story: 'A dialog that prevents closing via overlay click and keyboard escape, demonstrating the o-request-close event handling.'
            }
        }
    } });
export const NoHeader = Object.assign(Object.assign({}, TemplateNoHeader), { args: {
        open: false, // Change this to false to ensure the dialog is closed by default
        noClose: true,
        label: ''
    }, parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
-----------------------
// Vue Code Snippet
-----------------------

<template>
  <button @click="open = true">Open Dialog</button>
  <o-dialog :open="open" label="${args.label}" :no-close="${args.noClose}">
    <div>Dialog content goes here.</div>
    <template #footer>
      <button @click="open = false">Close</button>
    </template>
  </o-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false, // Ensure the dialog is closed by default
    };
  },
};
</script>

-----------------------
// React Code Snippet
-----------------------

import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false); // Ensure the dialog is closed by default

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <o-dialog open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
        <div>Dialog content goes here.</div>
        <div slot="footer">
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </o-dialog>
    </>
  );
}
        `;
                }
            },
            description: {
                story: 'A dialog with the noClose property set to true, hiding the built-in close button and requiring alternative ways to close it.'
            }
        }
    } });
//# sourceMappingURL=o-dialog.stories.js.map
