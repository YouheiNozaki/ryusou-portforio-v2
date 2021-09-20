import { LayoutStyle } from './layout.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={LayoutStyle.container}>
        <main className={LayoutStyle.wrapper}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
