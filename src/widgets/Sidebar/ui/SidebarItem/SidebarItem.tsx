import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./SidebarItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemInterace } from "../../model/items";

interface SidebarItemProps {
  className?: string;
  item: SidebarItemInterace;
  collapsed: boolean;
}

export const SidebarItem = memo(
  (props: SidebarItemProps) => {
    const { className, item, collapsed } = props;
    const { t } = useTranslation();
    return (
      <AppLink
        className={classNames(s.sidebarItem, {}, [
          className,
        ])}
        to={item.path}
      >
        <item.Icon className={s.icon} />
        {!collapsed ? (
          <span className={s.text}>
            {t(`${item.text}`)}
          </span>
        ) : undefined}
      </AppLink>
    );
  }
);
