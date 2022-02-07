import type { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line import/no-named-as-default
import Custom404 from '../pages/404';

export default {
  title: 'pages/error',
  component: Custom404,
} as ComponentMeta<typeof Custom404>;

export const Normal: ComponentStory<typeof Custom404> = () => <Custom404 />;
