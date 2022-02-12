import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './customlink.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

type Ref = React.ForwardedRef<HTMLAnchorElement>;

export const CustomLink = forwardRef(
  ({ href, children, className }: Props, ref: Ref) => {
    return (
      <a href={href} ref={ref} className={clsx(className, styles.link)}>
        {children}
      </a>
    );
  },
);
