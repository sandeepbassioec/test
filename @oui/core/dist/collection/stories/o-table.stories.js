import { html } from "lit";
export default {
    title: 'Preview/Table'
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            source: {
                transform: () => {
                    // Create dynamic code example using args
                    return `
// Vue Code Snippet
-----------------------

import { OTable } from "@oui/vue";

<o-table>

</o-table>

// React Code Snippet
-----------------------

import { OTable } from "@oui/react";

<o-table>

</o-table>
          `;
                }
            }
        }
    },
    render: () => html ` <o-table> </o-table> `
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        },
        docs: {
            description: {
                story: 'A <strong>Card</strong> that includes everything available. This is includes a Card Head, a Subtitle, and Padding.'
            }
        }
    } });
//# sourceMappingURL=o-table.stories.js.map
