import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfileCard.module.scss";

import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/type/profile";
import { Loader } from "@/shared/ui/Loader/Loader";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  userChangeData?: Profile;
  error?: string;
  isLoading: boolean;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const {
      className,
      data,
      userChangeData,
      error,
      isLoading,
    } = props;
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);
    const { t } = useTranslation();
    const onChangeFirstname = useCallback(
      (value: string) =>
        dispatch(
          profileActions.updateProfile({
            firstname: value || "",
          })
        ),
      [dispatch]
    );
    const onChangeLastname = useCallback(
      (value: string) =>
        dispatch(
          profileActions.updateProfile({
            lastname: value || "",
          })
        ),
      [dispatch]
    );
    if (error) {
      return (
        <div
          className={classNames(s.profileCard, {}, [
            className,
            s.error,
          ])}
        >
          <Text
            align="center"
            colorType="error"
            title={t(
              "An error occurred while loading the page"
            )}
            text={t("Refresh the page")}
          />
        </div>
      );
    }
    return (
      <div
        className={classNames(
          s.profileCard,
          { [s.loading]: isLoading },
          [className]
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={s.data}>
              <Input
                readOnly={readOnly}
                value={userChangeData?.firstname}
                placeholder={t("Name")}
                label={t("Name")}
                className={s.input}
                onChange={onChangeFirstname}
              />
              <Input
                readOnly={readOnly}
                className={s.input}
                value={userChangeData?.lastname}
                label={t("Surname")}
                placeholder={t("Surname")}
                onChange={onChangeLastname}
              />
            </div>
          </>
        )}
      </div>
    );
  }
);
