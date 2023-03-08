import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { RiMailAddLine } from 'react-icons/ri';
import css from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={css.sidebar}>
      <a
        href="https://www.instagram.com/"
        className={css.frame}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <IconContext.Provider value={{ className: css.icon }}>
          <AiFillInstagram />
        </IconContext.Provider>
      </a>
      <a href="mailto:thisisretoucher@gmail.com" className={css.frame}>
        <IconContext.Provider value={{ className: css.icon }}>
          <RiMailAddLine />
        </IconContext.Provider>
      </a>
    </div>
  );
}
