import { memo } from "react";
import s from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.notFoundPage, {}, [
        className,
      ])}
    >
      <h2>{t("Page not found")}</h2>
    </div>
  );
});
export default NotFoundPage;
