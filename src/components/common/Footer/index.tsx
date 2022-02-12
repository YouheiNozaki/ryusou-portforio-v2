import { CustomLink } from '../../ui/CustomLink';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.text}>
        <p>&copy; This site created by</p>
        <CustomLink href="https://twitter.com/ryusou_mtkh">
          @ryusou_mtkh
        </CustomLink>
      </div>
    </footer>
  );
};
