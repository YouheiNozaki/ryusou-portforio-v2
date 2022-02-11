import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading3 } from '.';

export default {
  title: 'components/ui/Heading3',
  component: Heading3,
} as ComponentMeta<typeof Heading3>;

export const Normal: ComponentStory<typeof Heading3> = () => (
  <Heading3 title="ブログ記事" />
);

export const Error: ComponentStory<typeof Heading3> = () => (
  <Heading3 title="このページは移動しました。ブログ記事は、一覧ページから見ることができます" />
);
