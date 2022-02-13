import { ReactNode, VFC } from 'react';
import styles from './card.module.scss';

type Props = {
  children: ReactNode;
  direction: 'column' | 'raw';
};

export const Card: VFC<Props> = ({ children, direction }) => {
  return (
    <div
      className={
        direction === 'column'
          ? styles.cardcolumn
          : direction === 'raw'
          ? styles.card
          : styles.card
      }
    >
      {children}
    </div>
  );
};
