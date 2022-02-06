import { ReactNode, VFC } from 'react';
import styles from './card.module.scss';

type Props = {
  children: ReactNode;
  direction?: 'column';
};

export const Card: VFC<Props> = ({ children, direction }) => {
  return (
    <div className={direction === 'column' ? styles.cardcolumn : styles.card}>
      {children}
    </div>
  );
};
