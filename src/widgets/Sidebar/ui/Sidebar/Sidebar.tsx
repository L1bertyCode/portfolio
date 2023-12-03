import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

export function Sidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.links}>
        <div className={s.link}>
          <AppLink to="/">Main</AppLink>
        </div>
        <div className={s.link}>
          <AppLink to="/about">About</AppLink>
        </div>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
