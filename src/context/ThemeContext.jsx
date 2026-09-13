import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// The resume reads as a printed sheet, so light is the default; a stored
// choice wins over the OS preference.
function initialDark() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // Private browsing can refuse storage; the theme still applies for this visit.
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((v) => !v) }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
