import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { RiMailAddLine } from 'react-icons/ri';
import css from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={css.sidebar}>
      <IconContext.Provider value={{ className: css.icon }}>
        <AiFillInstagram />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: css.icon }}>
        <RiMailAddLine />
      </IconContext.Provider>
    </div>
  );
}
