import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  return (
    <div
      className={classNames(s.loginForm, {}, [className])}
    >
      <Input
        autoFocus={true}
        label={t("Username")}
        className={s.input}
        onChange={onChangeUsername}
      />
      <Input
        label={t("Password")}
        className={s.input}
        onChange={onChangePassword}
      />
      <Button
        className={s.loginBtn}
        variant="outline-inverted"
      >
        {t("Login")}
      </Button>
    </div>
  );
});
