import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading3 } from '.';

export default {
  title: 'components/ui/Heading3',
  component: Heading3,
} as ComponentMeta<typeof Heading3>;

const Template: ComponentStory<typeof Heading3> = (args) => (
  <Heading3 {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'エラーページです',
};
