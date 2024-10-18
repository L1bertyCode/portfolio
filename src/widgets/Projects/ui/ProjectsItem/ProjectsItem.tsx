import { AppImage } from "@/shared/ui/AppImage/AppImage";
import s from "./ProjectsItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface ProjectsItemProps { };
export const ProjectsItem = ({ }: ProjectsItemProps) => {
  return (
    <div className={s.ProjectsItem}>
      <AppImage src={""} />
      <div>
        <h4>Title</h4>
        <p>description</p>
        <div className={s.stack}></div>
        <div className={s.links}>
          <AppLink to="/">{"safd"}</AppLink>
          <AppLink to="/">{"safd"}</AppLink>
        </div>
      </div>
    </div>
  );
};