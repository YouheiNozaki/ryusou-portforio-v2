import Link from 'next/link';
import clsx from 'clsx';
import styles from './pagination.module.scss';

type Props = {
  totalCount: number;
  pathId?: number;
};

export const Pagination: React.VFC<Props> = ({ totalCount, pathId }) => {
  const PER_PAGE = 10;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className={styles.main}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className={styles.li}>
          <Link href={`/blogs/page/${number}`}>
            <a
              href={`/blogs/page/${number}`}
              className={clsx(styles.a, {
                [styles.isActive]: number === pathId,
              })}
            >
              {number}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
