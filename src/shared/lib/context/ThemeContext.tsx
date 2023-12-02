import { createContext } from "react";
import { Theme } from "../hooks/useTheme";

export interface ThemeContextProrps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext =
  createContext<ThemeContextProrps>({});
