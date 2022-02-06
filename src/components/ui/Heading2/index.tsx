import { VFC } from 'react';
import styles from './heading2.module.scss';

type Props = {
  title: string;
};

export const Heading2: VFC<Props> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
