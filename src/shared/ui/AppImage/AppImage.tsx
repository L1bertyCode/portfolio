import { ImgHTMLAttributes } from "react";
import s from "./AppImage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
type AppImageSize = "normal";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AppImageSize;
  round?: boolean;
  className?: string;
};

export const AppImage = ({ src, alt = "img", size = "normal", round = false, className = "", ...otherProps }: AppImageProps) => {
  return (
    <div className={classNames(s.block, { [s.round]: false }, [s[size], className])} >
      <img
        className={classNames(s.AppImage, { [s.round]: false }, [s[size], className])}
        src={src}
        alt={alt}
        {...otherProps}
      />
    </div>

  );
};