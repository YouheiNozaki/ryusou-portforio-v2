import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from '.';
import { Card } from '../../spacer/Card';

export default {
  title: 'components/ui/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const content = {
  id: 'hr71dve-0',
  title:
    'なぜ初心者は「UIコンポーネントにマージンをつけるのか」初心者が解説します',
  url: 'https://zenn.dev/ryusou/articles/why-margin-component',
  publishArticleAt: '2021-11-29T15:00:00.000Z',
  category: [
    {
      id: 'zenn',
      caregoryImage: {
        url: 'https://images.microcms-assets.io/assets/38a756d90f7746e6a29a604295fd024c/596bd7e876f14f48a626e9208ecc9ec0/logo-only.png',
        height: 88,
        width: 88,
      },
    },
  ],
};

export const Default: ComponentStory<typeof Article> = () => (
  <Article content={content} />
);

export const WrapCard: ComponentStory<typeof Article> = () => (
  <Card>
    <Article content={content} />
  </Card>
);
