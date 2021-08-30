import Image from 'next/image';
import Link from 'next/link';
import cat from '../../../../public/img/cat.jpg';
import { headerStyle } from './header.css';

export const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={headerStyle.image}>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={cat}
            width={48}
            height={48}
            alt="りゅーそうブログのロゴ"
          />
        </a>
      </Link>
      <h1 className={headerStyle.title}>I am Ryusou</h1>
      <Link href="/blogs">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/blogs" className={headerStyle.link}>
          <p className={headerStyle.blog}>Blog</p>
        </a>
      </Link>
    </header>
  );
};