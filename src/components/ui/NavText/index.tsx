import clsx from 'clsx';
import styles from './navtext.module.scss';

type Props = {
  text: string;
  isActive: boolean;
};

export const NavText: React.VFC<Props> = ({ text, isActive }) => {
  return (
    <p
      className={clsx(styles.text, {
        [styles.isActive]: isActive,
      })}
    >
      {text}
    </p>
  );
};
