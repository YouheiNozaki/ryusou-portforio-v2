import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '.';

export default {
  title: 'components/common/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Normal: ComponentStory<typeof Layout> = () => (
  <Layout>
    <p>メインコンテンツ</p>
  </Layout>
);

export const ToggleColor: ComponentStory<typeof Layout> = () => (
  <Layout toggleColor>
    <p>メインコンテンツ</p>
  </Layout>
);
