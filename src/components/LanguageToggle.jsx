import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    if (language === 'en') {
      changeLanguage('tr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <button onClick={handleLanguageToggle}>
      {language === 'en' ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
    </button>
  );
};

export default LanguageToggle;
