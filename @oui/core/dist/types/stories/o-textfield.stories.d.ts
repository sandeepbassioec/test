import type { Meta } from '@storybook/web-components';
import type { OTextfield } from '../components/o-textfield/o-textfield';
declare const _default: Meta;
export default _default;
export declare const Default: {
    args: {
        label: string;
        required: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const Required: {
    args: {
        label: string;
        required: boolean;
        helpText: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const HasError: {
    args: {
        label: string;
        placeholder: string;
        value: string;
        required: boolean;
        errorText: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const Disabled: {
    args: {
        label: string;
        disabled: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const Time: {
    args: {
        label: string;
        placeholder: string;
        type: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const CustomHelpText: {
    args: {
        label: string;
        helpText: string;
        nameValue: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const StartIcon: {
    args: {
        label: string;
        required: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
export declare const EndIcon: {
    args: {
        label: string;
        required: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTextfield>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTextfield>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTextfield>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTextfield>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTextfield, Partial<OTextfield>>, "story">;
};
