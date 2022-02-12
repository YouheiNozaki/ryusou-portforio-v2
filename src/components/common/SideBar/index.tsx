import Image from 'next/image';
import { FcBrokenLink, FcPortraitMode } from 'react-icons/fc';
import { Heading3 } from 'components/ui/Heading3';
import { Heading2 } from 'components/ui/Heading2';
import styles from './sidebar.module.scss';

import cat from '../../../../public/cat.png';
import react from '../../../../public/react.png';
import typescript from '../../../../public/typescript.png';
import nodejs from '../../../../public/nodejs.png';
import aws from '../../../../public/aws.png';

export const SideBar = () => {
  return (
    <section className={styles.section}>
      <article className={styles.profile}>
        <div className={styles.sectionTitle}>
          <FcPortraitMode className={styles.icon} size={20} />
          <Heading2 title="プロフィール" />
        </div>
        <div className={styles.detail}>
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
          <Heading3 title="技術" />
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Image src={react} width={40} height={40} alt="React" />
            </li>
            <li className={styles.li}>
              <Image src={typescript} width={40} height={40} alt="TypeScript" />
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
