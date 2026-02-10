import { html } from "lit";
export default {
    title: 'Components/Carousel',
    argTypes: {
        navigation: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
        pagination: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        navigation: false,
        pagination: false
    }
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
    render: (args) => html `
		<o-carousel navigation="${args.navigation}" pagination="${args.pagination}">
			<o-carousel-item>
				<div>
					<o-card>
						<div slot="header-text">SLIDE ONE</div>
						<div>The first slide in a carousel of CarouselItems.</div>
					</o-card>
				</div>
			</o-carousel-item>
			<o-carousel-item>
				<o-card>
					<div slot="header-text">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
				</o-card>
			</o-carousel-item>
			<o-carousel-item>
				<o-card>
					<div slot="header-text">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
				</o-card>
			</o-carousel-item>
		</o-carousel>
	`
};
const TemplateManual = {
    decorators: [customHeightDecorator],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light' // Set light as the default background
        }
    },
    render: (args) => html `
		<o-carousel id="carousel" navigation="${args.navigation}" pagination="${args.pagination}">
			<o-carousel-item>
				<o-card>
					<div slot="header-text">SLIDE ONE</div>
					<div>The first slide in a carousel of CarouselItems.</div>
				</o-card>
			</o-carousel-item>
			<o-carousel-item>
				<o-card>
					<div slot="header-text">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
				</o-card>
			</o-carousel-item>
			<o-carousel-item>
				<o-card>
					<div slot="header-text">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
				</o-card>
			</o-carousel-item>
		</o-carousel>
		<o-button id="go-to-slide">Go to Slide 3</o-button>

		<script>
			// Add event listener for the button to go to the third slide
			document.getElementById('go-to-slide').addEventListener('click', () => {
				document.getElementById('carousel').goToSlide(2);
			});
		</script>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A default content carousel with neither navigation nor pagination.'
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
	OCarousel,
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarousel>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE ONE</div>
					<div>The first slide in a carousel of CarouselItems.</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
        </OCard>
		  </OCarouselItem>
    </OCarousel>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel, o-carousel-item, o-card } from "@oui/vue";
  
<o-carousel navigation="${args.navigation}" pagination="${args.pagination}">
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE ONE</div>
      <div>The first slide in a carousel of CarouselItems.</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE THREE</div>
      <div>
        The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
        voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
        sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
      </div>
    </o-card>
  </o-carousel-item>
</o-carousel>
					`;
                }
            }
        }
    } });
export const Navigation = Object.assign(Object.assign({}, Template), { args: {
        navigation: true
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A carousel with navigation arrows.'
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
	OCarousel,
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarousel navigation="${args.navigation}">
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE ONE</div>
					<div>The first slide in a carousel of CarouselItems.</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
        </OCard>
		  </OCarouselItem>
    </OCarousel>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel, o-carousel-item, o-card } from "@oui/vue";
  
<o-carousel navigation="${args.navigation}">
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE ONE</div>
      <div>The first slide in a carousel of CarouselItems.</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE TWO</div>
      <div>
        The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
      </div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE THREE</div>
      <div>
        The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
        voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
        sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
      </div>
    </o-card>
  </o-carousel-item>
</o-carousel>
					`;
                }
            }
        }
    } });
export const Pagination = Object.assign(Object.assign({}, Template), { args: {
        pagination: true
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A carousel with pagination buttons only.'
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
	OCarousel,
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarousel pagination="${args.pagination}">
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE ONE</div>
          <div>The first slide in a carousel of CarouselItems.</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
        </OCard>
		  </OCarouselItem>
    </OCarousel>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel, o-carousel-item, o-card } from "@oui/vue";
  
<o-carousel pagination="${args.pagination}">
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE ONE</div>
      <div>The first slide in a carousel of CarouselItems.</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE TWO</div>
      <div>
        The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
      </div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE THREE</div>
      <div>
        The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
        voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
        sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
      </div>
    </o-card>
  </o-carousel-item>
</o-carousel>
					`;
                }
            }
        }
    } });
export const NavigationAndPagination = Object.assign(Object.assign({}, Template), { args: {
        navigation: true,
        pagination: true
    }, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A carousel with both navigation nor pagination.'
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
	OCarousel,
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarousel navigation="${args.navigation}" pagination="${args.pagination}">
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE ONE</div>
          <div>The first slide in a carousel of CarouselItems.</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
        </OCard>
		  </OCarouselItem>
    </OCarousel>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel, o-carousel-item, o-card } from "@oui/vue";
  
<o-carousel navigation="${args.navigation}" pagination="${args.pagination}">
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE ONE</div>
      <div>The first slide in a carousel of CarouselItems.</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE TWO</div>
      <div>
        The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
      </div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE THREE</div>
      <div>
        The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
        voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
        sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
      </div>
    </o-card>
  </o-carousel-item>
</o-carousel>
					`;
                }
            }
        }
    } });
export const ManualTrigger = Object.assign(Object.assign({}, TemplateManual), { args: {}, parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'A carousel with a manual slide change trigger.'
            },
            source: {
                transform: (_) => {
                    return `
-----------------------
// React Code Snippet
-----------------------

import React from 'react';
import {
	OCarousel,
	OCarouselItem,
  OCard
} from '@oui/react/dist/components';

	return (
    <OCarousel">
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE ONE</div>
          <div>The first slide in a carousel of CarouselItems.</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
        </OCard>
		  </OCarouselItem>
      <OCarouselItem>
			  <OCard>
          <div slot="headerText">SLIDE THREE</div>
					<div>
						The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
						sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
						voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
						sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
					</div>
        </OCard>
		  </OCarouselItem>
    </OCarousel>
	);
}

-----------------------
// Vue Code Snippet
-----------------------

import { o-carousel, o-carousel-item, o-card } from "@oui/vue";
  
<o-carousel>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE ONE</div>
      <div>The first slide in a carousel of CarouselItems.</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE TWO</div>
					<div>
						The second slide in a carousel of CarouselItems - this one has slightly more content than the first slide.
					</div>
    </o-card>
  </o-carousel-item>
  <o-carousel-item>
    <o-card>
      <div slot="header-text">SLIDE THREE</div>
      <div>
        The third slide in a carousel of CarouselItems - this slide will have the most content. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Repudiandae recusandae impedit repellat tempora iure, atque
        voluptatibus quibusdam asperiores aliquam ut, delectus omnis, illum doloremque ea! Consequatur reprehenderit
        sint ad hic minus aut labore cumque magnam explicabo voluptatem. Omnis, ipsum quidem.
      </div>
    </o-card>
  </o-carousel-item>
</o-carousel>
					`;
                }
            }
        }
    } });
//# sourceMappingURL=o-carousel.stories.js.map
