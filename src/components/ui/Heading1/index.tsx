import { VFC } from 'react';
import style from './heading1.module.scss';

type Props = {
  title: string;
};

export const Heading1: VFC<Props> = ({ title }) => {
  return <h1 className={style.title}>{title}</h1>;
};
