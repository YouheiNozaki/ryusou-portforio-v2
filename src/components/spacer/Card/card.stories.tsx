import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'components/spacer/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => (
  <Card>
    <p>テキスト</p>
    <p>テキスト</p>
    <p>テキスト</p>
  </Card>
);
export const Column: ComponentStory<typeof Card> = () => (
  <Card direction="column">
    <p>テキスト</p>
    <p>テキスト</p>
    <p>テキスト</p>
  </Card>
);
