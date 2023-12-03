import { Theme } from "@/providers/ThemeProvider/ui/ThemeProvider";
import { createContext } from "react";

export interface ThemeContextProrps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext =
  createContext<ThemeContextProrps>({});
