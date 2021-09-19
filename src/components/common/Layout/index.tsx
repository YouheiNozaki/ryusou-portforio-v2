import { LayoutStyle } from './layout.css';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={LayoutStyle.container}>
        <main className={LayoutStyle.wrapper}>{children}</main>
      </div>
    </>
  );
};
