import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ProfilePage.module.scss";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.profilePage, {}, [className])}
    >
      <div>ProfilePage</div>
    </div>
  );
});
export default ProfilePage;
