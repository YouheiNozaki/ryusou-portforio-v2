import { strongStyle } from './strong.css';

type Props = {
  children: React.ReactNode;
};

export const Strong: React.VFC<Props> = ({ children }) => {
  return <strong className={strongStyle.main}>{children}</strong>;
};
