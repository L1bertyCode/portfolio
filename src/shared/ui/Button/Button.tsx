import { ButtonHTMLAttributes } from "react";

import s from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type ButtonVariant = "clear" | "filled" | "outlined";

type ButtonColorType = | "accent";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  colorType?: ButtonColorType;
};

export const Button = ({
  children,
  variant = "filled",
  colorType = "accent",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(s.Button, {}, [s[variant], s[colorType]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};