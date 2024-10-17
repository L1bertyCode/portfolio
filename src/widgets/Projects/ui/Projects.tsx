import s from "./Projects.module.scss";
interface ProjectsProps { };
export const Projects = ({ }: ProjectsProps) => {
  return (
    <section className={s.Projects}>
      <div>Projects</div>
    </section>
  );
};