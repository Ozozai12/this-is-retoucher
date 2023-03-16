import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import css from './Menu.module.css';
import { Link } from 'react-router-dom';

export function Menu({ onMenuClose }) {
  return (
    <div className={css.backdrop}>
      <span className={css.closeBtn} onClick={onMenuClose}>
        <IconContext.Provider value={{ className: css.closeIcon }}>
          <CgClose />
        </IconContext.Provider>
      </span>
      <ul className={css.menuList} onClick={onMenuClose}>
        <li>
          <Link to="/about" className={css.menuItem}>
            About me
          </Link>
        </li>
        <li>
          <Link to="/payment" className={css.menuItem}>
            Payment
          </Link>
        </li>
        <li>
          <Link to="/reviews" className={css.menuItem}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/celebrity" className={css.menuItem}>
            Celebrity
          </Link>
        </li>
        <li>
          <Link to="/magazines" className={css.menuItem}>
            Magazines
          </Link>
        </li>
        <li>
          <Link to="/beauty" className={css.menuItem}>
            Beauty
          </Link>
        </li>
        <li>
          <Link to="/pregnancy" className={css.menuItem}>
            Pregnancy
          </Link>
        </li>
        <li>
          <Link to="/family" className={css.menuItem}>
            Family
          </Link>
        </li>
        <li>
          <Link to="/before-after" className={css.menuItem}>
            Before/After
          </Link>
        </li>
        <li>
          <Link to="/18+" className={css.menuItem}>
            18+
          </Link>
        </li>
      </ul>
    </div>
  );
}
