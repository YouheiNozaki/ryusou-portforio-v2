import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'components/ui/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});

Default.args = {
  totalCount: 30,
  pathId: 2,
};
