import { lazy } from "react";

export const NotFoundPageAsync = lazy(
  () =>
    // @ts-ignore
    new Promise((resolve) =>
      setTimeout(
        // @ts-ignore
        () => resolve(import("./NotFoundPage")),
        1500
      )
    )
);
