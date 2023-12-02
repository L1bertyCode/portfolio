import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function AppButton(props: AppButtonProps) {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
}
