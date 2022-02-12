import { forwardRef } from 'react';
import styles from './customlink.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
};

type Ref = React.ForwardedRef<HTMLAnchorElement>;

export const CustomLink = forwardRef(({ href, children }: Props, ref: Ref) => {
  return (
    <a href={href} ref={ref} className={styles.link}>
      {children}
    </a>
  );
});
