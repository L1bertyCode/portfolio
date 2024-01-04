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
import img from "@/shared/assets/tests/storybook.jpg";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import {
  Currency,
  CurrencySelect,
} from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  userChangeData?: Profile;
  error?: string;
  isLoading: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (
    currency?: (typeof Currency)[keyof typeof Currency]
  ) => void;
  onChangeCountry?: (
    country?: (typeof Country)[keyof typeof Country]
  ) => void;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const {
      className,
      data,
      userChangeData,
      error,
      isLoading,
      onChangeFirstname,
      onChangeLastname,
      onChangeAge,
      onChangeCity,
      onChangeAvatar,
      onChangeUsername,
      onChangeCurrency,
      onChangeCountry,
    } = props;
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);
    const { t } = useTranslation();

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
          { [s.loading]: isLoading, [s.edited]: !readOnly },
          [className]
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data?.avatar && (
              <div className={s.avatarWrapper}>
                <Avatar src={img} />
              </div>
            )}
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
              <Input
                readOnly={readOnly}
                className={s.input}
                value={userChangeData?.age}
                label={t("Age")}
                placeholder={t("Age")}
                onChange={onChangeAge}
              />
              <Input
                readOnly={readOnly}
                className={s.input}
                value={userChangeData?.city}
                label={t("City")}
                placeholder={t("City")}
                onChange={onChangeCity}
              />
              <Input
                readOnly={readOnly}
                className={s.input}
                value={userChangeData?.avatar}
                label={t("Avatar")}
                placeholder={t("Avatar")}
                onChange={onChangeAvatar}
              />
              <Input
                readOnly={readOnly}
                className={s.input}
                value={userChangeData?.username}
                label={t("Username")}
                placeholder={t("Username")}
                onChange={onChangeUsername}
              />
              <CurrencySelect
                value={userChangeData?.currency}
                readOnly={readOnly}
                onChange={onChangeCurrency}
              />
              <CountrySelect
                value={userChangeData?.country}
                readOnly={readOnly}
                onChange={onChangeCountry}
              />
            </div>
          </>
        )}
      </div>
    );
  }
);
