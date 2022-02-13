import Image from 'next/image';
import { FcBrokenLink, FcPortraitMode, FcCommandLine } from 'react-icons/fc';
import { Heading3 } from '../../ui/Heading3';
import styles from './sidebar.module.scss';

import cat from '../../../../public/cat.png';

export const SideBar = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div>
          <div className={styles.sectionTitle}>
            <FcPortraitMode className={styles.icon} size={20} />
            <Heading3 title="プロフィール" />
          </div>
          <div className={styles.image}>
            <Image
              src={cat}
              width={120}
              height={120}
              alt="りゅーそうブログのロゴ"
              className={styles.image}
            />
          </div>
          <p>りゅーそう</p>
          <p>元高校地歴科教員。現在microCMSでエンジニアをしています。</p>
          <p>Saitama.jsというLT会を運営中です。</p>
          <p>発言はすべて個人の意見です。</p>
        </div>
        <div>
          <div className={styles.sectionTitle}>
            <FcCommandLine className={styles.icon} size={20} />
            <Heading3 title="技術" />
          </div>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <p>React</p>
            </li>
            <li className={styles.li}>
              <p>TypeScript</p>
            </li>
            <li className={styles.li}>
              <p>Node.js</p>
            </li>
            <li className={styles.li}>
              <p>AWS</p>
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.sectionTitle}>
          <FcBrokenLink className={styles.icon} size={20} />
          <Heading3 title="リンク" />
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
  );
};
