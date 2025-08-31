import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// PUBLIC_INTERFACE
export const ThemeContext = createContext({
  /** This is a simple theme context with getter and setter. */
  theme: 'dark',
  setTheme: () => {},
  toggle: () => {},
});

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  /** Provides theme state and applies data-theme on the html element. */
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('technova_theme') : null;
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('technova_theme', theme);
    } catch (e) {
      // ignore persistence errors
    }
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggle: () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark')),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// PUBLIC_INTERFACE
export function useTheme() {
  /** Convenience hook to access theme context. */
  return useContext(ThemeContext);
}
