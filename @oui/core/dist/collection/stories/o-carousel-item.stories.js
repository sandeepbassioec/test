import { html } from "lit";
export default {
    title: 'Components/Carousel Item',
    argTypes: {},
    args: {}
};
const customHeightDecorator = (storyFn) => {
    return html ` <div style="height: 200px">${storyFn()}</div> `;
};
const Template = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        }
    },
    render: () => html `
		<o-carousel-item>
			<o-card>
				<div slot="header-text">CONTENT FOR A CAROUSEL ITEM</div>
				<div>
					This is content within a CarouselItem component, which essentially functions as a container to be placed into
					a Carousel.
				</div>
			</o-card>
		</o-carousel-item>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A default carousel item with a card slotted as content.'
            },
            source: {
                transform: (_) => {
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarouselItem>
      <OCard>
        <div slot="headerText">CONTENT FOR A CAROUSEL ITEM</div>							
        <div>This is content within a CarouselItem component, which essentially functions as a container to be placed into a Carousel.</div>
      </OCard>
    </OCarouselItem>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel-item, o-card } from "@oui/vue";
  

  <o-carousel-item>
    <o-card>
      <div slot="header-text">CONTENT FOR A CAROUSEL ITEM</div>							
      <div>This is content within a CarouselItem component, which essentially functions as a container to be placed into a Carousel.</div>
    </o-card>
  </o-carousel-item>
  
					`;
                }
            }
        }
    } });
//# sourceMappingURL=o-carousel-item.stories.js.map
