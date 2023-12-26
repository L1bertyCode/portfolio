import { SIDEBAR_COLLAPSED_KEY } from "@/shared/const/localstorage";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

import { sidebatItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}
const defaultCollpased =
  localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true"
    ? true
    : false || false;
export function Sidebar(props: SidebarProps) {
  const { t} = useTranslation();
  const { className } = props;
  const [collapsed, setCollapsed] = useState(
    defaultCollpased
  );
  const changeCollapse = () => {
    setCollapsed((prevState) => !prevState);
    localStorage.setItem(
      SIDEBAR_COLLAPSED_KEY,
      (!collapsed).toString()
    );
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        s.sidebar,
        {
          [s.collapsed]: collapsed,
        },
        [className]
      )}
    >
      <div className={s.links}>
        {sidebatItemsList.map((listItem) => (
          <SidebarItem
            key={listItem.path}
            className={s.link}
            collapsed={collapsed}
            item={listItem}
          />
        ))}
      </div>
      <Button
        data-testid="sidebar-toggle"
        variant="outline-inverted"
        onClick={changeCollapse}
        className={s.btnCollapsed}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
}
