import { Layout } from '.';

export default {
  title: 'components/common/Layout',
  component: Layout,
};

export const Normal: React.VFC = () => (
  <Layout>
    <p>メインコンテンツ</p>
  </Layout>
);
