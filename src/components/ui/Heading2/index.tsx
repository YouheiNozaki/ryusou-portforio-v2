import { VFC } from 'react';
import { heading2Style } from './heading2.css';

type Props = {
  title: string;
};

export const Heading2: VFC<Props> = ({ title }) => {
  return <h1 className={heading2Style.title}>{title}</h1>;
};
