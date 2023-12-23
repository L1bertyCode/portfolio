import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAuthData,
  userActions,
} from "@/entities/User";

interface NavbarProps {
  className?: string;
}
export function Navbar(props: NavbarProps) {
  const { className } = props;
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = () => {
    dispatch(userActions.logout());
  };
  const { t } = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>logo</div>
      {authData ? (
        <Button onClick={onLogout} variant="clear-inverted">
          {t("Logout")}
        </Button>
      ) : (
        <Button
          onClick={onShowModal}
          variant="clear-inverted"
        >
          {t("Login")}
        </Button>
      )}
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
          className={"modal"}
        />
      )}
    </div>
  );
}
