import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { CustomLink } from '../../ui/CustomLink';
import { Heading1 } from '../../ui/Heading1';
import cat from '../../../../public/cat.png';
import style from './header.module.scss';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={style.wrapper}>
      <Link href="/" passHref>
        <CustomLink href="/">
          <Image
            src={cat}
            width={40}
            height={40}
            alt="りゅーそうブログのロゴ"
            className={style.image}
          />
        </CustomLink>
      </Link>
      <Heading1 title="Ryusou.dev" />
      <Link href="/blogs" passHref>
        <CustomLink href="/blogs">
          <p
            className={clsx(style.blog, {
              [style.isActive]: pathname.includes('blogs'),
            })}
          >
            Blog
          </p>
        </CustomLink>
      </Link>
      <Link href="/scraps" passHref>
        <CustomLink href="/scraps">
          <p
            className={clsx(style.blog, {
              [style.isActive]: pathname.includes('scraps'),
            })}
          >
            Scrap
          </p>
        </CustomLink>
      </Link>
    </header>
  );
};
