import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'components/spacer/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

const Data = () => {
  return (
    <>
      <p>テスト1</p>
      <p>テスト2</p>
      <p>テスト3</p>
    </>
  );
};

Default.args = {
  direction: 'column',
  children: <Data />,
};
