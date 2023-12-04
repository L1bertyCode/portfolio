import { SIDEBAR_COLLAPSED_KEY } from "@/shared/const/localstorage";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useState } from "react";
interface SidebarProps {
  className?: string;
}
const defaultCollpased =
  localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true"
    ? true
    : false || false;
export function Sidebar(props: SidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(
    defaultCollpased
  );
  const changeCollapse = () => {
    console.log("collapsed", collapsed);

    setCollapsed((prevState) => !prevState);
    console.log("collapsed", collapsed);

    localStorage.setItem(
      SIDEBAR_COLLAPSED_KEY,
      (!collapsed).toString()
    );
    console.log("collapsed", collapsed);
  };
  return (
    <div
      className={classNames(
        s.sidebar,
        {
          [s.collapsed]: collapsed,
        },
        [className]
      )}
    >
      <div className={s.links}>
        <div className={s.link}>
          <AppLink to="/">Main</AppLink>
        </div>
        <div className={s.link}>
          <AppLink to="/about">About</AppLink>
        </div>
      </div>
      <AppButton
        variant="outline"
        onClick={changeCollapse}
        className={s.btnCollapsed}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
