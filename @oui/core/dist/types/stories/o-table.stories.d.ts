import type { Meta } from '@storybook/web-components';
import type { OTable } from '../components/o-table/o-table';
declare const _default: Meta;
export default _default;
export declare const Default: {
    parameters: {
        layout: string;
        backgrounds: {
            default: string;
        };
        docs: {
            description: {
                story: string;
            };
        };
    };
    decorators?: import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }> | import("storybook/internal/types").DecoratorFunction<import("@storybook/web-components").WebComponentsRenderer, {
        render: () => any;
    }>[];
    args?: Partial<OTable>;
    argTypes?: Partial<import("@storybook/web-components").ArgTypes<OTable>>;
    loaders?: import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTable> | import("storybook/internal/types").LoaderFunction<import("@storybook/web-components").WebComponentsRenderer, OTable>[];
    beforeEach?: import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTable> | import("storybook/internal/types").BeforeEach<import("@storybook/web-components").WebComponentsRenderer, OTable>[];
    experimental_afterEach?: import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTable> | import("storybook/internal/types").AfterEach<import("@storybook/web-components").WebComponentsRenderer, OTable>[];
    render?: import("storybook/internal/types").ArgsStoryFn<import("@storybook/web-components").WebComponentsRenderer, OTable>;
    tags?: import("storybook/internal/types").Tag[];
    mount?: (context: import("storybook/internal/types").StoryContext<import("@storybook/web-components").WebComponentsRenderer, OTable>) => () => Promise<import("storybook/internal/types").Canvas>;
    name?: import("storybook/internal/types").StoryName;
    storyName?: import("storybook/internal/types").StoryName;
    play?: import("storybook/internal/types").PlayFunction<import("@storybook/web-components").WebComponentsRenderer, OTable>;
    globals?: import("storybook/internal/types").Globals;
    story?: Omit<import("storybook/internal/types").StoryAnnotations<import("@storybook/web-components").WebComponentsRenderer, OTable, Partial<OTable>>, "story">;
};
