import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./PageError.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const reloadPage = () => {
    location.reload();
  };
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.pageError, {}, [className])}
    >
      <p className={s.text}>
        {t("An unexpected error occurred")}
      </p>
      <AppButton
        variant="outline-inverted"
        onClick={reloadPage}
      >
        {t("Refresh the page")}
      </AppButton>
    </div>
  );
});
