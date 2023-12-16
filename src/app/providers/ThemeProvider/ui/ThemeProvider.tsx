import { ThemeContext } from "@/shared/lib/context/ThemeContext";

import {
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}
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
  ) as Theme) || Theme.LIGHT;
export function ThemeProvider(props: ThemeProviderProps) {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme
  );
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);
  const defaulProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaulProps}>
      {children}
    </ThemeContext.Provider>
  );
}
