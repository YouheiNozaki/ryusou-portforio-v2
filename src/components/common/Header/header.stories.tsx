import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'components/common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Normal: ComponentStory<typeof Header> = () => <Header />;
