import { html } from "lit";
export default {
    title: 'Components/Footer'
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            source: {
                transform: (_) => {
                    return `
// Vue Code Snippet
  -----------------------
  
  import { OFooter} from "@oui/vue";
  
  <o-footer>
    <div>© 2024 OEConnection. All rights reserved. (6.0.1)</div>
  </o-footer>
  
// React Code Snippet
  -----------------------
  
  import { OFooter} from "@oui/react";

  <OFooter>
    <div>© 2024 OEConnection. All rights reserved. (6.0.1)</div>
  </OFooter>
            `;
                }
            }
        }
    },
    render: () => html `
		<o-footer>
			<div>© 2024 OEConnection. All rights reserved. (6.0.1)</div>
		</o-footer>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'A default <strong>footer</strong>.'
            }
        }
    } });
//# sourceMappingURL=o-footer.stories.js.map
