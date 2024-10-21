import { AppImage } from "@/shared/ui/AppImage/AppImage";
import s from "./ProjectsItem.module.scss";

import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ProjectType } from "../../model/project";


interface ProjectsItemProps {
  project: ProjectType;
};
export const ProjectsItem = ({ project }: ProjectsItemProps) => {
  const {
    title,
    description,
    stack,
    link,
    github,
    image
  } = project;
  return (
    <div className={s.ProjectsItem}>
      <AppImage className={s.img} src={image} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={s.stack}>{stack.map((s, i) => <span key={i}>{s}</span>)}</div>
        <div className={s.links}>
          <AppLink to="/">{link}</AppLink>
          <AppLink to="/">{github}</AppLink>
        </div>
      </div>
    </div>
  );
};