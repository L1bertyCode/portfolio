import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}
export function Navbar(props: NavbarProps) {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>logo</div>
      <Button
        onClick={() => setIsAuthModal(true)}
        variant="clear-inverted"
      >
        isOpen
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
        className={"modal"}
      >
        Some content
      </Modal>
    </div>
  );
}
