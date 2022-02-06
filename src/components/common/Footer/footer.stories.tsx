import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'components/common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Normal: ComponentStory<typeof Footer> = () => <Footer />;
