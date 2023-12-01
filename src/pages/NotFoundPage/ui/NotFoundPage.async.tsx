import { lazy } from "react";

export const NotFoundPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        // @ts-ignore
        () => resolve(import("./NotFoundPage")),
        1500
      )
    )
);
