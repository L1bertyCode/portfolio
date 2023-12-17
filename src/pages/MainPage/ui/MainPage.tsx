import { useTranslation } from "react-i18next";
import s from "./MainPage.module.scss";
import { Counter } from "@/entities/Counter";
function MainPage() {
  const { t } = useTranslation();
  return (
    <div className={s.mainPage}>
      {t("Main")}
      <Counter />

    </div>
  );
}

export default MainPage;
