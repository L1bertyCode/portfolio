import { MainPage } from "@/pages/MainPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { TechStackPage } from "@/pages/TechStackPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  SKILLS = "skills",
  TECHSTACK = "stack"
}
type UserRouteProps = RouteProps & {
  name: string;
};
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SKILLS]: "/skills",
  [AppRoutes.TECHSTACK]: "/stack",
};

export const routeConfig: Record<AppRoutes, UserRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    name: "Main"
  },
  [AppRoutes.SKILLS]: {
    path: RoutePath.skills,
    element: <SkillsPage />,
    name: "Skills"
  },
  [AppRoutes.TECHSTACK]: {
    path: RoutePath.stack,
    element: <TechStackPage />,
    name: "TechStack"
  }
};