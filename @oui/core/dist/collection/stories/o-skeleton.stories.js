import { html } from "lit";
export default {
    title: 'Components/Skeleton',
    argTypes: {},
    args: {}
};
// Custom decorator to increase height
const customHeightDecorator = (storyFn) => {
    return html ` <div style="width: 300px; height: 150px">${storyFn()}</div> `;
};
const TemplateDefault = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: () => html `
    <o-skeleton></skeleton>
    `
};
const TemplateCard = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered'
    },
    render: () => html `
    <o-card style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25); border-radius: 8px; width: 400px; height: auto;">
    <div style="width: 100%; margin-bottom: 10px;">
    <o-skeleton></skeleton>
    </div>
    <div style="width: 100%; margin-bottom: 10px;">
    <o-skeleton></skeleton>
    </div>
    <div style="width: 75%; margin-bottom: 10px;">
    <o-skeleton></skeleton>
    </div>
    </o-card>
    `
};
export const Default = Object.assign(Object.assign({}, TemplateDefault), { args: {}, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    //Create Dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OSkeleton } from "@oui/vue";

<o-skeleton></o-skeleton>

-----------------------
// React Code Snippet
-----------------------

import { OSkeleton } from "@oui/react";

<OSkeleton></OSkeleton>
        `;
                }
            }
        }
    } });
export const SkeletonInCard = Object.assign(Object.assign({}, TemplateCard), { args: {}, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const {} = storyContext;
                    //Create Dynamic code example using args
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OSkeleton } from "@oui/vue";

<o-card style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25); border-radius: 8px; width: 400px; height: auto;">
  <div style="width: 100%; margin-bottom: 10px;">
    <o-skeleton></o-skeleton>
  </div>
  <div style="width: 100%; margin-bottom: 10px;">
    <o-skeleton></o-skeleton>
  </div>
  <div style="width: 75%; margin-bottom: 10px;">
    <o-skeleton></o-skeleton>
  </div>
</o-card>

-----------------------
// React Code Snippet
-----------------------

import { OSkeleton } from "@oui/react";

<OCard style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: 8, width: 400, height: 'auto' }}>
  <div style={{ width: '100%', marginBottom: 10 }}>
    <OSkeleton />
  </div>
  <div style={{ width: '100%', marginBottom: 10 }}>
    <OSkeleton />
  </div>
  <div style={{ width: '75%', marginBottom: 10 }}>
    <OSkeleton />
  </div>
</OCard>
        `;
                }
            }
        }
    } });
//# sourceMappingURL=o-skeleton.stories.js.map
