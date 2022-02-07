import styles from './strong.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Strong: React.VFC<Props> = ({ children }) => {
  return <strong className={styles.main}>{children}</strong>;
};
