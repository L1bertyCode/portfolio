import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ReactNode } from "react";

interface RoutesItem {
  element: ReactNode;
  path: string;
}

export const routesConfig: RoutesItem[] = [
  { element: <MainPage />, path: "/" },
  { element: <AboutPage />, path: "/about" },
  { element: <NotFoundPage />, path: "*" },
];
