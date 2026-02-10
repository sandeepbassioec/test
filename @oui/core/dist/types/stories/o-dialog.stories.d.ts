import type { Meta, StoryObj } from '@storybook/web-components';
import type { ODialog } from '../components/o-dialog/o-dialog';
declare const _default: Meta;
export default _default;
export declare const Primary: StoryObj<ODialog>;
export declare const Default: {
    args: {
        open: boolean;
        noClose: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODialog>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODialog>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODialog, Partial<ODialog>>, "story">;
};
export declare const NoCloseButton: {
    args: {
        open: boolean;
        noClose: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODialog>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODialog>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODialog, Partial<ODialog>>, "story">;
};
export declare const PreventOverlay: {
    args: {
        open: boolean;
        noClose: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODialog>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODialog>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODialog, Partial<ODialog>>, "story">;
};
export declare const NoHeader: {
    args: {
        open: boolean;
        noClose: boolean;
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<ODialog>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, ODialog>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, ODialog>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, ODialog>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, ODialog, Partial<ODialog>>, "story">;
};
