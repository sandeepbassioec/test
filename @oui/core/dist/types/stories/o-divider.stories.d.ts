import type { Meta } from '@storybook/web-components';
import type { ODivider } from '../components/o-divider/o-divider';
declare const _default: Meta;
export default _default;
export declare const Horizontal: {
    args: {
        variant: string;
    };
    render: (args: any) => import("lit").TemplateResult<1>;
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: () => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODivider>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODivider>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODivider, Partial<ODivider>>, "story">;
};
export declare const Vertical: {
    args: {
        variant: string;
    };
    render: (args: any) => import("lit").TemplateResult<1>;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODivider>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODivider> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODivider>[];
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODivider>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODivider>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODivider, Partial<ODivider>>, "story">;
};
