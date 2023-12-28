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

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(
  (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
      <div
        className={classNames(s.profileCard, {}, [
          className,
        ])}
      >
        <div className={s.header}>
          <Text title={t("Profile")} />
          <Button className={s.editBtn} variant="outline">
            {t("Edit")}
          </Button>
        </div>
        <div className={s.data}>
          <Input
            value={data?.firstname}
            placeholder={t("Name")}
            className={s.input}
          />
        </div>
        <div className={s.data}>
          <Input
            className={s.input}
            value={data?.lastname}
            placeholder={t("Surname")}
          />
        </div>
      </div>
    );
  }
);
