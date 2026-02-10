import type { Meta } from '@storybook/web-components';
import type { OFooter } from '../components/o-footer/o-footer';
declare const _default: Meta;
export default _default;
export declare const Default: {
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }>[];
    args?: Partial<OFooter>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OFooter>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OFooter> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OFooter>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OFooter> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OFooter>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OFooter> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OFooter>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OFooter>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OFooter>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OFooter>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OFooter, Partial<OFooter>>, "story">;
};
