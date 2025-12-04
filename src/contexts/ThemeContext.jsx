import { createContext, useState, useEffect, useMemo } from 'react';

const THEME_STORAGE_KEY = 'theme-preference';

const getSystemTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getInitialPreference = () => {
  if (typeof window === 'undefined') return 'system';
  return localStorage.getItem(THEME_STORAGE_KEY) || 'system';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themePreference, setThemePreference] = useState(getInitialPreference);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  const resolvedTheme = themePreference === 'system' ? systemTheme : themePreference;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);

    root.classList.add('theme-transition');
    const timeout = setTimeout(() => root.classList.remove('theme-transition'), 600);

    localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    return () => clearTimeout(timeout);
  }, [resolvedTheme, themePreference]);

  const cycleTheme = () => {
    setThemePreference((current) => {
      if (current === 'system') return 'light';
      if (current === 'light') return 'dark';
      return 'system';
    });
  };

  const value = useMemo(
    () => ({
      themePreference,
      resolvedTheme,
      setThemePreference,
      cycleTheme,
    }),
    [themePreference, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
