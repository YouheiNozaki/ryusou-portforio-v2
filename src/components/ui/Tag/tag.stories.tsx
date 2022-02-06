import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'components/ui/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const tagJa = {
  slug: 'コラム',
};
const tagEn = {
  slug: 'Jamstack',
};

export const Ja: ComponentStory<typeof Tag> = () => <Tag tag={tagJa} />;
export const En: ComponentStory<typeof Tag> = () => <Tag tag={tagEn} />;
