import { html } from "lit";
export default {
    title: 'Components/Drawer',
    argTypes: {
        open: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        label: { control: 'text', table: { defaultValue: { summary: 'Drawer Title' } } },
        noClose: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        open: false,
        label: 'Drawer Title',
        noClose: false
    }
};
// Custom decorator to increase height
const customHeightDecorator = (storyFn) => {
    return html ` <div style="height: 400px;">${storyFn()}</div> `;
};
const DefaultStoryTemplate = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const drawerId = 'story-default-drawer';
        const openButtonId = 'story-default-open-button';
        const closeButtonId = 'story-default-close-button';
        const submitButtonId = 'story-default-submit-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Drawer</o-button>
			<o-drawer id="${drawerId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilisis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
				</div>
				<div slot="footer" style="display:flex">
					<o-button id="${closeButtonId}" variant="secondary" style="margin-right: 10px">Close</o-button>
					<o-button id="${submitButtonId}" variant="primary">Submit</o-button>
				</div>
			</o-drawer>

			<script>
				// Add event listener for the button to open the drawer
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').show();
				});

				// Add event listener for the close button to close the drawer
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Add event listener for the submit button to close the drawer
				document.getElementById('${submitButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Restore body scrollbars when drawer opens
				document.getElementById('${drawerId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
const TemplateScroll = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'fullscreen'
    },
    render: (args) => {
        const drawerId = 'story-scroll-drawer';
        const openButtonId = 'story-scroll-open-button';
        const closeButtonId = 'story-scroll-close-button';
        const submitButtonId = 'story-scroll-submit-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Drawer</o-button>
			<o-drawer id="${drawerId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilisis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilitis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilitis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilitis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilitis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
				</div>
				<div slot="footer" style="display:flex">
					<o-button id="${closeButtonId}" variant="secondary" style="margin-right: 10px">Close</o-button>
					<o-button id="${submitButtonId}" variant="primary">Submit</o-button>
				</div>
			</o-drawer>

			<script>
				// Add event listener for the button to open the drawer
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').show();
				});

				// Add event listener for the close button to close the drawer
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Add event listener for the submit button to close the drawer
				document.getElementById('${submitButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Restore body scrollbars when drawer opens
				document.getElementById('${drawerId}').addEventListener('oShow', () => {
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
        const drawerId = 'story-noclose-drawer';
        const openButtonId = 'story-noclose-open-button';
        const closeButtonId = 'story-noclose-close-button';
        const submitButtonId = 'story-noclose-submit-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Drawer</o-button>
			<o-drawer id="${drawerId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilitis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
				</div>
				<div slot="footer" style="display:flex">
					<o-button id="${closeButtonId}" variant="secondary" style="margin-right: 10px">Close</o-button>
					<o-button id="${submitButtonId}" variant="primary">Submit</o-button>
				</div>
			</o-drawer>

			<script>
				// Add event listener for the button to open the drawer
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').show();
				});

				// Add event listener for the close button to close the drawer
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Add event listener for the submit button to close the drawer
				document.getElementById('${submitButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Restore body scrollbars when drawer opens
				document.getElementById('${drawerId}').addEventListener('oShow', () => {
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
        const drawerId = 'preview-drawer';
        const openButtonId = 'preview-open-button';
        const closeButtonId = 'preview-close-button';
        const submitButtonId = 'preview-submit-button';
        return html `
			<o-button id="${openButtonId}" variant="primary">Open Drawer</o-button>
			<o-drawer id="${drawerId}" ?open="${args.open}" label="${args.label}" ?no-close="${args.noClose}">
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sodales diam. Pellentesque volutpat,
						ante at sodales elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi. Suspendisse
						potenti. Maecenas varius vehicula ligula non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada rutrum, mi lacus tincidunt
						tellus, mattis facilisis lacus lectus sed risus. Suspendisse faucibus sagittis libero id posuere.
					</p>
				</div>
				<div slot="footer" style="display:flex">
					<o-button id="${closeButtonId}" variant="secondary" style="margin-right: 10px">Close</o-button>
					<o-button id="${submitButtonId}" variant="primary">Submit</o-button>
				</div>
			</o-drawer>

			<script>
				// Add event listener for the button to open the drawer
				document.getElementById('${openButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').show();
				});

				// Add event listener for the close button to close the drawer
				document.getElementById('${closeButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Add event listener for the submit button to close the drawer
				document.getElementById('${submitButtonId}').addEventListener('click', () => {
					document.getElementById('${drawerId}').hide();
				});

				// Restore body scrollbars when drawer opens
				document.getElementById('${drawerId}').addEventListener('oShow', () => {
					document.body.style.overflow = '';
				});
			</script>
		`;
    }
};
export const Default = Object.assign(Object.assign({}, DefaultStoryTemplate), { args: {
        open: false,
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
<button @click="open = true">Open Drawer</button>
<o-drawer :open="open" label="${args.label}" :no-close="${args.noClose}">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
    <template #footer>
    <button @click="open = false">Close</button>
    <button @click="open = false">Submit</button>
    </template>
</o-drawer>
</template>

<script>
export default {
data() {
    return {
    open: false, // Ensure the drawer is closed by default
    };
},
};
</script>

-----------------------
// React Code Snippet
-----------------------

import { useState } from 'react';

function App() {
const [open, setOpen] = useState(false); // Ensure the drawer is closed by default

return (
    <>
    <button onClick={() => setOpen(true)}>Open Drawer</button>
    <o-drawer open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
        Drawer content goes here.
        <div slot="footer">
        <button onClick={() => setOpen(false)}>Close</button>
        <button onClick={() => setOpen(false)}>Submit</button>
        </div>
    </o-drawer>
    </>
);
}
        `;
                }
            },
            description: {
                story: 'A default drawer that opens when the button is clicked.'
            }
        }
    } });
export const Scroll = Object.assign(Object.assign({}, TemplateScroll), { args: {
        open: false, // Ensure the drawer is closed by default
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
<button @click="open = true">Open Drawer</button>
<o-drawer :open="open" label="${args.label}" :no-close="${args.noClose}">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus at sodales diam. Pellentesque volutpat, ante at sodales
					elementum, erat urna interdum turpis, vel ullamcorper arcu nunc ut nisi.
					Suspendisse potenti. Maecenas varius vehicula ligula non tristique.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum eget nisi ac rutrum. Donec rhoncus, mauris id malesuada
                    rutrum, mi lacus tincidunt tellus, mattis facilisis lacus lectus sed risus.
                    Suspendisse faucibus sagittis libero id posuere.
                    </p>
    <template #footer>
    <button @click="open = false">Close</button>
    <button @click="open = false">Submit</button>
    </template>
</o-drawer>
</template>

<script>
export default {
data() {
    return {
    open: false, // Ensure the drawer is closed by default
    };
},
};
</script>

-----------------------
// React Code Snippet
-----------------------

import { useState } from 'react';

function App() {
const [open, setOpen] = useState(false); // Ensure the drawer is closed by default

return (
    <>
    <button onClick={() => setOpen(true)}>Open Drawer</button>
    <o-drawer open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
        <div slot="default">When content reaches a certain point slot will scroll</div>
        <div slot="footer">
        <button onClick={() => setOpen(false)}>Close</button>
        <button onClick={() => setOpen(false)}>Submit</button>
        </div>
    </o-drawer>
    </>
);
}
        `;
                }
            },
            description: {
                story: 'A drawer that demonstrates scrolling behavior when content exceeds the available height.'
            }
        }
    } });
