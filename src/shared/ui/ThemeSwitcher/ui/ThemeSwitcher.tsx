import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./ThemeSwitcher.module.scss";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import { AppIcon } from "../../AppIcon/AppIcon";
interface ThemeSwitcherProps { onClick: () => void; };
export const ThemeSwitcher = ({ onClick }: ThemeSwitcherProps) => {
  return (
    <AppButton variant="clear" className={s.ThemeSwitcher} onClick={onClick}>
      <AppIcon Svg={ThemeIcon} />
    </AppButton>
  );
};
