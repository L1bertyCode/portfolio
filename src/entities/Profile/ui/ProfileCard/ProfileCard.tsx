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
     <Text title={t("Profile")}/>
     <Button variant="outline">{t('Edit')}</Button>
      </div>
    );
  }
);
