import { MainPage } from "@/pages/MainPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  SKILLS = "skills",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SKILLS]: "/skills",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SKILLS]: {
    path: RoutePath.skills,
    element: <SkillsPage />
  }
};