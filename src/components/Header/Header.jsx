import { StyledLink, StyledLogoLink } from './Header.styled';
import { IconContext } from 'react-icons';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { useMatchMedia } from 'hooks/use-match-media';

import Select from 'react-select';

import css from './Header.module.css';

import { Logo } from 'components/Logo/Logo';
import { useState } from 'react';

const options = [
  { value: 'en', label: 'En' },
  { value: 'uk', label: 'Uk' },
  { value: 'fr', label: 'Fr' },
  { value: 'de', label: 'De' },
  { value: 'es', label: 'Es' },
  { value: 'it', label: 'It' },
  { value: 'sw', label: 'Sw' },
];

export const Header = ({ onMenuOpen }) => {
  const { isDesktop } = useMatchMedia();
  const [lang, setLang] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(lang);

  const onLangChange = value => {
    setLang(value);
  };

  const DropdownIndicator = () => {
    return (
      <IconContext.Provider value={{ className: css.langIcon }}>
        {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </IconContext.Provider>
    );
  };

  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.langContainer}>
          <div className={css.langSwitcher}>
            <Select
              options={options}
              defaultValue={options[0]}
              onChange={onLangChange}
              closeMenuOnSelect={true}
              isSearchable={false}
              components={{ DropdownIndicator }}
              onMenuOpen={() => setIsOpen(true)}
              onMenuClose={() => setIsOpen(false)}
              className={css.select}
              styles={{
                menu: (baseStyles, state) => ({
                  ...baseStyles,
                  color: '#c9c2af',
                  zIndex: 20,
                  marginLeft: 5,
                  fontSize: 16,
                }),
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: 'transparent',
                  border: 'none',
                  minHeight: 20,
                  zIndex: 20,
                  boxShadow: 'none',
                  cursor: 'pointer',
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: isDesktop ? '#fff' : '#c9c2af',
                  fontSize: isDesktop ? 20 : 24,
                  marginRight: 0,
                }),
                indicatorSeparator: (baseStyles, state) => ({
                  ...baseStyles,
                  display: 'none',
                }),
              }}
            />
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
