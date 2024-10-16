import { lazy } from "react";

export const TechStackPageAsync = lazy(() => new Promise((res, rej) => {
  //@ts-ignore
  setTimeout(() => res(import("./TechStackPage")), 1500);
}));