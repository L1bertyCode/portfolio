import { AppImage } from "@/shared/ui/AppImage/AppImage";
import s from "./ProjectsItem.module.scss";
import ProjectImage from "@/shared/assets/img/project.png";
import { AppLink } from "@/shared/ui/AppLink/AppLink";


interface ProjectsItemProps {
  src?: string;
};
export const ProjectsItem = ({ src = ProjectImage }: ProjectsItemProps) => {
  return (
    <div className={s.ProjectsItem}>
      <AppImage className={s.img} src={src} />
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