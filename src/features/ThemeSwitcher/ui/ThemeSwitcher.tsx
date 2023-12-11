import { useTheme } from "@/shared/lib/hooks/useTheme";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";
import s from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
interface ThemeSwitcherProps {
  className?: string;
}
export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const { className } = props;
  return (
    <AppButton
      className={classNames(s.themeSwitcher, {}, [
        className,
      ])}
      onClick={() => setTheme(theme)}
    >
      123
      <ThemeIcon className={s.icon} />
    </AppButton>
  );
}
