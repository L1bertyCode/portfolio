import { useTranslation } from "react-i18next";
import s from "./AboutPage.module.scss";
function AboutPage() {
  const { t } = useTranslation();
  return <div className={s.aboutPage}>{t("About")}</div>;
}

export default AboutPage;
