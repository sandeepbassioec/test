import type { Meta } from '@storybook/web-components';
import type { OButton } from '../components/o-button/o-button';
declare const _default: Meta;
export default _default;
export declare const PrimaryButton: {
    decorators: ((storyFn: () => any) => import("lit").TemplateResult<1>)[];
    args: {
        variant: string;
        color: string;
        fullWidth: boolean;
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
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const SecondaryButton: {
    args: {
        variant: string;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const TextButton: {
    args: {
        variant: string;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const DisabledButton: {
    args: {
        variant: string;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const FullWidthPrimaryButton: {
    decorators: ((storyFn: () => any) => import("lit").TemplateResult<1>)[];
    args: {
        variant: string;
        color: string;
        fullWidth: boolean;
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
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const FullWidthSecondaryButton: {
    decorators: ((storyFn: () => any) => import("lit").TemplateResult<1>)[];
    args: {
        variant: string;
        color: string;
        fullWidth: boolean;
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
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const LoadingPrimaryButton: {
    args: {
        variant: string;
        loading: boolean;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const LoadingSecondaryButton: {
    args: {
        variant: string;
        color: string;
        loading: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const PrimaryButtonUsingStartIcon: {
    args: {
        variant: string;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
export declare const SecondaryButtonUsingStartIcon: {
    args: {
        variant: string;
        color: string;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OButton>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OButton>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OButton>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OButton>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OButton, Partial<OButton>>, "story">;
};
