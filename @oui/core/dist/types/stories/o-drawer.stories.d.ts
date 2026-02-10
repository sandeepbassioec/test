import type { Meta, StoryObj } from '@storybook/web-components';
import type { ODrawer } from '../components/o-drawer/o-drawer';
declare const _default: Meta;
export default _default;
export declare const Primary: StoryObj<ODrawer>;
export declare const Default: {
    args: {
        open: boolean;
        noClose: boolean;
    };
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: (_: any, storyContext: any) => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODrawer>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODrawer>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODrawer, Partial<ODrawer>>, "story">;
};
export declare const Scroll: {
    args: {
        open: boolean;
        noClose: boolean;
    };
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: (_: any, storyContext: any) => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODrawer>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODrawer>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODrawer, Partial<ODrawer>>, "story">;
};
export declare const NoCloseButton: {
    args: {
        open: boolean;
        noClose: boolean;
    };
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: (_: any, storyContext: any) => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODrawer>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODrawer>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODrawer>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODrawer>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODrawer, Partial<ODrawer>>, "story">;
};
