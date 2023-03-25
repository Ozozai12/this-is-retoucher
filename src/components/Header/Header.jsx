import { StyledLink, StyledLogoLink } from './Header.styled';
import { IconContext } from 'react-icons';
import { AiFillCaretDown } from 'react-icons/ai';

import css from './Header.module.css';

import { Logo } from 'components/Logo/Logo';

export const Header = ({ onMenuOpen }) => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.langContainer}>
          <div className={css.langSwitcher}>
            <select id="lang" name="lang" className={css.selectContainer}>
              <option value="en" selected className={css.selectOption}>
                en
              </option>
              <option value="uk">
                <span className={css.optionFlag}></span> uk
              </option>
              <option value="fr">fr</option>
              <option value="de">de</option>
              <option value="es">es</option>
              <option value="it">it</option>
              <option value="sw">sw</option>
            </select>
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
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/payment" className={css.navItem}>
            Payment
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/reviews" className={css.navItem}>
            Reviews
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/celebrity" className={css.navItem}>
            Celebrity
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/magazines" className={css.navItem}>
            Magazines
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/beauty" className={css.navItem}>
            Beauty
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/pregnancy" className={css.navItem}>
            Pregnancy
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/family" className={css.navItem}>
            Family
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/before-after" className={css.navItem}>
            Before/After
            <span className={css.underline} />
          </StyledLink>
          <StyledLink to="/18+" className={css.navItem}>
            18+
            <span className={css.underline} />
          </StyledLink>
        </div>
        <div className={css.burger} onClick={onMenuOpen}>
          <span className={css.upperLine}></span>
          <span className={css.middleLine}></span>
          <span className={css.lowerLine}></span>
        </div>
      </div>
    </div>
  );
};
