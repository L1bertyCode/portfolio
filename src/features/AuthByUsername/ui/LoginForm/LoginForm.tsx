import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.loginForm, {}, [className])}
    >
      <Input
        autoFocus={true}
        label={t("Username")}
        className={s.input}
      />
      <Input label={t("Password")} className={s.input} />
      <Button
        className={s.loginBtn}
        variant="clear-inverted"
      >
        {t("Login")}
      </Button>
    </div>
  );
});
