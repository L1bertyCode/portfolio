import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/type/profile";
import { Loader } from "@/shared/ui/Loader/Loader";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading: boolean;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const { className, data, error, isLoading } = props;
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
          { [s.loading]: isLoading },
          [className]
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={s.header}>
              <Text title={t("Profile")} />
              <Button
                className={s.editBtn}
                variant="outline"
              >
                {t("Edit")}
              </Button>
            </div>
            <div className={s.data}>
              <Input
                value={data?.firstname}
                placeholder={t("Name")}
                className={s.input}
              />
              <Input
                className={s.input}
                value={data?.lastname}
                placeholder={t("Surname")}
              />
            </div>
          </>
        )}
      </div>
    );
  }
);
