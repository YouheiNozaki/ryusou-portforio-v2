import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MarkdownField } from '.';

export default {
  title: 'components/ui/MarkdownField',
  component: MarkdownField,
} as ComponentMeta<typeof MarkdownField>;

const Template: ComponentStory<typeof MarkdownField> = (args) => (
  <MarkdownField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: '```js\nconst greeting = "hello"\n\nconsole.log(greeting)\n```',
};
