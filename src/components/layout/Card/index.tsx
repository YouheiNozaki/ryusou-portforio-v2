import { ReactNode, VFC } from 'react';
import { CardStyle } from './card.css';

type Props = {
  children: ReactNode;
};

export const Card: VFC<Props> = ({ children }) => {
  return <div className={CardStyle.card}>{children}</div>;
};
