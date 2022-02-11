import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading2 } from '.';

export default {
  title: 'components/ui/Heading2',
  component: Heading2,
} as ComponentMeta<typeof Heading2>;

export const Normal: ComponentStory<typeof Heading2> = () => (
  <Heading2 title="テスト" />
);

export const BlogTitle: ComponentStory<typeof Heading2> = () => (
  <Heading2 title="Jamstackでサイトを作る" />
);
