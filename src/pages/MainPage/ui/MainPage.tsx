import { useTranslation } from "react-i18next";
import s from "./MainPage.module.scss";
import { Counter } from "@/entities/Counter";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChange = (val: string) => setValue(val);
  return (
    <div className={s.mainPage}>
      {t("Main")}
      {/* <Counter /> */}
      <Input
        id={"text"}
        label={t("Type text")}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MainPage;
