import type { Meta } from '@storybook/web-components';
import type { OListItem } from '../components/o-list-item/o-list-item';
declare const _default: Meta;
export default _default;
export declare const Default: {
    parameters: {
        docs: {
            source: {
                transform: () => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    args?: Partial<OListItem>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OListItem>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OListItem>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OListItem>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OListItem, Partial<OListItem>>, "story">;
};
export declare const WithDisabledState: {
    render: () => import("lit").TemplateResult<1>;
    parameters: {
        docs: {
            source: {
                transform: () => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    args?: Partial<OListItem>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OListItem>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OListItem>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OListItem, Partial<OListItem>>, "story">;
};
export declare const WithRadioButton: {
    args: {
        showRadio: boolean;
    };
    render: (args: any) => import("lit").TemplateResult<1>;
    parameters: {
        docs: {
            source: {
                transform: () => string;
            };
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OListItem>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OListItem>[];
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OListItem>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OListItem>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OListItem, Partial<OListItem>>, "story">;
};
