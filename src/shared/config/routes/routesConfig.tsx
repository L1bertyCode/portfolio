import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOTFOUND = "not-found",
}
export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};
type ExtendsRouteProps = AppRouteProps & {
  icon?: ReactNode;
};
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
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
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
// export const routesConfigArray: RoutesItem[] = [
//   { element: <MainPage />, path: "/" },
//   { element: <AboutPage />, path: "/about" },
//   { element: <ProfilePage />, path: "/profile" },
//   { element: <NotFoundPage />, path: "*" },
// ];
