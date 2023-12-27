import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  loginActions,
  loginReducer,
} from "../../model/slice/loginSlice";

import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text } from "@/shared/ui/Text/Text";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};
const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const store = useStore() as ReduxStoreWithManager;
  // useEffect(() => {
  //   store.reducerManager.add("loginForm", loginReducer);
  //   dispatch({ type: "@INIT loginForm reducer" });
  //   return () => {
  //     store.reducerManager.remove("loginForm");
  //     dispatch({ type: "@DESTROY loginForm reducer" });
  //   };
  // }, []);
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
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
  const onLogin = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({ username, password })
    );
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
      // navigate("/profile");
    }
  }, [dispatch, username, password]);
  return (
    <DynamicModuleLoader
      removeAfterUnmount={true}
      reducers={initialReducers}
    >
      <div
        className={classNames(s.loginForm, {}, [className])}
      >
        <Text
          text={t("Authorization form")}
          colorType="inverted"
        />
        {error && (
          <Text
            text={t(
              "You entered an incorrect username or password"
            )}
            colorType="error"
          />
        )}
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
    </DynamicModuleLoader>
  );
});
export default LoginForm;
