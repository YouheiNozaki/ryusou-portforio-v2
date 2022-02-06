import { VFC } from 'react';
import styles from './tag.module.scss';

export type Props = {
  tag: {
    slug: string;
  };
};

export const Tag: VFC<Props> = ({ tag }) => {
  return <p className={styles.tag}>{tag.slug}</p>;
};
