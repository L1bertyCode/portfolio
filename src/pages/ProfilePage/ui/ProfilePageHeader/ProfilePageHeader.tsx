import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfilePageHeader.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  getProfileReadOnly,
  profileActions,
} from "@/entities/Profile";
import { useSelector } from "react-redux";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);
    const onCancelUpdateProfile = () => {
      dispatch(onCancelUpdateProfile);
    };
    return (
      <div
        className={classNames(s.profilePageHeader, {}, [
          className,
        ])}
      >
        <Text title={t("Profile")} />
        {readOnly ? (
          <Button
            className={s.editBtn}
            variant="outline"
            onClick={() =>
              dispatch(profileActions.setReadOnly(false))
            }
          >
            {t("Edit")}
          </Button>
        ) : (
          <Button
            className={s.editBtn}
            variant="outline"
            onClick={() =>
              dispatch(profileActions.setReadOnly(true))
            }
          >
            {t("Cancel")}
          </Button>
        )}
      </div>
    );
  }
);
