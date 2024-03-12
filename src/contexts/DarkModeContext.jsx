import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('tema', 'light');

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
