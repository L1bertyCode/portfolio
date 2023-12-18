import {
  MouseEvent,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  Mods,
  classNames,
} from "@/shared/lib/classNames/classNames";

import s from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { Button } from "../Button/Button";
import { useTheme } from "@/shared/lib/hooks/useTheme";

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY = 300;
export const Modal = memo((props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const onContetntClick = (e: MouseEvent) => {
    e.stopPropagation();
  };
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearInterval(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div
        className={classNames(s.modal, mods, [className])}
      >
        <div className={s.overlay} onClick={closeHandler}>
          <div
            className={s.content}
            onClick={onContetntClick}
          >
            {children}
            <Button
              className={s.closeBtn}
              variant="clear"
              onClick={closeHandler}
            >
              x
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
});
