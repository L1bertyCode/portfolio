import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { useTheme } from "@/shared/lib/hooks/useTheme";

import { ReactNode, useMemo } from "react";
interface ThemeProviderProps {
  children: ReactNode;
}
export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { theme, setTheme } = useTheme();
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
