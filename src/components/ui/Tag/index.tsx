import { Fragment, VFC } from 'react';
import { TagStyle } from './tag.css';

type Props = {
  tag: {
    slug: string;
  };
};

export const Tag: VFC<Props> = ({ tag }) => {
  return (
    <Fragment key={tag.slug}>
      <p className={TagStyle.tag}>{tag.slug}</p>
    </Fragment>
  );
};
