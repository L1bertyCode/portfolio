import { ProjectType } from "../../model/project";
import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import s from "./Projects.module.scss";
interface ProjectsProps { };
const projects: ProjectType[] = [
  {
    title: "Todolist",
    description: "description1",
    stack: ["HTML", "CSS", "REACT", "WEBPACK"],
    link: "link1",
    github: "github1",
    image: "@/shared/assets/img/project.png"
  },
  {
    title: "Profolio",
    description: "description2",
    stack: ["HTML", "CSS", "REACT", "WEBPACK"],
    link: "link2",
    github: "github2",
    image: "@/shared/assets/img/project.png"
  },
  {
    title: "Laser",
    description: "description3",
    stack: ["HTML", "CSS", "REACT", "WEBPACK"],
    link: "link3",
    github: "github3",
    image: "@/shared/assets/img/project.png"
  }
];

export const Projects = ({ }: ProjectsProps) => {
  return (
    <section className={s.Projects}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      <div className={s.list}>
        {projects.map((project, i) =>
          <ProjectsItem key={i} project={project} />
        )}
      </div>

    </section>
  );
};