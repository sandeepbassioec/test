import type { Meta } from '@storybook/web-components';
import type { OToast } from '../components/o-toast/o-toast';
declare global {
    interface Document {
        notify: (message: string, variant?: 'success' | 'warning' | 'primary' | 'neutral' | 'danger', duration?: number, closable?: boolean) => void;
    }
}
declare const _default: Meta;
export default _default;
export declare const PrimaryToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any, storyContext: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
export declare const SuccessToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
export declare const WarningToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
export declare const DangerToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
export declare const NeutralToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
export declare const NonClosableToast: {
    args: {
        open: boolean;
        closable: boolean;
        variant: string;
        duration: number;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OToast>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OToast>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OToast>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OToast>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OToast, Partial<OToast>>, "story">;
};
