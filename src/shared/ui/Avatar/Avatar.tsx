import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Avatar.module.scss";
type AvatarSize = "s" | "m" | "l";
interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: AvatarSize;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = "image",
    size = "m",
  } = props;

  return (
    <img
      src={src}
      alt={alt}
      className={classNames(s.avatar, {}, [
        className,
        s[size],
      ])}
    />
  );
});
