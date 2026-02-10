import { Meta } from '@storybook/web-components';
import type { OCarouselItem } from '../components/o-carousel-item/o-carousel-item';
declare const _default: Meta;
export default _default;
export declare const Default: {
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
            source: {
                transform: (_: any) => string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }>[];
    args?: Partial<OCarouselItem>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OCarouselItem>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OCarouselItem, Partial<OCarouselItem>>, "story">;
};
