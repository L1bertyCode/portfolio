import { ButtonHTMLAttributes } from "react";

import s from "./AppButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type AppButtonVariant = "clear" | "filled" | "outlined";

type AppButtonColorType = | "accent";
export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AppButtonVariant;
  colorType?: AppButtonColorType;
  className?: string;
};

export const AppButton = ({
  children,
  className = "",
  variant = "filled",
  colorType = "accent",
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      className={classNames(s.AppButton, {}, [s[variant], s[colorType], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};