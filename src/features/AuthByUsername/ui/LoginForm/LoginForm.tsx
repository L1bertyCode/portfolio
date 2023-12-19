import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const { username, password, error, isLoading } =
    useSelector(getLoginState);
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
  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div
      className={classNames(s.loginForm, {}, [className])}
    >
      {error && <div>{error}</div>}
      <Input
        autoFocus={true}
        label={t("Username")}
        className={s.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        label={t("Password")}
        className={s.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={s.loginBtn}
        variant="outline-inverted"
        onClick={onLogin}
        disabled={isLoading}
      >
        {t("Login")}
      </Button>
    </div>
  );
});
