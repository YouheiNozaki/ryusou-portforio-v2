import Image from 'next/image';
import Link from 'next/link';
import { Heading1 } from '../../ui/Heading1';
import cat from '../../../../public/cat.png';
import { headerStyle } from './header.css';

export const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={headerStyle.image}>
          <Image
            src={cat}
            width={48}
            height={48}
            alt="りゅーそうブログのロゴ"
          />
        </a>
      </Link>
      <Heading1 title="Ryusou.dev" />
      <Link href="/blogs">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/blogs" className={headerStyle.link}>
          <p className={headerStyle.blog}>Blog</p>
        </a>
      </Link>
    </header>
  );
};
