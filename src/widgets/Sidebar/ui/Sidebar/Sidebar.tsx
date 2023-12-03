import { Link } from "react-router-dom";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
// import ThemeIcon from "@/shared/assets/icons/theme-icon.svg";

export function Sidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.links}>
        <div className={s.link}>
          <Link to="/">Main</Link>
        </div>
        <div className={s.link}>
          <Link to="/about">About</Link>
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
    </div>
  );
}
