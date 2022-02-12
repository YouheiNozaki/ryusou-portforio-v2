import styles from './layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SideBar } from '../SideBar';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <main className={styles.main}>{children}</main>
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
