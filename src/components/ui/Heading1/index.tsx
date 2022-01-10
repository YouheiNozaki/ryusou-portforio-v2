import { VFC } from 'react';
import { heading1Style } from './heading1.css';

type Props = {
  title: string;
};

export const Heading1: VFC<Props> = ({ title }) => {
  return <h1 className={heading1Style.title}>{title}</h1>;
};
