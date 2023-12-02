import { useState } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";
export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  ORANGE = "app_orange_theme",
  BLUE = "app_blue_theme",
}
const defaultTheme =
  (localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as Theme) || Theme.DARK;
interface UseThemeResult {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
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
