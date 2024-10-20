import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
import s from "./SkillItem.module.scss";
import { FC, SVGProps } from "react";
interface SkillItemProps { Svg: FC<SVGProps<SVGElement>>; };
export const SkillItem = ({ Svg }: SkillItemProps) => {
  return (
    <div className={s.SkillItem}>
      <AppIcon Svg={Svg} />
    </div>
  );
};