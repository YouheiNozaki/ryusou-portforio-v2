import { Tag } from '.';

export default {
  title: 'components/ui/Tag',
  component: Tag,
};

const tagJa = {
  slug: 'コラム',
};
const tagEn = {
  slug: 'Jamstack',
};

export const Ja: React.VFC = () => <Tag tag={tagJa} />;
export const En: React.VFC = () => <Tag tag={tagEn} />;
