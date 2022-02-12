import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavText } from '.';

export default {
  title: 'components/ui/NavText',
  component: NavText,
} as ComponentMeta<typeof NavText>;

const Template: ComponentStory<typeof NavText> = (args) => (
  <NavText {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Blogs',
  isActive: false,
};
