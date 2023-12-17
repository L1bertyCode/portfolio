import { SIDEBAR_COLLAPSED_KEY } from "@/shared/const/localstorage";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routes/routesConfig";

import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";

interface SidebarProps {
  className?: string;
}
const defaultCollpased =
  localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true"
    ? true
    : false || false;
export function Sidebar(props: SidebarProps) {
  const { t, i18n } = useTranslation();
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
        <div className={s.link}>
          <AppLink to={RoutePath.main}>
            <MainIcon className={s.icon} />
            {!collapsed ? (
              <span className={s.text}>{t("Main")}</span>
            ) : undefined}
          </AppLink>
        </div>
        <div className={s.link}>
          <AppLink to={RoutePath.about}>
            <AboutIcon className={s.icon} />
            {!collapsed ? (
              <span className={s.text}>{t("About")}</span>
            ) : undefined}
          </AppLink>
        </div>
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
