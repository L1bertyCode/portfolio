import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";
export type TextColorType = "normal" | "inverted" | "error";
export type TextAlign = "left" | "center" | "right";
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  colorType?: string;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    colorType = "normal",
    align = "left",
  } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.textWrapper, {}, [
        className,
        s[colorType],
        s[align],
      ])}
    >
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
