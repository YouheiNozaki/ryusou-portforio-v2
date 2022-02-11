import Image from 'next/image';
import { FcBrokenLink, FcPortraitMode } from 'react-icons/fc';
import styles from './layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

import cat from '../../../../public/cat.png';
import react from '../../../../public/react.png';
import typescript from '../../../../public/typescript.png';
import nodejs from '../../../../public/nodejs.png';
import aws from '../../../../public/aws.png';

type Props = {
  children: React.ReactNode;
  toggleColor?: boolean;
};

export const Layout: React.VFC<Props> = ({ children, toggleColor }) => {
  return (
    <div>
      <Header />
      <div
        className={toggleColor ? styles.containerBackground : styles.container}
      >
        <div className={styles.wrapper}>
          <main className={styles.main}>{children}</main>
          <section className={styles.section}>
            <article className={styles.profile}>
              <div>
                <div className={styles.sectionTitle}>
                  <FcPortraitMode className={styles.icon} size={20} />
                  <h3 className={styles.text}>プロフィール</h3>
                </div>
                <Image
                  src={cat}
                  width={120}
                  height={120}
                  alt="りゅーそうブログのロゴ"
                />
                <p>りゅーそう</p>
                <p>元高校地歴科教員。現在microCMSでエンジニアをしています。</p>
                <p>Saitama.jsというLT会を運営中です。</p>
                <p>発言はすべて個人の意見です。</p>
              </div>
              <div>
                <h3>技術</h3>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <Image src={react} width={40} height={40} alt="React" />
                  </li>
                  <li className={styles.li}>
                    <Image
                      src={typescript}
                      width={40}
                      height={40}
                      alt="TypeScript"
                    />
                  </li>
                  <li className={styles.li}>
                    <Image src={nodejs} width={40} height={40} alt="Node.js" />
                  </li>
                  <li className={styles.li}>
                    <Image src={aws} width={40} height={40} alt="AWS" />
                  </li>
                </ul>
              </div>
            </article>
            <article className={styles.link}>
              <div className={styles.sectionTitle}>
                <FcBrokenLink className={styles.icon} size={20} />
                <h3 className={styles.text}>リンク</h3>
              </div>
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
