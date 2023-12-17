import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";

// import s from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  collapsed: boolean;
}

export const LanguageSwitcher = memo(
  (props: LanguageSwitcherProps) => {
    const { className, collapsed } = props;
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
      i18n.changeLanguage(
        i18n.language === "en" ? "ru" : "en"
      );
    };
    return (
      <Button
        variant="clear-inverted"
        className={classNames("", {}, [className])}
        onClick={changeLanguage}
      >
        {collapsed ? t("ShortLangauge") : t("Langauge")}
      </Button>
    );
  }
);
