import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading1 } from '.';

export default {
  title: 'components/ui/Heading1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

export const Normal: ComponentStory<typeof Heading1> = () => (
  <Heading1 title="Ryusou.dev" />
);
