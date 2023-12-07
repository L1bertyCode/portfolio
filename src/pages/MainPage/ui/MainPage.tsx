import { useTranslation } from "react-i18next";
import s from "./MainPage.module.scss";
function MainPage() {
  const { t } = useTranslation();
  return <div className={s.mainPage}>{t("Main")}</div>;
}

export default MainPage;
