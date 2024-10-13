import { lazy } from "react";

export const SkillsPageAsync = lazy(() => new Promise((res, rej) =>
  //@ts-ignore
  setTimeout(() => res(import("./SkillsPage")), 1500)
));