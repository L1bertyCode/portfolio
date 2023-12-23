import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Loader.module.scss";
export type LoaderColorType = "normal" | "inverted";
interface LoaderProps {
  className?: string;
  colorType?: LoaderColorType;
}

export const Loader = memo((props: LoaderProps) => {
  const { className, colorType = "normal" } = props;
  return (
    <div
      className={classNames(s["lds-ellipsis"], {}, [
        className,
        s[colorType],
      ])}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
