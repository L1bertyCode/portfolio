import { ThemeContext } from "@/shared/lib/context/ThemeContext";

import { ReactNode, useMemo, useState } from "react";
interface ThemeProviderProps {
  children: ReactNode;
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
  ) as Theme) || Theme.DARK;
export function ThemeProvider(props: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const { children } = props;
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
