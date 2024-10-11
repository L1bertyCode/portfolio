import { lazy } from "react";

export const ProfilePageAsync = lazy(() => new Promise((res, rej) =>
  //@ts-ignore
  setTimeout(() => res(import("./ProfilePage")), 1500)
));