import type { Meta } from '@storybook/web-components';
import type { OCard } from '../components/o-card/o-card';
declare const _default: Meta;
export default _default;
export declare const BasicCard: {
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
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OCard> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, OCard>[];
    args?: Partial<OCard>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OCard>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OCard> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OCard>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OCard> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OCard>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OCard> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OCard>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OCard>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OCard>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OCard>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OCard, Partial<OCard>>, "story">;
};
export declare const ScrollableCard: {
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
};
export declare const NoHeaderCard: {
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
};
