import { FC, SVGProps } from "react";
import s from "./AppIcon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
interface AppIconProps {
  Svg: FC<SVGProps<SVGElement>>;
  className?: string;
  size?: string;
  viewBox?: string;
};
export const AppIcon = ({ Svg, className = "" }: AppIconProps) => {
  return (
    <Svg
      className={classNames(s.AppIcon, {}, [className])} />
  );
};