import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading1 } from '.';

export default {
  title: 'components/ui/Heading1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => (
  <Heading1 {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Ryusou.dev',
};
