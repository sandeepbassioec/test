import type { Meta } from '@storybook/web-components';
import type { OTextarea } from '../components/o-textarea/o-textarea';
declare const _default: Meta;
export default _default;
export declare const Default: {
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    args?: Partial<OTextarea>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextarea>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextarea>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextarea, Partial<OTextarea>>, "story">;
};
export declare const Required: {
    args: {
        label: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextarea>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextarea>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextarea, Partial<OTextarea>>, "story">;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextarea>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextarea>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextarea, Partial<OTextarea>>, "story">;
};
export declare const WithHelpText: {
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextarea>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextarea>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextarea>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextarea>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextarea, Partial<OTextarea>>, "story">;
};
