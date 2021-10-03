import Script from 'next/script';
import { Adsense } from 'components/atoms/Adsense';
import { LayoutStyle } from './layout.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Header />
      <div className={LayoutStyle.container}>
        <main className={LayoutStyle.wrapper}>{children}</main>
        <aside className={LayoutStyle.aside}>
          <Adsense />
        </aside>
      </div>
      <Footer />
    </div>
  );
};
