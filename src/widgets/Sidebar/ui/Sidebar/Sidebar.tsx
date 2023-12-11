import { SIDEBAR_COLLAPSED_KEY } from "@/shared/const/localstorage";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
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
      {/* <div className={s.links}>
        <div className={s.link}>
          <AppLink to="/">{t("Main")}</AppLink>
        </div>
        <div className={s.link}>
          <AppLink to="/about">{t("About")}</AppLink>
        </div>
      </div> */}
      <AppButton
        data-testid="sidebar-toggle"
        variant="outline"
        onClick={changeCollapse}
        className={s.btnCollapsed}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
}
