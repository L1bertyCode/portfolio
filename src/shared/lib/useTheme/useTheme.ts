import { Theme, ThemeContext } from "@/app/providers/ThemeProvider";
import { LOCAL_STORAGE_THEME_KEY } from "@/app/providers/ThemeProvider/lib/ThemeContext/ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme: theme,
    toggleTheme: toggleTheme
  };
}