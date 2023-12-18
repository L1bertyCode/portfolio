import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}
export function Navbar(props: NavbarProps) {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const { t } = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>logo</div>
      <Button
        onClick={onShowModal}
        variant="clear-inverted"
      >
        {t("Login")}
      </Button>
      <LoginModal
        // isOpen={isAuthModal}
        isOpen={true}
        onClose={onCloseModal}
        className={"modal"}
      />
    </div>
  );
}
