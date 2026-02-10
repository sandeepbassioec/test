import type { Meta } from '@storybook/web-components';
import type { OSelect } from '../components/o-select/o-select';
declare const _default: Meta;
export default _default;
export declare const Default: {
    args: {
        open: boolean;
        label: string;
        placement: string;
        placeholder: string;
        disabled: boolean;
        helpText: string;
        required: boolean;
        errorText: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OSelect>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OSelect>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OSelect, Partial<OSelect>>, "story">;
};
export declare const Disabled: {
    args: {
        label: string;
        disabled: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OSelect>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OSelect>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OSelect, Partial<OSelect>>, "story">;
};
export declare const Required: {
    args: {
        label: string;
        required: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OSelect>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OSelect>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OSelect, Partial<OSelect>>, "story">;
};
export declare const HelpText: {
    args: {
        label: string;
        helpText: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OSelect>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OSelect>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OSelect, Partial<OSelect>>, "story">;
};
export declare const ComplicatedSelect: {
    args: {
        label: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OSelect>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OSelect>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OSelect>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OSelect>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OSelect, Partial<OSelect>>, "story">;
};
