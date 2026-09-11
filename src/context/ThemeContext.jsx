import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themePalettes = [
  { id: 'violet', name: 'Royal Violet', color: '#8b5cf6', previewBg: 'from-violet-500 to-purple-600' },
  { id: 'indigo', name: 'Electric Indigo', color: '#6366f1', previewBg: 'from-indigo-500 to-blue-600' },
  { id: 'emerald', name: 'Emerald Future', color: '#10b981', previewBg: 'from-emerald-500 to-teal-600' },
  { id: 'rose', name: 'Sunset Rose', color: '#f43f5e', previewBg: 'from-rose-500 to-pink-600' },
  { id: 'ocean', name: 'Ocean Cyan', color: '#06b6d4', previewBg: 'from-cyan-500 to-blue-600' }
];

export const ThemeProvider = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState(() => {
    return localStorage.getItem('labelbuz_theme_palette') || 'violet';
  });
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('labelbuz_dark_mode') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply Palette
    if (currentPalette === 'violet') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', currentPalette);
    }
    localStorage.setItem('labelbuz_theme_palette', currentPalette);
  }, [currentPalette]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('labelbuz_dark_mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{
      currentPalette,
      setCurrentPalette,
      isDarkMode,
      toggleDarkMode,
      themePalettes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
