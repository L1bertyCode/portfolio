import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfilePage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
  validateProfileErrors,
} from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileUserChangeData } from "@/entities/Profile/model/selectors/getProfileUserChangeData/getProfileUserChangeData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Text } from "@/shared/ui/Text/Text";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const userChangeData = useSelector(
    getProfileUserChangeData
  );

  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const validateErrors = useSelector(
    getProfileValidateErrors
  );
  const validateErrorsTranslates = {
    [validateProfileErrors.SERVER_ERROR]: t(
      "Server error on save"
    ),
    [validateProfileErrors.NO_DATA]: t(
      "Data not specified"
    ),
    [validateProfileErrors.INCORRECT_USER_DATA]: t(
      "Firstname and lastname name are required"
    ),
    [validateProfileErrors.INCORRECT_COUNTRY]: t(
      "Incorrect region"
    ),
    [validateProfileErrors.INCORRECT_AGE]:
      t("Incorrect age"),
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);
  const onChangeFirstname = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          firstname: value || "",
        })
      ),
    [dispatch]
  );
  const onChangeLastname = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          lastname: value || "",
        })
      ),
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          city: value || "",
        })
      ),
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replace(/\D/g, "") || 0),
        })
      ),
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          avatar: value || "",
        })
      ),
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) =>
      dispatch(
        profileActions.updateProfile({
          username: value || "",
        })
      ),
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency?: (typeof Currency)[keyof typeof Currency]) =>
      dispatch(
        profileActions.updateProfile({
          currency: currency,
        })
      ),
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country?: (typeof Country)[keyof typeof Country]) =>
      dispatch(
        profileActions.updateProfile({
          country: country,
        })
      ),
    [dispatch]
  );
  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div
        className={classNames(s.profilePage, {}, [
          className,
        ])}
      >
        <ProfilePageHeader />
        {validateErrors?.length
          ? validateErrors.map((err) => {
              return (
                <Text
                  key={err}
                  text={validateErrorsTranslates[err]}
                  colorType="error"
                />
              );
            })
          : null}
        <ProfileCard
          data={data}
          userChangeData={userChangeData}
          error={error}
          isLoading={isLoading}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});
export default ProfilePage;
