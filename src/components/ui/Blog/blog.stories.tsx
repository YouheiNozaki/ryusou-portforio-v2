import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blog } from '.';
import { Card } from '../../spacer/Card';

export default {
  title: 'components/ui/Blog',
  component: Blog,
} as ComponentMeta<typeof Blog>;

const content = {
  id: 'lets-encrypt-parker',
  createdAt: '2022-01-26T15:11:59.054Z',
  updatedAt: '2022-01-26T15:11:59.054Z',
  title: "Let's Encryptのパーカーを買った",
  image: {
    url: 'https://images.microcms-assets.io/assets/c05ef7c10791409a9c2250efa775836c/2481bf8d53d4450caf00753e549a4489/%E8%A6%8B%E5%87%BA%E3%81%97%E3%82%92%E8%BF%BD%E5%8A%A0%20(18).png',
  },
  tags: [
    {
      slug: 'column',
    },
  ],
  day: '2022-01-25T15:00:00.000Z',
  content: "<p>タイトル通りでLet's Encriptのパーカーを少し前に買いました。</p>",
  repeater: [],
};

export const Default: ComponentStory<typeof Blog> = () => (
  <Blog content={content} />
);

export const WrapCard: ComponentStory<typeof Blog> = () => (
  <Card direction="column">
    <Blog content={content} />
  </Card>
);
