import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext(); 

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [translations, setTranslations] = useLocalStorage('translations', {});
    const [loading, setLoading] = useState(true); // Sayfanın yüklenme durumu

    // Dil dosyasını yükle
    const loadTranslations = async () => {
        try {
            const response = await axios.get(`/${language}.json`);
            console.log("Loaded translations:", response.data);
            setTranslations(response.data);
        } catch (error) {
            console.error('Error loading translations:', error);
        } finally {
            setLoading(false); // Data yüklenene kadar sayfa render edilmesin
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await loadTranslations();// Dil değiştiğinde dil dosyasını yükle
        };
        fetchData();
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage); // Yeni dili yükleme işlemi
    };

    // Yüklenme durumunu kontrol et, eğer yükleme tamamlanmadıysa yüklenmeyi bekle
    if (loading) {
        return <div>Loading...</div>;
    }

    // Yükleme tamamlandıysa, dil sağlanarak çocuk bileşenler render edilir
    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageProvider, LanguageContext };
