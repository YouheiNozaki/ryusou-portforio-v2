import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from '.';

export default {
  title: 'components/common/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Default = Template.bind({});