export const NoCloseButton = Object.assign(Object.assign({}, TemplateNoClose), { args: {
        open: false, // Change this to false to ensure the drawer is closed by default
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
    <button @click="open = true">Open Drawer</button>
    <o-drawer :open="open" label="${args.label}" :no-close="${args.noClose}">
      <div>Drawer content goes here.</div>
      <template #footer>
        <button @click="open = false">Close</button>
        <button @click="open = false">Submit</button>
      </template>
    </o-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false, // Ensure the drawer is closed by default
      };
    },
  };
  </script>
  
  -----------------------
  // React Code Snippet
  -----------------------
  
  import { useState } from 'react';
  
  function App() {
    const [open, setOpen] = useState(false); // Ensure the drawer is closed by default
  
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <o-drawer open={open} label="${args.label}" noClose={${args.noClose}} onOHide={() => setOpen(false)}>
          <div>Drawer content goes here.</div>
          <div slot="footer">
            <button onClick={() => setOpen(false)}>Close</button>
            <button onClick={() => setOpen(false)}>Submit</button>
          </div>
        </o-drawer>
      </>
    );
  }
          `;
                }
            },
            description: {
                story: 'A drawer with the noClose property set to true, hiding the built-in close button and requiring alternative ways to close it.'
            }
        }
    } });
//# sourceMappingURL=o-drawer.stories.js.map
