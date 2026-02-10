import type { Meta } from '@storybook/web-components';
import type { ORadioGroup } from '../components/o-radio-group/o-radio-group';
declare const _default: Meta;
export default _default;
export declare const Default: {
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ORadioGroup>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup, Partial<ORadioGroup>>, "story">;
};
export declare const PreSelected: {
    args: {
        label: string;
        value: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ORadioGroup>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup, Partial<ORadioGroup>>, "story">;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ORadioGroup>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup, Partial<ORadioGroup>>, "story">;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ORadioGroup>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ORadioGroup, Partial<ORadioGroup>>, "story">;
};
