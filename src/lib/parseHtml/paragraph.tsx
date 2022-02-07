import styles from './paragraph.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Paragraph: React.VFC<Props> = ({ children }) => {
  return <strong className={styles.main}>{children}</strong>;
};
