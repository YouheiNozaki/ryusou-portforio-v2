import { FiGithub, FiTwitter } from 'react-icons/fi';
import { footerStyle } from './footer.css';

export const Footer = () => {
  return (
    <footer className={footerStyle.wrapper}>
      <div className={footerStyle.icons}>
        <a href="https://github.com/YouheiNozaki">
          <FiGithub size={24} className={footerStyle.icon} />
        </a>
        <a href="https://twitter.com/ryusou_mtkh">
          <FiTwitter size={24} className={footerStyle.icon} />
        </a>
      </div>
    </footer>
  );
};
