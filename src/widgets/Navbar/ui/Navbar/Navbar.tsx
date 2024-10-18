import { AppLink } from "@/shared/ui/AppLink/AppLink";

import s from "./Navbar.module.scss";
import { routeConfig } from "@/app/providers/router/config/routeConfig/routeConfig";
interface NavbarProps { };
export const Navbar = ({ }:
  NavbarProps) => {

  return (
    <nav className={s.Navbar}>
      {Object.values(routeConfig).map(route =>
        <AppLink key={route.path} to={route.path || "/"}>{route.name}</AppLink>
      )}

    </nav>

  );
};