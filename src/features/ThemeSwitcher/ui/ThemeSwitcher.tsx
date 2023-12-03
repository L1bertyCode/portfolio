import { useTheme } from "@/shared/lib/hooks/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface ThemeSwitcherProps {}
export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const {} = props;
  return (
    <AppButton onClick={() => setTheme(theme)}>
      toggle theme
    </AppButton>
  );
}

