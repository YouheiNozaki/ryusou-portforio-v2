import { paragraphStyle } from './paragraph.css';

type Props = {
  children: React.ReactNode;
};

export const Paragraph: React.VFC<Props> = ({ children }) => {
  return <strong className={paragraphStyle.main}>{children}</strong>;
};
