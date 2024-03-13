import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useTheme } from "../contexts/DarkModeContext";

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useTheme();

  const handleLanguageToggle = () => {
    if (language === 'en') {
      changeLanguage('tr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <button onClick={handleLanguageToggle} >
      {language === 'en' ? 
        <span className={theme === "dark" ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-gri2'}><span className="first:text-pink2">TÜRKÇE</span> 'YE GEÇ</span> : 
          <span className={theme === "dark" ? 'text-sm font-semibold text-white' : 'text-sm font-semibold text-gri2'}>SWITCH TO<span className="text-pink2"> ENGLISH</span></span>}
    </button>
  );
};

export default LanguageToggle;
