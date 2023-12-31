import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfilePageHeader.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.profilePageHeader, {}, [
          className,
        ])}
      >
        <Text title={t("Profile")} />
        <Button className={s.editBtn} variant="outline">
          {t("Edit")}
        </Button>
      </div>
    );
  }
);
