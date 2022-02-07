import type { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-named-as-default
import Home from '../pages/index';

export default {
  title: 'pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const articles = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export const Normal: ComponentStory<typeof Home> = () => (
  <Home articles={articles} />
);
