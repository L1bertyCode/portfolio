import { useTheme } from "@/shared/lib/hooks/useTheme";
import { Button } from "@/shared/ui/Button/Button";
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
    <Button
      className={classNames(s.themeSwitcher, {}, [
        className,
      ])}
      onClick={() => setTheme(theme)}
    >
      <ThemeIcon className={s.icon} />
    </Button>
  );
}
