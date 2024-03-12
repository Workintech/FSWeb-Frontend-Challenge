import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


const LanguageContext = createContext(); 

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({}); // Dil datalarını tutmak için

  // Dil dosyasını yükle
  const loadTranslations = () => {
    axios
    .get(`/${language}.json`)
    .then(response => {
        console.log("Loaded translations:", response.data);
        setTranslations(response.data);   
    })
    .catch(error => {
        console.error('Error loading translations:', error);
    })
  };

  // Dil değiştiğinde dil dosyasını yükle
  useEffect(() => {
    loadTranslations();
  }, [language]);

  const changeLanguage = (newLanguage) => {
    // Yeni dili yükleme işlemi
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
