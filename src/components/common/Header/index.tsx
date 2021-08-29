import Image from 'next/image';
import cat from '../../../../public/img/cat.jpg';
import { header, title } from './header.css';

export const Header = () => {
  return (
    <header className={header}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Image src={cat} width={48} height={48} alt="りゅーそうブログのロゴ" />
      <h1 className={title}>I am Ryusou</h1>
    </header>
  );
};
