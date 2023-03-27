import { IconContext } from 'react-icons';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useMatchMedia } from 'hooks/use-match-media';
import { useTranslation } from 'react-i18next';

import css from './LangSelect.module.css';

const options = [
  { value: 'en', label: 'En' },
  { value: 'uk', label: 'Uk' },
  { value: 'fr', label: 'Fr' },
  { value: 'de', label: 'De' },
  { value: 'es', label: 'Es' },
  { value: 'it', label: 'It' },
  { value: 'sw', label: 'Sw' },
];

export const LangSelect = () => {
  const { isDesktop } = useMatchMedia();
  const [lang, setLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem('i18nextLng');
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
      return setLang(currentLanguage);
    }
    setLang('en');
  }, [i18n, lang]);

  useEffect(() => {
    i18n.changeLanguage(lang.value);
  }, [i18n, lang]);

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

  const currentLang = () => {
    return options.find(option => option.value === lang);
  };

  return (
    <Select
      options={options}
      onChange={onLangChange}
      value={currentLang()}
      closeMenuOnSelect={true}
      isSearchable={false}
      components={{ DropdownIndicator }}
      onMenuOpen={() => setIsOpen(true)}
      onMenuClose={() => setIsOpen(false)}
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
  );
};
