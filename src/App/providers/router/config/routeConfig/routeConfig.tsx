import { MainPage } from "@/pages/MainPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  SKILLS = "skills",
  PROJECTS = "projects"
}
type UserRouteProps = RouteProps & {
  name: string;
};
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SKILLS]: "/skills",
  [AppRoutes.PROJECTS]: "/projects",
};

export const routeConfig: Record<AppRoutes, UserRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    name: "Home"
  },
  [AppRoutes.SKILLS]: {
    path: RoutePath.skills,
    element: <SkillsPage />,
    name: "Tech Stack"
  },
  [AppRoutes.PROJECTS]: {
    path: RoutePath.projects,
    element: <ProjectsPage />,
    name: "Projects"
  }
};