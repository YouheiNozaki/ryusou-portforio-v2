import { FiGithub, FiTwitter } from 'react-icons/fi';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.icons}>
        <a href="https://github.com/YouheiNozaki">
          <FiGithub size={24} className={styles.icon} />
        </a>
        <a href="https://twitter.com/ryusou_mtkh">
          <FiTwitter size={24} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};
