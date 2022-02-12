import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavText } from '../../ui/NavText';
import { CustomLink } from '../../ui/CustomLink';
import { Heading1 } from '../../ui/Heading1';
import cat from '../../../../public/cat.png';
import styles from './header.module.scss';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.wrapper}>
      <Link href="/" passHref>
        <CustomLink href="/">
          <Image
            src={cat}
            width={40}
            height={40}
            alt="りゅーそうブログのロゴ"
            className={styles.image}
          />
        </CustomLink>
      </Link>
      <Heading1 title="Ryusou.dev" />
      <Link href="/blogs" passHref>
        <CustomLink href="/blogs">
          <NavText text="Blog" isActive={pathname.includes('blogs')} />
        </CustomLink>
      </Link>
      <Link href="/scraps" passHref>
        <CustomLink href="/scraps">
          <NavText text="Scrap" isActive={pathname.includes('scraps')} />
        </CustomLink>
      </Link>
    </header>
  );
};
