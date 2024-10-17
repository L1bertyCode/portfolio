import { lazy } from "react";

export const ProjectsPageAsync = lazy(() => new Promise((res, rej) => {
  //@ts-ignore
  setTimeout(() => res(import("./ProjectsPage")), 1500);
}));