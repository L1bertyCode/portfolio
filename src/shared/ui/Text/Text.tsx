import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";
export type TextColorType = "normal" | "inverted" | "error";
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  colorType?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    colorType = "normal",
  } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(s.textWrapper, {}, [
        className,
        s[colorType],
      ])}
    >
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
