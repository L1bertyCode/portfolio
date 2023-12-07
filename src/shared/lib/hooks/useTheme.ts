import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from "@/providers/ThemeProvider/ui/ThemeProvider";
import { useContext } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";

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
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.DARK;
      break;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.DARK,
    setTheme: toggleTheme,
  };
}
