import type { Meta } from '@storybook/web-components';
import type { OAppBar } from '../components/o-app-bar/o-app-bar';
declare const _default: Meta;
export default _default;
export declare const Default: {
    render: () => import("lit").TemplateResult<1>;
    parameters: {
        layout: string;
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        label?: string;
        render: () => any;
    }> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        label?: string;
        render: () => any;
    }>[];
    args?: Partial<OAppBar>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OAppBar>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OAppBar> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OAppBar>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OAppBar> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OAppBar>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OAppBar> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OAppBar>[];
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OAppBar>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OAppBar>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OAppBar, Partial<OAppBar>>, "story">;
};
