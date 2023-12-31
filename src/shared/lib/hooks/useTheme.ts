import { useContext } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from "@/app/providers/ThemeProvider/ui/ThemeProvider";

interface UseThemeResult {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (theme: Theme) => {
    let newTheme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.BLUE;
        break;
      case Theme.BLUE:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
        break;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = newTheme;
  };

  return {
    theme: theme || Theme.DARK,
    setTheme: toggleTheme,
  };
}
