import { ImgHTMLAttributes } from "react";
import s from "./AppImage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
type AppImageSize = "normal";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AppImageSize;
  round?: boolean;
};

export const AppImage = ({ src, alt = "img", size = "normal", round = false, ...otherProps }: AppImageProps) => {
  return (
    <>
      <img
        className={classNames(s.AppImage, { [s.round]: false }, [s[size]])}
        src={src}
        alt={alt}
        {...otherProps}
      />
      <div className={classNames(s.block, { [s.round]: false }, [s[size]])}></div>
    </>

  );
};