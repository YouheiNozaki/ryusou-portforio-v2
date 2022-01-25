import { ReactNode, VFC } from 'react';
import { CardStyle } from './card.css';

type Props = {
  children: ReactNode;
  direction?: 'column';
};

export const Card: VFC<Props> = ({ children, direction }) => {
  return (
    <div
      className={direction === 'column' ? CardStyle.cardColumn : CardStyle.card}
    >
      {children}
    </div>
  );
};
