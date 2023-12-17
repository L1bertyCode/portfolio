import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
// import { classNames } from "../../lib/classNames/classNames";
type ButtonVariant =
  | "clear"
  | "clear-inverted"
  | "outline-inverted"
  | "outline"
  | "filled"
  | "filled-inverted";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}
export function Button(props: ButtonProps) {
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
