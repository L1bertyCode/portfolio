import { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { createPortal } from "react-dom";
import s from "./Portal.module.scss";

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { children, container = document.body } = props;
  return createPortal(children, container);
};
