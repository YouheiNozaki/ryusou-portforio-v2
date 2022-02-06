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
