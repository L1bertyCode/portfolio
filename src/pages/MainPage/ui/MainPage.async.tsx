import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    // @ts-ignore
    new Promise((resolve) =>
    // @ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500)
    )
);
