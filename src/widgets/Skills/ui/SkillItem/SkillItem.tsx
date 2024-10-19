import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
import s from "./SkillItem.module.scss";
interface SkillItemProps { };
export const SkillItem = ({ }: SkillItemProps) => {
  return (
    <div className={s.SkillItem}>
      <div>SkillItem</div>
      {/* <AppIcon  /> */}
    </div>
  );
};