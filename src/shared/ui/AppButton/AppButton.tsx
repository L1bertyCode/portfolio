import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
type AppButtonVariant = "clear" | "outline" | "filled";
export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}
export function AppButton(props: AppButtonProps) {
  const {
    children,
    variant = "outline",
    className,
    ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      className={classNames(s.appButton, {}, [
        s[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
}
