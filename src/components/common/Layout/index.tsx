import Image from 'next/image';
import { LayoutStyle } from './layout.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

import cat from '../../../../public/cat.png';
import react from '../../../../public/react.png';
import typescript from '../../../../public/typescript.png';
import nodejs from '../../../../public/nodejs.png';
import aws from '../../../../public/aws.png';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={LayoutStyle.container}>
        <div className={LayoutStyle.wrapper}>
          <main className={LayoutStyle.main}>{children}</main>
          <section className={LayoutStyle.section}>
            <article className={LayoutStyle.profile}>
              <div>
                <h3 className={LayoutStyle.sectionTitle}>プロフィール</h3>
                <Image
                  src={cat}
                  width={120}
                  height={120}
                  alt="りゅーそうブログのロゴ"
                />
                <p>りゅーそう</p>
                <p>元高校地歴科教員。現在microCMSでエンジニアをしています。</p>
                <p>Saitama.jsというLT会を運営中です。</p>
              </div>
              <div>
                <h3>技術</h3>
                <ul className={LayoutStyle.ul}>
                  <li className={LayoutStyle.li}>
                    <Image src={react} width={60} height={60} alt="React" />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image
                      src={typescript}
                      width={60}
                      height={60}
                      alt="TypeScript"
                    />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image src={nodejs} width={60} height={60} alt="Node.js" />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image src={aws} width={60} height={60} alt="AWS" />
                  </li>
                </ul>
              </div>
            </article>
            <article className={LayoutStyle.link}>
              <h3>リンク</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/ryusou_mtkh">Twitter</a>
                </li>
                <li>
                  <a href="https://github.com/YouheiNozaki">GitHub</a>
                </li>
                <li>
                  <a href="https://saitamajs.connpass.com/">Saitama.js</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
