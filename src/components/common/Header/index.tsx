import Image from 'next/image';
import Link from 'next/link';
import { Heading1 } from '../../ui/Heading1';
import cat from '../../../../public/cat.png';
import style from './header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={style.image}>
          <Image
            src={cat}
            width={40}
            height={40}
            alt="りゅーそうブログのロゴ"
          />
        </a>
      </Link>
      <Heading1 title="Ryusou.dev" />
      <Link href="/blogs">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/blogs" className={style.link}>
          <p className={style.blog}>Blog</p>
        </a>
      </Link>
      <Link href="/scraps">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/scraps" className={style.link}>
          <p className={style.blog}>Scrap</p>
        </a>
      </Link>
    </header>
  );
};
