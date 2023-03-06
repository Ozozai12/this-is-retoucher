import { Link } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={css.header}>
        <div className={css.navContainer}>
          <Link to="/about" className={css.navItem}>
            About me
          </Link>
          <Link to="/payment" className={css.navItem}>
            Payment
          </Link>
          <Link to="/reviews" className={css.navItem}>
            Reviews
          </Link>
          <Link to="/celebrity" className={css.navItem}>
            Celebrity
          </Link>
          <Link to="/magazines" className={css.navItem}>
            Magazines
          </Link>
          <Link to="/beauty" className={css.navItem}>
            Beauty
          </Link>
          <Link to="/pregnancy" className={css.navItem}>
            Pregnancy
          </Link>
          <Link to="/family" className={css.navItem}>
            Family
          </Link>
          <Link to="/before-after" className={css.navItem}>
            Before/After
          </Link>
          <Link to="/18+" className={css.navItem}>
            18+
          </Link>
        </div>
      </div>
    </>
  );
};
