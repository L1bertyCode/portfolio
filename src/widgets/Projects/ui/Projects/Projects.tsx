import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import s from "./Projects.module.scss";
interface ProjectsProps {};
export const Projects = ({}: ProjectsProps) => {
  return (
    <section className={s.Projects}>
      <ProjectsItem />
    </section>
  );
};