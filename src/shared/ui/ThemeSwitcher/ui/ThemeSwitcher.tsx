import { Button } from "@/shared/ui/Button/Button";
import s from "./ThemeSwitcher.module.scss";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
interface ThemeSwitcherProps { onClick: () => void; };
export const ThemeSwitcher = ({ onClick }: ThemeSwitcherProps) => {
  return (
    <Button variant="clear" className={s.ThemeSwitcher} onClick={onClick}>
      <ThemeIcon />
    </Button>
  );
};