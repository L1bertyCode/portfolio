import { FC, SVGProps } from "react";
import s from "./AppIcon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
interface AppIconProps {
  Svg: FC<SVGProps<SVGElement>>;
  className?: string;
  size?: string;
  viewBox?: string;
};
export const AppIcon = ({ Svg, className = "", size = "105px", viewBox = "0 0 105 105" }: AppIconProps) => {
  return (
    <Svg width={size} height={size} viewBox={viewBox} className={classNames(s.AppIcon, {}, [className])} />
  );
};