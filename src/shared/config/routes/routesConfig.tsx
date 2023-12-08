import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOTFOUND = "not-found",
}
type ExtendsRouteProps = RouteProps & {
  icon?: ReactNode;
};
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "/*",
};
interface RoutesItem {
  element: ReactNode;
  path: string;
}
export const routesConfig: Record<
  AppRoutes,
  ExtendsRouteProps
> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
export const routesConfigArray: RoutesItem[] = [
  { element: <MainPage />, path: "/" },
  { element: <AboutPage />, path: "/about" },
  { element: <NotFoundPage />, path: "*" },
];
