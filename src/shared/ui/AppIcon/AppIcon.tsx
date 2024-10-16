import { FC, SVGProps } from "react";
import s from "./AppIcon.module.scss";
interface AppIconProps {
  Svg: FC<SVGProps<SVGElement>>;
};
export const AppIcon = ({ Svg }: AppIconProps) => {
  return (
    <Svg className={s.AppIcon} />
  );
};