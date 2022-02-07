import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'components/ui/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Normal: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={4} />
);

export const Two: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={12} />
);

export const Three: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={21} />
);
