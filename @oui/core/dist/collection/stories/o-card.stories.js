import { html } from "lit";
export default {
    title: 'Components/Card',
    component: 'o-card',
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    }
};
const Template = {
    render: () => html `
		<o-card>
			<div slot="header-text">Header title</div>
			<div slot="header-icon"><o-icon-button name="close"></o-icon-button></div>
			<div slot>
				This is a basic card that has a header title, a close icon and a description in the content area. If you add
				more information in this content area the content area will scroll vertically (as shown in the scrollable story
				below).
			</div>
		</o-card>
	`
};
export const BasicCard = Object.assign(Object.assign({}, Template), { parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
            -----------------------
            // Vue Code Snippet
            -----------------------

            import { OCard } from "@oui/vue";
              
            <o-card>
                <div slot="header-text">Header Title</div>
                <div slot="header-icon"><o-icon name="close"><o-icon></div>
                <div slot>This is a basic card that has a header title, a close icon 
                  and a description in the content area. If you add more information in this content area the content
                  area will scroll vertically (as shown in the scrollable story below).
                </div>
            </o-card>

            -----------------------
            // React Code Snippet
            -----------------------
              
            import { OCard } from "@oui/react";

            <OCard>
              <div slot="header-text">Header Title</div>
              <div slot="header-icon"><o-icon name="close"><o-icon></div>
              <div slot>This is a basic card that has a header title, a close icon 
                and a description in the content area. If you add more information in this content area the content
                area will scroll vertically (as shown in the scrollable story below).
              </div>
            </OCard>
          `;
                }
            },
            description: {
                story: 'A basic card with a custom header and body content.'
            }
        }
    } });
export const ScrollableCard = {
    render: () => html `
		<o-card>
			<div slot="header-text">Header title</div>
			<div slot="header-icon"><o-icon-button name="close"></o-icon-button></div>
			<div slot>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate dolor pulvinar orci condimentum
				consequat. Nam nec feugiat metus. Aliquam pellentesque, nunc vel commodo imperdiet, mi metus bibendum diam, vel
				ornare leo felis id nulla. Fusce risus leo, finibus sed erat nec, dictum ornare risus. Fusce congue maximus
				lorem. In a malesuada est, at ultricies dolor. Nam tincidunt ac dolor vel mollis. Pellentesque in aliquet est,
				sit amet ultricies ligula. Pellentesque ut faucibus erat. Sed congue dolor vel ligula hendrerit, ut euismod leo
				sagittis. Fusce est sapien, interdum nec justo ut, rutrum tempus sem. Aliquam vel ante dolor. Cras mollis augue
				ante, id rutrum mi vestibulum ac. Suspendisse sollicitudin nunc sit amet diam ultricies dignissim. Suspendisse
				lobortis felis eget tincidunt iaculis. Suspendisse lobortis felis eget tincidunt iaculis. Fusce est sapien,
				interdum nec justo ut, rutrum tempus sem. Aliquam vel ante dolor. Cras mollis augue ante, id rutrum mi
				vestibulum ac.
			</div>
		</o-card>
	`,
    parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OCard } from "@oui/vue";
  
<o-card>
  <div slot="header-text">Header title</div>
  <div slot="header-icon"><o-icon-button name="close"></o-icon-button></div>
  <div slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Etiam vulputate dolor pulvinar orci condimentum consequat. Nam nec feugiat metus. 
    Aliquam pellentesque, nunc vel commodo imperdiet, mi metus bibendum diam, vel ornare leo felis id nulla. 
    Fusce risus leo, finibus sed erat nec, dictum ornare risus. Fusce congue maximus lorem. 
    In a malesuada est, at ultricies dolor. Nam tincidunt ac dolor vel mollis. 
    Pellentesque in aliquet est, sit amet ultricies ligula.

    Pellentesque ut faucibus erat. 
    Sed congue dolor vel ligula hendrerit, ut euismod leo sagittis. 
    Fusce est sapien, interdum nec justo ut, rutrum tempus sem. 
    Aliquam vel ante dolor. Cras mollis augue ante, id rutrum mi vestibulum ac. 
    Suspendisse sollicitudin nunc sit amet diam ultricies dignissim. 
    Suspendisse lobortis felis eget tincidunt iaculis.

    Suspendisse lobortis felis eget tincidunt iaculis.
    Fusce est sapien, interdum nec justo ut, rutrum tempus sem. 
    Aliquam vel ante dolor. Cras mollis augue ante, id rutrum mi vestibulum ac. 
  </div>
</o-card>

-----------------------
// React Code Snippet
-----------------------
  
import { OCard } from "@oui/react";

<OCard>
  <div slot="header-text">Header title</div>
  <div slot="header-icon"><o-icon-button name="close"></o-icon-button></div>
  <div slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Etiam vulputate dolor pulvinar orci condimentum consequat. Nam nec feugiat metus. 
    Aliquam pellentesque, nunc vel commodo imperdiet, mi metus bibendum diam, vel ornare leo felis id nulla. 
    Fusce risus leo, finibus sed erat nec, dictum ornare risus. Fusce congue maximus lorem. 
    In a malesuada est, at ultricies dolor. Nam tincidunt ac dolor vel mollis. 
    Pellentesque in aliquet est, sit amet ultricies ligula.

    Pellentesque ut faucibus erat. 
    Sed congue dolor vel ligula hendrerit, ut euismod leo sagittis. 
    Fusce est sapien, interdum nec justo ut, rutrum tempus sem. 
    Aliquam vel ante dolor. Cras mollis augue ante, id rutrum mi vestibulum ac. 
    Suspendisse sollicitudin nunc sit amet diam ultricies dignissim. 
    Suspendisse lobortis felis eget tincidunt iaculis.

    Suspendisse lobortis felis eget tincidunt iaculis.
    Fusce est sapien, interdum nec justo ut, rutrum tempus sem. 
    Aliquam vel ante dolor. Cras mollis augue ante, id rutrum mi vestibulum ac. 
  </div>
</OCard>
          `;
                }
            },
            description: {
                story: 'A card with a constrained height and scrollable body content.'
            }
        }
    }
};
export const NoHeaderCard = {
    render: () => html `
      <o-card>
      <div slot>This is a basic card that has a no header title or close icon, just a 
      description in the content area.</div slot>
      </o-card>
  `,
    parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OCard } from "@oui/vue";
  
<o-card>
  <div slot>
    This is a basic card that has a no header title or close icon, just a 
    description in the content area.
  </div slot>
</o-card>

-----------------------
// React Code Snippet
-----------------------
  
import { OCard } from "@oui/react";

<OCard>
  <div slot>
    This is a basic card that has a no header title or close icon, just a 
    description in the content area.
  </div slot>
</OCard>
          `;
                }
            },
            description: {
                story: 'A card without a header, showcasing a minimal design.'
            }
        }
    }
};
//# sourceMappingURL=o-card.stories.js.map
