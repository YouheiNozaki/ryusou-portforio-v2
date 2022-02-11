import { VFC } from 'react';
import styles from './heading3.module.scss';

type Props = {
  title: string;
};

export const Heading3: VFC<Props> = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};
