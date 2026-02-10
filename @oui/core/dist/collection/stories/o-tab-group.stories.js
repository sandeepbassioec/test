import { html } from "lit";
export default {
    title: 'Components/Tab Group',
    argTypes: {
        noScrollControls: { control: 'boolean', table: { defaultValue: { summary: 'false' } } }
    },
    args: {
        noScrollControls: false
    }
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    render: (args) => html `
		<o-tab-group no-scroll-controls=${args.noScrollControls}>
			<o-tab slot="nav" panel="tab1" active>Tab title 1</o-tab>
			<o-tab slot="nav" panel="tab2">Tab title 2</o-tab>
			<o-tab slot="nav" panel="tab3">Tab title 3</o-tab>
			<o-tab-panel name="tab1"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab2">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab3">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
		</o-tab-group>
	`
};
const TemplateScrolls = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    render: (args) => html `
		<o-tab-group no-scroll-controls=${args.noScrollControls}>
			<o-tab slot="nav" panel="tab1" active>Tab title 1</o-tab>
			<o-tab slot="nav" panel="tab2">Tab title 2</o-tab>
			<o-tab slot="nav" panel="tab3">Tab title 3</o-tab>
			<o-tab slot="nav" panel="tab4">Tab title 4</o-tab>
			<o-tab slot="nav" panel="tab5">Tab title 5</o-tab>
			<o-tab slot="nav" panel="tab6">Tab title 6</o-tab>
			<o-tab slot="nav" panel="tab7">Tab title 7</o-tab>
			<o-tab slot="nav" panel="tab8">Tab title 8</o-tab>
			<o-tab slot="nav" panel="tab9">Tab title 9</o-tab>
			<o-tab slot="nav" panel="tab10">Tab title 10</o-tab>
			<o-tab slot="nav" panel="tab11">Tab title 11</o-tab>
			<o-tab slot="nav" panel="tab12">Tab title 12</o-tab>
			<o-tab slot="nav" panel="tab13">Tab title 13</o-tab>
			<o-tab slot="nav" panel="tab14">Tab title 14</o-tab>
			<o-tab slot="nav" panel="tab15">Tab title 15</o-tab>
			<o-tab slot="nav" panel="tab16">Tab title 11</o-tab>
			<o-tab slot="nav" panel="tab17">Tab title 12</o-tab>
			<o-tab slot="nav" panel="tab18">Tab title 13</o-tab>
			<o-tab slot="nav" panel="tab19">Tab title 14</o-tab>
			<o-tab slot="nav" panel="tab20">Tab title 15</o-tab>
			<o-tab-panel name="tab1"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab2"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab3">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab4"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab5"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab6">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab7"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab8"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab9">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab10"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab11"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab12">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab13"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab14"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab15">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab16">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab17">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab18">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab19">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab20">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
		</o-tab-group>
	`
};
export const Default = Object.assign(Object.assign({}, Template), { args: {
        noScrollControls: false
    }, parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/vue";

<o-tab-group>
  <o-tab panel="tab1">Tab 1</o-tab>
  <o-tab panel="tab2">Tab 2</o-tab>
  <o-tab panel="tab3">Tab 3</o-tab>
  <o-tab-panel name="tab1">Content for Tab 1</o-tab-panel>
  <o-tab-panel name="tab2">Content for Tab 2</o-tab-panel>
  <o-tab-panel name="tab3">Content for Tab 3</o-tab-panel>
</o-tab-group>

-----------------------
// React Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/react";

<OTabGroup>
  <OTab panel="tab1">Tab 1</OTab>
  <OTab panel="tab2">Tab 2</OTab>
  <OTab panel="tab3">Tab 3</OTab>
  <OTabPanel name="tab1">Content for Tab 1</OTabPanel>
  <OTabPanel name="tab2">Content for Tab 2</OTabPanel>
  <OTabPanel name="tab3">Content for Tab 3</OTabPanel>
</OTabGroup>
          `;
                }
            },
            description: {
                story: 'A default tab group with three tabs and their corresponding content panels.'
            }
        }
    } });
export const NoScrollControls = Object.assign(Object.assign({}, Template), { args: {
        noScrollControls: true
    }, parameters: {
        docs: {
            source: {
                transform: () => {
                    return `
-----------------------
// Vue Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/vue";

<o-tab-group no-scroll-controls>
  <o-tab panel="tab1">Tab 1</o-tab>
  <o-tab panel="tab2">Tab 2</o-tab>
  <o-tab panel="tab3">Tab 3</o-tab>
  <o-tab-panel name="tab1">Content for Tab 1</o-tab-panel>
  <o-tab-panel name="tab2">Content for Tab 2</o-tab-panel>
  <o-tab-panel name="tab3">Content for Tab 3</o-tab-panel>
</o-tab-group>

-----------------------
// React Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/react";

<OTabGroup noScrollControls>
  <OTab panel="tab1">Tab 1</OTab>
  <OTab panel="tab2">Tab 2</OTab>
  <OTab panel="tab3">Tab 3</OTab>
  <OTabPanel name="tab1">Content for Tab 1</OTabPanel>
  <OTabPanel name="tab2">Content for Tab 2</OTabPanel>
  <OTabPanel name="tab3">Content for Tab 3</OTabPanel>
</OTabGroup>
          `;
                }
            },
            description: {
                story: 'A tab group without scroll controls, useful for smaller sets of tabs.'
            }
        }
    } });
export const PreSelectedTab = Object.assign(Object.assign({}, Template), { args: {
        noScrollControls: false
    }, render: (args) => html `
		<o-tab-group no-scroll-controls=${args.noScrollControls}>
			<o-tab slot="nav" panel="tab1">Tab 1</o-tab>
			<o-tab slot="nav" panel="tab2" active>Tab 2</o-tab>
			<o-tab slot="nav" panel="tab3">Tab 3</o-tab>
			<o-tab-panel name="tab1"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab2"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab3">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
		</o-tab-group>
	`, parameters: {
        source: {
            transform: () => {
                return `
-----------------------
// Vue Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/vue";

<o-tab-group>
<o-tab panel="tab1">Tab 1</o-tab>
<o-tab panel="tab2" active>Tab 2</o-tab>
<o-tab panel="tab3">Tab 3</o-tab>
<o-tab-panel name="tab1">Content for Tab 1</o-tab-panel>
<o-tab-panel name="tab2">Content for Tab 2</o-tab-panel>
<o-tab-panel name="tab3">Content for Tab 3</o-tab-panel>
</o-tab-group>

-----------------------
// React Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/react";

<OTabGroup>
<OTab panel="tab1">Tab 1</OTab>
<OTab panel="tab2" active>Tab 2</OTab>
<OTab panel="tab3">Tab 3</OTab>
<OTabPanel name="tab1">Content for Tab 1</OTabPanel>
<OTabPanel name="tab2">Content for Tab 2</OTabPanel>
<OTabPanel name="tab3">Content for Tab 3</OTabPanel>
</OTabGroup>
      `;
            }
        },
        docs: {
            description: {
                story: 'A tab group with the second tab preselected .'
            }
        }
    } });
export const ScrollingTabs = Object.assign(Object.assign({}, TemplateScrolls), { args: {
        noScrollControls: false
    }, parameters: {
        source: {
            transform: () => {
                return `
-----------------------
// Vue Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/vue";

<o-tab-group>
<o-tab panel="tab1">Tab 1</o-tab>
<o-tab panel="tab2" active>Tab 2</o-tab>
<o-tab panel="tab3">Tab 3</o-tab>
<o-tab-panel name="tab1">Content for Tab 1</o-tab-panel>
<o-tab-panel name="tab2">Content for Tab 2</o-tab-panel>
<o-tab-panel name="tab3">Content for Tab 3</o-tab-panel>
</o-tab-group>

-----------------------
// React Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/react";

<OTabGroup>
<OTab panel="tab1">Tab 1</OTab>
<OTab panel="tab2" active>Tab 2</OTab>
<OTab panel="tab3">Tab 3</OTab>
<OTabPanel name="tab1">Content for Tab 1</OTabPanel>
<OTabPanel name="tab2">Content for Tab 2</OTabPanel>
<OTabPanel name="tab3">Content for Tab 3</OTabPanel>
</OTabGroup>
      `;
            }
        },
        docs: {
            description: {
                story: 'A tab group with the second tab preselected .'
            }
        }
    } });
export const WithDisabledTabs = Object.assign(Object.assign({}, Template), { args: {
        noScrollControls: false
    }, render: (args) => html `
		<o-tab-group no-scroll-controls=${args.noScrollControls}>
			<o-tab slot="nav" panel="tab1">Tab 1</o-tab>
			<o-tab slot="nav" panel="tab2">Tab 2</o-tab>
			<o-tab slot="nav" panel="tab3" disabled>Tab 3</o-tab>
			<o-tab-panel name="tab1"
				>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
			<o-tab-panel name="tab2"
				>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
				enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
				quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</o-tab-panel>
			<o-tab-panel name="tab3">
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</o-tab-panel>
		</o-tab-group>
	`, parameters: {
        source: {
            transform: () => {
                return `
-----------------------
// Vue Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/vue";

<o-tab-group>
<o-tab panel="tab1">Tab 1</o-tab>
<o-tab panel="tab2">Tab 2</o-tab>
<o-tab panel="tab3" disabled>Tab 3</o-tab>
<o-tab-panel name="tab1">Content for Tab 1</o-tab-panel>
<o-tab-panel name="tab2">Content for Tab 2</o-tab-panel>
<o-tab-panel name="tab3">Content for Tab 3</o-tab-panel>
</o-tab-group>

-----------------------
// React Code Snippet
-----------------------

import { OTabGroup, OTab, OTabPanel } from "@oui/react";

<OTabGroup>
<OTab panel="tab1">Tab 1</OTab>
<OTab panel="tab2">Tab 2</OTab>
<OTab panel="tab3" disabled>Tab 3</OTab>
<OTabPanel name="tab1">Content for Tab 1</OTabPanel>
<OTabPanel name="tab2">Content for Tab 2</OTabPanel>
<OTabPanel name="tab3">Content for Tab 3</OTabPanel>
</OTabGroup>
      `;
            }
        },
        docs: {
            description: {
                story: 'A tab group demonstrating disabled tab with two tabs and their content.'
            }
        }
    } });
//# sourceMappingURL=o-tab-group.stories.js.map
