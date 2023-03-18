import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import css from './Menu.module.css';
import { StyledLink } from './Menu.styled';

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
          <StyledLink to="/about" className={css.menuItem}>
            About me
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/payment" className={css.menuItem}>
            Payment
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/reviews" className={css.menuItem}>
            Reviews
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/celebrity" className={css.menuItem}>
            Celebrity
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/magazines" className={css.menuItem}>
            Magazines
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/beauty" className={css.menuItem}>
            Beauty
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/pregnancy" className={css.menuItem}>
            Pregnancy
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/family" className={css.menuItem}>
            Family
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/before-after" className={css.menuItem}>
            Before/After
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/18+" className={css.menuItem}>
            18+
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
