import { AppLink } from "@/shared/ui/AppLink/AppLink";

import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { useTheme } from "@/shared/lib/useTheme/useTheme";

import s from "./Navbar.module.scss";
interface NavbarProps { };
export const Navbar = ({ }:
  NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <div className={s.Navbar}>
      <AppLink to="/">logo</AppLink>
      <div>
        <nav>
          <AppLink to={"/"}>Main</AppLink>
          <AppLink to={"/skills"}>Skills</AppLink>
        </nav>
        <ThemeSwitcher onClick={toggleTheme} />
      </div>
    </div>
  );
};