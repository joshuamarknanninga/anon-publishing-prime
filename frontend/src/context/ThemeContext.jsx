// frontend/src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = ['darkTheme', 'darkTheme2', 'darkTheme3'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme');

  useEffect(() => {
    // Select a random theme on each visit
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(randomTheme);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme} min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
