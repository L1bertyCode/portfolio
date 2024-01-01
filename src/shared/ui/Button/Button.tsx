import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import {
  Mods,
  classNames,
} from "@/shared/lib/classNames/classNames";
// import { classNames } from "../../lib/classNames/classNames";
type ButtonVariant =
  | "clear"
  | "clear-inverted"
  | "outline-save"
  | "outline-red"
  | "outline-inverted"
  | "outline"
  | "filled"
  | "filled-inverted";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}
export function Button(props: ButtonProps) {
  const {
    children,
    variant = "clear",
    className,
    disabled,
    ...otherProps
  } = props;
  const mods: Mods = { [s.disabled]: disabled };
  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={classNames(s.button, mods, [
        s[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
}
