import { Meta } from '@storybook/web-components';
import { OTooltip } from '../components/o-tooltip/o-tooltip';
declare const _default: Meta;
export default _default;
export declare const DefaultTooltip: {
    args: {
        open: boolean;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTooltip>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTooltip>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTooltip, Partial<OTooltip>>, "story">;
};
export declare const DisabledTooltip: {
    args: {
        open: boolean;
        disabled: boolean;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTooltip>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTooltip>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTooltip, Partial<OTooltip>>, "story">;
};
export declare const MaxWidth: {
    args: {
        open: boolean;
        content: string;
        maxWidth: number;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTooltip>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTooltip>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTooltip, Partial<OTooltip>>, "story">;
};
export declare const ClickTrigger: {
    args: {
        open: boolean;
        trigger: string;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTooltip>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTooltip>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTooltip, Partial<OTooltip>>, "story">;
};
export declare const ManualTrigger: {
    args: {
        open: boolean;
        trigger: string;
    };
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTooltip>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTooltip>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTooltip>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTooltip>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTooltip, Partial<OTooltip>>, "story">;
};
