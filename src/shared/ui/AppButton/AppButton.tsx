import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
// import { classNames } from "../../lib/classNames/classNames";
type AppButtonVariant =
  | "clear"
  | "clear-inverted"
  | "outline-inverted"
  | "outline"
  | "filled";
interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}
export function AppButton(props: AppButtonProps) {
  const {
    children,
    variant = "clear",
    className,
    ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(s.appButton, {}, [
        s[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
}
