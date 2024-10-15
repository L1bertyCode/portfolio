import { ButtonHTMLAttributes } from "react";

import s from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type ButtonVariant = "clear" | "filled" | "outlined";

type ButtonColorType = | "accent";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colorType?: ButtonColorType;
};

export const Button = ({
  children,
  className,
  variant = "filled",
  colorType = "accent",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(s.Button, {}, [s[variant], s[colorType], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};