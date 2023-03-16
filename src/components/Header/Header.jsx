import { StyledLink, StyledLogoLink } from './Header.styled';
import { IconContext } from 'react-icons';
import { AiFillCaretDown } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

import css from './Header.module.css';

import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.langContainer}>
          <div className={css.langSwitcher}>
            En
            <IconContext.Provider value={{ className: css.langIcon }}>
              <AiFillCaretDown />
            </IconContext.Provider>
          </div>
        </div>
        <div className={css.headerContainer}>
          <StyledLogoLink to="/" className={css.logoItem}>
            <Logo />
          </StyledLogoLink>
          <StyledLink to="/about" className={css.navItem}>
            About me
          </StyledLink>
          <StyledLink to="/payment" className={css.navItem}>
            Payment
          </StyledLink>
          <StyledLink to="/reviews" className={css.navItem}>
            Reviews
          </StyledLink>
          <StyledLink to="/celebrity" className={css.navItem}>
            Celebrity
          </StyledLink>
          <StyledLink to="/magazines" className={css.navItem}>
            Magazines
          </StyledLink>
          <StyledLink to="/beauty" className={css.navItem}>
            Beauty
          </StyledLink>
          <StyledLink to="/pregnancy" className={css.navItem}>
            Pregnancy
          </StyledLink>
          <StyledLink to="/family" className={css.navItem}>
            Family
          </StyledLink>
          <StyledLink to="/before-after" className={css.navItem}>
            Before/After
          </StyledLink>
          <StyledLink to="/18+" className={css.navItem}>
            18+
          </StyledLink>
        </div>
        <div className={css.burger}>
          <IconContext.Provider value={{ className: css.burgerIcon }}>
            <RxHamburgerMenu />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
