import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ContactsPage } from "@/pages/ContactsPage";

export enum AppRoutes {
  MAIN = "main",
  SKILLS = "skills",
  PROJECTS = "projects",
  CONTACTS = "contacts"
}
export type UserRouteProps = RouteProps & {
  name: string;
};
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SKILLS]: "/skills",
  [AppRoutes.PROJECTS]: "/projects",
  [AppRoutes.CONTACTS]: "/contacts",
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
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />,
    name: "Contacts"
  }
};