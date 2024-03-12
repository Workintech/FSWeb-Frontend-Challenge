import React, { createContext, useState, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light' );
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useTheme = () => useContext(DarkModeContext);
