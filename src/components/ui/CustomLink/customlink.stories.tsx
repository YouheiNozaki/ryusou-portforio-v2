import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomLink } from '.';

export default {
  title: 'components/ui/CustomLink',
  component: CustomLink,
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Default = Template.bind({});

Default.args = {
  href: 'blogs',
  children: <p>Blogs</p>,
};
