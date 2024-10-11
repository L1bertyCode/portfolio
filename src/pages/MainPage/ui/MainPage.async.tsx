import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise((res, rej) =>
  //@ts-ignore
  setTimeout(() => res(import("./MainPage")), 1500)));