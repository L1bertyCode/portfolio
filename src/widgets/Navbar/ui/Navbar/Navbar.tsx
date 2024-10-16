import { AppLink } from "@/shared/ui/AppLink/AppLink";

import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { useTheme } from "@/shared/lib/useTheme/useTheme";

import s from "./Navbar.module.scss";
import { routeConfig } from "@/app/providers/router/config/routeConfig/routeConfig";
interface NavbarProps { };
export const Navbar = ({ }:
  NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <div className={s.Navbar}>
      <AppLink to="/">logo</AppLink>
      <div>
        <nav>
          {Object.values(routeConfig).map(route =>
            <AppLink key={route.path} to={"/"}>{route.name}</AppLink>
          )}

        </nav>
        <ThemeSwitcher onClick={toggleTheme} />
      </div>
    </div>
  );
};