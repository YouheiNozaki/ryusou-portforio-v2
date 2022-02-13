import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading2 } from '.';

export default {
  title: 'components/ui/Heading2',
  component: Heading2,
} as ComponentMeta<typeof Heading2>;

const Template: ComponentStory<typeof Heading2> = (args) => (
  <Heading2 {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'ブログ記事です',
};
